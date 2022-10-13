import React from 'react'
import Title from '../title';
import Wrapper from '../wrapper';
import InputButton from '../input-button';
import PrimaryButton from '../../../../components/buttons/index';
import TextArea from '../textArea';
import { Phone, GraduationCap, Star } from 'lucide-react';
import SelectorHeader from './selector_header';

const AboutMe = () => {
    return (
        <>
            <SelectorHeader>Ändra profil</SelectorHeader>
            <Wrapper 
                direction='column' 
                gap={[3]}
                padding={[0, 1]}>

                <Title 
                    size={[1.1]} 
                    bold={700}>Om mig</Title>

                <Wrapper 
                    styleDirection='center' 
                    gap={[1]}>

                    <Phone
                        color='black'
                        size={24}/>

                    <InputButton 
                        type='text'
                        placeholder='Telefonnummer'/>

                </Wrapper>

                <Wrapper 
                    styleDirection='center' 
                    gap={[1]}>

                    <GraduationCap
                        color='black'
                        size={24}/>

                    <InputButton 
                        type='text'
                        placeholder='Skola / Utbildning'/>

                </Wrapper>

                <Wrapper 
                    styleDirection='center' 
                    gap={[1]}>

                    <Star
                        color='black'
                        size={24}/>
                    
                    <InputButton 
                        type='text'
                        placeholder='Kompentenser'/>

                </Wrapper>

                <TextArea>Kort beskrivning av dig själv</TextArea>

            </Wrapper>

            <Wrapper 
                direction='column' 
                styleDirection='center' 
                padding={[2,0]}>
                
                <PrimaryButton>Spara</PrimaryButton>

            </Wrapper>
        </>
    )
}

export default AboutMe