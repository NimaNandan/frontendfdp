import React, { useEffect, useState } from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import axios from 'axios';


const Home = () => {
    var [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response)
            setUsers(response.data)
    })
    .catch(err=> console.log(err))

    },[])
    
  return (
    <div style = {{paddingTop:'100px'}}>
        
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Age
                    </TableCell>
                    <TableCell>
                        Position
                    </TableCell>
                    <TableCell>
                        Salary
                    </TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.username}</TableCell>
                            <TableCell>{value.email}</TableCell>
                            <TableCell>{value.phone}</TableCell>
                            <TableCell>{value.website}</TableCell>
                        </TableRow>
                    )
                })}

            </TableBody>

        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
