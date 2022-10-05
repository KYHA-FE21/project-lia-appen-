import React from "react";

export const Modal = ({children, open }) => {

    return (
        <dialog open={open}>
            {children}
        </dialog>
    )
}

export default Modal