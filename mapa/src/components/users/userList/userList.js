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
            <span className="lp tableHeader">Lp</span>
            <span className="tableHeader">Nazwa</span>
            <span className="tableHeader">Województwo</span>
            <span className="tableHeader">Powiat</span>
            <span className="tableHeader">Gmina</span>
            <span className="tableHeader">Miejscowość</span>
            <ul className="userList">
                {props.users[0].nickname===""?null:list}
            </ul>
        </Jumbotron>

    )
}

export default userList