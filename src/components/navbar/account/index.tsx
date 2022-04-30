import React from "react";
import { Backdrop, Box, Fade, IconButton, Modal, Tab, Tabs, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { accountTabs, boxModal } from "./index.style";
import { TabPanelProps } from "./index.types";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

export function AccountButton() {

    const [openAccountModal, setOpenAccountModal] = React.useState(false);
    const handleOpen = () => setOpenAccountModal(true);
    const handleClose = () => setOpenAccountModal(false);

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
        <React.Fragment>

            {/* Account Button */}
            <IconButton
                color="inherit" 
                aria-label='Account'
                onClick={handleOpen}
            >
                <AccountCircleIcon />
            </IconButton>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openAccountModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openAccountModal}>
                    <Box sx={boxModal}>

                        {/* Panels Tabs */}
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

                        {/* Panels Content */}
                        <TabPanel value={value} index={0}>
                            <SignIn />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <SignUp />
                        </TabPanel>
                    </Box>
                </Fade>
            </Modal>

        </React.Fragment>
    )
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