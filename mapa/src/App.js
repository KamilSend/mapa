import React, { Component } from 'react'
import axios from 'axios'

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
                "v": "Nowosądecki"
            },
            {
                "level": "gmi",
                "v": "Grybów"
            },
            {
                "level": "msc",
                "v": "Polna"
            },
            {
                "level": "ulc",
                "v": ""
            },
            {
                "level": "kod",
                "v": "33-331"
            },
            {
                "level": "nr",
                "v": "143"
            }
        ]

        const headers = {
            'Content-Type': 'application/json',
        }

        axios.post('https://capap.gugik.gov.pl/api/fts/hier/pkt/qq',  data, {
            headers: headers
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
            .catch(error => {
                console.log(error)
            })

    }

  render(){
    return (
        <div className="App">
          <button onClick={this.handleTest}>Test</button>
        </div>
    );
  }
}

export default App;
