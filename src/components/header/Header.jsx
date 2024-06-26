
import Typed from '../Typed/Typed';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shubham Tawale</h1>
        <h5 className="text-light">
          <Typed/>
        </h5>
        <CTA />
        <a href="#contact" className="scroll__down">
        I'm Developer
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
