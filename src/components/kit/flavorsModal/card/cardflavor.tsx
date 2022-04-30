import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './card.css'

interface IMediaCard {
  imagePath: string
  nameFlavor: string
}

export default function MediaCardFlavor(props: IMediaCard) {
  const {imagePath, nameFlavor} = props
  
  return (
    <Card className='flavorCard' sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image={imagePath}
        alt="green iguana"
      />
      <div className='flavorName'>{nameFlavor}</div>
    </Card>
  );
}
