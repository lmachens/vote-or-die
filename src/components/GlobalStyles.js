import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          background: linear-gradient(to right bottom, #13098b, #4a486d);
          height: 100vh;
          color: #f2f2f2;
          font-family: 'Passero One', cursive;
        }
      `}
    />
  );
}

export default GlobalStyles;
