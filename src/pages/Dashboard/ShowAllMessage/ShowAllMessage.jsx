import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

// Skeleton loader
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="p-6 space-y-2">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  </div>
);

const ShowAllMessage = () => {
  const axiosSecure = useAxiosSecure();

  const { data: messages = [], isLoading, error } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => (await axiosSecure.get('/messages')).data,
  });

  if (isLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Show All Messages
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array(3).fill(0).map((_, index) => <SkeletonCard key={index} />)}
        </div>
      </div>
    );
  }

  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Show All Messages
      </h3>
      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((message) => (
            <div
              key={message._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <div className="p-6 space-y-4">
                <p><strong>Sender:</strong> {message.senderEmail || 'Not specified'}</p>
                <p><strong>Message:</strong> {message.message || 'No message content'}</p>
                <p>
                  <strong>Sent At:</strong>{' '}
                  {message.sentAt
                    ? new Date(message.sentAt).toLocaleString('en-US', {
                        timeZone: 'Asia/Dhaka',
                      })
                    : 'Not specified'}
                </p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      message.status === 'unread'
                        ? 'bg-red-200 text-red-800'
                        : 'bg-green-200 text-green-800'
                    }`}
                  >
                    {message.status?.charAt(0).toUpperCase() +
                      message.status?.slice(1) || 'Unread'}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllMessage;