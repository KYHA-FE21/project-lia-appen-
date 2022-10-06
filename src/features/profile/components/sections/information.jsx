import React from 'react'
import LayoutContainer from '../layout-container';
import Title from '../title';
import { Phone, MapPin, CalendarDays } from 'lucide-react';

const Information = ({name, role}) => {
    return (
        <LayoutContainer padding={[2,0, 0, 0]} direction='column' gap={[3]} styleDirection='center'>
            <Title size={[1.5]} bold={700} subTitle={role}>{name}</Title>

            <LayoutContainer wrap='wrap' gap={[1]} styleDirection='center'>
                <Title size={[1]} img={<MapPin color='black' size={18} />}>Gävle</Title>
                <Title size={[1]} img={<Phone color='black' size={18} />}>+46 70-1671255</Title>
                <Title size={[1]} img={<MapPin color='black' size={18} />}>Hig</Title>
                <Title size={[1]} img={<CalendarDays color='black' size={18} />}>28 nov-4 apr 2022</Title>
            </LayoutContainer>

            <LayoutContainer maxWidth='800px' lineHeight={[1.5]} padding={[0, 1]}>
                <Title size={[1]}>Om studenten: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Title>
            </LayoutContainer>

        </LayoutContainer>
    )
}

export default Information