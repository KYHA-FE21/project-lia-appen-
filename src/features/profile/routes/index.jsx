import React from 'react';
import LayoutContainer from '../components/layout-container';

import Avatar from '../components/sections/avatar';
import Badges from '../components/sections/badges';
import EditMenu from '../components/sections/edit-menu';
import Information from '../components/sections/information';
import './index.scss';

const Index = () => {

  const company = true;

  const about = {
    student: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    company: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }

  const role = {
    student: 'Front end utvecklare',
    company: ''
  }

  const name = {
    student: 'Sofie Larsson',
    company: 'SoftTech Design'
  }

  return (
    <>
      {(company) ? <Avatar /> : <></>}

      <LayoutContainer direction='column' gap={[1]}>

        <Information 
        styleDirection='center' 
        name={`${company ? name.company : name.student}`} role={`${company ? role.company : role.student}`} 
        about={`${company ? about.company : about.student}`}/>
        {company ? <EditMenu /> : <><Badges /><EditMenu /></>}
        
        

      </LayoutContainer>
    </>
  )
};

export default Index;