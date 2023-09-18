import { LinkToSection } from './LinkToSection';

enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

type ButtonType = `${ButtonTypes}`;

export interface ButtonProps {
  Element: 'button' | 'a' | typeof LinkToSection;
  buttonType: ButtonType;
  buttonTypeOnHover: ButtonType;
  customHeight?: string;
  href?: string;
}

const colorsInitial = {
  [ButtonTypes.PRIMARY]: 'bg-red text-white',
  [ButtonTypes.SECONDARY]: 'bg-black text-red',
  [ButtonTypes.TERTIARY]: 'bg-red-shade-40 text-white',
};
const colorsHover = {
  [ButtonTypes.PRIMARY]: 'hover:bg-red hover:text-white',
  [ButtonTypes.SECONDARY]: 'hover:bg-black hover:text-red',
  [ButtonTypes.TERTIARY]: 'hover:bg-red-shade-40 hover:text-white',
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { Element, buttonType, buttonTypeOnHover, customHeight = '', href = '', children, ...rest } = props;

  return (
    <Element
      className={[
        'flex flex-row justify-center items-center',
        'p-4 rounded-md headline tracking-widest',
        'w-full max-w-md',
        'focus:outline-none cursor-pointer transition-colors',
        customHeight ? customHeight : 'h-12',
        colorsInitial[buttonType],
        colorsHover[buttonTypeOnHover],
      ].join(' ')}
      href={href}
      {...rest}
    >
      {children}
    </Element>
  );
};
