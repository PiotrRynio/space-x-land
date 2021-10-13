import styled, { keyframes } from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import logo from 'assets/images/logo.svg';

interface NavbarStyles {
  isFavoritesIconInverted: boolean;
}

const rotateAnimationIn = keyframes`
   from {
     transform: rotate(0deg);
   }
   to {
     transform: rotate(360deg);
   }
`;

const rotateAnimationOut = keyframes`
   from {
     transform: rotate(360deg);
   }
   to {
     transform: rotate(720deg);
   }
`;

export const Wrapper = styled.nav`
  ${({ theme }) => theme.mixins.positions.center};
  flex-direction: column;
  width: 100%;
  margin: 24px 0 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: flex;
    gap: 0;
    justify-content: flex-start;
  }
`;

export const Logo = styled.div`
  height: 123px;
  width: 100%;
  max-height: 100%;
  max-width: 343px;
  background: url(${logo}) no-repeat;
  background-size: contain;
`;

export const FixedWrapper = styled.div`
  ${({ theme }) => theme.mixins.positions.center};
  flex-direction: row;
  width: 100%;
  margin: 48px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    z-index: 100;
    position: fixed;
    left: 387px;
    right: 140px;
    width: auto;
    gap: 40px;
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    left: 140px;
  }
`;

export const HelperDiv = styled.div`
  display: none;
  height: 48px;
  width: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: block;
  }
`;

export const FavouritesButton = styled.button<NavbarStyles>`
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 16px;
  bottom: 16px;
  height: 48px;
  width: 48px;
  padding: 0 15px;
  border: none;
  border-radius: 50%;
  background: ${({ theme, isFavoritesIconInverted }) =>
    isFavoritesIconInverted ? theme.colors.lightHard : theme.colors.primary};
  cursor: pointer;

  animation-name: ${rotateAnimationOut};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;

  :hover {
    background: ${({ theme, isFavoritesIconInverted }) =>
      isFavoritesIconInverted ? theme.colors.lightHard : `#BFFFFF`};

    animation-name: ${rotateAnimationIn};
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    position: relative;
    inset: 0;
  }
`;

export const FavouritesIcon = styled(FaRegHeart)`
  height: 17.42px;
  width: 15.19px;
  color: ${({ theme }) => theme.colors.darkHard};
`;

export const PlusIcon = styled(AiOutlinePlus)`
  height: 18px;
  width: 18px;
  transform: rotate(45deg);
  color: ${({ theme }) => theme.colors.darkMedium};
`;
