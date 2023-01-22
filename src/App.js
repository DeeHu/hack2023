import React from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import {CssBaseline,Grid} from '@mui/material';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Listings from "./components/List/List";
import db from "./db/listings.json";


function App() {
  const [search, setSearch] = useState("");
  const [listings, setListings] = useState(db.listings);

  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(listings);
    let array = []
    for (let i in db.listings) {
      for (let j in db.listings[i].tags) {
        if (db.listings[i].tags[j].toLowerCase().includes(e.target.value.toLowerCase())) {
          console.log(db.listings[i].tags[j]);
          console.log(db.listings[i].name);
          array.push(db.listings[i])
          break
        }
      }
    }
    setListings(array)
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md = {4} >
          <TextField
          name="name"
          required
          id="outlined-required"
          label="Name"
          value={search}
          onChange={handleChange}
        />
          <Listings list={listings}/>
        </Grid>
        <Grid item xs={12} md = {8} >
          <Map />
        </Grid>
      </Grid>
  
    </>
  )
  
}

export default React.memo(App)