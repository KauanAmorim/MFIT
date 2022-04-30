import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Backdrop, Box, Container, CssBaseline, Fade, IconButton, Modal } from "@mui/material";
import { boxModal } from "../account/index.style";
import { Payments } from "./payments";
import boleto from '../../../assets/images/boleto.png'
import cartao from '../../../assets/images/cartao.png'
import dinheiro from '../../../assets/images/dinheiro.png'
import link from '../../../assets/images/link.png'
import pix from '../../../assets/images/pix.png'
import refeicao from '../../../assets/images/refeicao.png'
import tranferencia from '../../../assets/images/transferencia.png'
import axios from "axios";

interface IPayments {
    id: number,
    descricao: string,
    link: string
}

const api = axios.create({ 
    baseURL: 'https://mais-fit-project-v2.herokuapp.com/',
})

export function CartButton() {

    const [payments, setPayments] = React.useState<IPayments[]>([])
    React.useEffect(() => {
        api.get('/formapagamento').then(({data}) => {
            setPayments(data)
        })
    })

    const [openCartModal, setOpenCartModal] = React.useState(false);
    const handleOpen = () => setOpenCartModal(true);
    const handleClose = () => setOpenCartModal(false);
    
    return (
        <React.Fragment>
            <IconButton
                color="inherit" 
                aria-label='Cart'
                onClick={handleOpen}
            >
                <ShoppingCartIcon />
            </IconButton>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openCartModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openCartModal}>
                    <Box sx={boxModal}>
                        <Container component="main">
                            <CssBaseline />
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                { payments.map((payment: IPayments) => (
                                    <Payments key={payment.id} nameFlavor={payment.descricao} imagePath={payment.link} />
                                ))}
                            </Box>
                        </Container>
                    </Box>
                </Fade>
            </Modal>
        </React.Fragment>    
    )
}