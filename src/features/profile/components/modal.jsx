import React from "react";

export const Modal = ({children, open }) => {

    return (
        <dialog open={open}>
            {children}
            <div className="closeButton">X</div>
        </dialog>
    )
}

export default Modal