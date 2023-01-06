import classes from "./BlogCard.module.css";
const BlogCard = (props) => {
  return (
    <div className={classes.cardList}>
      {props.blogs.map((blog, ind) => {
        return (
          <div key={ind} className={classes.card}>
            <div className={classes.cardImg}>
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className={classes.cardText}>
              <h2>{blog.title}</h2>
              <h3>{blog.detail}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default BlogCard;
