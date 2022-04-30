import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './card.css'

interface IMediaCard {
  imagePath: string
}

export default function MediaCard(props: IMediaCard) {
  const imagePath = props.imagePath
  return (
    <Card className='flavorCard' sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image={imagePath}
        alt="green iguana"
      />
    </Card>
  );
}
