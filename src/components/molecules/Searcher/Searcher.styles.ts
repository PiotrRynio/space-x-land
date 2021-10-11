import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import { FaSearch } from 'react-icons/fa';

export const LabelWrapper = styled.label`
  position: relative;
  height: 66px;
  width: 100%;
  max-width: 343px;
  margin: 48px 0 0;
  border-radius: 33px;
  background: ${({ theme }) => theme.colors.lightHard};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 16px 60px 16px 32px;
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

export const SearchButton = styled.button`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  padding: 2px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 48px;
  padding: 0 15px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const SearchIcon = styled(FaSearch)`
  height: 18px;
  width: 18px;
  color: ${({ theme }) => theme.colors.lightHard};
`;
