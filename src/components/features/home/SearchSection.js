// src/components/features/home/SearchSection.js - Original Code with Category Support
"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useTypingAnimation from "../../../hooks/useTypingAnimation";
import {
  searchProducts,
  getCategorySearchPhrases,
} from "../../../utils/constants";

const SearchSection = ({ typingKeywords = null, category = "default" }) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  // Use provided typing keywords or fallback to category-specific or default
  const searchPhrases = typingKeywords || getCategorySearchPhrases(category);

  // Get the current typing animation text
  const typingText = useTypingAnimation({
    phrases: searchPhrases,
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseTime: 1500,
    isPaused: isInputFocused || inputValue.length > 0,
  });

  // Handle input focus
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  // Handle input blur
  const handleInputBlur = () => {
    // Delay to allow suggestion clicks
    setTimeout(() => {
      setIsInputFocused(false);
      setShowSuggestions(false);
    }, 200);
  };

  // Handle input change with live search
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 2) {
      const results = searchProducts(value).slice(0, 5); // Show top 5 suggestions
      setSearchResults(results);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (product) => {
    router.push(`/product/${product.id}`);
  };

  // Determine what to show as placeholder
  const getPlaceholder = () => {
    if (isInputFocused || inputValue.length > 0) {
      return "Elan axtarın";
    }
    return typingText;
  };

  return (
    <section className="d-md-block" id="neql_search">
      <div className="main_container">
        <div className="container-fluid forpadding0">
          <div className="row" id="dekstop_search_bar_row">
            <div className="" id="dekstop_search_bar">
              <div className="search">
                <form onSubmit={handleSubmit}>
                  <div className="input-group search__group">
                    <input
                      ref={inputRef}
                      type="text"
                      className="form-control search__input"
                      placeholder={getPlaceholder()}
                      value={inputValue}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      autoComplete="off"
                    />
                    <div className="input-group-append search__append">
                      <button className="search__btn" type="submit"></button>
                    </div>
                  </div>
                </form>

                {/* Search Suggestions Dropdown */}
                {showSuggestions && searchResults.length > 0 && (
                  <div
                    className="search-suggestions"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "5px",
                      right: "5px",
                      backgroundColor: "#fff",
                      border: "1px solid #b9c9ca",
                      borderTop: "none",
                      borderRadius: "0 0 5px 5px",
                      zIndex: 1000,
                      maxHeight: "300px",
                      overflowY: "auto",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    {searchResults.map((product, index) => (
                      <div
                        key={product.id}
                        onClick={() => handleSuggestionClick(product)}
                        style={{
                          padding: "12px 15px",
                          borderBottom:
                            index < searchResults.length - 1
                              ? "1px solid #eee"
                              : "none",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f8f9fa")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        <div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: "#013f44",
                              fontWeight: "bold",
                            }}
                          >
                            {product.title}
                          </div>
                          <div style={{ fontSize: "12px", color: "#6c757d" }}>
                            {product.location}
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            color: "#013f44",
                            fontWeight: "bold",
                          }}
                        >
                          {product.price}
                        </div>
                      </div>
                    ))}
                    <div
                      style={{
                        padding: "8px 15px",
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#6c757d",
                        borderTop: "1px solid #eee",
                      }}
                    >
                      Bütün nəticələri görmək üçün Enter basın
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
