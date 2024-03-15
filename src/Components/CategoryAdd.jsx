import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CategoryAdd() {
    const [categoryDatas, setCategoryDatas] = useState({
        name: "",
        image: null
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCategoryDatas({ ...categoryDatas, [name]: value });
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setCategoryDatas({ ...categoryDatas, image: imageFile });
    };
    const navigate = useNavigate();


    const handleAddSubmit = async (event) =>  {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("name",categoryDatas.name);


    
    
    
        if (categoryDatas.image) {
          formData.append("image", categoryDatas.image);
        }
    
        try {
          const response = await axios.post(
            'http://127.0.0.1:8000/api/category/add',
            formData,
          );

          
    
            // redirect
            navigate("/category/list/");

    
          
    
          console.log("Category Added successfully");
          console.log('Server response:', response);
        }
        catch (error) {
          console.error("Error adding category:", error);
        }
      };

    return (
        <div>
            <h1>Category Add</h1>
            <form onSubmit={handleAddSubmit }>
                <input type="text"
                    placeholder='category name'
                    name='name'
                    onChange={handleInputChange} />
                <br></br>
                <input type="file"
                    name='image'
                    onChange={handleImageChange}
                />
                <br></br>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default CategoryAdd