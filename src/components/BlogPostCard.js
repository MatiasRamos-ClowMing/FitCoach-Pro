import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2 text-yellow-400">{post.title}</h3>
      <p className="text-gray-400 mb-4">{post.excerpt}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{post.date}</span>
        <span>Por {post.author}</span>
      </div>
    </div>
  );
};

export default BlogPostCard;