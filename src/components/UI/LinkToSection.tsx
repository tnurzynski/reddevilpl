interface LinkToSectionProps {
  href: string;
  className?: string;
}

export const LinkToSection: React.FC<LinkToSectionProps> = (props) => {
  const { href, className, children } = props;

  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const section = document.querySelector(href) as HTMLElement;
    const header = document.querySelector('#header') as HTMLElement;
    const yOffset = header.getBoundingClientRect().height;
    const pos = section.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};
