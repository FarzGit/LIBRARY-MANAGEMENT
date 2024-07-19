
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import RequestHandleButton from "../../Buttons/requestHandleButton";
import AcceptedButton from "../../Buttons/acceptedButton";
import { toast } from "react-toastify";



const Request = () => {


    const [rows, setRows] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/request")
                setRows(response.data);
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchData()


    }, []);

        const handleAcceptButton = async(id)=>{

            try {
                const response = await axios.put(`http://localhost:5000/api/admin/accept-request?id=${id}`);
            if(response){
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
                            <TableCell>Sl.no</TableCell>
                            <TableCell align="right">User Email</TableCell>
                            <TableCell align="right">Book</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Actions</TableCell>

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
                                <TableCell align="right">{row.userEmail}</TableCell>
                                <TableCell align="right">{row.bookTitle}</TableCell>
                                <TableCell align="right">{row.bookAuthor}</TableCell>
                                <TableCell align="right">
                                    {row.status === 'accepted' ? (
                                        <AcceptedButton />
                                    ) : (
                                        <RequestHandleButton onAccept={()=>handleAcceptButton(row._id)} />
                                    )}

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Request