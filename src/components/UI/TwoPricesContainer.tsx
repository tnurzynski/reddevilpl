interface TwoPricesContainerProps {
  item1: string;
  item2?: string;
  containerClassName?: string;
  customJustify?: string;
  isPrice?: boolean;
}

export const TwoPricesContainer: React.FC<TwoPricesContainerProps> = (props) => {
  const { item1, item2, containerClassName = '', customJustify = '', isPrice = true } = props;
  const priceSuffix = isPrice ? ' zł' : '';
  return (
    <div
      className={[
        'flex-none flex w-16 items-end',
        customJustify || (item2 ? 'justify-between' : 'justify-end'),
        containerClassName,
      ].join(' ')}
    >
      <div className="w-16 text-center">
        {item1}
        {priceSuffix}
      </div>
      {/*item2 && (
        <div className="w-16 text-center">
          {item2}
          {priceSuffix}
        </div>
      )*/}
    </div>
  );
};
