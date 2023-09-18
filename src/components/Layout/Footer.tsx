import { ContactData } from '../../interfaces/Contact';
import { SocialMedia } from '../Contact/SocialMedia';

export const Footer: React.FC = () => {
  return (
    <footer className="container text-xs py-4 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <img
        className="justify-self-center md:justify-self-start w-24 h-24"
        src="../../images/red-devil.svg"
        alt="Red Devil"
      />
      <div className="justify-self-center text-center flex flex-col items-center">
        <h5>Social media:</h5>
        <SocialMedia />
      </div>
      <div className="justify-self-center leading-normal">
        <p className="mb-1">
          {ContactData.street}
          <br />
          {ContactData.postal}&nbsp;{ContactData.city}
        </p>
        {/*<p>
          email: <a href={`mailto:${ContactData.email}`}>{ContactData.email}</a>
  </p>*/}
        <p>
          tel: <a href={`tel:${ContactData.tel}`}>{ContactData.tel}</a>
        </p>
      </div>
      <small className="justify-self-center md:justify-self-end">© {new Date().getFullYear()} RedDevil.pl</small>
    </footer>
  );
};
