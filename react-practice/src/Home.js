
import { useState, useEffect } from "react"
import BlogList from "./BlogList"


const Home = () => {

const [blogs, setBlogs] = useState([
  {title: 'machine', job: 'Engineer', author:'Filip', id: 1},
  {title: 'recept', job: 'Doctor', author:'Gabriela', id: 2},
  {title: 'site', job: 'Developer', author:'Dimitar', id: 3}
])
const [name, setName] = useState('Filip')

const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog =>  blog.id !== id))
    setBlogs(newBlogs);

   
}

useEffect(() => {
  console.log("use effect ran")
  console.log(name);
}, [name]) 


  return (
    <div className='home'>
      <BlogList blogs = {blogs} title = 'Filip is Developer' handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>Change Name</button>
      <p>{name}</p>

      
    </div>
  )
}

export default Home
