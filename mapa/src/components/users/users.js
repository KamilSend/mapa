import React from 'react'

const users = (props) => {
    return(
        <>
            <div>Lista użytkowników</div>
            <button onClick={props.fetchUsers}>Wyświetl użytkowników</button>
        </>

    )
}

export default users