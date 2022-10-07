import { useState } from 'react'
import Wrapper from '../wrapper';
import { Modal } from '../modal';
import AboutMe from './about-me';
import Lia from './lia';
import PrimaryButton from '../../../../components/buttons/primary-button';

const EditMenu = () => {

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();

    const clickHandler = (e) => {
        console.log(e)
        setOpen(true)
        setContent(e.target.innerText === 'Ändra profil' ? <AboutMe /> : <Lia />)
    }

    return (
        <>
            <Wrapper 
                gap={[1]} 
                styleDirection='center'
                padding={[0, 0, 3, 0]}>
                <PrimaryButton onClick={clickHandler}>Ändra profil</PrimaryButton>
                                
                <PrimaryButton onClick={clickHandler}>Ändra LIA-sökning</PrimaryButton>

            </Wrapper>

            <Modal open={open} >{content}</Modal>
        </>
    )
}

export default EditMenu