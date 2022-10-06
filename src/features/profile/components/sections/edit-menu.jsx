import { useState } from 'react'
import LayoutContainer from '../layout-container';
import InputButton from '../input-button';
import { Modal } from '../modal';
import AboutMe from './about-me';
import Lia from './lia';

const EditMenu = () => {

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();

    const clickHandler = (e) => {
        setOpen(true)
        setContent(e.target.value === 'Ändra profil' ? <AboutMe /> : <Lia />)
    }

    return (
        <>
            <LayoutContainer 
                gap={[1]} 
                styleDirection='center'
                padding={[1, 0]}>
                
                <InputButton 
                    className='button' 
                    click={clickHandler}>Ändra profil</InputButton>
                
                <InputButton 
                    className='button' 
                    click={clickHandler}>Ändra LIA-sökning</InputButton>

            </LayoutContainer>

            <Modal open={open} >{content}</Modal>
        </>
    )
}

export default EditMenu