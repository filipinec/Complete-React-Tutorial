
import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import axios from "axios";


const Home = () => {

const [blogs, setBlogs] = useState(null)
const [name, setName] = useState('Filip')
const [isPending, setIsPending] = useState(true)

const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog =>  blog.id !== id))
    setBlogs(newBlogs);

   
}

useEffect(() => {
setTimeout(() => {
  axios.get('http://localhost:8000/blogs').then(res => {
    const blogs = res.data;
  setBlogs(blogs)
   })
   setIsPending(false)
}, 2000)
}, []) 


  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs = {blogs} title = 'Filip is Developer' handleDelete={handleDelete} />}
      {blogs &&  <button onClick={() => setName('luigi')}>Change Name</button>}
      {blogs &&  <p>{name}</p>}

      
    </div>
  )
}

export default Home
