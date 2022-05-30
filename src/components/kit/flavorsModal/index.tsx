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

    const currentKitAlreadyExist = localStorage.getItem("currentKit")
    if (!currentKitAlreadyExist) {
        localStorage.setItem("currentKit", JSON.stringify({
            limit: 10,
            count: 0,
            flavors: []
        }))
    }

    const kitsAlreadyExist = localStorage.getItem("kits")
    if(!kitsAlreadyExist){
        localStorage.setItem("kits", JSON.stringify({
            "kits": []
        }))
    }

    // const [session, setSession] = React.useState()
    // const [generalCounter, setGeneralCounter] = React.useState<number>(0)

    // Flavors Modal State
    const [flavors, setFlavors] = React.useState<IFlavor[]>([])
    const [openFlavorsModal, setOpenFlavorsModal] = React.useState(false);
    const handleOpen = () => setOpenFlavorsModal(true);
    const handleClose = () => setOpenFlavorsModal(false);

    // Rever esse negócio
    const [limit, setLimit] = React.useState<number>(0)
    const [currentKit, setCurrentKit] = React.useState<string>()
    const OpenModalAndSetlimit10 = () => { setLimit(10), setCurrentKit('kit10'), handleOpen() }
    const OpenModalAndSetlimit15 = () => { setLimit(15), setCurrentKit('kit15'), handleOpen() }
    const OpenModalAndSetlimit20 = () => { setLimit(20), setCurrentKit('kit20'), handleOpen() }
    const OpenModalAndSetlimit30 = () => { setLimit(30), setCurrentKit('kit30'), handleOpen() }

    React.useEffect(() => {
        api.get('/lista').then(({data}) => {
            setFlavors(data)
        })
    }, []) // passando um array para que o efeito só seja executado inicialmente, evitando loop de requisições.

    return (
        <div>
            <Box className="BoxKits">
                <div onClick={OpenModalAndSetlimit10} className="Kit"><MediaCard imagePath={kit10}/></div>
                <div onClick={OpenModalAndSetlimit15} className="Kit"><MediaCard imagePath={kit15}/></div>
                <div onClick={OpenModalAndSetlimit20} className="Kit"><MediaCard imagePath={kit20}/></div>
                <div onClick={OpenModalAndSetlimit30} className="Kit"><MediaCard imagePath={kit30}/></div>
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
                            <MediaCardFlavor 
                                key={flavor.id} 
                                imagePath={flavor.link} 
                                nameFlavor={flavor.nome}
                                limit={limit}
                                currentKit={currentKit}
                                flavor={flavor} 
                            />
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
