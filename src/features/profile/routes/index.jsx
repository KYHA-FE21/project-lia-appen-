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
    <LayoutContainer direction='column' gap={[2]}>

      <LayoutContainer gap={[3]} styleDirection='center'>
          <Avatar />
      </LayoutContainer>

      <LayoutContainer direction='column' gap={[3]} styleDirection='center'>
        <Title size={[1.5]} bold={700}>Sofie Larsson</Title>

        <LayoutContainer gap={[2]} styleDirection='space-evenly'>
          <Title size={[1]} img={<MapPin color='black' size={18} />}>Gävle</Title>
          <Title size={[1]} img={<CalendarDays color='black' size={18} />}>28 nov-4 apr <br />2022</Title>
        </LayoutContainer>

        <LayoutContainer styleDirection='space-evenly' gap={[1]}>
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
        
        <Title>Om mig</Title>
        
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

      <LayoutContainer direction='column' padding={[1,4]}>
        
        <Title>Önskemål praktik</Title>
        
        <InputField prefix='role'
        img={
          <Puzzle 
            color='white'
            size={24} 
          />}>Yrkesroll</InputField>
        
        <LayoutContainer direction='column' gap={[1]}>
          
          <Title img={<Map color='white' size={24} />}>Praktikplats</Title>
          
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

      <LayoutContainer direction='column' gap={[3]} padding={[1, 5, 1, 2]}>
        <InputButton type='button' className='button'>Spara</InputButton>
      </LayoutContainer>
      

    </LayoutContainer>
  )
};

export default Index;