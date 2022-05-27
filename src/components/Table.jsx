// adapted from the website
// https://mui.com/pt/material-ui/react-tabs/

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const Table = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={ { width: '100%' } }>
      <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
        <Tabs value={ value } onChange={ handleChange } aria-label="basic tabs example">
          <Tab label="Item One" { ...a11yProps(0) } />
          <Tab label="Item Two" { ...a11yProps(1) } />
          <Tab label="Item Three" { ...a11yProps(2) } />
        </Tabs>
      </Box>
      <TabPanel value={ value } index={ 0 }>
        Item One
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        Item Two
      </TabPanel>
      <TabPanel value={ value } index={ 2 }>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default Table;
