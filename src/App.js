import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, Form, Input, Label, Icon } from 'semantic-ui-react'

class App extends Component {
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
  render() {
    return (
      <div className="App">
          <h1>Login</h1>
          <Form className="login-form" style={{backgroundColor:'white', width:'70%', margin: 'auto', borderRadius: 20, padding: '5%', marginTop: 120}}>
            <Form.Field>
              <Label style={{float: 'left', backgroundColor: 'transparent', padding: 0, fontSize: 14}}>E-mail</Label>
              <Input type="email" transparent={true} placeholder='E-mail' style={{height: 30, borderRadius: 0, borderColor:'black', borderStyle: 'solid',borderWidth: 0, borderBottomWidth: 1}}/>
            </Form.Field>
            <Form.Field style={{marginTop: 20}}>
              <Label style={{float: 'left', backgroundColor: 'transparent', padding: 0, fontSize: 14}}>Senha</Label>
              <Input type={this.state.show ? "text" : "password"} action={<Button icon={this.state.show ? 'unhide': 'hide'}  onClick={()=>this.setState({show: !this.state.show})} style={{backgroundColor:"transparent", border: 0}}/>} transparent={true} placeholder='Senha' style={{height: 30, borderRadius: 0, borderColor:'black', borderStyle: 'solid',borderWidth: 0, borderBottomWidth: 1}}/>
            </Form.Field>
            <Button type='submit' style={{backgroundColor: 'orange', color: 'white', borderRadius: 25, width: 120, marginTop: 30}} onClick={this.showSnackbar}>LOGIN</Button>
          </Form>
          <div style={{textAlign: 'center', padding: 20}}>
            <a className="link" href="#">Ajuda</a>
              &nbsp; &#9679; &nbsp;
            <a className="link" href="#">Esqueci minha senha</a>
          </div>
          <div className="snackbar" style={{visibility: this.state.showToast? 'visible' :'hidden'}}>Lorem ipsum erro server example toast.    &nbsp; &nbsp;&nbsp; <strong style={{color: 'orange'}}>LABEL</strong></div>
      </div>
    );
  }
}

export default App;
