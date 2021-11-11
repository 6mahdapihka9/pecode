import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function EpisodesCard({data}) {
  return (
      <Card sx={{ m:1.5, width: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.episode}
            <br/>
            Air date: {data.air_date}
          </Typography>
        </CardContent>
      </Card>
  );
}
