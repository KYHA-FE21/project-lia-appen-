import React, { useState } from 'react';
import LayoutContainer from '../components/layout-container';

import Avatar from '../components/sections/avatar';
import Badges from '../components/sections/badges';
import EditMenu from '../components/sections/edit-menu';
import Information from '../components/sections/information';
import './index.scss';

const Index = () => {

  const company = true;

  return (
    <>
      {(company) ? <Avatar /> : <></>}

      <LayoutContainer direction='column' gap={[1]}>

        <Information styleDirection='center' name={`${(company) ? 'SoftTech Design' : 'Sofie Larsson'}`} role={`${(company) ? 'Sara Berg (HR-chef)' : 'Front end utvecklare'}`} />
        {(company) ? <EditMenu /> : <><Badges /><EditMenu /></>}
        
        

      </LayoutContainer>
    </>
  )
};

export default Index;