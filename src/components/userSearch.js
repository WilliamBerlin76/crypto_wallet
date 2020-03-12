import React, {useState} from 'react';
import ListTransactions from './listTransactions'

const UserSearch = props => {
    const [searchUser, setSearchUser] = useState('')
    const [sentUser, setSentUser] = useState('')

    const handleChange = e => {
        setSearchUser(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        setSentUser(searchUser)
        console.log('SEARCHUSER', searchUser)
    }
    return(
        <>
            <form>
                <input
                    type='text'
                    value={searchUser}
                    onChange={handleChange}
                />
            </form>
            <button onClick={handleSubmit}>
                Search User
            </button>
            <ListTransactions
                user={sentUser}
            />
        </>
    )
}

export default UserSearch