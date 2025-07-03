// src/components/features/home/SearchSection.js
const SearchSection = () => {
  return (
    <section className="d-md-block" id="neql_search">
      <div className="main_container">
        <div className="container-fluid forpadding0">
          <div className="row" id="dekstop_search_bar_row">
            <div className="" id="dekstop_search_bar">
              <div className="search">
                <form action="">
                  <div className="input-group search__group">
                    <input
                      type="text"
                      className="form-control search__input"
                      placeholder="Elan axtarın"
                      id=""
                    />
                    <div className="input-group-append search__append">
                      <button className="search__btn" type="button"></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
