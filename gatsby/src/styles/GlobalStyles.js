import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
	  --dark-blue: #1b1d23;
  	  --dark-grey: #60636D;
	  --medium-grey: #7d828f;
	  --light-grey: #c8ccd8;
          --very-light-grey: #eeeff4;
          --red: #df5656;
	}
	body {
	  font-family: 'Spartan', sans-serif;
	  font-size: 1rem;
          font-weight: 200;
	  overflow-x: hidden;
	}
	li {
	  list-style: none;
	}
	a {
   	 color: var(--medium-grey);
   	 font-size: 1rem;
   	 font-weight: bold;
   	 text-decoration: none;
  	}
	
	input, textarea {
		border: none;
    		background: none;
    		padding: 1rem;
    		border-bottom: 1px solid black;
    		outline: none;
		position: relative;
	} 
	.formStyleInput {
		border-bottom: 1px solid black;
		&:active, &:focus{
			border-bottom: 3px solid black;
			outline: none;
		}
	}
	.is-invalid {
		border-bottom: 1px solid var(--red);
	}
	.error {
		color: var(--red);
		font-weight: bold;
		position: absolute;
	}
`;

export default GlobalStyles;
