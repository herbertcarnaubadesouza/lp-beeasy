import Banner from "@/components/Banner";
import Carrossel from "@/components/CarrosselProducts";
import FirtVideo from "@/components/FirstVideoSection";
import SecondVideo from "@/components/SecondVideo";
import TestSection from "@/components/TestSection";

export default function Home() {
  return (
    <>
      <Banner />
      <FirtVideo />
      <Carrossel />
      <SecondVideo />
      <TestSection />
    </>
  );
}
