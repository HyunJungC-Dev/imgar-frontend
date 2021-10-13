import { a11yHidden, pxToRem } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyledComponent = createGlobalStyle`

/* This stylesheet generated by Transfonter (https://transfonter.org) on June 21, 2017 9:51 AM */

@font-face {
	font-family: 'Proxima Nova';
	src: url(${require('./fonts/ProximaNova-Regular.eot')});
	src: local('Proxima Nova Regular'), local('ProximaNova-Regular'),
		url(${require('./fonts/ProximaNova-Regular.eot?#iefix')}) format('embedded-opentype'),
		url(${require('./fonts/ProximaNova-Regular.woff')}) format('woff'),
		url(${require('./fonts/ProximaNova-Regular.ttf')}) format('truetype');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Proxima Nova';
	src: url(${require('./fonts/ProximaNova-Bold.eot')});
	src: local('Proxima Nova Bold'), local('ProximaNova-Bold'),
		url(${require('./fonts/ProximaNova-Bold.eot?#iefix')}) format('embedded-opentype'),
		url(${require('./fonts/ProximaNova-Bold.woff')}) format('woff'),
		url(${require('./fonts/ProximaNova-Bold.ttf')}) format('truetype');
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: 'Proxima Nova';
	src: url(${require('./fonts/ProximaNova-Extrabld.eot')});
	src: local('Proxima Nova ExtraBold'), local('ProximaNova-Extrabld'),
		url(${require('./fonts/ProximaNova-Extrabld.eot?#iefix')}) format('embedded-opentype'),
		url(${require('./fonts/ProximaNova-Extrabld.woff')}) format('woff'),
		url(${require('./fonts/ProximaNova-Extrabld.ttf')}) format('truetype');
	font-weight: 800;
	font-style: normal;
}


body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color:${({ theme }) => theme.color.backgroundGray};
  font-family: 'Proxima Nova';
}

body * {
  box-sizing: border-box;
}

body *::before {
  box-sizing: border-box;
}

body *::after {
  box-sizing: border-box;
}

:focus:not(::focus-visible) {
  outline:3px solid ${({ theme }) => theme.color.white}; 
  outline-offset: ${pxToRem(2)};
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:focus,
a:active {
  text-decoration: none;
}


ul{
  margin: 0;
  padding-left: 0;
  list-style: none;
}

button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

h1,h2,h3,h4,h5,h6 {
	margin:0;
}
p {
	margin:0;
}

.a11y {
	${a11yHidden}
}
`;

export default function GlobalStyle(): ReactElement {
  return (
    <>
      <Normalize />
      <GlobalStyledComponent />
    </>
  );
}
