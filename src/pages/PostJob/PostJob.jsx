import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PostJob = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [selectedTutorId, setSelectedTutorId] = useState('');
  const [message, setMessage] = useState('');

  const { data: tutors = [], isLoading } = useQuery({
    queryKey: ['available-tutors'],
    queryFn: async () => {
      const res = await axiosSecure.get('/available-tutors');
      return res.data;
    },
  });

  useEffect(() => {
    if (tutors.length > 0) {
      setSelectedTutorId(tutors[0]._id);
      setValue('tutorId', tutors[0]._id);
    }
  }, [tutors, setValue]);

  const onSubmit = async (data) => {
    const jobData = {
      ...data,
      email: user.email,
      tutorId: selectedTutorId,
      postedAt: new Date(),
    };
    const res = await axiosSecure.post('/jobs', jobData);
    if (res.data.insertedId) {
      Swal.fire({
        icon: 'success',
        title: 'Job Posted Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message || !selectedTutorId) return;
    const tutor = tutors.find(t => t._id === selectedTutorId);
    if (!tutor) return;
    await axiosSecure.post('/send-message', { tutorEmail: tutor.email, message });
    setMessage('');
    Swal.fire({
      icon: 'success',
      title: 'Message Sent to Tutor',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (isLoading) return <div>Loading tutors...</div>;

  return (
    <div className="hero min-h-screen card bg-base-100 shadow-2xl card-body">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold">Post a Job</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-4">
          <div className="form-control">
            <label className="label">Subject</label>
            <input {...register('subject', { required: true })} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">Description</label>
            <textarea {...register('description', { required: true })} className="textarea textarea-bordered" />
          </div>
          <div className="form-control">
            <label className="label">Select Tutor</label>
            <select
              value={selectedTutorId}
              onChange={(e) => setSelectedTutorId(e.target.value)}
              className="select select-bordered w-full"
              {...register('tutorId', { required: true })}
            >
              {tutors.map((tutor) => (
                <option key={tutor._id} value={tutor._id}>{tutor.name}</option>
              ))}
            </select>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Post Job" className="btn btn-primary" />
          </div>
        </form>
        <div className="w-full max-w-lg mt-6">
          <h3 className="text-xl font-semibold mb-2">Communicate with Tutor</h3>
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="form-control">
              <label className="label">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea textarea-bordered w-full"
                placeholder="Type your message here..."
              />
            </div>
            <button type="submit" className="btn btn-secondary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;