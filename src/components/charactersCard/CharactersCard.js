import React, {useState} from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";
import BasicModal from "../modal/BasicModal";


export default function CharactersCard({data}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Card sx={{m: 1.5, width: 300}}>
        <CardContent>
          <CardMedia
              component="img"
              // height="194"
              image={data.image}
              alt={data.name + ' image'}
          />
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography sx={{mb: 1.5}} color="text.secondary">
            Gender: {data.gender}
          </Typography>
          <Typography variant="body2">
            Species: {data.species}
            <br/>
            Status: {data.status}
            <br/>
            Location: {data.location.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>Details</Button>
        </CardActions>
        <BasicModal data={data} open={open} onClose={handleClose}/>
      </Card>
  )

}
