import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css';
import React from 'react';
import { Backdrop, CssBaseline, Fade, Modal, Tab, Tabs } from '@mui/material';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  borderRadius: '10px'
};

const accountTabs = {
  p: '12px 80px'
}
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='navbar'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>MFIT</Typography>
          <IconButton 
            color="inherit" 
            aria-label='Account'
            onClick={handleOpen}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab sx={accountTabs} label="Entrar" {...a11yProps(0)} />
              <Tab sx={accountTabs} label="Cadastrar" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <SignIn />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp />
            </TabPanel>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
