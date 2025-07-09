// src/app/neqliyyat/page.js - Uses fixed FilterManager via CategoryPageTemplate
import Layout from "@/components/layout/Layout";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { getCategoryMetadata } from "@/utils/filterRegistry";

export async function generateMetadata() {
  const metadata = getCategoryMetadata("vehicles") || {
    title: "Nəqliyyat",
    description: "Azərbaycanda nəqliyyat vasitələri alış-satışı",
    keywords: "avtomobil, maşın, nəqliyyat, satış",
  };

  return {
    title: `${metadata.title} | Bolbol.az`,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: `${metadata.title} | Bolbol.az`,
      description: metadata.description,
      type: "website",
    },
  };
}

export default function NeqliyyatPage() {
  // Custom typing keywords for vehicle category
  const vehicleTypingKeywords = [
    "BMW axtarın...",
    "Mercedes satılır...",
    "Toyota Camry...",
    "Hyundai Tucson...",
    "motosiklet axtarın...",
    "kamaz satılır...",
    "avtobus kirayə...",
  ];

  // Custom breadcrumbs
  const customBreadcrumbs = [
    { label: "Ana səhifə", href: "/" },
    { label: "Nəqliyyat", href: "/neqliyyat" },
  ];

  return (
    <Layout>
      <CategoryPageTemplate
        category="vehicles" // This triggers the hardcoded VehicleFilters structure in FilterManager
        pageTitle="Nəqliyyat"
        customTypingKeywords={vehicleTypingKeywords}
        customBreadcrumbs={customBreadcrumbs}
        showVipListings={true}
        showNewListings={true}
        showFilters={true}
        resultCount={1234}
        showResultCount={true}
      />
    </Layout>
  );
}
