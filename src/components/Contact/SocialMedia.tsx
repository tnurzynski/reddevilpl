import { ContactData } from '../../interfaces/Contact';

export const SocialMedia: React.FC = () => (
  <div className="flex gap-2 justify-center">
    <a href={ContactData.fb} target="_blank">
      <img className="w-10 h-10 mt-2" src="/images/facebook.svg" alt="facebook" />
    </a>
    <a href={ContactData.instagram} target="_blank">
      <img className="w-10 h-10 mt-2" src="/images/instagram.svg" alt="instagram" />
    </a>
  </div>
);
