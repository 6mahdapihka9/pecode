import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from "react";
import {generateRandomID} from "../../helpers/generate.random.id";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const style1 = {
  maxHeight: 300,
  overflowY: 'auto'
}

export default function BasicModal({data, open, onClose}) {
  let [listOfEpisodes, setList] = useState([])

  useEffect(()=>{

    fetch(`https://rickandmortyapi.com/api/episode/${
      data.episode.map(eps => eps.split('/')[eps.split('/').length-1]).join(',')
    }`)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => {
          if (Array.isArray(res))
            setList([...res])
          else
            setList([res])
        })

    return setList([])
  },[open])

  return (
      <div>
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
              {data.name}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
              Gender: {data.gender}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="body2">
              Species: {data.species}
              <br/>
              Status: {data.status}
              <br/>
              Location: {data.location.name}
              <br/>
              Origin: {data.origin.name}
              <br/>
              Created: {(new Date(data.created)).toLocaleDateString()}
            </Typography>
            <Box id="modal-modal-description" sx={{ mt: 2, ...style1}} variant="body2">
              Episodes: {listOfEpisodes.length}
              <br/>
              <ul>
              {
                listOfEpisodes.map(eps => <li key={generateRandomID(10)}>[{eps.episode}] {eps.name}</li>)
              }
              </ul>
            </Box>
          </Box>
        </Modal>
      </div>
  );
}
