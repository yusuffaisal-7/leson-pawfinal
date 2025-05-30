
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBook, FaUser, FaSearch } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Blog = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch blogs
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await axiosSecure.get('/blogs');
      return res.data;
    },
  });

  // Filter posts based on search term (title or category)
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );

  // Render content
  const renderContent = () => {
    if (isLoading) {
      return Array(6)
        .fill(0)
        .map((_, index) => <SkeletonCard key={index} />);
    }

    if (error) {
      toast.error(error.response?.data?.message || 'Failed to load blogs');
      return (
        <p className="text-center text-red-600 col-span-full">
          Error loading blogs. Please try again later.
        </p>
      );
    }

    if (filteredPosts.length === 0) {
      return (
        <p className="text-center text-gray-600 col-span-full">
          No posts found. Try a different search term.
        </p>
      );
    }

    return filteredPosts.map((post) => (
      <article
        key={post._id}
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1"
      >
        <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-3 py-1 mb-3 inline-block">
          {post.category || 'Uncategorized'}
        </span>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-3">
          By {post.author || 'Unknown'} | {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <p className="text-gray-700 mb-4">{post.excerpt || 'No excerpt available'}</p>
        {/* Removed 'Read More' link since no detail page is specified */}
      </article>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <header className="text-center py-10 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900">Tutoring Blog</h1>
        <p className="mt-2 text-lg text-gray-600">
          Resources, updates, and tips for students and tutors
        </p>
      </header>

      {/* Search Bar */}
      <div className="my-6 flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by title or category (e.g., Tutoring Tips)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {renderContent()}
      </section>
    </div>
  );
};

export default Blog;