import React from 'react';
import LayoutContainer from '../components/layout-container';

import Avatar from '../components/sections/avatar';
import Badges from '../components/sections/badges';
import EditMenu from '../components/sections/edit-menu';
import Information from '../components/sections/information';
import './index.scss';

const Index = () => {

  return (
    <LayoutContainer direction='column' gap={[1]}>

      <Avatar />
      <Information />
      <Badges />
      <EditMenu />

    </LayoutContainer>
  )
};

export default Index;