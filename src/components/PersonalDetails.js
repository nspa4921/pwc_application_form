import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../assets/pwc-logo-business.png'; 
import Select from '@material-ui/core/Select';
import { FormControl, FormHelperText, MenuItem, Input } from '@material-ui/core';
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
    const coursedescription1 = <div style={{color: "blue"}}> &nbsp; <i>Grow your ruby on rails skills (from 15-30Nov)</i></div>;
    const coursedescription2 = <div style={{color: "blue"}}> &nbsp; Learn Database Programming online at your own pace. Start today with a special offer.</div>;

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
          <br />
          <br />
            <FormHelperText>Valg din arrangement</FormHelperText>
            <FormControl variant="standard" color="primary" label="Valg arrangement" >
              {/* <InputLabel > Valg din arrangement</InputLabel> */}
            <Select 
              variant='outlined' 
              defaultValue={values.selector}
              onChange={handleChange('selector')}
              fullWidth>
                <MenuItem defaultValue={values.selector} onChange={handleChange('selector')} value={'Intro kursus til Ruby on Rails'}>
                  Intro kursus til Ruby on Rails 
                  <i><p>{coursedescription1}</p></i>
                </MenuItem>
                <MenuItem defaultValue={values.selector} onChange={handleChange('selector')} value={'Learning on databases'}>
                  Learning on databases 
                  <i><p>{coursedescription2}</p></i>
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