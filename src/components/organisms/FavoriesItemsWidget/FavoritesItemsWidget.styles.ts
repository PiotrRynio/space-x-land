import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import { RiDeleteBinLine } from 'react-icons/ri';

interface FavoritesItemsWidgetStyles {
  isFavoritesItemsWidgetOpen: boolean;
}

interface SpacecraftItemImageStyles {
  imageUrl: string;
}

export const Wrapper = styled.section<FavoritesItemsWidgetStyles>`
  z-index: 35;
  display: ${({ isFavoritesItemsWidgetOpen }) => (isFavoritesItemsWidgetOpen ? 'flex' : 'none')};
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

  &:hover::after {
    z-index: -10;
    position: absolute;
    top: -10px;
    left: 35px;
    height: 90px;
    width: 100%;
    border-radius: 30px 0 0 30px;
    content: '';
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const ItemImage = styled.div<SpacecraftItemImageStyles>`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.lightHard};
  background: url(${({ imageUrl }) => imageUrl}) no-repeat;
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
