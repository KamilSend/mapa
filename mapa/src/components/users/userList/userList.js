import React from 'react'

import './userList.scss'

const userList = (props) => {

    const list = props.users.map( (user, index) => {
        return(
            <li key={index}>
                <span>{index+1}</span>
                <span>{user.nickname}</span>
                <span>{user.province}</span>
                <span>{user.county}</span>
                <span>{user.community}</span>
                <span>{user.village}</span>
            </li>
        )
    })

    return(

        <div className="userListWrapper">
            <h2>Lista użytkowników:</h2>
            <span>Lp</span>
            <span>Nazwa</span>
            <span>Województwo</span>
            <span>Powiat</span>
            <span>Gmina</span>
            <span>Miejscowość</span>
            <ul className="userList">
                {list}
            </ul>
        </div>

    )
}

export default userList