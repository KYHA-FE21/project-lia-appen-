import React from 'react'
import Title from '../components/title';
import Wrapper from '../components/wrapper';
import InputField from '../../../components/input-field';
import PrimaryButton from '../../../components/buttons/index';
import TextArea from '../components/textArea';
import { Phone, GraduationCap, Star, Puzzle } from 'lucide-react';
import InputButton from '../components/input-button';

const AboutMe = () => {
    return (
        <>
            <Wrapper 
                direction='column' 
                gap={[3]}
                padding={[0, 1]}>

                <Title size={[1.5]} >Om mig</Title>

                <InputField 
                    icon={<Phone strokeWidth={1} />}
                    type="tel"
                    placeholder='Telefonnummer'/>
    
                <InputField 
                    icon={<GraduationCap strokeWidth={1} />}
                    type="text"
                    placeholder='Skola / Utbildning'/>

                <InputField 
                    icon={<Star strokeWidth={1} />}
                    type='text'
                    placeholder='Kompentenser'/>

                <TextArea>Kort beskrivning av dig själv</TextArea>

            </Wrapper>

            <Wrapper
                direction='column'
                gap={[3]}
                padding={[3, 1]}>

                <Title size={[1.5]} >Önskemål LIA</Title>

                <InputField
                    icon={<Puzzle strokeWidth={1} />}
                    type="tel"
                    placeholder='Telefonnummer' />


                <Wrapper
                    direction='column'
                    gap={[1]}>

                    <Wrapper
                        gap={[1]}
                        styleDirection='center'>

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

                    </Wrapper>
                </Wrapper>

            </Wrapper>

            <Wrapper 
                styleDirection='center' 
                padding={[2,0]}
                gap={[1]}>

                <PrimaryButton>Spara</PrimaryButton>

            </Wrapper>
        </>
    )
}

export default AboutMe