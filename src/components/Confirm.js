import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import logo from '../assets/pwc-logo-business.png'; 


export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, selecteddate, mobileNumber }
    } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <Typography variant="h4" align="center">
              <img src={logo} style={{width: "100px"}}/>
            </Typography> 
            <List>
              <ListItem>
                <ListItemText primary="Fornavn" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Efternavn" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="E-mailadresse" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Din valgt dato og tidspunkt" secondary={selecteddate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telefon nummer" secondary={mobileNumber} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Tilbage</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Bekræft & Fortsæt</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;