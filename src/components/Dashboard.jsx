import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';
import themes from './themes.jsx';
import logo from '../assets/logo.svg';
import {Avatar, Button, Stack, Text} from "@chakra-ui/react";
import pana from '../assets/pana.svg';
import user from '../assets/avatar.svg';
import {DemoItem} from "@mui/x-date-pickers/internals/demo/index.js";
import {DateCalendar} from "@mui/x-date-pickers";
import help from  "../assets/help.svg"
import {Link as ReactLink} from "react-router-dom";
import {Menu, MenuItem, Tooltip} from "@mui/material";
import {ExpandLess} from "@mui/icons-material";


const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const themeStyle = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                        backgroundColor: "#00C795",
                },
            },
        },
    },
});


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const Dashboard = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={themes}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} color="waveBgGreen">
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="waveWhite"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            {/*Dashboard*/}
                        </Typography>
                        <Stack direction="row">
                            <Divider orientation="vertical" color="waveWhite"/>
                                <IconButton color="waveWhite">
                                    <Badge badgeContent={4} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            <Divider orientation="vertical"/>
                            <Stack display={{md: "block", base: "none"}}>
                                <Text color="#FFF"  textAlign="end" fontFamily="Inter" fontSize={{base: "12px", md:"18px"}} fontStyle="normal" fontWeight="700" lineHeight="normal">Adekunle Adebona</Text>
                                <Text color="#FFF"  fontFamily="Inter" fontSize="11px" fontStyle="normal" fontWeight="500" lineHeight="normal">Adekunle.adebona@creditwaveng.com</Text>
                            </Stack>
                            <Stack>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar src={user} sx={{ width: "48px", height: "48px" }} />
                                            {openMenu ? <ExpandLess style={{color: "white"}}/> : <ExpandMoreIcon style={{color: "white"}}/>}
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMenu}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        Profile
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                         Settings
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            px: [4],
                        }}
                    >
                        <div onClick={toggleDrawer}>
                            <img src={logo} style={{width: "109px", height: "32px", cursor: "pointer"}}/>
                            {/*<IconButton>*/}
                            {/*    <ChevronLeftIcon />*/}
                            {/*</IconButton>*/}
                        </div>
                    </Toolbar>
                    <List component="nav">
                        {mainListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9} sx={{background: "waveGreen"}}>
                                <ThemeProvider theme={themeStyle}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 290,
                                        }}
                                    >
                                        <Stack direction={{md: "row", base: "column"}} justifyContent={{md: "space-between"}} p={{base:"10px", md:"40px"}}>
                                            <Stack>
                                                <Text color="#FFF"  textAlign="center" fontFamily="Inter" fontSize="28px" fontStyle="normal" fontWeight="700" lineHeight="21.6px">Welcome back Kenny!</Text>
                                                <Text color="#FFF"  fontFamily="Inter" fontSize="11px" fontStyle="normal" fontWeight="500" lineHeight="21.6px">Your last login was 12:00pm 09 Jul, 2023</Text>
                                            </Stack>
                                            <Stack p={{base: "20px 0", md: 0}}>
                                                <img src={pana}/>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                </ThemeProvider>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 290,
                                    }}
                                >
                                    <Stack direction="column" justifyContent="center" alignItems="center">
                                        <Avatar src={user} boxSize="186px" />
                                        <Text color="#343434" textAlign="center" fontFamily="Inter" fontSize="16px" fontStyle="normal" fontWeight="700" lineHeight="normal">Adekunle Adebona</Text>
                                        <Text color="#343434" textAlign="center" fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal">UI/UX Designer</Text>
                                    </Stack>
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 580,
                                }}>
                                    <Stack>
                                        <Stack direction="row" justifyContent="space-between" p={{md:"20px", base: "15px"}}>
                                            <Text color="#343434" textAlign="center" fontFamily="Inter" fontSize="18px" fontStyle="normal" fontWeight="600" lineHeight="normal">Application</Text>
                                            <Text color="#00C796" textAlign="center" fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="700" lineHeight="normal">See more</Text>
                                        </Stack>
                                    </Stack>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        padding: "0 8px",
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Stack direction="column" justifyContent="center" alignItems="center">
                                        <DemoItem>
                                            <DateCalendar views={['day']} />
                                        </DemoItem>
                                    </Stack>
                                </Paper>
                                <Paper
                                    sx={{
                                        marginTop: "20px",
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 260,
                                    }}
                                >
                                    <Stack direction="column" justifyContent="center" alignItems="center">
                                        <img src={help}/>
                                        <Text color="#343434" textAlign="center" fontFamily="Inter" fontSize="16px" fontStyle="normal" fontWeight="700" lineHeight="normal">Need help?</Text>
                                        <Text color="#343434" textAlign="center" fontFamily="Inter" fontSize="12px" fontStyle="normal" fontWeight="500" lineHeight="normal">Do you have any problem while using the Creditwave SSO?</Text>
                                        <Button variant="primary" bgColor="#00C795" size='md' as={ReactLink} w="149px" p="5px">
                                            <Text color="white" fontSize="12px" fontFamily="Inter" fontStyle="normal" fontWeight="600">Contact Us Now</Text>
                                        </Button>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Dashboard;