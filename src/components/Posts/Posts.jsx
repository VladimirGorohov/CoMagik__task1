import MyButton from "../UI/MyButton/MyButton";

import classes from "./Posts.module.css";

function Posts({ posts, setPosts }) {
  const removePost = (id) => {
    setPosts(posts.filter((el) => el.id !== id));
  };

  return (
    <div>
      
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className={classes.posts__box}>
            <p>Ваше имя: {post.name}</p>
            <br />
            <p>Ваш возраст: {post.age}</p>
            <br />
            <p>Ваш номер телефона: {post.phone}</p> <br />
            <MyButton
              onClick={() => removePost(post.id)}
              className={classes.posts__btn}
            >
              Удалить
            </MyButton>
          </div>
        ))
      ) : (
        <h3 style={{ "text-aline": "center" }}>Данных нет</h3>
      )}
    </div>
  );
}

export default Posts;
