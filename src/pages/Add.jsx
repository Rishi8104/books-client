import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Add = () => {
  const [books, setBooks] = useState({
    Book: '',
    description: '',
    price: null,
    cover: ''
  })
  const  navigate = useNavigate()
  const handleInputChange = (e) => {
    setBooks({
   ...books,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = async (e) => {
   e.preventDefault()
   try {
    await axios.post("http://localhost:8800/Books",books)
    navigate('/')
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div className="form">
      <h1>Add New Books</h1>
      <input type="text" placeholder='books'  onChange={handleInputChange} name='Book' />
      <input type="text" placeholder='description' onChange={handleInputChange} name='description' />
      <input type="number" placeholder='price' onChange={handleInputChange} name='price'/>
      <input type="text" placeholder='cover'  onChange={handleInputChange} name='cover'/>
      <Button className='frombutton' onClick={handleClick}>Add</Button>
    </div>
  )
}

export default Add