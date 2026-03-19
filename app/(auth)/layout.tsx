import Header from "../_components/landingHeader/page";
import PublicRoute from "../_components/PublicRoute";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PublicRoute>
      <Header />
      {children}
    </PublicRoute>
  );
}
