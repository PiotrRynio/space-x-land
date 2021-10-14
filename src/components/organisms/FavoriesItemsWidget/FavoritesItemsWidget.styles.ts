import styled, { keyframes } from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import { RiDeleteBinLine } from 'react-icons/ri';

interface FavoritesItemsWidgetStyles {
  isFavoritesItemsWidgetOpen: boolean;
}

interface SpacecraftItemImageStyles {
  imageUrl: string;
}

const hoverItemAnimationIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`;

const openWidgetAnimationIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  1% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 100%;
  }
`;

const openWidgetAnimationOut = keyframes`
  0% {
    visibility: visible;
    opacity: 100%;
  }
  99% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Wrapper = styled.section<FavoritesItemsWidgetStyles>`
  z-index: 35;
  display: flex;
  visibility: ${({ isFavoritesItemsWidgetOpen }) =>
    isFavoritesItemsWidgetOpen ? 'visible' : 'hidden'};
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 385px;
  width: 93.3%;
  height: 100vh;
  padding: 24px 16px;
  border-radius: 32px 0 0 32px;
  background: ${({ theme }) => theme.colors.primary};

  animation-duration: .3s;
  animation-timing-function: ease-out;
  animation-name: ${({ isFavoritesItemsWidgetOpen }) =>
    isFavoritesItemsWidgetOpen ? openWidgetAnimationIn : openWidgetAnimationOut}};
`;

export const Title = styled(Typography)`
  padding-bottom: 48px;
`;

export const SpacecraftItemsListWrapper = styled.ul`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  width: 100%;
  padding: 10px 0;
  flex-direction: column;
  gap: 32px;
  list-style: none;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    border: none;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.secondary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
    -webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.secondary};
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SpacecraftItem = styled.li`
  display: block;
  position: relative;
`;

export const ItemLink = styled.a`
  display: flex;
  height: 70px;
  width: 100%;
  gap: 16px;
  text-decoration: none;

  :hover::after {
    z-index: -10;
    position: absolute;
    top: -10px;
    left: 35px;
    height: 90px;
    width: 100%;
    border-radius: 30px 0 0 30px;
    content: '';
    transition: after 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.surface};

    animation: ${hoverItemAnimationIn} 0.5s ease-out both;
  }
`;

export const ItemImage = styled.div<SpacecraftItemImageStyles>`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.lightHard};
  background: ${({ theme }) => theme.colors.surface} url(${({ imageUrl }) => imageUrl}) no-repeat;
  background-size: cover;
`;

export const ItemTitle = styled(Typography)`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 200px;
  height: 100%;
`;

export const ItemIconButton = styled.button`
  ${({ theme }) => theme.mixins.positions.center}
  position: absolute;
  top: 11px;
  right: 16px;
  height: 48px;
  width: 48px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightHard};
  }
`;

export const BinIconContainer = styled.div``;

export const BinIcon = styled(RiDeleteBinLine)`
  height: 18px;
  width: 18px;
  color: ${({ theme }) => theme.colors.darkHard};
`;

export const SpacecraftItemBackground = styled.div``;
