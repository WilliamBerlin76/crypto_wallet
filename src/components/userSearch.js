import React, {useState} from 'react';
import ListTransactions from './listTransactions'

const UserSearch = props => {
    const [searchUser, setSearchUser] = useState('')
    const [defaultUser, setDefaultUser] = useState('')
    const [sentUser, setSentUser] = useState('')

    const handleChange = e => {
        setSearchUser(e.target.value)
        
    }
    
    const changeDefault = e => {
        setDefaultUser(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setSentUser(searchUser)
    }

    const submitDefaultUser = e => {
        e.preventDefault()
        setSearchUser(defaultUser)
    }
    return(
        <>
            <form>
                <input
                    placeholder='enter user id to search'
                    type='text'
                    value={searchUser}
                    onChange={handleChange}
                />
                <input
                    placeholder='save default user id'
                    type='text'
                    value={defaultUser}
                    onChange={changeDefault}
                />
            </form>
            <button onClick={handleSubmit}>
                Search User
            </button>
            <button onClick={submitDefaultUser}>
                Set default user
            </button>
            <ListTransactions
                user={sentUser}
            />
        </>
    )
}

export default UserSearch