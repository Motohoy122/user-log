import React from 'react';
import styles from './UserList.module.css';
import User from './User';
import Card from '../UI/Card';

const UserList = (props) => {
    return (
            <Card className={styles.userList}>
                <ul>
                    {props.users.map(user => (
                        <User 
                            key={user.id}
                            username={user.username}
                            age={user.age}
                        />
                    ))
                    }
                </ul>
            </Card>
            
            
            );
}

export default UserList;