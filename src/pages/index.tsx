import Banner from '@/components/Banner';
import Carrossel from '@/components/CarrosselProducts';
import FirtVideo from '@/components/FirstVideoSection';
import IASection from '@/components/IASection';
import SecondVideo from '@/components/SecondVideo';
import SliderComponent from '@/components/Slider';
import TestSection from '@/components/TestSection';
import Quanto from '@/components/Quanto';
import Planos from '@/components/Planos';
import Carrosselpecas from '@/components/Carroselpecas';
import Sualoja from '@/components/Sualoja';
import Duvidas from '@/components/Duvidas';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Banner />
      <FirtVideo />
      <Carrossel />
      <SecondVideo />
      <TestSection />
      <IASection />
      <SliderComponent />
      <Quanto />
      <Planos />
      <Carrosselpecas />
      <Sualoja />
      <Duvidas />
      <Footer />
    </>
  );
}
