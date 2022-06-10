interface PostProps {
  title: string;
  description: string;
}

const BlogPost: React.FC<PostProps> = ({ title, description }) => {
  return (
    <div className="blog-posts__post">
      <div className="blog-posts__post__title">
        <h2>{title}</h2>
      </div>
      <div className="blog-posts__post__description">
        <p>{description}</p>
        <a href="#">Read story →</a>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default BlogPost;
