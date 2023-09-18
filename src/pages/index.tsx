import { Seo } from '../components/util/Seo';
import { Layout } from '../components/Layout/Layout';
import { Hero } from '../components/Hero/Hero';
import { Promo } from '../components/Promo/Promo';
import { Menu } from '../components/Menu/Menu';
import { Contact } from '../components/Contact/Contact';
import { LayoutContextProvider } from '../context/LayoutContext';
import { Map } from '../components/Map/Map';

const IndexPage = () => {
  return (
    <LayoutContextProvider>
      <Layout>
        <Seo title="RedDevil.pl - piekielnie dobre jedzenie" titleTemplateOverwrite />
        <Hero />
        <Promo />
        <Menu />
        <Contact />
        <Map />
      </Layout>
    </LayoutContextProvider>
  );
};

export default IndexPage;
