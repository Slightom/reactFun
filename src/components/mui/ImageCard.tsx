import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import iguana from '../../assets/images/iguana.jpg'
import { Fab, Grid, Paper } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { isArrowFunction } from 'typescript';
import Notes from './Notes';

export default function ImageCard() {
    const [width, height] = useWindowSize();

    const displaySize = (w: number): string => {
        if (w < 600) return 'xs';
        if (w < 900) return 'sm';
        if (w < 1200) return 'md';
        if (w < 1536) return 'lg';
        else return 'xl';
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Notes />
        </div>
    );
}


const MyCard = (title: string) => {
    return (
        <Card sx={{ maxWidth: 500, m: '10px auto' }}>
            <CardMedia
                component="img"
                height="240"
                image={iguana}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Fab size='small' variant='extended' color='primary'>Share</Fab>
                <Fab size='small' variant='extended' color='secondary'>Learn More</Fab>
            </CardActions>
        </Card>
    )
}

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}



{/* <Grid
                container
                spacing={12}
                justifyContent='center'
                alignItems='center'
                direction='row'>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper>3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper>4</Paper>
                </Grid>
            </Grid>
            <h1>{displaySize(width)}</h1>
            <h1>{width}</h1> */}