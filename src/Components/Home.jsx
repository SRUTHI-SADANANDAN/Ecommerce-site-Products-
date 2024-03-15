import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
        <h1>Home</h1>
        <br />
        <Link to="/category/list/">Category list</Link>
        <br />
        <Link to="/category/add/">Category add</Link>
       

    </div>
  )
}

export default Home