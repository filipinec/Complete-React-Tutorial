
import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import axios from "axios";


const Home = () => {

const [blogs, setBlogs] = useState(null)
const [name, setName] = useState('Filip')

const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog =>  blog.id !== id))
    setBlogs(newBlogs);

   
}

useEffect(() => {
  axios.get('http://localhost:8000/blogs').then(res => {
    const blogs = res.data;
  console.log(blogs)
  setBlogs(blogs)
   })
}, []) 


  return (
    <div className='home'>
      {blogs && <BlogList blogs = {blogs} title = 'Filip is Developer' handleDelete={handleDelete} />}
      {blogs &&  <button onClick={() => setName('luigi')}>Change Name</button>}
      {blogs &&  <p>{name}</p>}

      
    </div>
  )
}

export default Home
