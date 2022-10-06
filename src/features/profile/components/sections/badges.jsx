import React from 'react'
import LayoutContainer from '../layout-container';

const Badges = () => {
    return (
        <LayoutContainer 
            direction='column' 
            gap={[3]} 
            styleDirection='center'
            padding={[0,0,4,0]}>
            <LayoutContainer styleDirection='center' gap={[1.5]} padding={[1, 2]}>
                <div className='badges'>Node</div>
                <div className='badges'>JS</div>
                <div className='badges'>CSS</div>
                <div className='badges'>HTML</div>
                <div className='badges'>REACT</div>
            </LayoutContainer>
        </LayoutContainer>
    )
}

export default Badges