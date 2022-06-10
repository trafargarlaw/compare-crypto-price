import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/images/logo.png" alt="logo" width={117} height={39} />
      <a className="link-contact">GET IN TOUCH</a>
    </header>
  );
};

export default Header;
