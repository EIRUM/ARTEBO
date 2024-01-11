import React from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo.png'
const HeaderWrapper = styled.header`

  height: 1%; 
  width: 100%; 
  display: flex;
  // background-color: lightblue;
`;

const LogoImage = styled.img`
  width: 140px; 
  height: auto;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoImage src={logoImage} alt="로고 이미지" />
    </HeaderWrapper>
  );
};

export default Header;
