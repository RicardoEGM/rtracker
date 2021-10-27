import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const drawerWidth = 240;

export default function Navbar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        STracker
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <Link to="/FormDynamic/">
                            <ListItem button key={`ListItem-${0}`}>
                                <ListItemIcon>
                                    <DynamicFormIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Form"} />
                            </ListItem>
                        </Link>
                        <Link to="/FormDynamic/">
                            <ListItem button key={`ListItem-${1}`}>
                                <ListItemIcon>
                                    <DesignServicesIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Design"} />
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer >
            <Box component="main" sx={{ display: 'grid', marginLeft: 2, marginTop: 9 }} >
                <Outlet />
            </Box>
        </Box >
    );
}