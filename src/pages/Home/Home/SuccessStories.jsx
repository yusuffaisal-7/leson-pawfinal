import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const SuccessStories = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stories = [], isLoading, error } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get('/stories');
        return response.data; 
      } catch (err) {
        console.error('Error fetching stories:', err);
        throw err;
      }
    },
  });
  if (isLoading) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-600">Loading success stories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6">
        <p className="text-red-500">Failed to load success stories. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-gray-50">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-[var(--color-text-dark)] mb-8 text-center"
      >
        See How Our Visitors & Members Made Their <span className="text-[var(--color-cta)]">#SuccessStories</span>
      </motion.h2>

      {/* Stories Grid */}
      {stories.length === 0 ? (
        <p className="text-center text-gray-600">No success stories to display yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-start"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-40 h-40">
                <img
                  src={story.imageURL}
                  alt={`${story.name}'s story`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Story Content */}
              <div className="p-4 flex-1">
                <FaQuoteLeft className="text-[var(--color-text-dark)] text-xl mb-2" />
                <p className="text-gray-700 text-sm italic mb-3">{story.quote}</p>
                <p className="font-semibold text-gray-800">{story.name}</p>
                <p className="text-xs text-gray-500">{story.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuccessStories;