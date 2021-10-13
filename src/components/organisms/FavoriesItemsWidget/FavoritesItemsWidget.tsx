import React from 'react';
import { useSpacecraftListItemProps } from 'api/apiHooks';
import { useAppContext } from 'context/AppContext';
import { useFavoritesItems } from 'hooks/useFavoritesItems';
import Typography from 'components/atoms/Typography/Typography';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import {
  BinIcon,
  ItemIconButton,
  ItemImage,
  ItemLink,
  ItemTitle,
  SpacecraftItem,
  SpacecraftItemsListWrapper,
  Title,
  Wrapper,
} from './FavoritesItemsWidget.styles';

const FavoritesItemsWidget = () => {
  const { isFavoritesItemsWidgetOpen } = useAppContext();
  const { isLoading, error, data } = useSpacecraftListItemProps();
  const { removeFavoritesItems, isFavoritesItems } = useFavoritesItems();

  const favoritesItemsList = data
    ?.filter((spacecraftListItem) => isFavoritesItems(spacecraftListItem.id))
    .map(({ id, imageUrl, title, externalLinkUrl }) => (
      <SpacecraftItem key={id}>
        <ItemLink href={externalLinkUrl} target={'_blank'}>
          <ItemImage imageUrl={imageUrl} />
          <ItemTitle typographyTag={TypographyTag.BODY_1}>{title}</ItemTitle>
        </ItemLink>
        <ItemIconButton onClick={() => removeFavoritesItems(id)}>
          <BinIcon />
        </ItemIconButton>
      </SpacecraftItem>
    ));

  const emptyItemList = (
    <>
      <Typography typographyTag={TypographyTag.OVERLINE}>
        {isLoading && 'Loading from Api...'}
        {error && 'Connection error...'}
        {data && 'Your favorites list is empty...'}
      </Typography>

      <Typography typographyTag={TypographyTag.OVERLINE}>
        {isLoading && 'Like new spacecraft :)'}
      </Typography>
    </>
  );

  return (
    <Wrapper isFavoritesItemsWidgetOpen={isFavoritesItemsWidgetOpen}>
      <Title typographyTag={TypographyTag.HEADING_4}>Favorites</Title>
      <SpacecraftItemsListWrapper>
        {favoritesItemsList?.length ? favoritesItemsList : emptyItemList}
      </SpacecraftItemsListWrapper>
    </Wrapper>
  );
};

export default FavoritesItemsWidget;
