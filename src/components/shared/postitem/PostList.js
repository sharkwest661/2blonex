// src/components/shared/postitem/PostList.js
import PostItem from "./PostItem";

const PostList = ({ posts = [], className = "" }) => {
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
            price={post.price}
            location={post.location}
            date={post.date}
            image={post.image}
            href={post.href || `#`}
            isVip={post.isVip}
            isPremium={post.isPremium}
            hasBarter={post.hasBarter}
            hasCredit={post.hasCredit}
            hasPercent={post.hasPercent}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
