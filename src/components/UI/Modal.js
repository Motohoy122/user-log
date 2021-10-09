import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {


    const classes = styles.modal + " " + props.className;

        return  <div className={classes}>
                    <div className={styles.modalContent}>
                        
                        
                        {props.children}
                    </div>
                </div>
    
}

export default Modal;