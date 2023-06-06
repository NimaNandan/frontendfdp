import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
    var [datas,setDatas] = useState(props.data);
    const navigate=useNavigate();
    const inputHandler = (e)=>{
        const {name,value}= e.target
        setDatas((datas)=> ({...datas,[name]:value}))
        console.log(datas)
    }
    const addHandler=()=>{
        console.log("clicked")
        if(props.method==='post'){
        axios.post("http://localhost:3005/new", datas)
        .then((reponse)=>{
            alert("Successfully added")
            navigate('/view');
        })
        .catch(err=>console.log(err))
    }
  if(props.method==='put'){
    axios.put("http://localhost:3005/edit/"+datas._id,datas)
    .then(response =>{
      alert("Updated successfully")
      window.location.reload(false);
    })
  }
}
  return (
    <div style = {{paddingTop:'100px'}}>
      <TextField name='sname' value={datas.sname}label = 'Name' variant = 'outlined' onChange={inputHandler} /><br></br><br></br>
      <TextField name='age' value={datas.age} label = 'Age' variant = 'outlined'onChange={inputHandler}/><br></br><br></br>
      <TextField name='pos' value={datas.pos} label = 'Position' variant = 'outlined'onChange={inputHandler}/><br></br><br></br>    
      <TextField name='sal' value={datas.sal} label = 'Salary' variant = 'outlined'onChange={inputHandler}/><br></br><br></br>
      <Button variant = 'outlined' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Add
