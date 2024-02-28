
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Logout'];

const Header = (props) => {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}
         style={{userSelect:'none'}}
      >
        Blog Hub
      </Typography>
      <Divider />
      <Box style={{
              display: 'flex',
              flexDirection:'column'
              
      }}>
      <Link style={{textDecoration:'none' , padding:'20px' , color: '#000'}} to='/'> Home </Link>
                 <Link style={{textDecoration:'none' , padding:'20px' , color: '#000'}} to='/about'>About</Link>
                 
              <Link style={{ textDecoration: 'none', padding: '20px', color: '#000' }} to='/contact'>Contact</Link>
                 <Link style={{textDecoration:'none' , padding:'20px' , color: '#000'}} to='/account'>Logout</Link>
      
        
          </Box>
   
   
    
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    
  const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              style={{userSelect:'none'}}
            >
              Blog Hub
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                 <Link style={{textDecoration:'none' , padding:'20px' , color: '#fff'}} to='/'> Home </Link>
                 <Link style={{textDecoration:'none' , padding:'20px' , color: '#fff'}} to='/about'>About</Link>
                 <Link style={{textDecoration:'none' , padding:'20px' , color: '#fff'}} to='/contact'>Contact</Link>
                 <Link style={{textDecoration:'none' , padding:'20px' , color: '#fff'}} to='/account'>Logout</Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        
      </Box>
    
        // <Component>
        //     <Container>
        //         <Link to='/'>HOME</Link>
        //         <Link to='/about'>ABOUT</Link>
        //         <Link to='/contact'>CONTACT</Link>
        //         <Link to='/account'>LOGOUT</Link>
        //     </Container>
        // </Component>
    )
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;