// src/components/layout/Footer.js
import Link from "next/link";

const Footer = () => {
  const mainCities = [
    "Bakı",
    "Sumqayıt",
    "Xırdalan",
    "Gəncə",
    "Qəbələ",
    "Quba",
    "Xaçmaz",
    "Lənkəran",
    "Mingəçevir",
    "Şəki",
    "Qusar",
    "Şirvan"
  ];
const cities = [
  "Ağcabədi",
  "Ağdam",
  "Ağdaş",
  "Ağdərə",
  "Ağstafa",
  "Ağsu",
  "Astara",
  "Balakən",
  "Beyləqan",
  "Bərdə",
  "Biləsuvar",
  "Cəbrayıl",
  "Cəlilabad",
  "Culfa",
  "Daşkəsən",
  "Füzuli",
  "Gədəbəy",
  "Goranboy",
  "Göyçay",
  "Göygöl",
  "Göytəpə",
  "Hacıqabul",
  "Horadiz",
  "İmişli",
  "İsmayıllı",
  "Kəlbəcər",
  "Kürdəmir",
  "Laçın",
  "Lerik",
  "Masallı",
  "Nabran",
  "Naftalan",
  "Naxçıvan",
  "Neftçala",
  "Oğuz",
  "Ordubad",
  "Qax",
  "Qazax",
  "Qobustan",
  "Qubadlı",
  "Saatlı",
  "Sabirabad",
  "Şabran",
  "Şahbuz",
  "Salyan",
  "Şamaxı",
  "Samux",
  "Şəmkir",
  "Şərur",
  "Siyəzən",
  "Şuşa",
  "Tərtər",
  "Tovuz",
  "Ucar",
  "Xankəndi",
  "Xızı",
  "Xocalı",
  "Xocavənd",
  "Xudat",
  "Yardımlı",
  "Yevlax",
  "Zaqatala",
  "Zəngilan",
  "Zərdab"
];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__topbar">
          <div className="contact contact--secondary">
            <a href="" className="contact__network facebook"></a>
            <a href="" className="contact__network instagram"></a>
            <span className="contact__tel">
              Dəstək: <a href="tel:051123456">051 123 45 67</a>
            </span>
            <a href="" className="contact__network whatsapp"></a>
            <a href="" className="contact__network telegram"></a>
          </div>
          <div className="footer__navbar">
            <Link href="/" className="footer__navlink">
              Əsas səhifə
            </Link>
            <Link href="/advertise" className="footer__navlink">
              Reklam yerləşdirmək
            </Link>
            <Link href="/about" className="footer__navlink">
              Haqqımızda
            </Link>
            <Link
              href="/store-register"
              className="footer__navlink footer__navlink--secondary"
            >
              Mağaza qeydiyyatı
            </Link>
          </div>
        </div>

        {/* Cities List - Desktop Only */}
        <div className="d-none d-md-block">
          <ul className="footer__cities">
            {mainCities.map((city, index) => (
              <li key={index}>
                <Link href={`/city/${city.toLowerCase()}`}>{city}</Link>
              </li>
            ))}
          </ul>
          <ul className="footer__cities">
            {cities.map((city, index) => (
              <li key={index}>
                <Link href={`/city/${city.toLowerCase()}`}>{city}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottombar">
          <div className="footer__copyright">
            © {new Date().getFullYear()} Bolbol.az. Bütün hüquqlar qorunur.
          </div>
          <div>
            <Link href="/privacy" className="footer__link">
              Məxfilik siyasəti
            </Link>
            <Link href="/terms" className="footer__link">
              İstifadə qaydaları
            </Link>
            <Link href="/contact" className="footer__link">
              Əlaqə
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
