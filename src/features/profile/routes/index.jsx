import React from 'react';
import Title from '../components/title';
import InputField from '../components/input_field';
import { Phone, GraduationCap, Star, Puzzle } from 'lucide-react';

const index = () => {
  return (
    <div style={{display: 'flex', gap: '1em', flexDirection: 'column', width: 'calc(1200px - 4em)', height: '100vh', backgroundColor: 'red', margin: '0 auto'}}>
      <section>
        <Title>Göran Arvdissson</Title>
      </section>

      <section>
        <Title underline={true}>Om mig</Title>
        <InputField img={<Phone color='white' size={24} />}>Telefonnummer</InputField>
        <InputField img={<GraduationCap color='white' size={24} />}>Skola / Utbildning</InputField>
        <InputField img={<Star color='white' size={24} />}>Kompentenser</InputField>
      </section>

      <section>
        <Title underline={true}>Önskemål praktik</Title>
        <InputField img={<Puzzle color='white' size={24} />}>Yrkesroll</InputField>
      </section>
      
    </div>
  );
};

export default index;