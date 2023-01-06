import ResponsiveCarousel from "../../../../features/ResponsiveCarousel";
import SectionHeading from "../../SectionHeading";
import BlogCard from "./BlogCard";
import useWindowDimensions from "../../../../Hooks/UseWindowDimensions";
import { changeArrDimension } from "../../../../features/ChangeArrDimension";

const blogs = [
  {
    title: "wordpress",
    detail: "How to make a blog website using Wordpress",
    img: require("../../../../images/project1.jpg"),
  },
  {
    title: "wordpress",
    detail: "How to make a blog website using Wordpress",
    img: require("../../../../images/project1.jpg"),
  },
  {
    title: "wordpress",
    detail: "How to make a blog website using Wordpress",
    img: require("../../../../images/project1.jpg"),
  },
  {
    title: "wordpress",
    detail: "How to make a blog website using Wordpress",
    img: require("../../../../images/project1.jpg"),
  },
  {
    title: "wordpress",
    detail: "How to make a blog website using Wordpress",
    img: require("../../../../images/project1.jpg"),
  },
  {
    title: "wordpress",
    detail: "How to make a blog website using Wordpress",
    img: require("../../../../images/project1.jpg"),
  },
  {
    title: "wordpress",
    detail: "How to make a blog website using Wordpress",
    img: require("../../../../images/project1.jpg"),
  },
];

const Blog = () => {
  let updatedBlogs;
  const { width } = useWindowDimensions();
  if (width > 998) {
    updatedBlogs = changeArrDimension(blogs, 3);
  } else if (width > 768) {
    updatedBlogs = changeArrDimension(blogs, 2);
  } else {
    updatedBlogs = changeArrDimension(blogs, 1);
  }
  return (
    <>
      <SectionHeading
        name="Blog"
        detail="Tips, isights, & best practices about web development"
      />
      <ResponsiveCarousel>
        {updatedBlogs.map((blogs, ind) => {
          return <BlogCard key={ind} blogs={blogs} />;
        })}
      </ResponsiveCarousel>
    </>
  );
};
export default Blog;
