import React from 'react';
import Modal from '../UI/Modal';
import styles from './ErrorMessage.module.css';

const ErrorMessage = (props) => {

    const displayModalHandler = (event) => {
        event.preventDefault();
        props.onShowError(false);

    }

    return <Modal >
                <div>
                    <span className={styles.close } onClick={displayModalHandler}>&times;</span>
                    <h1>{props.errorTitle}</h1>
                </div>
                <div>
                    <p>{props.errorMessage}</p>
                </div>

            </Modal>
}

export default ErrorMessage;