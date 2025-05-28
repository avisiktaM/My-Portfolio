import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem, 
  Typography,
  Box,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:900px)');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" elevation={20} sx={{bgcolor: "#1e1e1e"}} >
      <Toolbar>
        {/* AM Logo */}
        <Typography 
          variant="h4" 
          component={Link} 
          to="/"
          sx={{ 
            textDecoration: 'none', 
            color: 'inherit',
            fontWeight: 'bold',
            letterSpacing: 1,
            mr: 2
          }}
        >
          AM
        </Typography>

        {/* Desktop Navigation - Centered */}
        {!isMobile && (
          <Box sx={{ 
            position: 'absolute', 
            left: '50%', 
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2
          }}>
            {navItems.map((item) => (
              <Button 
                key={item.label}
                color="inherit" 
                component={Link} 
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu - Aligned to end */}
        <Box sx={{ marginLeft: 'auto' }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.label}
                    component={Link} 
                    to={item.path} 
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            // Empty box for alignment on desktop
            <Box sx={{ width: 48 }} /> // Matches the hamburger icon width
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;