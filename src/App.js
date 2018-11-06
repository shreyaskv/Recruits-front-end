import React, { Component } from 'react';
import logo from './invisible-person-of-clothes.svg';
import './App.css';
import Set1 from './Set1'; 
import Set2 from './Set2';
import Set3 from './Set3'; 
import Typing from 'react-typing-animation';
import PropTypes from 'prop-types';
import classes from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const origin = window.location.origin

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class App extends Component {

  state = {
    set: 6,
    namee: "",
    contact: ""
  }

  setSet = (number) => {
    if(number === 4) console.log(this.state);
    this.setState({
      set: number
    })
  }

  handleChange = (event) => {
    this.setState({namee: event.target.value});
  }

  handleChange1 = (event) => {
    this.setState({contact: event.target.value});
  }

  

  sub = () => {
    fetch('http://localhost:4000/sendName', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
	    "Access-Control-Allow-Origin": "*",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({"namee": this.state.namee, "contact": this.state.contact}), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
  }

  render() {
	const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.set === 6 ?

          <Set6 handleChange={this.handleChange} setSet={this.setSet} name={this.state.name} />
            
          : this.state.set === 1 ? 
          
          <Set1 setSet={this.setSet}/>

          : this.state.set === 2 ? 

          <Set2 setSet={this.setSet}/>
        
          : this.state.set === 3 ? 

          <Set3 setSet={this.setSet}/>

          : this.state.set === 4 ?

          <Set4 handleChange1={this.handleChange1} sub={this.sub}/>

          : 
          
          <Set5 />
          }
        </header>
      </div>
    );
  }
}

const Set4 = (props) => (
<div>
  <Typing>
    <p>Welcome</p>
  </Typing>
	  <form onSubmit={() => props.sub()}>
    <label>
      <p>Enter your phone number</p> 
      <TextField classes
	  className={classes.textField}
          id="outlined-error"
          label="contact"
          defaultValue="Contact"
          onChange={props.handleChange1}
          className={classes.textField}
          margin="normal"
          variant="outlined"
      />
    </label>
  </form>
</div>

)

const Set5 = () => (
  <Typing>
    <p>Thank You</p>
  </Typing>
)

const Set6 = (props) => (
  <form onSubmit={() => props.setSet(1)}>
    <label>
      <p>Enter your name</p> 
      <TextField classes
	  className={classes.textField}
          id="outlined-error"
          label="namee"
          defaultValue="Name"
          className={classes.textField}
	  onChange={props.handleChange}
          margin="normal"
          variant="outlined"
      />
    </label>
  </form>
)

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
