const Header = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="h2 text-menu">{title}</h2>
      <h4 className="h4 text-primary-accent">{subtitle}</h4>
    </div>
  );
};

export default Header;
