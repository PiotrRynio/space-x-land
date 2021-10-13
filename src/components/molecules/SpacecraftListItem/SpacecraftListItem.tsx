import React from 'react';
import { useFavoritesItems } from 'hooks/useFavoritesItems';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import {
  Background,
  Image,
  Wrapper,
  InnerWrapper,
  StyledOverlineWrapper,
  StyledOverlineText,
  StyledHeading6,
  StyledBody1,
  StyledReadMoreButton,
  IconButton,
  LikeIcon,
  BinIcon,
  ArticleContent,
} from './SpacecraftListItem.styles';
import { SpacecraftListItemProps } from './SpacecraftListItemProps';

const SpacecraftListItem = ({
  articleText,
  externalLinkUrl,
  date,
  title,
  imageUrl,
  id,
}: SpacecraftListItemProps) => {
  const { isFavoritesItems, addFavoritesItems, removeFavoritesItems } = useFavoritesItems();

  const handleLikeButtonClick = () =>
    isFavoritesItems(id) ? removeFavoritesItems(id) : addFavoritesItems(id);

  return (
    <Wrapper>
      <InnerWrapper>
        <Image imageUrl={imageUrl} />
        <StyledOverlineWrapper>
          <StyledOverlineText typographyTag={TypographyTag.OVERLINE}>{date}</StyledOverlineText>
          <IconButton isInverted={isFavoritesItems(id)} onClick={handleLikeButtonClick}>
            {isFavoritesItems(id) ? <BinIcon /> : <LikeIcon />}
          </IconButton>
        </StyledOverlineWrapper>
        <ArticleContent>
          <header>
            <StyledHeading6 typographyTag={TypographyTag.HEADING_6}>{title}</StyledHeading6>
          </header>
          <StyledBody1 typographyTag={TypographyTag.BODY_1}>
            {articleText || 'No information in our API'}
          </StyledBody1>
        </ArticleContent>
        <StyledReadMoreButton href={externalLinkUrl}>
          <span>Read more</span>
        </StyledReadMoreButton>
      </InnerWrapper>
      <Background />
    </Wrapper>
  );
};

export default SpacecraftListItem;
