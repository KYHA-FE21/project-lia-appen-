import React from 'react';
import Title from '../components/title';
import InputField from '../components/input_field';
import { Phone, GraduationCap, Star, Puzzle, Map, MapPin, CalendarDays} from 'lucide-react';
import InputButton from '../components/input-button';
import LayoutContainer from '../components/layout-container';
import Avatar from '../components/avatar';
import TextArea from '../components/textArea';
import './index.scss';

const Index = () => {

  return (
    <LayoutContainer type='flex' direction='column' gap='2'>

      <LayoutContainer type='flex' gap='3' styleDirection='center'>
          <div className='bgBlur'></div>
          <Avatar />
      </LayoutContainer>

      <LayoutContainer type='flex' direction='column' gap='3' styleDirection='center'>
        <Title size='1.8rem'>Sofie Larsson</Title>

        <div className='flex gap-2'>
          <Title size='size-1' img={<MapPin color='black' size={18} />}>Gävle</Title>
          <Title size='size-1' img={<CalendarDays color='black' size={18} />}>28 nov-4 apr <br />2022</Title>
        </div>

        <div className='flex evenly gap-1'>
          <div className='badges'>Node</div>
          <div className='badges'>JS</div>
          <div className='badges'>CSS</div>
          <div className='badges'>HTML</div>
          <div className='badges'>REACT</div>
        </div>
      </LayoutContainer>

      <LayoutContainer type='flex' gap={1} styleDirection='space-evenly' padding={[4, 0]}>
        <button type='button' className='button'>Om mig</button>
        <button type='button' className='button'>Önskemål</button>
      </LayoutContainer>

      <LayoutContainer type='flex' direction='column' gap={3} padding={[2, 1]}>
        
        <Title underline={true}>Om mig</Title>
        
        <InputField prefix='phone'
        img={
          <Phone 
            color='white' 
            size={24} 
          />}>Telefonnummer</InputField>
       
        <InputField prefix='school' 
        img={
          <GraduationCap 
            color='white' 
            size={24} 
          />}>Skola / Utbildning</InputField>
        
        <InputField prefix='expertise'
        img={
          <Star 
            color='white' 
            size={24} 
          />}>Kompentenser</InputField>
        
        <TextArea prefix='about'>Kort beskrivning av dig själv</TextArea>

      </LayoutContainer>

      <LayoutContainer type='flex' direction='column' padding={[1,4]}>
        
        <Title underline={true}>Önskemål praktik</Title>
        
        <InputField prefix='role'
        img={
          <Puzzle 
            color='white'
            size={24} 
          />}>Yrkesroll</InputField>
        
        <div className='flex column gap-1'>
          
          <Title img={<Map color='white' size={24} />}>Praktikplats</Title>
          
          <div className='flex evenly'>

            <InputButton 
              id={1} 
              type='radio' 
              value='Remote' 
              label='Remote' 
            />

            <InputButton 
              id={2} 
              type='radio' 
              value='På plats' 
              label='På plats' 
            />

            <InputButton 
              id={3} 
              type='radio'
              value='Hybrid' 
              label='Hyrbrid' 
            />

          </div>
        </div>

      </LayoutContainer>

      <LayoutContainer type='flex' direction='column' gap='3' padding={[1, 5, 1, 2]}>
        <button type='button' className='button'>Spara</button>
      </LayoutContainer>
      

    </LayoutContainer>
  )
};

export default Index;