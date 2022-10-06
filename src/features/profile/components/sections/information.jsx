import React from 'react'
import LayoutContainer from '../layout-container';
import Title from '../title';
import { Phone, MapPin, CalendarDays } from 'lucide-react';

const Information = ({ name, role, about, area, school, date, phone }) => {
    return (
        <LayoutContainer padding={[2,0, 0, 0]} direction='column' gap={[3]} styleDirection='center'>
            <Title size={[1.5]} bold={700} subTitle={role}>{name}</Title>
            
            <LayoutContainer wrap='wrap' gap={[1]} styleDirection='center'>
                <Title size={[1]} img={<MapPin color='black' size={18} />}>{area}</Title>
                <Title size={[1]} img={<Phone color='black' size={18} />}>{phone}</Title>
                {school !== '' || date !== '' ? 
                    <>
                        <Title size={[1]} img={<MapPin color='black' size={18} />}>{school}</Title>
                        <Title size={[1]} img={<CalendarDays color='black' size={18} />}>{date}</Title>
                    </> : <></>
                }
            </LayoutContainer>

            <LayoutContainer maxWidth='800px' lineHeight={[1.5]} padding={[0, 1]}>
                <Title size={[1]}>{about}</Title>
            </LayoutContainer>

        </LayoutContainer>
    )
}

export default Information