import Footer from "../_components/footer/page";
import HeaderLanding from "../_components/landingHeader/page";
import PublicRoute from "../_components/PublicRoute";


export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PublicRoute>
      <HeaderLanding />
      {children}
      <Footer />
    </PublicRoute>
  );
}
