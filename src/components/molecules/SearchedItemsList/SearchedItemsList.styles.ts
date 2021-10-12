import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';

interface ImageProps {
  imageUrl: string;
}

export const Wrapper = styled.ul`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  //gap: 16px;
  position: absolute;
  top: calc(100% + 12px);
  width: 100%;
  max-width: 500px;
  padding: 32px 16px 16px;
  border-radius: 32px;
  background: ${({ theme }) => theme.colors.lightHard};
`;

export const ListItem = styled.li`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 48px;
  padding: 8px 16px;
  border-radius: 32px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.outline};
  }
`;

export const ListItemImage = styled.div<ImageProps>`
  height: 48px;
  width: 48px;
  border-radius: 8px;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat;
  background-size: cover;
`;
export const ListItemTitle = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
