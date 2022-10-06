import React from 'react';
import LayoutContainer from '../components/layout-container';
import Avatar from '../components/sections/avatar';
import Badges from '../components/sections/badges';
import EditMenu from '../components/sections/edit-menu';
import Information from '../components/sections/information';
import './index.scss';

const Index = () => {

  const company = false;

  return (
    <>
      {(company) ? 
        
        <>
          <Avatar /> 

          <LayoutContainer direction='column' gap={[1]}>

            <Information
              styleDirection='center'
              name='Mooi Design'
              />

            <EditMenu />

          </LayoutContainer>
        
        </>

        : 
        
        <LayoutContainer direction='column' gap={[1]}>

          <Information
            styleDirection='center'
            name='Sofie Larsson'
            role='Front end utvecklare'
            school='HiG'
            date='28 nov - 4 apr 2022'
          />
          <Badges />
          <EditMenu />

        </LayoutContainer>
        
      }

    </>
  )
};

export default Index;