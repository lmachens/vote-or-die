import React from 'react';
import Logo from './Logo';
import Title from './Title';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SwitchColorButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`;

function AppHeader({ onSwitchColorButtonClick }) {
  return (
    <Header>
      <Logo />
      <Title>Vote or die</Title>
      <Logo />
      <SwitchColorButton onClick={onSwitchColorButtonClick}>
        <span role="img" aria-label="Switch theme">
          🌗
        </span>
      </SwitchColorButton>
    </Header>
  );
}

export default AppHeader;
