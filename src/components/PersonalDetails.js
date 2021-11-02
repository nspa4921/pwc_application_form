import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import logo from '../assets/pwc-logo-business.png'; 
import Select from '@material-ui/core/Select';
import { FormControl, FormHelperText, MenuItem } from '@material-ui/core';
import BasicDateTimePicker from './DatePicker/datePicker';

export class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  

  render() {
    const { values, handleChange } = this.props;
    const coursedescription1 = <div> <b>Online kursus til Ruby on Rails</b> <br /><i style={{fontSize: "13px"}}>Grow your ruby on rails skills (from 15-30Nov)</i></div>;
    const coursedescription2 = <div> <b>Learning on databases </b> <br /> <i style ={{fontSize: "13px"}}>Learn Database Programming online. <br />Start today with a special offer. </i></div>;

    return (
      <MuiThemeProvider >
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
           <Typography variant="h4" align="center">
              <img alt={logo} src={logo} style={{width: "100px"}}/>
            </Typography> 
          <br />
          <br />
            <FormHelperText>Valg din arrangement</FormHelperText>
            <FormControl variant="standard" color="primary" label="Valg arrangement" >
            <Select 
              variant='outlined' 
              defaultValue={values.arrangement}
              onChange={handleChange('arrangement')}
              fullWidth>
                <MenuItem value={'Intro kursus til Ruby on Rails'}>
                  {coursedescription1}
                </MenuItem>
                <MenuItem value={'Learning on databases'}>
                   {coursedescription2}
                </MenuItem>
          </Select>
          </FormControl>
          <br />
          <BasicDateTimePicker />
          <br />
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
            >Fortsætte</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default PersonalDetails;