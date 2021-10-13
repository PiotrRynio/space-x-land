import styled from 'styled-components';
import { Typography } from 'components/atoms/Typography/Typography';
import { FaRegHeart } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

interface ImageProps {
  imageUrl: string;
}

export const Wrapper = styled.article`
  overflow: hidden;
  position: relative;
  height: 439px;
  width: 343px;
  padding: 16px;
  border-radius: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    height: 665px;
    width: 520px;
    padding: 32px;
  }
`;

export const Background = styled.div`
  z-index: -50;
  position: absolute;
  inset: 0 0 0 0;
  background: linear-gradient(180deg, #f5f5f5 0%, #f5f5f500 100%) no-repeat;
  mix-blend-mode: soft-light;
`;

export const InnerWrapper = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 32px;
`;

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 175px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat;
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: 100%;
    height: 265px;
  }
`;

export const StyledOverlineWrapper = styled.div`
  position: relative;
`;

export const StyledOverlineText = styled(Typography)`
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.darkSoft};

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    margin: 32px 0 16px;
  }
`;

interface IconButtonStyles {
  isInverted: boolean;
}

export const IconButton = styled.button<IconButtonStyles>`
  ${({ theme }) => theme.mixins.positions.center}
  position: absolute;
  top: 0;
  right: 16px;
  height: 48px;
  width: 48px;
  border: 1px solid
    ${({ theme, isInverted }) => (isInverted ? theme.colors.secondary : theme.colors.primary)};
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightHard};
    border: 1px solid ${({ theme }) => theme.colors.lightHard};
  }
`;

export const LikeIcon = styled(FaRegHeart)`
  height: 18px;
  width: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BinIcon = styled(RiDeleteBinLine)`
  height: 18px;
  width: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledHeading6 = styled(Typography)`
  height: 26px;
`;

export const StyledBody1 = styled(Typography)`
  overflow: hidden;
  height: 97px;
  width: 100%;
  color: ${({ theme }) => theme.colors.lightMedium};
`;

export const StyledReadMoreButton = styled.a`
  ${({ theme }) => theme.mixins.positions.center}
  height: 48px;
  width: 200px;
  margin: 16px auto;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;

  span {
    ${({ theme }) => theme.mixins.typography.buttonText};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    margin: 39px auto 48px;
  }
`;
