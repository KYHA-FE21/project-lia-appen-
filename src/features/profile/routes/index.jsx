import React from 'react';
import Title from '../components/title';
import InputField from '../components/input_field';
import { Phone, GraduationCap, Star, Puzzle, Map, MapPin, CalendarDays} from 'lucide-react';
import InputButton from '../components/input-button';
import LayoutContainer from '../components/layout-container';
import Section from '../components/section';
import Avatar from '../components/avatar';
import TextArea from '../components/textArea';
import './index.scss';

const Index = () => {

  return (
    <LayoutContainer>

      <Section header={true}>
          <div className='bgBlur'></div>
          <Avatar />
      </Section>

      <Section header={true}>
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
      </Section>

      <Section>
        
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

      </Section>

      <Section>
        
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

      </Section>

      <Section>
        <button type='button' className='button'>Spara</button>
      </Section>
      

    </LayoutContainer>
  )
};

export default Index;