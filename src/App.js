import React, {useState} from 'react';
import UserList from './components/Users/UserList';
import NewUser from './components/Users/NewUser';


const DUMMY_USERS = [
  {
    id: 1,
    username: 'Ahoy2',
    age: 54
  },
  {
    id: 2,
    username: 'Motohoy',
    age: 43
  },
  {
    id: 3,
    username: 'Shelly',
    age: 22
  }
]

const App = () => {
  const [users, setUsers] = useState(DUMMY_USERS)

  const addUserHandler = users => {
    setUsers((prevUsers) => {
      console.log(prevUsers)
      return [users, ...prevUsers];
    })
  }

  return (
    <div >
        <NewUser onAddUser={addUserHandler}/>
        <UserList users={users}/>
    </div>
  );
}

export default App;
