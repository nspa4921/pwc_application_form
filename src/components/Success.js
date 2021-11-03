import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import logo from '../assets/pwc-logo-business.png'; 

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <Typography variant="h4" align="center">
              <img alt={logo} src={logo} style={{width: "180px", marginBottom: "-44px"}}/>
            </Typography> 
            <Typography align="center">
            <h1>Tak for din interesse!</h1>
            <p>Du vil modtage en e-mail med yderligere instruktioner. </p>
            </Typography>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;