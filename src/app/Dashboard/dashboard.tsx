import React from 'react';
import './dashboard.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { mainListItems, secondaryListItems } from './listItems';
import Icon from '@material-ui/core/Icon';

// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';



const drawerWidth = 240;



export default function Dashboard() {
  
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div >
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
           <Icon>add_circle</Icon>
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
            <Icon>notifications</Icon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
           open={open}
      >
        <div >
          <IconButton onClick={handleDrawerClose}>
          <Icon>chevron_left</Icon>
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        {/* <Divider /> */}
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main >
        <div  />
        <Container maxWidth="lg" >
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper >
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper >
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper >
                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>
         
        </Container>
      </main>
    </div>
  );
}