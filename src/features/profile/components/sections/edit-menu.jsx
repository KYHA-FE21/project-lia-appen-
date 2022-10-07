import { useState } from 'react'
import LayoutContainer from '../layout-container';
import { Modal } from '../modal';
import AboutMe from './about-me';
import Lia from './lia';
import PrimaryButton from '../../../../components/buttons/primary-button';

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
                padding={[0, 0, 3, 0]}>
                <PrimaryButton onClick={clickHandler}>Ändra profil</PrimaryButton>
                                
                <PrimaryButton onClick={clickHandler}>Ändra LIA-sökning</PrimaryButton>

            </LayoutContainer>

            <Modal open={open} >{content}</Modal>
        </>
    )
}

export default EditMenu