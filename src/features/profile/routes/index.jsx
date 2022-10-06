import React from 'react';
import LayoutContainer from '../components/layout-container';

import Avatar from '../components/sections/avatar';
import Badges from '../components/sections/badges';
import EditMenu from '../components/sections/edit-menu';
import Information from '../components/sections/information';
import './index.scss';

const Index = () => {

  const company = false;

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
    company: 'Mooi Design'
  }

  const area = {
    student: 'Gävle',
    company: 'Gävle'
  }

  const phone = {
    student: '+4670 - 16 71 245',
    company: '+4670 - 16 71 245'
  }

  const school = {
    student: 'HiG',
    company: ''
  }

  const date = {
    student: '28 nov - 4 apr 2022',
    company: ''
  }

  return (
    <>
      {(company) ? <Avatar /> : <></>}

      <LayoutContainer direction='column' gap={[1]}>

        <Information 
          styleDirection='center' 
          name={`${company ? name.company : name.student}`} 
          role={`${company ? role.company : role.student}`} 
          about={`${company ? about.company : about.student}`}
          area={`${company ? area.company : area.student}`}
          phone={`${company ? phone.company : phone.student}`}
          school={`${company ? school.company : school.student}`}
          date={`${company ? date.company : date.student}`}/>
        {company ? <EditMenu /> : <><Badges /><EditMenu /></>}

      </LayoutContainer>
    </>
  )
};

export default Index;