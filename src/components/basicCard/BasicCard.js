import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";


export default function BasicCard({data, type}) {
  if (type === 'characters')
    return (
        <Card sx={{ m:1.5, width: 300 }}>
          <CardContent>
            <CardMedia
                component="img"
                // height="194"
                image={data.image}
                alt={data.name+' image'}
            />
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Gender: {data.gender}
            </Typography>
            <Typography variant="body2">
              Species: {data.species}
              <br />
              Status: {data.status}
              <br/>
              Location: {data.location.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    )
  else
    return (
        <Card sx={{ m:1.5, width: 300 }}>
          <CardContent>
            {/*<CardMedia*/}
            {/*    component="img"*/}
            {/*    image={data.image}*/}
            {/*    alt={data.name+' image'}*/}
            {/*/>*/}
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data.episode}
              <br/>
              Air date: {data.air_date}
            </Typography>
            <Typography variant="body2">
              {/*Species: {data.species}*/}
              {/*<br />*/}
              {/*Status: {data.status}*/}
              {/*<br/>*/}
              {/*Location: {data.location.name}*/}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    );
}
