import { PromoItem } from './PromoItem';

export const Promo = () => {
  return (
    <div id="promo" className="pt-8 pb-4 text-center">
      <div className="container">
        <h3 className="menu__header">Promocje</h3>
        <div className="lg:grid lg:grid-cols-2 gap-4 py-4">
          <PromoItem>Zamów 3&nbsp;dowolne pizze, najtańszą otrzymasz za 50%&nbsp;ceny</PromoItem>
          <PromoItem>Zbierz 10&nbsp;ulotek wyjazdowych i&nbsp;odbierz darmową pizzę w&nbsp;lokalu</PromoItem>
        </div>
      </div>
    </div>
  );
};
