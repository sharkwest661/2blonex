// src/app/page.js (Refactored - Using Component Structure with correct HTML structure)
import { Layout } from "../components/layout";
import { HomePage } from "../components/features/home";

export default function Home() {
  return (
    <Layout>
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
