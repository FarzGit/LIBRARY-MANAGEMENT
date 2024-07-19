



import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Delete from "../../Buttons/delete";
import { useEffect,useState } from "react";
import axios from "axios";


// function createData(SlNo, Title, Author, Copies, Status,Action) {
//     return { SlNo, Title, Author, Copies, Status,Action };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0,<Delete />),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3,<Delete/>),

// ];





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


  return (
    <>
     <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sl.no</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Copies</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
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
                                <TableCell align="right"><Delete/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    
    </>
  )
}

export default BookTable