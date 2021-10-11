import styled from 'styled-components';
import logo from 'assets/images/logo.svg';
import { FaRegHeart } from 'react-icons/fa';

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

export const FavouritesButton = styled.div`
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
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const FavouritesIcon = styled(FaRegHeart)`
  height: 17.42px;
  width: 15.19px;
  color: ${({ theme }) => theme.colors.darkHard};
`;
