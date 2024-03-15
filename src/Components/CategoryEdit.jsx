import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
function CategoryEdit() {
    const { category_id } = useParams();
   
    useEffect(() => {
        // Fetch the category data for editing
        axios.get(`http://127.0.0.1:8000/api/category/${category_id}/edit/`)
          .then((response) => {

          })
          .catch((error) => console.error("Error fetching data:", error));
      }, [category_id]);
  return (
    <div></div>
  )
}

export default CategoryEdit