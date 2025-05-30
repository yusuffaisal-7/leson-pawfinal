import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const Message = () => {
  const { user } = useContext(AuthContext); // Get logged-in user details
  const axiosSecure = useAxiosSecure(); // Custom hook for secure Axios requests
  const navigate = useNavigate(); // For navigation
  const [message, setMessage] = useState(''); // State for the message input

  // Handle sending the message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      return Swal.fire('Error', 'Please enter a message', 'error');
    }
    try {
      await axiosSecure.post('/send-message', { message, email: user?.email });
      setMessage(''); // Clear the input after successful send
      Swal.fire('Sent', 'Message sent', 'success');
    } catch (error) {
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Failed to send message',
        'error'
      );
    }
  };

  // Check if user is logged in, otherwise redirect to login
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <header className="text-center py-10 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Messaging</h1>
        <p className="mt-2 text-lg text-gray-600">
          Communicate with ours to help you find the right tutor for your needsor any suggestions
        </p>
      </header>

      {/* Job Preview & Messaging Section */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Form Preview</h3>
        <img
          src="https://via.placeholder.com/600x400.png?text=Job+Form+Preview"
          alt="Job Form Preview"
          className="w-full h-auto rounded-lg shadow-md mb-6"
        />
        <form onSubmit={handleSendMessage} className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            placeholder="Write a message to the tutor..."
            rows="4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

     
      
    </div>
  );
};

export default Message;