import Layout from "@/components/layout/Layout";
import UserEdit from "@/components/features/auth/UserEdit";

export const metadata = {
  title: "İstifadəçi Profili - Bolbol.az",
  description: "İstifadəçi profili və elanları",
};

export default function MockUserEdit() {
  return (
    <Layout>
      <UserEdit />
    </Layout>
  );
}
