import styled from 'styled-components';
import { Typography } from 'components/atoms/Typography/Typography';

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
`;

export const StyledOverline = styled(Typography)`
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.darkSoft};
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

export const StyledButton = styled.a`
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
`;
