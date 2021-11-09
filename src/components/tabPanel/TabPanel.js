import Box from "@mui/material/Box";
import * as React from "react";
import {connect} from "react-redux";

function TabPanel({ children, value, index, dispatch, content, contentType}) {
  console.log(content)
  if (!content.results)
    return null;

  return (
      <div hidden={value !== index}>
        <Box sx={{ p: 3 }}>
          {
            content.results.map(res => (contentType === 'characters')?
                <div key={res.id}>{res.name}</div> :
                <div key={res.id}>{res.name}</div>)
          }
        </Box>
      </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  content: (ownProps.contentType === 'characters')?
      state.charactersReducer :
      state.episodesReducer
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabPanel)
