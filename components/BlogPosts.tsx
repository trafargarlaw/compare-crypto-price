import { IServerSideProps } from "../pages";
import BlogPost from "./BlogPost";

interface BlogPostsProps {
  blogPosts: IServerSideProps["blogPosts"];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ blogPosts }) => {
  return (
    <section>
      <div className="blog-posts">
        <h1>Whats up in Australian Crypto</h1>
        {blogPosts.map((post, index) => (
          <BlogPost
            key={`${index}${index}`}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
      <div className="blog-posts__more">
        <a href="#">SEE MORE</a>
      </div>
    </section>
  );
};

export default BlogPosts;
