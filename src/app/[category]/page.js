// src/app/[category]/page.js - Fixed version! 🔧
import Layout from "@/components/layout/Layout";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import {
  getCategoryBySlug,
  CATEGORIES,
  getCategoryConfig,
} from "@/utils/constants";
import { notFound } from "next/navigation";

// Generate metadata for each category dynamically
export async function generateMetadata({ params }) {
  const { category } = params;

  // Check if category exists
  const categoryData = getCategoryBySlug(category);
  if (!categoryData) {
    return {
      title: "Kateqoriya tapılmadı | Bolbol.az",
    };
  }

  return {
    title: `${categoryData.name} | Bolbol.az`,
    description: `${categoryData.name} kateqoriyasında ${categoryData.count} elan`,
    keywords: `${categoryData.name}, elan, alqı-satqı, Azərbaycan`,
    openGraph: {
      title: `${categoryData.name} | Bolbol.az`,
      description: `${categoryData.name} kateqoriyasında ${categoryData.count} elan`,
      type: "website",
    },
  };
}

// Generate static params for all categories (for SSG)
export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }) {
  const { category } = params;

  // Get category data
  const categoryData = getCategoryBySlug(category);

  // If category doesn't exist, show 404
  if (!categoryData) {
    notFound();
  }

  const config = getCategoryConfig(category);

  // Generate breadcrumbs
  const breadcrumbs = [
    { label: "Ana səhifə", href: "/" },
    { label: categoryData.name, href: `/${category}` },
  ];

  return (
    <Layout>
      <CategoryPageTemplate
        category={category}
        pageTitle={categoryData.name}
        customTypingKeywords={config.typingKeywords}
        customBreadcrumbs={breadcrumbs}
        showVipListings={true}
        showNewListings={true}
        resultCount={categoryData.count}
        showResultCount={true}
      />
    </Layout>
  );
}
