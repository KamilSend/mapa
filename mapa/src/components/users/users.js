import React from 'react'

const users = (props) => {
    return(
        <>
            <div>Lista użytkowników</div>
            <button onClick={props.fetchUsers}>Pobierz listę</button>
        </>

    )
}

export default users