import React from 'react';
import {AppBar, Toolbar, Typography, InputBase,Box, Autocomplete} from "@mui/material";


const Header = () => {

  return (
    <div>

      <AppBar position = "static">
        <Toolbar >
          <Typography variant = 'h5'  sx={{ margin: '2rem'}}>
            Tuber
          </Typography>
          <Box display='flex'>
        
            {/* <Autocomplete> */}
              <div>
                <div >
                  <searchIcon />
                </div>
                <InputBase  placeholder='Search...'/>

              </div>
            {/* </Autocomplete> */}

          </Box>
        </Toolbar>   
      </AppBar>

    </div>
  )
}

export default Header
