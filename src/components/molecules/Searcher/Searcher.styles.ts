import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import { FaSearch } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

interface SearcherStylesProps {
  isSearcherActive: boolean;
}

export const LabelWrapper = styled.label`
  z-index: 10;
  position: relative;
  height: 66px;
  width: 100%;
  max-width: 343px;
  border-radius: 33px;
  background: ${({ theme }) => theme.colors.lightHard};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 737px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-shrink: 10;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 16px 90px 16px 32px;
`;

export const LabelText = styled(Typography)`
  text-transform: uppercase;
`;

export const SearchInput = styled.input`
  ${({ theme }) => theme.mixins.typography.body2};
  height: 100%;
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  ${({ theme }) => theme.mixins.positions.center}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  padding: 2px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchIconContainer = styled.div<SearcherStylesProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 48px;
  padding: 0 15px;
  border-radius: 50%;
  background-color: ${({ theme, isSearcherActive }) =>
    isSearcherActive ? theme.colors.primary : theme.colors.secondary};
  transform: rotate(45deg);
`;

export const SearchIcon = styled(FaSearch)`
  height: 18px;
  width: 18px;
  color: ${({ theme }) => theme.colors.lightHard};
`;

export const CloseIcon = styled(AiOutlinePlus)`
  height: 18px;
  width: 18px;
  color: ${({ theme }) => theme.colors.darkMedium};
`;

export const BlurWrapper = styled.div<SearcherStylesProps>`
  z-index: 9;
  position: fixed;
  inset: 0;
  display: ${({ isSearcherActive }) => (isSearcherActive ? 'block' : 'none')};
`;
