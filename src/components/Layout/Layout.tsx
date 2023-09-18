import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};
