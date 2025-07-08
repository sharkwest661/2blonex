// src/app/page.js - Complete Homepage with Mock Data (App Router)
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/features/home/HomePage";

export const metadata = {
  title: "Bolbol.az - Azərbaycanın ən böyük elan portalı",
  description:
    "Bolbol.az-da avtomobil, əmlak, elektronika, iş elanları və daha çox kateqoriyada min elan. Pulsuz elan yerləşdirin və ya axtardığınızı tapın!",
  keywords: "elan, avtomobil, əmlak, iş, elektronika, Azərbaycan",
};

export default function Home() {
  return (
    <Layout>
      
      <HomePage />
    </Layout>
  );
}
