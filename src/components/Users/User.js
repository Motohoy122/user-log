import React from 'react';
import styles from './User.module.css';
import Card from '../UI/Card';

const User = (props) => {
    return (
            <Card className={styles.userInfo}>
                <div className={styles.userInfo__userData}>
                    <h2>{props.username} ({props.age} years old)</h2>
                </div> 
            </Card>
            
    );
}

export default User;