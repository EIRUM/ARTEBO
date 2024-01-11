import React from 'react';
import styled from 'styled-components';
import bboImage from '../images/bbo.png';

const CharacterComponent = styled.div`
  position: relative;
  margin-top: 2%;
`;

const BubbleWrapper = styled.div`
  position: absolute;
  bottom: 150%;
  left: 50%; 
  transform: translateX(-50%);
`;

const Bubble = styled.div`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 10px;
`;

const CharacterImage = styled.img`
  width: 100px; 
  height: auto;
`;

const BBODialogue = () => {
  const characterText = "안녕하세요! 저는 BBO 캐릭터입니다.";

  return (
    <CharacterComponent>
      <BubbleWrapper>
        <Bubble>
          <CharacterImage src={bboImage} alt="BBO 이미지" />
          {characterText}
        </Bubble>
      </BubbleWrapper>
    </CharacterComponent>
  );
};

export default BBODialogue;
