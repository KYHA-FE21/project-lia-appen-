import React from 'react'
import Title from '../title';
import LayoutContainer from '../layout-container';
import InputField from '../input_field';
import InputButton from '../input-button';
import { Puzzle } from 'lucide-react';

const Lia = () => {
    return (
        <>
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
        </>
    )
}

export default Lia