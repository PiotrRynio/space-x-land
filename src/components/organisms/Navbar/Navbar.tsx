import React from 'react';
import { useAppContext } from 'context/AppContext';
import Searcher from 'components/molecules/Searcher/Searcher';
import {
  Wrapper,
  Logo,
  FavouritesIcon,
  FavouritesButton,
  PlusIcon,
  FixedWrapper,
  HelperDiv,
} from './Navbar.styles';

const Navbar = () => {
  const { isFavoritesItemsWidgetOpen, setIsFavoritesItemsWidgetOpen } = useAppContext();

  const handleFavouritesButtonClick = () => {
    setIsFavoritesItemsWidgetOpen(!isFavoritesItemsWidgetOpen);
  };

  return (
    <Wrapper>
      <Logo />
      <FixedWrapper>
        <HelperDiv />
        <Searcher />
        <FavouritesButton
          isFavoritesIconInverted={isFavoritesItemsWidgetOpen}
          onClick={handleFavouritesButtonClick}
        >
          {isFavoritesItemsWidgetOpen ? <PlusIcon /> : <FavouritesIcon />}
        </FavouritesButton>
      </FixedWrapper>
    </Wrapper>
  );
};

export default Navbar;
