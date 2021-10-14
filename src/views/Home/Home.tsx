import React from 'react';
import SpacecraftList from 'components/organisms/SpacecraftList/SpacecraftList';
import Paginator from 'components/molecules/Paginate/Paginate';
import { Wrapper } from './Home.styles';

const Home = () => {
  return (
    <Wrapper>
      <SpacecraftList />
      <Paginator />
    </Wrapper>
  );
};

export default Home;
