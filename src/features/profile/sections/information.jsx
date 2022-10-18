import React from 'react'
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import { Phone, MapPin, CalendarDays } from 'lucide-react';

const Information = ({ name, profession, school, date, bio, location, phone }) => {

    return (
        <Wrapper 
            padding={[5, 0, 0, 0]} 
            direction='column' 
            gap={[5]} 
            styleDirection='center'>
            <Title 
                size={[1.5]} 
                bold={700} 
                subTitle={profession}>{name}</Title>
            
            <Wrapper 
                wrap='wrap' 
                gap={[1]} 
                styleDirection='center'>

                {location === undefined ||
                    <Title 
                        size={[1]} 
                        img={<MapPin color='black' size={18} />}>{location}</Title>
                }

                {phone === undefined ||
                    <Title 
                        size={[1]}
                        img={<Phone color='black' size={18} />}>{phone}</Title>
                }
                
                {school === undefined ||
                    <Title 
                        size={[1]} 
                        img={<MapPin color='black' size={18} />}>{school}</Title>
                }

                {date === undefined ||
                    <Title 
                        size={[1]}
                        img={<CalendarDays color='black' size={18} />}>{date}</Title>
                }  
                
            </Wrapper>

            <Wrapper 
                maxWidth='800px' 
                lineHeight={[1.5]} 
                padding={[0, 1]}>
                
                <Title 
                    size={[1]}>{bio}</Title>
            </Wrapper>

        </Wrapper>
    )
}

export default Information