import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import MediaCard from './card';
import MediaCardFlavor from './card/cardflavor';
import CloseIcon from '@mui/icons-material/Close';
import kit10 from '../../../assets/images/Kit_10.png';
import kit15 from '../../../assets/images/Kit_15.png';
import kit20 from '../../../assets/images/Kit_20.png';
import kit30 from '../../../assets/images/Kit_30.png';
import { flavorsPanel, modalStyle } from './index.style';
import { IFlavor } from './index.types';
import axios from 'axios';

const api = axios.create({ 
  baseURL: 'https://mais-fit-project-v2.herokuapp.com/',
})

export default function FlavorsModal() {

    // Flavors Modal State
    const [flavors, setFlavors] = React.useState<IFlavor[]>([])
    const [openFlavorsModal, setOpenFlavorsModal] = React.useState(false);
    const handleOpen = () => setOpenFlavorsModal(true);
    const handleClose = () => setOpenFlavorsModal(false);

    React.useEffect(() => {
        api.get('/lista').then(({data}) => {
            setFlavors(data)
        })
    })

    return (
        <div>
            <Box className="BoxKits">
                <div onClick={handleOpen} className="Kit"><MediaCard imagePath={kit10}/></div>
                <div onClick={handleOpen} className="Kit"><MediaCard imagePath={kit15}/></div>
                <div onClick={handleOpen} className="Kit"><MediaCard imagePath={kit20}/></div>
                <div onClick={handleOpen} className="Kit"><MediaCard imagePath={kit30}/></div>
            </Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openFlavorsModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
            <Fade in={openFlavorsModal}>
                <Box sx={modalStyle}>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flex: 1 }}>
                        <Button onClick={handleClose} className="CloseButton" variant="contained" disableElevation sx={{ borderRadius: '0 5px 0 5px'}}>
                            <CloseIcon />
                        </Button>
                    </Box>

                    <Box sx={flavorsPanel}>
                        { flavors.map((flavor: IFlavor) => (
                            <MediaCardFlavor key={flavor.id} imagePath={flavor.link} nameFlavor={flavor.nome} />
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
                        <Button sx={{ padding: '10px 30px'}}>Salvar</Button>
                    </Box>
                </Box>
            </Fade>
            </Modal>
        </div>
    );
}
