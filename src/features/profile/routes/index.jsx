import React from 'react';
import Title from '../components/title';
import InputField from '../components/input_field';
import { Phone, GraduationCap, Star, Puzzle, MapPin, CalendarDays} from 'lucide-react';
import InputButton from '../components/input-button';
import LayoutContainer from '../components/layout-container';
import Avatar from '../components/avatar';
import TextArea from '../components/textArea';
import './index.scss';

const Index = () => {

  return (
    <LayoutContainer direction='column' gap={[1]}>

      <LayoutContainer gap={[3]} styleDirection='center'>
          <Avatar />
      </LayoutContainer>

      <LayoutContainer direction='column' gap={[3]} styleDirection='center'>
        <Title size={[1.5]} bold={700}>Sofie Larsson</Title>

        <LayoutContainer gap={[1]} styleDirection='space-evenly'>
          <Title size={[1]} img={<MapPin color='black' size={18} />}>Gävle</Title>
          <Title size={[1]} img={<CalendarDays color='black' size={18} />}>28 nov-4 apr 2022</Title>
        </LayoutContainer>

        <LayoutContainer styleDirection='space-evenly' gap={[1]} padding={[1, 2]}>
          <div className='badges'>Node</div>
          <div className='badges'>JS</div>
          <div className='badges'>CSS</div>
          <div className='badges'>HTML</div>
          <div className='badges'>REACT</div>
        </LayoutContainer>
      </LayoutContainer>

      <LayoutContainer gap={[1]} styleDirection='space-evenly' padding={[4, 0]}>
        <InputButton type='button' className='button'>Ändra profil</InputButton>
        <InputButton type='button' className='button'>Ändra LIA-sökning</InputButton>
      </LayoutContainer>

      <LayoutContainer direction='column' gap={[3]} padding={[2, 1]}>
        
        <Title size={[1.1]} bold={700}>Om mig</Title>
        
        <InputField type='text' prefix='phone'
        img={
          <Phone 
            color='black' 
            size={24} 
          />}>Telefonnummer</InputField>
       
        <InputField type='text' prefix='school' 
        img={
          <GraduationCap 
            color='black' 
            size={24} 
          />}>Skola / Utbildning</InputField>
        
        <InputField type='text' prefix='expertise'
        img={
          <Star 
            color='black' 
            size={24} 
          />}>Kompentenser</InputField>
        
        <TextArea prefix='about'>Kort beskrivning av dig själv</TextArea>

      </LayoutContainer>

      <LayoutContainer direction='column' padding={[2, 1]} gap={[2]}>
        
        <Title size={[1.1]} bold={700}>Önskemål praktik</Title>
        
        <InputField type='text' prefix='role'
        img={
          <Puzzle 
            color='black'
            size={24} 
          />}>Yrkesroll</InputField>
        
        <LayoutContainer direction='column' gap={[1]}>
            
          <LayoutContainer styleDirection='space-evenly'>

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

          </LayoutContainer>
        </LayoutContainer>

      </LayoutContainer>

      <LayoutContainer direction='column' styleDirection='center'>
        <InputButton type='button' className='button'>Spara</InputButton>
      </LayoutContainer>
      

    </LayoutContainer>
  )
};

export default Index;