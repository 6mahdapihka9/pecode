import React from "react";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {generateRandomID} from "../../helpers/generate.random.id";

export function Filter({filters, setFilterString, handleChangePage}) {
  const [values, setValues] = React.useState({})

  function onChange(e){
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  function handleOnClear(){
    let emptyVal = values;
    Object.keys(emptyVal).forEach(k => emptyVal[k] = '')
    setValues({...values, ...emptyVal})

    setFilterString(``)
    handleChangePage(null, 1, ``)
  }

  function handleOnApply(){
    let str = ``
    for (let key in values)
      str += `&${key}=${values[key]}`

    setFilterString(str)
    handleChangePage(null, 1, str)
  }

  return (
      <Box>
        <Box sx={{pt: 3, pl: 3, pr: 3, display: "flex", flexDirection: 'row'}}>
        {
          Object.entries(filters).map(([key, val]) => Array.isArray(val) ?
              <FormControl
                  key={generateRandomID(10)}
                  sx={{width: 200, mr: 2}}>
                <InputLabel id="demo-simple-select-label">{key}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values[key]||''}
                    label={key}
                    onChange={onChange}
                    name={key}
                >
                  {
                    val.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)
                  }
                </Select>
              </FormControl>
              :
              <TextField id="outlined-basic"
                         sx={{width: 200, mr: 2}}
                         key={key}
                         label={key}
                         variant="outlined"
                         name={key}
                         value={values[key]||''}
                         onChange={onChange}
              />
          )
        }
        </Box>
        <Box sx={{p: 3, display: "flex", flexDirection: 'row'}}>
          <Button onClick={handleOnClear} sx={{ mr: 3 }}>Clear</Button>
          <Button onClick={handleOnApply} variant="outlined">Apply filter</Button>
        </Box>
      </Box>
  );
}
