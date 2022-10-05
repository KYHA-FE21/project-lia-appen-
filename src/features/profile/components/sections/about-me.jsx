import React from 'react'
import Title from '../title';
import LayoutContainer from '../layout-container';
import InputField from '../input_field';
import InputButton from '../input-button';
import TextArea from '../textArea';
import { Phone, GraduationCap, Star } from 'lucide-react';

const AboutMe = () => {
    return (
        <>
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

            <LayoutContainer direction='column' styleDirection='center'>
                <InputButton type='button' className='button'>Spara</InputButton>
            </LayoutContainer>
        </>
    )
}

export default AboutMe