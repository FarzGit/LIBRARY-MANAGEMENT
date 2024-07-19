
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect,useState } from "react";
import axios from "axios";



const UsersList = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/users")
                setRows(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()


    }, []);




  return (
    <>
    <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sl.no</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">User Email</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row,index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                {index + 1}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    
    
    </>
  )
}

export default UsersList