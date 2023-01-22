import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";

const Listings = (props) => {
  const renderList = () => {
    let array = []
    let list = props.list
  for (let i in list) {
    let tags = props.list[i].tags
    array.push(
      <ListItemButton alignItems="flex-start" sx={{flexDirection: "column", width: "100%", border: 1, borderColor: 'divider'}}>
        <ListItemText primary={props.list[i].name} secondary={props.list[i].location} />
        <ListItemText secondary={props.list[i].description} />
        <ListItemText position="absolute" primary={`$` + props.list[i].price} sx={{position: "absolute", top: 0, right: 0, margin: 1, marginRight:1.5}}/>
      </ListItemButton>
      )
    }
    return (
      <div>
        {array}
      </div>
    )

  }
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', margin: 1}}>
      {renderList()}
    </List>
  )
}

export default Listings
