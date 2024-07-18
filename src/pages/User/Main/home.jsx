import { useState } from 'react';
import { Typography, Box, Container, List, ListItem, ListItemText, Paper } from '@mui/material';
import Navbar from '../../../components/navbar';
import BooksTable from '../../../components/Tables/booksTable';
import UserProfile from '../../../components/userProfile';
import IssuedBookes from '../../../components/Tables/issuedBookes';


const Home = () => {
    const options = [
        { id: 1, title: 'Home', mainHeading: 'User Profile', content: <UserProfile /> },
        { id: 2, title: 'Books', mainHeading: 'All Books', content: <BooksTable /> },
        { id: 3, title: 'Issued Books', mainHeading: 'Currently Issued Books', content: <IssuedBookes /> },
    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <>
            <Navbar />
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
    );
}

export default Home;
