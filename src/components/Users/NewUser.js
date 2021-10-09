import React, {useState} from 'react';
import Card from '../UI/Card.js';
import UserForm from './UserForm';
import styles from './NewUser.module.css';
import ErrorMessage from './ErrorMessage';

const NewUser = (props) =>{
    const [isInvalidUsername, setIsInvalidUsername] = useState(false);
    const [isInvalidAge, setIsInvalidAge] = useState(false);
    const [isError, setIsError] = useState(false);
    let modalDisplay = !isError ? styles.hideDisplay : 'display: inline-block;';
    let errorTitle = '';
    let errorMessage = '';
    let errorModal;

    const saveUserDataHandler = (enteredUserData) => {
        setIsInvalidUsername(enteredUserData.usernameError);
        setIsInvalidAge(enteredUserData.ageError);
        if(!enteredUserData.usernameError && !enteredUserData.ageError){
            const usersData = {
                ...enteredUserData,
                id: Math.random().toString()
            }
            console.log("Userername Error " + isInvalidUsername);

            props.onAddUser(usersData);
        } 
        else {
            setIsError(true);
        }
        
    }
    
    const showErrorHandler = (shouldDisplayModal) => {
        setIsError(false);
    }

    if (isInvalidUsername && !isInvalidAge) {
        errorTitle = 'USERNAME ERROR';
        errorMessage = 'Invalid Username. Please try again';
    }
    else if (!isInvalidUsername && isInvalidAge) {
        errorTitle = 'INVALID AGE';
        errorMessage = 'Invalid Age entered, the value must be greater than -1.'
    }
    else if (isInvalidUsername && isInvalidAge) {
        errorTitle = 'INVALID USERNAME & AGE';
        errorMessage = 'Username must have at least 1 character and your age must be greater than -1.'
    }

    // console.log("Is invalid username " + isInvalidUsername);
    // console.log("Is invalid age " + isInvalidAge);
    // console.log("isError? " + isError);

        if(isError) {
            errorModal = (<ErrorMessage 
                onShowError={showErrorHandler} 
                errorTitle={errorTitle} 
                errorMessage={errorMessage} 
                hasError={isError}
                className={modalDisplay}
            />);
        }
        else {
            errorModal = '';
        }

        
  
        return  <div>
                <Card className={styles.newUser}>
                    <UserForm className={styles.userForm} onSaveUserData={saveUserDataHandler} />
                </Card>    
                {errorModal}
            </div>
    
    
}

export default NewUser;