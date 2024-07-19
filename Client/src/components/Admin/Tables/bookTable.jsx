



import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Delete from "../../Buttons/delete";
import { useEffect,useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'







const BookTable = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/books")
                setRows(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()


    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/admin/books?id=${id}`);

            if(response){
                setRows(rows.filter((row) => row._id !== id));
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <>
     <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 600}}>Sl.no</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Title</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Author</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Copies</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Status</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Actions</TableCell>
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
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right">{row.copies}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right"><Delete onDelete={() => handleDelete(row._id)}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    
    </>
  )
}

export default BookTable