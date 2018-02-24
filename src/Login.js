import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Label, Icon } from 'semantic-ui-react'
import './Login.css'
export default class  Login extends Component {
  constructor (props){
    super(props)
    this.state = {
      show: false,
      showToast: false
    }
  }
  showSnackbar = () => {
    this.setState({showToast: true})
    setTimeout(()=>{
      this.setState({showToast: false})
    }, 5000);
  }
  showPassword = () => {
    this.setState({show: !this.state.show})
  }
  render = () => {
    const labelStyle = {float: 'left', backgroundColor: 'transparent', padding: 0, fontSize: 14};
    const inputStyle = {height: 30, borderRadius: 0, borderColor:'black', borderStyle: 'solid',borderWidth: 0, borderBottomWidth: 1};
    const buttonStyle = {backgroundColor: 'orange', color: 'white', borderRadius: 25, width: 120, marginTop: 30};
    const ActionComponent = <Button icon={this.state.show ? 'unhide': 'hide'}  onClick={this.showPassword} style={{backgroundColor:"transparent", border: 0}}/>;
    return (
      <div className="Login">
        <h1>Login</h1>
        <Form className="login-form">
          <Form.Field>
            <Label style={labelStyle}>E-mail</Label>
            <Input type="email" transparent={true} placeholder='E-mail' style={inputStyle}/>
          </Form.Field>
          <Form.Field style={{marginTop: 20}}>
            <Label style={labelStyle}>Senha</Label>
            <Input type={this.state.show ? "text" : "password"} action={ActionComponent} transparent={true} placeholder='Senha' style={inputStyle}/>
          </Form.Field>
          <Button type='submit' style={buttonStyle} onClick={this.showSnackbar}>LOGIN</Button>
        </Form>
        <div style={{padding: 20}}>
          <a className="link" href="#">Ajuda</a>
            &nbsp; &#9679; &nbsp;
          <a className="link" href="#">Esqueci minha senha</a>
        </div>
        <div className="snackbar" style={{visibility: this.state.showToast ? 'visible' : 'hidden'}}>Lorem ipsum erro server example toast.    &nbsp; &nbsp;&nbsp; <strong style={{color: 'orange'}}>LABEL</strong></div>
      </div>
    )
  }
}
