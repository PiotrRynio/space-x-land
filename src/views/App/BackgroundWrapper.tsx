import React from 'react';
import styled from 'styled-components';
import mobileImage from '../../assets/images/background-mobile.png';
import desktopImage from '../../assets/images/background-desktop.png';

const BackgroundPhoto = styled.div`
  z-index: -100;
  position: absolute;
  inset: 0;
  background: url(${mobileImage}) no-repeat;
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background: url(${desktopImage}) no-repeat;
    background-size: cover;
  }
`;

const BackgroundGradient = styled.div`
  height: 100%;
  width: 100%;
  background: transparent linear-gradient(134deg, #6a0572 0%, #2d3999 100%) 0% 0% no-repeat
    padding-box;
  mix-blend-mode: hard-light;
`;

const BackgroundDarkening = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.35;
`;

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundPhoto>
        <BackgroundDarkening>
          <BackgroundGradient />
        </BackgroundDarkening>
      </BackgroundPhoto>
      {children}
    </>
  );
};

export default BackgroundWrapper;
