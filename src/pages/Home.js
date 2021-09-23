import Content from 'layout/Content'

import logoApparel from 'assets/images/logo.svg';
import heroDesktop from 'assets/images/hero-desktop.jpg';

const Home = () => {
    return (
      <main>
        <img src={logoApparel} alt="" className="logo" />
        <Content />
        <img src={heroDesktop} alt="" className="hero" />
      </main>
    );
}

export default Home;