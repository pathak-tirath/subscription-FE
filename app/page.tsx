import HeroSection from "./_components/(landing)/hero/page";
import WhyChooseUsSection from "./_components/(landing)/whyChooseUs/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="escape text-zinc-300" />
      <WhyChooseUsSection />
    </>
  );
}
