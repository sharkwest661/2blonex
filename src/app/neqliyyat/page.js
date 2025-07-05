// app/neqliyyat/page.js
import { Layout } from "@/components/layout";
import styles from "./page.module.css";
import { VehicleFilters } from "@/components/features/vehicles/components";
import PostList from "@/components/shared/postitem/PostList";

export const metadata = {
  title: "Nəqliyyat elanları - Avtomobil alqı-satqısı | Bolbol.az",
  description:
    "Azərbaycanda avtomobil alqı-satqısı. Yeni və işlənmiş avtomobillər, motosikletlər və digər nəqliyyat vasitələri.",
  keywords:
    "avtomobil, maşın, nəqliyyat, alqı-satqı, BMW, Mercedes, Toyota, Bakı",
};

export default function NeqliyyatPage() {
  return (
    <Layout>
      <div className={styles.vehiclesPage}>
        <div className={styles.container}>
          <div className={styles.vehiclesContent}>
            {/* Vehicle Filters Section */}
            <VehicleFilters />

            {/* Results Section */}
            <div className={styles.vehiclesResults}>
              <div className={styles.resultsHeader}>
                <h2 className={styles.resultsTitle}>Nəqliyyat elanları</h2>
                <div className={styles.resultsCount}>
                  <span>1,234 elan tapıldı</span>
                </div>
                <div className={styles.resultsSort}>
                  <label htmlFor="sort-select">Sıralama:</label>
                  <select id="sort-select" className={styles.sortSelect}>
                    <option value="newest">Ən yenilər</option>
                    <option value="oldest">Ən köhnələr</option>
                    <option value="price-low">Qiymət: aşağıdan yuxarı</option>
                    <option value="price-high">Qiymət: yuxarıdan aşağı</option>
                    <option value="popular">Ən populyarlar</option>
                  </select>
                </div>
              </div>

              {/* Post Listings */}
              <PostList category="vehicles" />

              {/* Load More Button */}
              <div className={styles.loadMoreSection}>
                <button className={styles.loadMoreBtn}>
                  Daha çox yüklə
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1V15M1 8H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
