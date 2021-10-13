import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import logo from 'assets/images/logo.svg';

interface NavbarStyles {
  isFavoritesIconInverted: boolean;
}

export const Wrapper = styled.nav`
  ${({ theme }) => theme.mixins.positions.center};
  flex-direction: column;
  width: 100%;
  margin: 24px 0 48px;
`;

export const Image = styled.div`
  height: 123px;
  width: 100%;
  max-height: 100%;
  max-width: 343px;
  background: url(${logo}) no-repeat;
  background-size: contain;
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
