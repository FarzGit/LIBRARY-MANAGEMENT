
import { AppBar, Toolbar, Typography } from '@mui/material';



const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ backgroundColor: '#fff' }}>
          <Typography variant="h6" sx={{ color: '#000', fontWeight: 700 }}>
            LIBRARY MANAGEMENT SYSTEM
          </Typography>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar