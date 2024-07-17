import { useState } from 'react';
import { Typography, Box, Container, List, ListItem, ListItemText, Paper } from '@mui/material';
import Navbar from '../../../components/navbar';

const options = [
    { id: 1, title: 'Option 1', content: 'This is the content for option 1.' },
    { id: 2, title: 'Option 2', content: 'This is the content for option 2.' },
    { id: 3, title: 'Option 3', content: 'This is the content for option 3.' },
];

const Home = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <>
            <Navbar />
            <Container maxWidth={false} sx={{ marginLeft: 0, marginRight: 0, padding: 0, width: '100%' }}>
                <Box display="flex" p={2} sx={{ height: '100vh', width: '100%', }}>
                    <Paper sx={{ width: '20%', height: '100%', marginRight: 2, overflow: 'auto' }}>
                        <List>
                            {options.map((option) => (
                                <ListItem button key={option.id} onClick={() => setSelectedOption(option)}>
                                    <ListItemText primary={option.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                    <Paper sx={{ width: '80%', height: '100%', padding: 2, overflow: 'auto' }}>
                        <Typography variant="h6">{selectedOption.title}</Typography>
                        <Typography>{selectedOption.content}</Typography>
                    </Paper>
                </Box>
            </Container>
        </>
    );
}

export default Home;
