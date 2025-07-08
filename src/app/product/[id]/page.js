// src/app/product/[id]/page.js
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import MobileSearchSection from "@/components/features/product/MobileSearchSection";
import ProductImageCarousel from "@/components/features/product/ProductImageCarousel";
import ProductInfo from "@/components/features/product/ProductInfo";
import SellerProfile from "@/components/features/product/SellerProfile";
import PromotionActions from "@/components/features/product/PromotionActions";
import ReviewSection from "@/components/features/product/ReviewSection";
import SimilarListings from "@/components/features/product/SimilarListings";
import { MOCK_PRODUCTS } from "@/utils/constants";

const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock product data - replace with API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockProduct = {
        id: params.id,
        title: "Apple iPhone 11 Pro Max Space Gray 256GB/4GB",
        price: "1 655 ₼",
        images: [
          "/img/example/carousel1.png",
          "/img/example/post2.png",
          "/img/example/post3.png",
          "/img/example/post1.png",
          "/img/example/post2.png",
          "/img/example/post3.png",
        ],
        productId: "№1234567890",
        views: "1974 baxış",
        lastUpdate: "28.04.2021",
        location: "Bakı",
        category: {
          main: "ELEKTRONİKA",
          sub: "MOBİL TELEFONLAR",
        },
        features: {
          delivery: true,
          barter: true,
          credit: true,
        },
        specs: {
          Brend: "Apple iPhone",
          Model: "11 Pro Max",
          Rəng: "Space Gray",
          Yaddaş: "256GB/4GB",
          Yeni: "Xeyr",
        },
        description: [
          'Euro Version !!! - bu versiya avropaya eksporta gedən versiyadır və suya tam davamlılıq keyfiyyətinə görə " IP68 Beynəlxalq Sertifikatı var !!! bu əsas keyfiyyət yalnızaca Euro Version - larda olur Amerikankalarda olmur !',
          "Qeyd: hədiyyə olaraq keyfiyyətli ekran qoruyucu və 2 ədəd dəri arxalıq veriləcək !",
          "İdealın idealı, heç bir cızıq, əzik yoxdur, demək olarki yenidir ! kredit deyil, ustada olmayıb, qeydiyyatlı və rəsmi zəmanətli.",
        ],
        seller: {
          name: "Elmir",
          phone: "051 123 45 67",
          storeUrl: "",
          storeText: "Mağazanın bütün elanları (38 elan)",
        },
        isSuper: true,
        isFavorite: false,
        reviews: [
          {
            author: "N*** Ə***",
            date: "28.04.2021, 14:00",
            text: "Çox babat telefondu. arada bir dinamiki xarab olur dişimlə sıxıram telefonu düzəlir. Suya düşəndə düyünün içində quruduram 2 dəfə elə düzəltmişəm. Daş döyən telefondu.",
          },
          {
            author: "N*** Ə***",
            date: "28.04.2021, 14:00",
            text: "Çox babat telefondu. arada bir dinamiki xarab olur dişimlə sıxıram telefonu düzəlir. Suya düşəndə düyünün içində quruduram 2 dəfə elə düzəltmişəm. Daş döyən telefondu.",
          },
        ],
      };
      setProduct(mockProduct);
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <Layout>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "400px" }}
        >
          <div>Yüklənir...</div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container">
          <div className="text-center py-5">
            <h1>Elan tapılmadı</h1>
            <p>Axtardığınız elan mövcud deyil və ya silinib.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main>
        {/* Mobile Search Section */}
        <MobileSearchSection />

        {/* Main Product Section */}
        <section>
          <div className="container">
            <div className="product">
              <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                  <ProductImageCarousel
                    images={product.images}
                    isSuper={product.isSuper}
                  />

                  <div>
                    <a
                      href=""
                      className="product__complaint"
                      data-toggle="modal"
                      data-target="#complaintModal"
                    >
                      Şikayət et
                    </a>
                  </div>

                  <SellerProfile seller={product.seller} />

                  <PromotionActions />
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                  <ProductInfo product={product} />

                  <ReviewSection reviews={product.reviews} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Listings Section */}
        <SimilarListings />
      </main>
    </Layout>
  );
};

export default ProductDetailsPage;
