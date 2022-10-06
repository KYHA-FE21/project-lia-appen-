import { useState } from 'react'
import LayoutContainer from '../layout-container';
import InputButton from '../input-button';
import { Modal } from '../modal';
import AboutMe from './about-me';
import Lia from './lia';

const EditMenu = () => {

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();

    const changeAboutMeHandler = () => {
        console.log('aboutme');
        setOpen(true)
        setContent(<AboutMe />)
    }

    const changeLiaHandler = () => {
        console.log('Lia');
        setOpen(true)
        setContent(<Lia />)
    }

    return (
        <>
            <LayoutContainer gap={[1]} styleDirection='center' padding={[1, 0]}>
                <InputButton type='button' className='button' click={changeAboutMeHandler}>Ändra profil</InputButton>
                <InputButton type='button' className='button' click={changeLiaHandler}>Ändra LIA-sökning</InputButton>
            </LayoutContainer>

            <Modal open={open} >{content}</Modal>
        </>
    )
}

export default EditMenu