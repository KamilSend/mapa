import React, { Component } from 'react'
import axios from 'axios'

import Signup from './components/authentication/signup/signup'
import Maps from './components/maps/maps'
import Users from './components/users/users'
import Loader from "react-loader-spinner";
import UserList from './components/users/userList/userList'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.scss';

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

    handleTest = () => {

        const data = [
            {
                "level": "woj",
                "v": "Małopolskie"
            },
            {
                "level": "pow",
                "v": "Kraków"
            },
            {
                "level": "gmi",
                "v": "Kraków"
            },
            {
                "level": "msc",
                "v": "Kraków"
            },
            {
                "level": "ulc",
                "v": "Bociana"
            },
            {
                "level": "kod",
                "v": "31-231"
            },
            {
                "level": "nr",
                "v": ""
            }
        ]

        const headers = {
            'Content-Type': 'application/json',
        }

        axios.post('https://capap.gugik.gov.pl/api/fts/hier/pkt/qq',  data, {
            headers: headers
        })
            .then(res => {
                // console.log(res);
                console.log(res.data);
        })
            .catch(error => {
                console.log(error)
            })
    }

    firebaseTest = () => {
        axios.get('https://mapa-6578a-default-rtdb.firebaseio.com/users.json')
            .then(response => {
                    console.log(response)
                }
            )
    }

    handleFetchUsers = () => {
        this.setState({loader:true})
        const coordinates = []

        console.log('pobieram użytkowników')
        axios.get('https://mapa-6578a-default-rtdb.firebaseio.com/mapa.json')
            .then(response => {
                    const users = Object.keys(response.data);
                    const allUsers = []
                    const userList = users.map((user, index) => {
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
            <button onClick={this.handleTest}>Test</button>
            <button onClick={this.firebaseTest}>Test firebase</button>
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
