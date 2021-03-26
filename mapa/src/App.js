import React, { Component } from 'react'
import axios from 'axios'

import Signup from './components/authentication/signup/signup'
import Maps from './components/maps/maps'
import Users from './components/users/users'

import './App.css';

class App extends Component {

    state = {
        coordinates:[

        ],
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

        const coordinates = []

        console.log('pobieram użytkowników')
        axios.get('https://mapa-6578a-default-rtdb.firebaseio.com/mapa.json')
            .then(response => {
                    const users = Object.keys(response.data);
                    const userList = users.map((user, index) => {
                        const coordinate = [response.data[user].coordinates[1], response.data[user].coordinates[0]]
                        coordinates.push(coordinate)
                    })
                    this.setState({coordinates:coordinates})
                }
            )
        // console.log(coordinates)
    }

  render(){
    return (
        <div className="App">
          <button onClick={this.handleTest}>Test</button>
          <button onClick={this.firebaseTest}>Test firebase</button>
            <Signup/>
            <Users fetchUsers={this.handleFetchUsers}/>
            <Maps coordinates={this.state.coordinates}/>
        </div>
    );
  }
}

export default App;