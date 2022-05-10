import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './modal.scss'
import { useRef } from 'react';

const Modal = ({ actives, id, children }) => {
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        setActive(actives)
    }, [actives]);
    
    return (
        <div id={id} className={`modal ${active ? 'active' : ''}`}>
            {children}
        </div>
    );
};




Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
};


export const ModalContent = (props) =>{
    const contentRef = useRef(null)

    const closeModal = () =>{
        contentRef.current.parentNode.classList.remove('active')
        if (props.onClose) props.onClose() 
    }

    return(
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content-close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

export default Modal;
