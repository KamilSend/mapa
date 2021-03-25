import React, { Component } from 'react'
import axios from 'axios'

import Signup from './components/authentication/signup/signup'

import './App.css';

class App extends Component {

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

  render(){
    return (
        <div className="App">
          <button onClick={this.handleTest}>Test</button>
          <button onClick={this.firebaseTest}>Test firebase</button>
            <Signup/>
        </div>
    );
  }
}

export default App;
