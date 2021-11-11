import React, {useEffect} from "react";
import {connect} from "react-redux";
import {charactersAPI, episodesAPI} from "../../requests/requests";
import fetchAPI from "../../requests/fetcher";

import BasicCard from "../basicCard/BasicCard";
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import {Filter} from "../filter/Filter";

function TabPanel({value, index, dispatch, content, info, error, contentType, filters, API}) {
  useEffect(() => {
    fetchAPI(contentType, dispatch, API)
  }, [contentType, dispatch])

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
        <Box sx={{p: 3, display: "flex", flexFlow: 'wrap', justifyContent: 'space-around'}}>
          {
            (!error) ?
                content.map(res =>
                    <BasicCard key={res.id} data={res} type={contentType}/>
                ) :
                <Box>There is nothing here</Box>
          }
        </Box>
        <Box sx={{p: 5, pb: 10, display: 'flex', justifyContent: 'end'}}>
          <Pagination page={page}
                      count={info.pages}
                      onChange={handleChangePage}
                      showFirstButton
                      showLastButton/>
        </Box>
      </div>
  );
}

const mapStateToProps = (state, ownProps) => (
    (ownProps.contentType === 'characters') ?
        {
          content: state.charactersReducer,
          info: state.charactersInfoReducer,
          error: state.charactersErrorReducer,
          API: charactersAPI,
          filters: {
            name: '',
            status: ['alive', 'dead', 'unknown',''],
            species: '',
            type: '',
            gender: ['female', 'male', 'genderless', 'unknown','']
          }
        } :
        {
          content: state.episodesReducer,
          info: state.episodesInfoReducer,
          error: state.episodesErrorReducer,
          API: episodesAPI,
          filters: {
            name: '',
            episode: ''
          }
        }
)

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabPanel)
