import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PanelMiddleware from "../tabPanel/PanelMiddleware";


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs sx={{ pt: 3, pl: 3, pr: 3 }} value={value} onChange={handleChange}>
            <Tab label="Characters" />
            <Tab label="Episodes" />
          </Tabs>
        </Box>
        <PanelMiddleware value={value} index={0} contentType={'characters'}/>
        <PanelMiddleware value={value} index={1} contentType={'episodes'}/>
      </Box>
  );
}
