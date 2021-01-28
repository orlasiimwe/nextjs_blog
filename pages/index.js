import React, { useState } from 'react'
import styles from '../styles/style.module.css';

function Index() {
  const [allBlogs, setAllBlogs] = useState([])

  const [blog, setBlog] = useState({
    id: 0,
    title: '',
    body: ''
  })

  const { title, body, id } = blog


  const handleChange = (evt) => {
    const value = evt.target.value;

    setBlog({
      ...blog,
      id: allBlogs.length + 1,
      [evt.target.name]: value
    });
  }

  const handleClick = (evt) => {
    evt.preventDefault();
    if (blog.title.trim().length !== 0 && blog.body.trim().length !== 0) {
      setBlog({
        title: title,
        body: body,
        id: id
      });
      setAllBlogs([...allBlogs, blog])
      console.log(allBlogs)
    }
    else {
      alert('Fill in all fields')

    }
  }

  const deleteBlog = (evt) => {
    const value = evt.target.id
    console.log(value)
    const index = value - 1
    console.log(index)
    const deleted = allBlogs.splice(index, 1)
    console.log(allBlogs.filter((allBlogs) => allBlogs !== deleted))
    setAllBlogs(allBlogs.filter((allBlogs) => allBlogs !== deleted))
  }



  return (
    <section className={styles.blogcontainer}>
      <div className={styles.intro}>
        <h1 className={styles.introheading}>Welcome to your Blog App</h1>
        <p className={styles.intropara}>Write down your thoughts...</p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-5">
          <div>
            <h3 className={styles.heading}>Add a Post !!</h3>
          </div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1" className={styles.subheading}>Title</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" required="required" name="title" value={blog.title} onChange={handleChange} />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1" className={styles.subheading}>Body</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="body" value={blog.body} onChange={handleChange} required></textarea>
            </div>
            <div class="form-group">
              <button className="btn btn-primary addButton" onClick={handleClick}>Add Post</button>
            </div>
          </form>
        </div>
        <div className="col-sm-6 col-lg-7">
          <div>
            <h3 className={styles.heading}>All Your Posts</h3>
          </div>


          <table className="table table-bordered">
            <thead>
              <tr className={styles.table}>
                <th scope="col" className={styles.subheading}>#</th>
                <th scope="col" className={styles.subheading}>Title</th>
                <th scope="col" className={styles.subheading}>Post</th>
                <th scope="col" className={styles.subheading}>Delete</th>
           
              </tr>
            </thead>

            {
              allBlogs.length > 0 ? allBlogs.map((singleBlog, id) =>
                <tbody>

                  <tr key={singleBlog.id} id={singleBlog.id} >
                    <th className='id'>{singleBlog.id}</th>
                    <td>{singleBlog.title}</td>
                    <td>{singleBlog.body}</td>
                    <td><button className="btn btn-primary  deleteButton" key={singleBlog.id} id={singleBlog.id} onClick={deleteBlog}>Delete</button></td>
                  
                  </tr>
                </tbody>
              )
                :
                <div>
                  <p>No posts yet</p>
                </div>
            }

          </table>

        </div>
      </div>
      <style jsx>{`
        .addButton {
          background-color: yellow;   
          color:black;
          border:black;
          margin-top:3%;   
          margin-left:10%    
        }
        .deleteButton {
          background-color: red; 
          border:red       
        }
      `}</style>
    </section>
  )
}

export default Index
