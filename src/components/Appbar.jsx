import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useRef, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));




  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));




  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Appbar = () => {

  


  const [showmobilemenu, setshowmobilemenu] = useState(false);
  const refmenuemobile = useRef()



  const [showmenubigscreen, setshowmenubigscreen] = useState(false);
  const refmenubigscreen = useRef()
  


  const renderMenu = (
    <Menu
      anchorEl={refmenubigscreen.current}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      
     
      open={showmenubigscreen}
      onClose={() => {
        setshowmenubigscreen(false)
        
      }
      }
    >
      <MenuItem onClick={() => {
        setshowmenubigscreen(false)
        
      }
      }>Profile</MenuItem>
      <MenuItem onClick={() => {
        setshowmenubigscreen(false)
        
      }
      }>My account</MenuItem>
    </Menu>
  );


  const rendermobilemenu  = (
    <Menu
      anchorEl={refmenuemobile.current}
      
      
      
   
      open={showmobilemenu}
      onClose={() => {
        setshowmobilemenu(false)
        
      }
      }
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem 
      onClick={() => {
        setshowmobilemenu(false)
        
      }
      }
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>


  )


    return (
      
          <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              SOCIAL
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
        
              ref={refmenuemobile}
        
                size="large"
                edge="end"
                aria-label="account of current user"
              
                aria-haspopup="true"
                onClick={() => {
                  setshowmenubigscreen(!showmenubigscreen)
                  
                }
                }
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
        
        
            
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
              ref={refmenuemobile}
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                onClick={() => {
                  setshowmobilemenu(!showmobilemenu)
                  
                }
                }
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
          {rendermobilemenu}
        {renderMenu}
      
        </AppBar>
     

      
    );
}

export default Appbar;
