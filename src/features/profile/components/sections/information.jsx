import React from 'react'
import LayoutContainer from '../layout-container';
import Title from '../title';
import { Phone, MapPin, CalendarDays } from 'lucide-react';

const Information = () => {
    return (
        <LayoutContainer direction='column' gap={[3]} styleDirection='center'>
            <Title size={[1.5]} bold={700} subTitle='Front end utvecklare'>Sofie Larsson</Title>

            <LayoutContainer wrap='wrap' gap={[1]} styleDirection='space-evenly'>
                <Title size={[1]} img={<MapPin color='black' size={18} />}>Gävle</Title>
                <Title size={[1]} img={<Phone color='black' size={18} />}>+46 70-1671255</Title>
                <Title size={[1]} img={<MapPin color='black' size={18} />}>Hig</Title>
                <Title size={[1]} img={<CalendarDays color='black' size={18} />}>28 nov-4 apr 2022</Title>
            </LayoutContainer>

        </LayoutContainer>
    )
}

export default Information