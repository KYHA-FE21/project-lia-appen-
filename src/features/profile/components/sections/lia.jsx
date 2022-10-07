import React from 'react'
import Title from '../title';
import LayoutContainer from '../layout-container';
import InputButton from '../input-button';
import PrimaryButton from '../../../../components/buttons/primary-button';
import { Puzzle } from 'lucide-react';

const Lia = () => {
    return (
        <>
            <LayoutContainer 
                direction='column' 
                padding={[2, 1]} 
                gap={[2]}>

                <Title 
                    size={[1.1]} 
                    bold={700}>Önskemål praktik</Title>

                <LayoutContainer 
                    styleDirection='center'
                    gap={[1]}>

                    <Puzzle
                        color='black'
                        size={24}/>

                    <InputButton
                        type='text'
                        placeholder='Yrkesroll' />

                </LayoutContainer>

                <LayoutContainer 
                    direction='column' 
                    gap={[1]}>

                    <LayoutContainer 
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

                    </LayoutContainer>
                </LayoutContainer>

            </LayoutContainer>

            <LayoutContainer 
                direction='column' 
                styleDirection='center' 
                padding={[2,0]}>
                
                <PrimaryButton>Spara</PrimaryButton>

            </LayoutContainer>
        </>
    )
}

export default Lia