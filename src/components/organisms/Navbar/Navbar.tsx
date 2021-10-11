import React from 'react';
import { Wrapper, Image, FavouritesIcon, FavouritesButton } from './Navbar.styles';
import Searcher from 'components/molecules/Searcher/Searcher';

const Navbar = () => {
  return (
    <Wrapper>
      <Image />
      <Searcher />
      <FavouritesButton>
        <FavouritesIcon />
      </FavouritesButton>
    </Wrapper>
  );
};

export default Navbar;
