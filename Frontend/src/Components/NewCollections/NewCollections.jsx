import React from 'react'
import './NewCollections.css'
import Items from '../Items/Items.jsx'
import new_collections from '../Assets/Frontend_Assets/new_collections.js'

// this component displays new collections on the home page
// here we map data of new collections and display them
// with the help of Item component

function NewCollections() {
  return (
    <div className="new-collections">
        <h2>New Collections</h2>
        <hr />
        <div className="collections">
            {new_collections.map((item, i) => {
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
