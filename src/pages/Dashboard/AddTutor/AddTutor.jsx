import React from 'react';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddTutor = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const tutorData = {
        name: data.name,
        email: data.email,
        subjects: data.subjects.split(',').map(subject => subject.trim()),
        experience: parseInt(data.experience),
        photoURL: data.photoURL || '',
        status: 'active',
      };
      const res = await axiosSecure.post('/tutors', tutorData);
      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Tutor Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to Add Tutor',
        text: error.response?.data?.message || 'An error occurred',
      });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Add a New Tutor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control">
          <label className="label">Name</label>
          <input {...register('name', { required: true })} className="input input-bordered" placeholder="Tutor's Name" />
        </div>
        <div className="form-control">
          <label className="label">Email</label>
          <input {...register('email', { required: true })} type="email" className="input input-bordered" placeholder="Tutor's Email" />
        </div>
        <div className="form-control">
          <label className="label">Subjects (comma-separated)</label>
          <input {...register('subjects', { required: true })} className="input input-bordered" placeholder="e.g., Math, Science" />
        </div>
        <div className="form-control">
          <label className="label">Experience (years)</label>
          <input {...register('experience', { required: true })} type="number" className="input input-bordered" placeholder="Years of Experience" />
        </div>
        <div className="form-control">
          <label className="label">Photo URL</label>
          <input {...register('photoURL')} className="input input-bordered" placeholder="Photo URL (optional)" />
        </div>
        <button type="submit" className="btn btn-primary">Add Tutor</button>
      </form>
    </div>
  );
};

export default AddTutor;