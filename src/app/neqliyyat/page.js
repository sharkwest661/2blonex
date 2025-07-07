// src/app/neqliyyat/page.js - Updated to use CategoryPageTemplate
import Layout from "@/components/layout/Layout";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { getCategoryMetadata } from "@/utils/filterRegistry";

export async function generateMetadata() {
  const metadata = getCategoryMetadata("neqliyyat");

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

  // Custom breadcrumbs if needed (optional)
  const customBreadcrumbs = [
    { label: "Ana səhifə", href: "/" },
    { label: "Nəqliyyat", href: "/neqliyyat" },
  ];

  return (
    <Layout>
      <CategoryPageTemplate
        category="neqliyyat"
        pageTitle="Nəqliyyat"
        customTypingKeywords={vehicleTypingKeywords}
        customBreadcrumbs={customBreadcrumbs}
        showVipListings={true}
        showNewListings={true}
        resultCount={1234}
        showResultCount={true}
      />
    </Layout>
  );
}
