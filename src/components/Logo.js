import React from 'react';
import styled from '@emotion/styled';
import Skull from './skull.png';

const Img = styled.img`
  height: 40px;
`;

function Logo(props) {
  return <Img src={Skull} alt="Skull logo" {...props} />;
}

export default Logo;
