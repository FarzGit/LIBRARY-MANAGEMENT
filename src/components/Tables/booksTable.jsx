import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import ActionsButton from "../Buttons/actionsButton";



function createData(SlNo, Title, Author, Copies, Status,Action) {
    return { SlNo, Title, Author, Copies, Status,Action };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0,<ActionsButton/>),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3,<ActionsButton/>),

];



const BooksTable = () => {
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.SlNo}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.SlNo}
                                </TableCell>
                                <TableCell align="right">{row.Title}</TableCell>
                                <TableCell align="right">{row.Author}</TableCell>
                                <TableCell align="right">{row.Copies}</TableCell>
                                <TableCell align="right">{row.Status}</TableCell>
                                <TableCell align="right">{row.Action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default BooksTable