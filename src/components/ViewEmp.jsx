import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Add from './Add';


const ViewEmp = () => {
var [employees, setEmployees]=useState([]);
var [oneValue, setOneValue] = useState([]);
var [ edit,setEdit]=useState(false);

useEffect(()=>{
  axios.get("http://localhost:3005/view")
  .then(response =>{
    console.log(response.data)
    setEmployees(response.data)
  })
  .catch(err=>console.log(err))
},[])
const deletevalues= (id)=>{
 
  console.log("delete Clicked",id)
  axios.delete("http://localhost:3005/remove/"+id)
  .then(response=>{
    alert("Data deleted");
    window.location.reload(false);

  })
}

const editvalues= (value)=>{
 
  console.log("edit Clicked",value)
  setOneValue(value);
  setEdit(true);

  // })
}




var finalJSX = <TableContainer  style = {{paddingTop:'100px'}}>
<Table>

    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Salary</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
      {employees.map((value,index)=>{
        return(
          <TableRow key={index}>
            <TableCell>{value.sname}</TableCell>
            <TableCell>{value.age}</TableCell>
            <TableCell>{value.pos}</TableCell>
            <TableCell>{value.sal}</TableCell>
            <TableCell>
            <DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/>
            </TableCell>
            <TableCell>
              <EditIcon color = 'success'onClick={()=>editvalues(value)}></EditIcon>
            </TableCell>
          </TableRow>
        )
      })}

    </TableBody>

</Table>
</TableContainer> 

if(edit)
finalJSX= <Add data ={oneValue} method = 'put'/>
  return ( 
   
      finalJSX
  
  )
}

export default ViewEmp
