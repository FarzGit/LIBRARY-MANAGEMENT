import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../utils/authorization";
import ReturnButton from "../Buttons/returnButton";
import { toast } from 'react-toastify'



const IssuedBookes = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("http://localhost:5000/api/users/issued_book")
                setRows(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, []);


    const handleReturn = async (id) => {
        try {
            const response = await api.post(`/return?id=${id}`)
            console.log(response);
            if (response) {
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }


    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 600}}>Sl.no</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Title</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Author</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Status</TableCell>
                            <TableCell align="right" sx={{fontWeight: 600}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="right">{row.bookTitle}</TableCell>
                                <TableCell align="right">{row.bookAuthor}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">

                                    <ReturnButton onReturn={() => handleReturn(row.bookId)} />

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default IssuedBookes