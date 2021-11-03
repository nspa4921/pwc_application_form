import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from 'moment';


function BasicDateTimePicker() {
  const [selecteddate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        label="Valg dato og tidspunkt"
        inputVariant="outlined"
        value={selecteddate}
        onChange={date => handleDateChange(date)}
        formatDate={(date) => moment(new Date()).format('MM-DD-YYYY')}      />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;