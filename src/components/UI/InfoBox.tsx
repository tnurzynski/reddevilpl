interface InfoBoxProps {}

export const InfoBox: React.FC<InfoBoxProps> = (props) => {
  const { children } = props;
  return (
    <div className={['px-4 py-2 my-2 border border-gray-shade-40 bg-gray-shade-70 text-sm'].join(' ')}>{children}</div>
  );
};
