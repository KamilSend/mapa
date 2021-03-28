import React, { Component } from 'react'
import axios from 'axios'

import Signup from './components/authentication/signup/signup'
import Maps from './components/maps/maps'
import Users from './components/users/users'
import Loader from "react-loader-spinner";
import UserList from './components/users/userList/userList'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    state = {
        coordinates:[],
        users:[
            {
                nickname:'',
                province:'',
                county:'',
                community:'',
                village:'',
            }
        ],
        loader:false,
    }

    handleFetchUsers = () => {
        this.setState({loader:true})
        const coordinates = []

        axios.get('https://mapa-6578a-default-rtdb.firebaseio.com/mapa.json')
            .then(response => {
                    const users = Object.keys(response.data);
                    const allUsers = []
                    users.forEach((user, index) => {
                        const coordinate = [response.data[user].coordinates[1], response.data[user].coordinates[0]]
                        coordinates.push(coordinate)
                        const singleUser = {
                            nickname: response.data[user].nickname,
                            province:response.data[user].province,
                            county:response.data[user].county,
                            community:response.data[user].community,
                            village:response.data[user].village,
                        }
                        allUsers.push(singleUser)
                        this.setState({users:allUsers})
                    })

                    this.setState({coordinates:coordinates})
                }
            ).catch(error => console.log(error))
            .then( () => this.setState({loader:false}))

    }

  render(){
    return (
        <div className="App">
            {this.state.loader?
                <div className="loaderContainer">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={500}
                        width={500}
                        visible={this.state.loader}
                    />
                </div>:null}
            <div className="userWrapper">
                <Signup/>
                <UserList users={this.state.users}/>
            </div>
            <Users fetchUsers={this.handleFetchUsers}/>
            <Maps coordinates={this.state.coordinates}/>
        </div>
    );
  }
}

export default App;
