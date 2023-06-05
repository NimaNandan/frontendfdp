import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, {useState} from 'react'

const View = () => {
    var [pname, setPname] = useState("Nima");
    var [val,setVal] = useState()
    const changename =() =>{
        console.log("Clicked")
        setPname(val)
    }

    const inputHandler = (e) =>{
        console.log(e.target.value)
        setVal(e.target.value)

    }
  return (
    <div style = {{paddingTop:'70px'}}>
      {/* <h2>NCAS</h2>
      <Typography variant = 'h2'>NCAS</Typography>
      <input placeholder='Name'></input>
      <br></br><br></br>
      <TextField variant = 'outlined'></TextField>
      <br></br><br></br>
      <Button variant = 'outlined'>Submit</Button> */}

      <Typography variant ='h3'> Welcome {pname} </Typography>
      <br/>
      <TextField label = 'Name' onChange={inputHandler}/>
      <br/><br/>
      <Button variant = 'contained' onClick = {changename}>Change</Button>

    </div>
  )
}

export default View
