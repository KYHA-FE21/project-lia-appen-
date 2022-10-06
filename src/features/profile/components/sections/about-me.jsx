import React from 'react'
import Title from '../title';
import LayoutContainer from '../layout-container';
import InputButton from '../input-button';
import TextArea from '../textArea';
import { Phone, GraduationCap, Star } from 'lucide-react';
import SelectorHeader from './selector_header';

const AboutMe = () => {
    return (
        <>
            <SelectorHeader>Ändra profil</SelectorHeader>
            <LayoutContainer 
                direction='column' 
                gap={[3]}
                padding={[0, 1]}>

                

                <Title 
                    size={[1.1]} 
                    bold={700}>Om mig</Title>

                <LayoutContainer 
                    styleDirection='center' 
                    gap={[1]}>

                    <Phone
                        color='black'
                        size={24}/>

                    <InputButton 
                        type='text'
                        placeholder='Telefonnummer'/>

                </LayoutContainer>

                <LayoutContainer 
                    styleDirection='center' 
                    gap={[1]}>

                    <GraduationCap
                        color='black'
                        size={24}/>

                    <InputButton 
                        type='text'
                        placeholder='Skola / Utbildning'/>

                </LayoutContainer>

                <LayoutContainer 
                    styleDirection='center' 
                    gap={[1]}>

                    <Star
                        color='black'
                        size={24}/>
                    
                    <InputButton 
                        type='text'
                        placeholder='Kompentenser'/>

                </LayoutContainer>

                <TextArea>Kort beskrivning av dig själv</TextArea>

            </LayoutContainer>

            <LayoutContainer 
                direction='column' 
                styleDirection='center' 
                padding={[2,0]}>
                
                <InputButton 
                    className='button'>Spara</InputButton>

            </LayoutContainer>
        </>
    )
}

export default AboutMe