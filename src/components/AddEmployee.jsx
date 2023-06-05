import React, {useState} from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
const AddEmployee = () => {
    var [inputs, setInputs] = useState({sname:'',age:'',pos:'',sal:''})
    const inputHandler = (e)=>{
        const {name,value}= e.target
        setInputs((inputs)=> ({...inputs,[name]:value}))
        console.log(inputs)
    }
  return (
    <div style = {{paddingTop:'100px'}}>
      <TextField name='sname' value={inputs.sname} label = 'Name' variant = 'outlined' onChange={inputHandler}/><br></br><br></br>
      <TextField name='age' value={inputs.age} label = 'Age' variant = 'outlined'onChange={inputHandler}/><br></br><br></br>
      <TextField name='pos' value={inputs.pos} label = 'Position' variant = 'outlined'onChange={inputHandler}/><br></br><br></br>    
      <TextField name='sal' value={inputs.sal} label = 'Salary' variant = 'outlined'onChange={inputHandler}/><br></br><br></br>
      <Button variant = 'outlined'>Submit</Button>
    </div>
  )
}

export default AddEmployee
