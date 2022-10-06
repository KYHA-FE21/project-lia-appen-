import React from 'react';
import Badge from '../../../components/badge/badge';
import LayoutContainer from '../components/layout-container';
import Avatar from '../components/sections/avatar';
import EditMenu from '../components/sections/edit-menu';
import Information from '../components/sections/information';
import SelectorHeader from '../components/sections/selector_header';
import './index.scss';

const Index = () => {

  const company = true;

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
          
          <SelectorHeader>Profil</SelectorHeader> 
          
          <Information
            styleDirection='center'
            name='Sofie Larsson'
            role='Front end utvecklare'
            school='HiG'
            date='28 nov - 4 apr 2022'
          />

          <SelectorHeader reverse={true}>Kompetenser</SelectorHeader> 

          <LayoutContainer gap={[1]} styleDirection='center'>
            <Badge>Node</Badge>
            <Badge>JS</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>React</Badge>
          </LayoutContainer>
          
          <EditMenu />

        </LayoutContainer>
        
      }

    </>
  )
};

export default Index;