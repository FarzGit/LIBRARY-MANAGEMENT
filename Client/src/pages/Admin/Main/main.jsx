
import { Typography, Box, Container, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useState } from "react";
import BookTable from "../../../components/Admin/Tables/bookTable";
import AddFrom from "../../../components/Admin/Forms/addFrom";
import UsersList from "../../../components/Admin/Tables/usersList";
import Request from "../../../components/Admin/Tables/request";
import AdminNavbar from "../../../components/Admin/adminNavbar";
import UserSideBar from '../../../components/SideBar/userSideBar';
import { FaHome } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa6";



const AdminMain = () => {
    const options = [
         { id: 1, title: <UserSideBar icon={<FaHome />} heading={'Home'}/>, mainHeading: 'All Books', content: <BookTable /> },
         { id: 2, title: <UserSideBar icon={<BiBookAdd  />} heading={'Add Books'}/>, mainHeading: 'Add New Book', content: <AddFrom /> },
         { id: 3, title: <UserSideBar icon={<VscGitPullRequestGoToChanges  />} heading={'Books Requests'}/>, mainHeading: 'Request From Clients', content: <Request /> },
         { id: 3, title: <UserSideBar icon={<FaUsers   />} heading={'Users'}/>, mainHeading: 'Users List', content: <UsersList /> },

     ];
     const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
   <>
   
            <AdminNavbar />
            <Container maxWidth={false} sx={{ marginLeft: 0, marginRight: 0, padding: 0, width: '100%' }}>
                <Box display="flex" p={2} sx={{
                    height: '90vh',
                    width: '100%',
                    flexDirection: { xs: 'column', sm: 'row' }
                }}>
                    <Paper sx={{ width: { xs: '100%', sm: '20%' }, height: { xs: 'auto', sm: '100%' }, marginRight: { sm: 2 }, overflow: 'auto' }}>
                    <List  sx={{ width: '100%' }}>
                        {options.map((option) => (
                            <ListItem 
                                button 
                                key={option.id} 
                                onClick={() => setSelectedOption(option)} 
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                                <ListItemText primary={option.title} />
                            </ListItem>
                        ))}
                    </List>
                    </Paper>
                    <Paper sx={{ width: { xs: '100%', sm: '80%' }, height: '100%', padding: 2, overflow: 'auto' }}>
                        <Typography display="flex" justifyContent="center" paddingBottom={4} variant="h6" sx={{ fontWeight: 600 }} >{selectedOption.mainHeading}</Typography>
                        <Typography>{selectedOption.content}</Typography>
                    </Paper>
                </Box>
            </Container>
   
   </>
  )
}

export default AdminMain