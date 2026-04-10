import React from 'react'
import './NewCollections.css'
import Items from '../Items/Items.jsx'
import { useState,useEffect } from 'react'
// this component displays new collections on the home page
// here we map data of new collections and display them
// with the help of Item component

function NewCollections() {
  const[newCollection,setNewCollection] = useState([])
  useEffect(()=>{
 // fetching new collection data from the backend and storing it in the state variable newCollection
  fetch('http://localhost:4000/newCollections')
  .then((resp)=>resp.json())
  .then((data)=>setNewCollection(data));
  },[]) // empty dependency array means this useEffect will run only once when the component is mounted
  return (
    <div className="new-collections">
        <h2>New Collections</h2>
        <hr />
        <div className="collections">
            {newCollection.map((item, i) => {
                return (
                  <Items
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                )
            })}
        </div>
    </div>
  )
}

export default NewCollections
