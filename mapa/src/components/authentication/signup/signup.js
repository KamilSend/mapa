import React, { Component } from 'react';
import { signup } from '../../../helpers/auth'

import { Button, Jumbotron, Form } from 'react-bootstrap';

import './signup.scss'
// import '../login/login.scss'

class Signup extends Component{

    state = {
        error: null,
        email: '',
        password: '',
        nickname:'',
        province:'',
        county:'',
        community:'',
        village:'',
        street:'',
        zipCode:'',
        buildingNumber:'',
        coordinates:[],
    };

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log(this.state)
    }

    async handleSubmit(event) {
        console.log(event)
        event.preventDefault();
        this.setState({ error: '' });
        try {
            await signup(this.state.email, this.state.password, this.state.nickname,
                this.state.province, this.state.county, this.state.community, this.state.village,
            this.state.street, this.state.zipCode, this.state.buildingNumber);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render(){
        return(
            <div>
                <Jumbotron>
                    <Form className="signupForm">
                        <Form.Group controlId="formNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control
                                type="nickname"
                                name="nickname"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.nickname}
                                placeholder="Podaj nick" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.email}
                                placeholder="Podaj email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.password}
                                placeholder="Podaj hasło" />
                        </Form.Group>
                        <Form.Group controlId="formProvince">
                            <Form.Label>Województwo</Form.Label>
                            <Form.Control
                                type="province"
                                name="province"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.province}
                                placeholder="Województwo" />
                        </Form.Group>
                        <Form.Group controlId="formCounty">
                            <Form.Label>Powiat</Form.Label>
                            <Form.Control
                                type="county"
                                name="county"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.county}
                                placeholder="Powiat" />
                        </Form.Group>
                        <Form.Group controlId="formCommunity">
                            <Form.Label>Gmina</Form.Label>
                            <Form.Control
                                type="community"
                                name="community"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.community}
                                placeholder="Gmina" />
                        </Form.Group>
                        <Form.Group controlId="formVillage">
                            <Form.Label>Miejscowość</Form.Label>
                            <Form.Control
                                type="village"
                                name="village"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.village}
                                placeholder="Miejscowość" />
                        </Form.Group>
                        <Form.Group controlId="formStreet">
                            <Form.Label>Ulica</Form.Label>
                            <Form.Control
                                type="street"
                                name="street"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.street}
                                placeholder="Ulica" />
                        </Form.Group>
                        <Form.Group controlId="formZipCode">
                            <Form.Label>Kod pocztowy</Form.Label>
                            <Form.Control
                                type="zipCode"
                                name="zipCode"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.zipCode}
                                placeholder="Kod pocztowy" />
                        </Form.Group>
                        <Form.Group controlId="formBuildingNumber">
                            <Form.Label>Numer budynku</Form.Label>
                            <Form.Control
                                type="buildingNumber"
                                name="buildingNumber"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.buildingNumber}
                                placeholder="Numer budynku" />
                        </Form.Group>
                    </Form>
                    <Button
                        type="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >Sign up</Button>
                    {this.state.error ? (
                        <p>{this.state.error}</p>
                    ) : null}
                </Jumbotron>
            </div>

        )
    }

}

export default Signup