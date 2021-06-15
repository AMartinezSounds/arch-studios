import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	body {
	  font-family: 'Spartan', sans-serif;
	  color: black;
	  font-size: 1rem;
          font-weight: 200
	}
	li {
	  list-style: none;
	}
	a {
   	 color: #7D828F;
   	 font-size: 1rem;
   	 font-weight: bold;
   	 text-decoration: none;
  }
	
`;

export default GlobalStyles;
