import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Listings = (props) => {
  const renderList = () => {
    let array = []
    let list = props.list
  for (let i in list) {
    let tags = props.list[i].tags
    array.push(
      <ListItem alignItems="flex-start">
        <ListItemText primary={props.list[i].name} secondary={tags.join(" ")} />
      </ListItem>
      )
    }
    return (
      <div>
        {array}
      </div>
    )

  }
  return (
    <List>
      {renderList()}
    </List>
  )
}

export default Listings
