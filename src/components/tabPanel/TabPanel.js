import React, {useEffect} from "react";
import fetchAPI from "../../requests/fetcher";

import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import {Filter} from "../filter/Filter";
import EpisodesCard from "../episodesCard/EpisodesCard";
import CharactersCard from "../charactersCard/CharactersCard";

function TabPanel({value, index, dispatch, content, info, error, contentType, filters, API}) {
  useEffect(() => {
    fetchAPI(contentType, dispatch, API)
  }, [contentType, dispatch, API])

  const [page, setPage] = React.useState(1);
  const [filterString, setFilterString] = React.useState(``);

  const handleChangePage = (event, newPage = 1, filter = filterString) => {
    fetchAPI(
        contentType,
        dispatch,
        API + `?page=${newPage}` + filter
    )
    setPage(newPage);
  };

  if (!Object.keys(content).length || !Object.keys(info).length)
    return null;

  return (
      <div hidden={value !== index}>
        <Box>
          <Filter filters={filters} setFilterString={setFilterString} handleChangePage={handleChangePage}/>
        </Box>
        <Box sx={{p: 1, pr: 5, display: 'flex', flexFlow: 'wrap', justifyContent: 'end'}}>
          {
            (info)?
                <Box sx={{ ml: 3, mr: 3, display: 'flex',  alignItems: 'center' }}>
                    {info.count +' '+contentType}
                </Box>:
                null
          }
          <Pagination page={(!error)? page : 1}
                      count={(!error)? info.pages : 1}
                      onChange={handleChangePage}
                      showFirstButton
                      showLastButton/>
        </Box>
        <Box sx={{p: 3, display: "flex", flexFlow: 'wrap', justifyContent: 'space-around'}}>
          {
            (!error) ?
                content.map(res =>
                    (contentType === 'characters')?
                        <CharactersCard key={res.id} data={res} /> :
                        <EpisodesCard key={res.id} data={res} />
                ) :
                <Box>There is nothing here</Box>
          }
        </Box>
        <Box sx={{p: 5, pb: 10, display: 'flex', justifyContent: 'end'}}>
          <Pagination page={(!error)? page : 1}
                      count={(!error)? info.pages : 1}
                      onChange={handleChangePage}
                      showFirstButton
                      showLastButton/>
        </Box>
      </div>
  );
}
export default TabPanel
