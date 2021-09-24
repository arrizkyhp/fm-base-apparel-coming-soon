import { useMediaQuery } from 'react-responsive';

import Content from 'layout/Content'

import logoApparel from 'assets/images/logo.svg';
import heroDesktop from 'assets/images/hero-desktop.jpg';
import heroMobile from 'assets/images/hero-mobile.jpg';
import Footer from 'layout/Footer';

const Home = () => {

  const isTablet = useMediaQuery({ query: '(min-width: 960px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

    return (
      <main>
        <img src={logoApparel} alt="" className="logo" />
        <Content />
        {isTablet && <img src={heroDesktop} alt="" className="hero" />}
        {isMobile && <img src={heroMobile} alt="" className="hero-mobile" />}
        <Footer />
      </main>
    );
}

export default Home;