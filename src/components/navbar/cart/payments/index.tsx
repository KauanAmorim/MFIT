import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import '../../../kit/flavorsModal/card/card.css'

interface IPayments {
    imagePath: string
    nameFlavor: string
}

export function Payments(props: IPayments) {
    const { imagePath, nameFlavor } = props

    return (
        <React.Fragment>
            <Card className='flavorCard' sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="100px"
                    image={imagePath}
                    alt="Método de pagamento"
                />
                <div className='flavorName'>{nameFlavor}</div>
            </Card>
        </React.Fragment>
    );
}
