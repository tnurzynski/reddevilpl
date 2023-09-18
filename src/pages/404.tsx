import { Link } from 'gatsby';
import { Seo } from '../components/util/Seo';
import { Layout } from '../components/Layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="RedDevil.pl - nie znaleziono strony" titleTemplateOverwrite />
      <h1>Nie znaleziono strony</h1>
      <p>
        {process.env.NODE_ENV === 'development' ? <>404</> : null}
        <br />
        <Link to="/">Przejdź do strony głównej</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
