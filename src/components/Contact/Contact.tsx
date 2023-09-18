import { ContactData } from '../../interfaces/Contact';
import { SocialMedia } from './SocialMedia';

export const Contact = () => {
  return (
    <div id="kontakt" className="text-center bg-gray-shade-70">
      <div className="md:container">
        <div className="font-logo text-5xl text-red text-center tracking-widest pt-12 pb-8">Kontakt</div>
        <div className="text-gray-tint-60 pb-12">
          <div>
            {ContactData.city}, {ContactData.street}
          </div>
          <div className="text-3xl my-2 text-red">
            tel.&nbsp;<a href={`tel:${ContactData.tel}`}>{ContactData.telHyphens}</a>
          </div>
          <p>GODZINY OTWARCIA</p>
          <div className="grid grid-cols-2 justify-center gap-x-4">
            <p className="text-right">Niedz. - Czw.</p>
            <p className="text-left">12:00 - 22:00</p>
            <p className="text-right">Piątek</p>
            <p className="text-left">12:00 - 23:00</p>
            <p className="text-right">Sobota</p>
            <p className="text-left">12:00 - 01:00</p>
          </div>
          <p className="mt-2">
            Social media (<span className="text-white">RedDevilZaspa</span>):
          </p>
          <div className="mb-4">
            <SocialMedia />
          </div>
          <p className="mt-2 text-xs">Zamówienia przyjmujemy do 30 minut przed zamknięciem lokalu</p>
        </div>
      </div>
    </div>
  );
};
