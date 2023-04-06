import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EditProfile from '../../molecules/EditProfile/EditProfile';
import ListComment from '../../molecules/ListComment/ListComment';

// eslint-disable-next-line react/function-component-definition
const RightBarMenu = () => {
  const [menuState, setmenuState] = useState('List');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setmenuState(newValue);
  };

  return (
    <div
    style={{
      width: '25%' ,
      position: 'absolute',
      right: '0',
      top: '0',
      backgroundColor: '#DDDDDD',
      overflow: 'scroll',
      height: '100%',
    }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          marginTop: '65px',
          backgroundColor: '#FFF',
          width: '100%',
        }}
      >
        <Tabs value={menuState} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="List" value="List" sx={{width: '50%'}}/>
          <Tab label="Edit" value="Edit" sx={{width: '50%'}} />
        </Tabs>
      </Box>
      { menuState === 'List' ?
        <ListComment />
      :
        <EditProfile />
      }
    </div>
  )
}

export default RightBarMenu;