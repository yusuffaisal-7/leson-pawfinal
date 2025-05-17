// import React from 'react';

// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// // Skeleton loader
// const SkeletonCard = () => (
//   <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
//     <div className="p-6 space-y-2">
//       <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//       <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//     </div>
//   </div>
// );

// const ShowAllMessage = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: messages = [], isLoading, error } = useQuery({
//     queryKey: ['messages'],
//     queryFn: async () => (await axiosSecure.get('/messages')).data,
//   });

//   if (isLoading) {
//     return (
//       <div className="p-6 max-w-7xl mx-auto">
//         <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
//           Show All Messages
//         </h3>
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {Array(3).fill(0).map((_, index) => <SkeletonCard key={index} />)}
//         </div>
//       </div>
//     );
//   }

//   if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h3 className="text-4xl font-bold mb-10 text-center text-gray-800">
//         Show All Messages
//       </h3>
//       {messages.length === 0 ? (
//         <p className="text-center text-gray-500">No messages found.</p>
//       ) : (
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {messages.map((message) => (
//             <div
//               key={message._id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
//             >
//               <div className="p-6 space-y-4">
//                 <p><strong>Sender:</strong> {message.senderEmail || 'Not specified'}</p>
//                 <p><strong>Message:</strong> {message.message || 'No message content'}</p>
//                 <p>
//                   <strong>Sent At:</strong>{' '}
//                   {message.sentAt
//                     ? new Date(message.sentAt).toLocaleString('en-US', {
//                         timeZone: 'Asia/Dhaka',
//                       })
//                     : 'Not specified'}
//                 </p>
//                 <p>
//                   <strong>Status:</strong>{' '}
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs ${
//                       message.status === 'unread'
//                         ? 'bg-red-200 text-red-800'
//                         : 'bg-green-200 text-green-800'
//                     }`}
//                   >
//                     {message.status?.charAt(0).toUpperCase() +
//                       message.status?.slice(1) || 'Unread'}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowAllMessage;

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Skeleton loader
const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">
    <div className="flex justify-between items-center mb-2">
      <div className="h-5 bg-gray-200 rounded w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
  </div>
);

const ShowAllMessage = () => {
  const axiosSecure = useAxiosSecure();
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  const { data: messages = [], isLoading, error } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => (await axiosSecure.get('/messages')).data,
  });

  const toggleMessage = (id) => {
    setExpandedMessageId(prevId => (prevId === id ? null : id));
  };

  if (isLoading) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Messages</h3>
        <div className="space-y-4">{Array(3).fill(0).map((_, i) => <SkeletonCard key={i} />)}</div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Message Notifications</h3>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => {
            const isExpanded = expandedMessageId === message._id;

            return (
              <div
                key={message._id}
                className="bg-pink-100 rounded-xl shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 flex justify-between items-start">
                  <div className="flex gap-3 items-start">
                    {/* Icon */}
                    <div className="w-6 h-6 bg-orange-200 rounded-full text-white flex items-center justify-center text-xs mt-1">
                      ✴️
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold">
                        New comment from{' '}
                        <span className="font-bold">{message.senderEmail || 'Anonymous'}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        {message.sentAt
                          ? new Date(message.sentAt).toLocaleString('en-US', {
                              timeZone: 'Asia/Dhaka',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : 'N/A'}
                      </p>
                    </div>
                  </div>

                  {/* Profile Image Placeholder */}
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>

                {/* Message Content Toggle */}
                {isExpanded && (
                  <div className="p-4 pt-0 text-gray-800">
                    <p className="mb-2">
                      <strong>Message:</strong> {message.message || 'No content'}
                    </p>
                    <p>
                      <strong>Status:</strong>{' '}
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          message.status === 'unread'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {message.status?.charAt(0).toUpperCase() + message.status?.slice(1) || 'Unread'}
                      </span>
                    </p>
                  </div>
                )}

                <button
                  onClick={() => toggleMessage(message._id)}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-green-700 hover:underline flex items-center gap-1"
                >
                  {isExpanded ? (
                    <>
                      Hide message <FaChevronUp className="text-xs" />
                    </>
                  ) : (
                    <>
                      View message <FaChevronDown className="text-xs" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShowAllMessage;
