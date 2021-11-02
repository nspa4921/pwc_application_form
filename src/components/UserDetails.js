import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../assets/pwc-logo-business.png'; 



export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <img src={logo} style={{width: "100px"}}/>
            <TextField
              placeholder="Sriv dit Fornavn"
              label="Fornavn "
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Sriv dit Efternavn"
              label="Efternavn"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Indtast din e-mailadresse"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Fortsætte</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default UserDetails;