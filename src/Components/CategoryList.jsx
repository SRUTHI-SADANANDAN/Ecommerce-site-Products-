import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/category/list")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log("error", error))
  })
  return (
    <div className="row">
      
      {categories.map((category) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={category.id}>
          <Card style={{ width: '100%', height: '100%' }}>
            {category.image ? (

              <Card.Img variant="top" src={`http://127.0.0.1:8000${category.image}`} style={{ height: '200px', objectFit: 'cover' }} />


            ) : (
              <Card.Img variant="top" src={logo} style={{ height: '200px', objectFit: 'cover' }} />

            )}

            <Card.Body>
              <Card.Title>{category.name}</Card.Title>

              <Button variant="primary">View</Button>
              <Link to='/category/category_id/edit'>Edit</Link>
              <Button variant="primary">Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>


  )
}

export default CategoryList