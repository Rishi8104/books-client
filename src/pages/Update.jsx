import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const [books, setBooks] = useState({
    Book: '',
    description: '',
    price: null,
    cover: ''
  })
  const  navigate = useNavigate();
  const  location = useLocation();
  const BookId = location.pathname.split("/")[2]


  const handleInputChange = (e) => {
    setBooks({
   ...books,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = async (e) => {
   e.preventDefault()
   try {
    await axios.put("http://localhost:8800/Books/"+ BookId,books)
    navigate('/')
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div className="form">
      <h1>Update Your Books</h1>
      <input type="text" placeholder='books'  onChange={handleInputChange} name='Book' />
      <input type="text" placeholder='description' onChange={handleInputChange} name='description' />
      <input type="number" placeholder='price' onChange={handleInputChange} name='price'/>
      <input type="text" placeholder='cover'  onChange={handleInputChange} name='cover'/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update