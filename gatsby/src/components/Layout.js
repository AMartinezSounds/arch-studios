import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import FooterBundle from './FooterBundle';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

function Layout({ children }) {
  const [crossButton, setCrossButton] = useState('false');
  return (
    <>
      <GlobalStyles />
      <Nav setCrossButton={setCrossButton} crossButton={crossButton} />
      <MobileNav crossButton={crossButton} />
      {children}
      <FooterBundle />
    </>
  );
}

export default Layout;
