export default `
*, *:after, *:before {
  box-sizing: border-box;
}

html {
  font-size: 62.5%; /* Sets up the Base 10 stuff */
  font-family: 'Open Sans', sans-serif;
}

 blockquote, pre,
a, abbr, acronym, address,b, u, i, center,
dl, dt, dd, ol, ul, li,tr, th, td, label {
  font-size: 1.8rem;
}

.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
`;
