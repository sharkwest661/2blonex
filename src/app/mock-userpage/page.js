import Layout from "@/components/layout/Layout";
import UserPage from "@/components/features/auth/UserPage";

export const metadata = {
  title: "İstifadəçi Profili - Bolbol.az",
  description: "İstifadəçi profili və elanları",
};

export default function MockUserEdit() {
  return (
    <Layout>
      <UserPage />
    </Layout>
  );
}
