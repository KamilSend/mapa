import React from 'react'
import { Jumbotron } from 'react-bootstrap';

import './userList.scss'

const userList = (props) => {

    const list = props.users.map( (user, index) => {
        return(
            <li key={index}>
                <span className="lp">{index+1}</span>
                <span>{user.nickname}</span>
                <span>{user.province}</span>
                <span>{user.county}</span>
                <span>{user.community}</span>
                <span>{user.village}</span>
            </li>
        )
    })

    return(

        <Jumbotron className="userListWrapper">
            <h2>Lista użytkowników:</h2>
            <span className="lp">Lp</span>
            <span>Nazwa</span>
            <span>Województwo</span>
            <span>Powiat</span>
            <span>Gmina</span>
            <span>Miejscowość</span>
            <ul className="userList">
                {list}
            </ul>
        </Jumbotron>

    )
}

export default userList