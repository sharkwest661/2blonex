// src/components/shared/postitem/PostList.js
import PostItem from "./PostItem";

const PostList = ({ posts = [], category = "other", className = "" }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="post">
        <div className="post__list">
          <p>Heç bir elan tapılmadı.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`post ${className}`}>
      <div className="post__list">
        {posts.map((post, index) => (
          <PostItem
            key={post.id || index}
            id={post.id}
            title={post.title}
            secondaryTitle={post.secondaryTitle} // For vehicles
            price={post.price}
            location={post.location}
            date={post.date}
            image={post.image}
            href={post.href || `#`}
            isVip={post.isVip}
            isPremium={post.isPremium}
            hasBarter={post.hasBarter}
            hasCredit={post.hasCredit}
            category={category} // 🔑 Pass category to each PostItem
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
