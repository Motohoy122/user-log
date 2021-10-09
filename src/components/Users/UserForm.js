import React, {useState} from 'react';
import styles from './UserForm.module.css';

const UserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitChangeHandler = (event) => {
        event.preventDefault();
        console.log("Entered Username " + enteredUsername.length);
        let usernameError = false;
        let ageError = false;
        enteredUsername.length <= 0 ? usernameError=true : usernameError=false;
        enteredAge < 0 ? ageError=true : ageError=false;
        const userData = {
            username: enteredUsername,
            usernameError: usernameError,
            age: enteredAge,
            ageError: ageError
        }

        props.onSaveUserData(userData);

        setEnteredUsername('');
        setEnteredAge('');  
    }

    return <div className={styles.form}> 
                <form onSubmit={submitChangeHandler}>
                    <div className={styles.userInput}>
                        <div className={styles.userInput__field}> 
                            <label>Username</label>
                            <input type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                        </div>
                        <div className={styles.userInput__field}>
                            <label>Age (Years)</label>
                            <input type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>  
}

export default UserForm;