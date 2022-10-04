import React, { useState } from 'react';
import Title from '../components/title';
import InputField from '../components/input_field';
import { Phone, GraduationCap, Star, Puzzle, Map, MapPin, CalendarDays} from 'lucide-react';
import InputButton from '../components/input-button';
import Layout from '../components/layout';
import Section from '../components/section';
import Avatar from '../components/avatar';
import TextArea from '../components/textArea';
import './index.scss';

const Index = () => {

  const [radioButton, setRadioButton] = useState();
  
  const [input, setInput] = useState({
    phone: null,
    school: null,
    expertise: null,
    about: null,
    role: null
  });

  const changeRadioHandler = (e) => {
    setRadioButton(e.target.value);
  };

  const changeInputHandler = (e) => {
    console.log(e.target)
    setInput(
      {...input, 
        [e.target.id]:e.target.value
      }
    );
  };

  const saveHandler = (e) => {
    e.preventDefault();

    console.log('save', radioButton, input)
  }

  return (
    <Layout>

      <Section header={true}>
        <Avatar>LIA</Avatar>
        <Title>Göran Arvdissson</Title>
        
        <div className='flex gap-2'> 
          <Title size='size-1' img={<MapPin color='white' size={14} />}>Välj plats</Title>
          <Title size='size-1' img={<CalendarDays color='white' size={14} />}>Välj period</Title>
        </div>

      </Section>

      <Section>
        
        <Title underline={true}>Om mig</Title>
        
        <InputField prefix='phone' change={changeInputHandler} 
        img={
          <Phone 
            color='white' 
            size={24} 
          />}>Telefonnummer</InputField>
       
        <InputField prefix='school' change={changeInputHandler} 
        img={
          <GraduationCap 
            color='white' 
            size={24} 
          />}>Skola / Utbildning</InputField>
        
        <InputField prefix='expertise' change={changeInputHandler} 
        img={
          <Star 
            color='white' 
            size={24} 
          />}>Kompentenser</InputField>
        
        <TextArea prefix='about' change={changeInputHandler}>Kort beskrivning av dig själv</TextArea>

      </Section>

      <Section>
        
        <Title underline={true}>Önskemål praktik</Title>
        
        <InputField prefix='role' change={changeInputHandler} 
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
              checked={radioButton === 'Remote'} 
              value='Remote' 
              label='Remote' 
              changed={changeRadioHandler} 
            />

            <InputButton 
              id={2} 
              type='radio' 
              checked={radioButton === 'På plats'} 
              value='På plats' 
              label='På plats' 
              changed={changeRadioHandler} 
            />

            <InputButton 
              id={3} 
              type='radio'
              checked={radioButton === 'Hybrid'} 
              value='Hybrid' 
              label='Hyrbrid' 
              changed={changeRadioHandler} 
            />

          </div>
        </div>

      </Section>

      <button onClick={saveHandler} type='button'>Spara</button>

    </Layout>
  )
};

export default Index;