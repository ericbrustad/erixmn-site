import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";

export const metadata = {
  title: "Admin | Erix Coach and Car",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // Allow login page through without auth
  return (
    <div className="min-h-screen bg-darker">
      {session && <AdminNav email={session.email} />}
      {children}
    </div>
  );
}
