export const PromoItem: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="px-8 py-4 my-4 border border-gray-shade-40 bg-gray-shade-70 text-xl">
      <div className="mx-auto max-w-xs">{children}</div>
    </div>
  );
};
