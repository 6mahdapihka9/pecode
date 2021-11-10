import Box from "@mui/material/Box";
import * as React from "react";
import {connect} from "react-redux";
import BasicCard from "../basicCard/BasicCard";
import {useEffect} from "react";
import {charactersAPI, episodesAPI} from "../../requests/requests";
import fetchAPI from "../../requests/fetcher";

import Pagination from '@mui/material/Pagination';


function TabPanel({ value, index, dispatch, content, info, contentType }) {
  useEffect(()=>{
    fetchAPI(contentType, dispatch, (contentType === 'characters')? charactersAPI : episodesAPI)
  },[contentType, dispatch])

  const [page, setPage] = React.useState(1);

  const handleChangePage = (event, newPage) => {
    fetchAPI(contentType, dispatch, ((contentType === 'characters')? charactersAPI : episodesAPI)+`?page=${newPage}`)
    setPage(newPage);
  };

  if (!Object.keys(content).length || !Object.keys(info).length)
    return null;

  return (
      <div hidden={value !== index}>
        <Box sx={{ p: 3, display: "flex", flexFlow: 'wrap', justifyContent: 'space-around' }}>
          {
            content.map(res =>
                <BasicCard key={res.id} data={res} type={contentType}/>
            )
          }
        </Box>
        <Box sx={{ p: 5 , pb: 10, display: 'flex', justifyContent: 'end'}}>
          <Pagination page={page}
                      count={info.pages}
                      onChange={handleChangePage}
                      showFirstButton
                      showLastButton/>
        </Box>
      </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  content: (ownProps.contentType === 'characters')?
      state.charactersReducer :
      state.episodesReducer,
  info: (ownProps.contentType === 'characters')?
          state.charactersInfoReducer :
          state.episodesInfoReducer
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabPanel)
