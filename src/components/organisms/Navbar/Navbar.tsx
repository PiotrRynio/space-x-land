import React from 'react';
import { useAppContext } from 'context/AppContext';
import Searcher from 'components/molecules/Searcher/Searcher';
import { Wrapper, Image, FavouritesIcon, FavouritesButton, PlusIcon } from './Navbar.styles';

const Navbar = () => {
  const { isFavoritesItemsWidgetOpen, setIsFavoritesItemsWidgetOpen } = useAppContext();

  const handleFavouritesButtonClick = () => {
    setIsFavoritesItemsWidgetOpen(!isFavoritesItemsWidgetOpen);
  };

  return (
    <Wrapper>
      <Image />
      <Searcher />
      <FavouritesButton
        isFavoritesIconInverted={isFavoritesItemsWidgetOpen}
        onClick={handleFavouritesButtonClick}
      >
        {isFavoritesItemsWidgetOpen ? <PlusIcon /> : <FavouritesIcon />}
      </FavouritesButton>
    </Wrapper>
  );
};

export default Navbar;
