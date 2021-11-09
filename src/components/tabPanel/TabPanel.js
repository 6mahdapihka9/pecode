import Box from "@mui/material/Box";
import * as React from "react";
import {connect} from "react-redux";
import BasicCard from "../basicCard/BasicCard";

function TabPanel({ value, index, dispatch, content, contentType }) {
  console.log(content);
  if (!content.results)
    return null;

  return (
      <div hidden={value !== index}>
        <Box sx={{ p: 3, display: "flex", flexFlow: 'wrap', justifyContent: 'space-around' }}>
          {
            content.results.map(res =>
                <BasicCard key={res.id} data={res} type={contentType}/>
            )
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
