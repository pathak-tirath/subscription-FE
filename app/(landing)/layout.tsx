import Footer from "../_components/footer/page";
import HeaderLanding from "../_components/landingHeader/page";


export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderLanding />
      {children}
      <Footer />
    </div>
  );
}
