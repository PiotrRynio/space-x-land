import React from 'react';
import SpacecraftList from 'components/organisms/Spacecraft/SpacecraftList';
import Paginator from 'components/molecules/Paginator/Paginate';
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
