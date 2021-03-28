import React from 'react'
import { Button} from 'react-bootstrap';

import './users.scss'

const users = (props) => {
    return(
        <>
            <Button className="displayUsers" onClick={props.fetchUsers}>Pobierz użytkowników</Button>
        </>

    )
}

export default users