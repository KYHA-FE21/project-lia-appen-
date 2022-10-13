import React from 'react'
import Title from '../title';
import Wrapper from '../wrapper';
import InputButton from '../input-button';
import PrimaryButton from '../../../../components/buttons/index';
import SelectorHeader from './selector_header';
import { Puzzle } from 'lucide-react';

const Lia = () => {
    return (
        <>
            <SelectorHeader>Ändra Önskemål</SelectorHeader>
            <Wrapper 
                direction='column' 
                padding={[2, 1]} 
                gap={[2]}>

                <Title 
                    size={[1.1]} 
                    bold={700}>Önskemål praktik</Title>

                <Wrapper 
                    styleDirection='center'
                    gap={[1]}>

                    <Puzzle
                        color='black'
                        size={24}/>

                    <InputButton
                        type='text'
                        placeholder='Yrkesroll' />

                </Wrapper>

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
                direction='column' 
                styleDirection='center' 
                padding={[2,0]}>
                
                <PrimaryButton>Spara</PrimaryButton>

            </Wrapper>
        </>
    )
}

export default Lia