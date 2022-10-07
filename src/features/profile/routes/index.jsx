import React from 'react';
import Badge from '../../../components/badge';
import Wrapper from '../components/wrapper';
import Avatar from '../components/sections/avatar';
import EditMenu from '../components/sections/edit-menu';
import Information from '../components/sections/information';
import SelectorHeader from '../components/sections/selector_header';
import './index.scss';

const Index = () => {

  const company = false;

  return (
    <>
      {(company) ? 
        
        <>
          <Avatar /> 

          <Wrapper direction='column' gap={[1]}>

            <Information
              styleDirection='center'
              name='Mooi Design'
              />

            <EditMenu />

          </Wrapper>
        
        </>

        : 
        
        <Wrapper direction='column' gap={[1]}>
          
          <SelectorHeader>Profil</SelectorHeader> 
          
          <Information
            styleDirection='center'
            name='Sofie Larsson'
            role='Front end utvecklare'
            school='HiG'
            date='28 nov - 4 apr 2022'
          />

          <SelectorHeader reverse={true}>Kompetenser</SelectorHeader> 

          <Wrapper gap={[1]} styleDirection='center' padding={[0,1,2,1]}>
            <Badge width='fit-content' className='text-white'>Node</Badge>
            <Badge width='fit-content' className='text-white'>JS</Badge>
            <Badge width='fit-content' className='text-white'>HTML</Badge>
            <Badge width='fit-content' className='text-white'>CSS</Badge>
            <Badge width='fit-content' className='text-white'>React</Badge>
          </Wrapper>
          
          <EditMenu />

        </Wrapper>
        
      }

    </>
  )
};

export default Index;