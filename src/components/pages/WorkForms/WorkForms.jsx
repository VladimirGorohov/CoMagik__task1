import classes from "./WorkForms.module.css";
import Form from "../../Form/Form";
import Posts from "../../Posts/Posts";
import { useState } from "react";

function WorkForms() {
  
  const [data, setData] = useState({
    name: '',
    age: '',
    phone: '',
  });

  const [posts, setPosts] = useState([]);


  return( 
  <div className={classes.workForm}>
    <Form data={data} setData={setData} posts={posts} setPosts={setPosts} />
    <Posts posts={posts} setPosts={setPosts} />
    </div>)
}

export default WorkForms;
