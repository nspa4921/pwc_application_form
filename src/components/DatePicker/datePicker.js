import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function BasicDateTimePicker() {
  const [selecteddate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        label="Valg dato og tidspunkt"
        inputVariant="outlined"
        value={selecteddate}
        onChange={date => handleDateChange(date)} 
      />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;