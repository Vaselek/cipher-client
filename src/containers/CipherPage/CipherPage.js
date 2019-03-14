import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import {connect} from "react-redux";
import {encodeRequest, decodeRequest, updateDecodedMessage, updateEncodedMessage} from "../../store/actions"


class CipherPage extends Component {

    state = {
        password: ''
    }

    decodeMessage = event => {
        event.preventDefault();
        if (!this.state.password) {
            alert('Enter password...')
        } else {
            this.props.decodeRequest({message: this.props.encodedMessage, password: this.state.password});
        }
    }

    encodeMessage = event => {
        event.preventDefault();
        if (!this.state.password) {
            alert('Enter password...')
        } else {
            this.props.encodeRequest({message: this.props.decodedMessage, password: this.state.password});
        }
    }

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="messageToEncode" sm={2}>Decoded Message</Label>
                    <Col sm={10}>
                        <Input type="textarea"
                               value={this.props.decodedMessage}
                               onChange={(event) => this.props.updateDecodedMessage(event.target.value)}
                               name="messageToEncode"
                               id="messageToEncode"
                               placeholder="Input message you want to encode.." />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={8}>
                        <Input type="password"
                               onChange={this.inputChangeHandler}
                               required
                               name="password"
                               id="password"
                               placeholder="Input password.." />
                    </Col>
                    <Col sm={1}>
                        <Button onClick={(e) => this.decodeMessage(e)}><FaArrowCircleUp /></Button>
                    </Col>
                    <Col sm={1}>
                        <Button onClick={(e) => this.encodeMessage(e)}><FaArrowCircleDown /></Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="messageToDecode" sm={2}>Encoded Message</Label>
                    <Col sm={10}>
                        <Input onChange={(event) => this.props.updateEncodedMessage(event.target.value)}
                               type="textarea"
                               value={this.props.encodedMessage}
                               name="messageToDecode" id="messageToDecode"
                               placeholder="Input message you want to decode.." />
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        decodedMessage: state.decodedMessage,
        password: state.password,
        encodedMessage: state.encodedMessage
    })
}

const mapDispatchToProps = dispatch => ({
    decodeRequest: (data) => dispatch(decodeRequest(data)),
    encodeRequest: (data) => dispatch(encodeRequest(data)),
    updateDecodedMessage: (value) => dispatch(updateDecodedMessage(value)),
    updateEncodedMessage: (value) => dispatch(updateEncodedMessage(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CipherPage);