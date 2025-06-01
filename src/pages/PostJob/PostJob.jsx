// export default PostJob;
// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import { useMutation } from '@tanstack/react-query';
// import { AuthContext } from '../../providers/AuthProvider';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const PostJob = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const [message, setMessage] = useState('');

//   const { register, handleSubmit, reset, formState: { errors } } = useForm();

//   // Job posting mutation
//   const mutation = useMutation({
//     mutationFn: (data) => axiosSecure.post('/jobs', data),
//     onSuccess: () => {
//       Swal.fire('Success', 'Job posted successfully!', 'success');
//       reset();
//       navigate('/services');
//     },
//     onError: (error) => {
//       if (error.response?.status === 402) {
//         Swal.fire({
//           title: 'Payment Required',
//           text: 'You have posted 3 jobs. Please pay a $10 fee to continue.',
//           icon: 'warning',
//           showCancelButton: true,
//           confirmButtonText: 'Pay $10',
//         });
//       } else {
//         Swal.fire('Error', error.response?.data?.message || 'Failed to post job', 'error');
//       }
//     },
//   });

//   const onSubmit = (data) => {
//     const jobData = {
//       ...data,
//       email: user?.email,
//       postedAt: new Date(),
//     };
//     mutation.mutate(jobData);
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!message) {
//       return Swal.fire('Error', 'Please enter a message', 'error');
//     }
//     try {
//       await axiosSecure.post('/send-message', { message, email: user?.email });
//       setMessage('');
//       Swal.fire('Sent', 'Message sent', 'success');
//     } catch (error) {
//       Swal.fire('Error', error.response?.data?.message || 'Failed to send message', 'error');
//     }
//   };

//   return (
//     <motion.div
//       initial={{ y: 20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="card w-full max-w-3xl mx-auto bg-base-100 shadow-xl mt-10"
//     >
//       <div className="card-body">
//         <h2 className="card-title">Post a Job</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div className="form-control">
//             <label className="label">What subject do you need help with?</label>
//             <select
//               {...register('subject', { required: 'Subject is required' })}
//               className="select select-bordered"
//             >
//               <option value="">Select a subject</option>
//               <option value="Math">Math</option>
//               <option value="Science">Science</option>
//               <option value="English">English</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.subject && <span className="text-error">{errors.subject.message}</span>}
//           </div>
//           <div className="form-control">
//             <label className="label">What specific topics or goals?</label>
//             <textarea
//               {...register('topicsGoals', { required: 'Topics or goals are required' })}
//               className="textarea textarea-bordered"
//               placeholder="Enter specific topics or goals"
//             />
//             {errors.topicsGoals && <span className="text-error">{errors.topicsGoals.message}</span>}
//           </div>
//           <div className="form-control">
//             <label className="label">What is your current grade or learning level?</label>
//             <select
//               {...register('gradeLevel', { required: 'Grade level is required' })}
//               className="select select-bordered"
//             >
//               <option value="">Select grade/level</option>
//               <option value="Grade 1-5">Grade 1-5</option>
//               <option value="Grade 6-8">Grade 6-8</option>
//               <option value="Grade 9-12">Grade 9-12</option>
//               <option value="College">College</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.gradeLevel && <span className="text-error">{errors.gradeLevel.message}</span>}
//           </div>
//           <div className="form-control">
//             <label className="label">What is your preferred mode of learning?</label>
//             <div className="flex gap-4">
//               <label>
//                 <input
//                   type="radio"
//                   {...register('modeOfLearning', { required: 'Mode of learning is required' })}
//                   value="Online"
//                 /> Online
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   {...register('modeOfLearning')}
//                   value="Offline"
//                 /> Offline
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   {...register('modeOfLearning')}
//                   value="Either"
//                 /> Either
//               </label>
//             </div>
//             {errors.modeOfLearning && <span className="text-error">{errors.modeOfLearning.message}</span>}
//           </div>
//           {register('modeOfLearning')?.value === 'Offline' && (
//             <div className="form-control">
//               <label className="label">If offline, where are you located?</label>
//               <input
//                 {...register('location')}
//                 className="input input-bordered"
//                 placeholder="Enter location"
//               />
//             </div>
//           )}
//           <div className="form-control">
//             <label className="label">When are you available for sessions?</label>
//             <input
//               type="datetime-local"
//               {...register('availability')}
//               className="input input-bordered"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">How many sessions per week?</label>
//             <select
//               {...register('sessionsPerWeek', { required: 'Sessions per week are required' })}
//               className="select select-bordered"
//             >
//               <option value="">Select number</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5+">5+</option>
//             </select>
//             {errors.sessionsPerWeek && <span className="text-error">{errors.sessionsPerWeek.message}</span>}
//           </div>
//           <div className="form-control">
//             <label className="label">What's your budget or expected hourly rate?</label>
//             <input
//               type="number"
//               {...register('budget')}
//               className="input input-bordered"
//               placeholder="Enter amount"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Are you open to negotiation?</label>
//             <select
//               {...register('openToNegotiation', { required: 'Negotiation preference is required' })}
//               className="select select-bordered"
//             >
//               <option value="">Select option</option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//             {errors.openToNegotiation && <span className="text-error">{errors.openToNegotiation.message}</span>}
//           </div>
//           <div className="form-control">
//             <label className="label">When do you want to start?</label>
//             <input
//               type="date"
//               {...register('startDate')}
//               className="input input-bordered"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Do you have a deadline or target exam date?</label>
//             <input
//               type="date"
//               {...register('deadline')}
//               className="input input-bordered"
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">What type of help are you looking for?</label>
//             <div className="flex gap-4">
//               <label>
//                 <input
//                   type="checkbox"
//                   {...register('helpType')}
//                   value="Exam Prep"
//                 /> Exam Prep
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   {...register('helpType')}
//                   value="Homework"
//                 /> Homework
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   {...register('helpType')}
//                   value="Concept Clarity"
//                 /> Concept Clarity
//               </label>
//             </div>
//           </div>
//           <div className="form-control">
//             <label className="label">Anything else we should know?</label>
//             <textarea
//               {...register('additionalNotes')}
//               className="textarea textarea-bordered"
//               placeholder="Enter additional notes"
//             />
//           </div>
//           <div className="form-control mt-4">
//             <button type="submit" className="btn btn-primary" disabled={mutation.isLoading}>
//               {mutation.isLoading ? 'Posting...' : 'Post Job'}
//             </button>
//           </div>
//         </form>
//         <div className="mt-10">
//           <h3 className="text-xl font-semibold mb-2">Job Form Preview</h3>
//           <img
//             src="https://via.placeholder.com/600x400.png?text=Job+Form+Preview"
//             alt="Job Form Preview"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//           <form onSubmit={handleSendMessage} className="space-y-3 mt-4">
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="textarea textarea-bordered w-full"
//               placeholder="Type your message..."
//             />
//             <button type="submit" className="btn btn-secondary">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PostJob;



// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { useMutation } from "@tanstack/react-query";
// import { AuthContext } from "../../providers/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const PostJob = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//     watch,
//   } = useForm();

//   const modeOfLearning = watch("modeOfLearning");

//   const mutation = useMutation({
//     mutationFn: (data) => axiosSecure.post("/jobs", data),
//     onSuccess: () => {
//       Swal.fire("Success", "Job posted successfully!", "success");
//       reset();
//       navigate("/services");
//     },
//     onError: (error) => {
//       if (error.response?.status === 402) {
//         Swal.fire({
//           title: "Payment Required",
//           text: "You have posted 3 jobs. Please pay a $10 fee to continue.",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: "Pay $10",
//         });
//       } else {
//         Swal.fire(
//           "Error",
//           error.response?.data?.message || "Failed to post job",
//           "error"
//         );
//       }
//     },
//   });

//   const onSubmit = (data) => {
//     const jobData = {
//       ...data,
//       email: user?.email,
//       postedAt: new Date(),
//     };
//     mutation.mutate(jobData);
//   };

  
//   return (
//     <motion.div
//       initial={{ y: 20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="card w-full max-w-3xl mx-auto bg-base-100 shadow-xl mt-10"
//     >
//       <div className="card-body">
//         <h2 className="card-title">Post a Job</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div className="form-control">
//             <label className="label">What subject do you need help with?</label>
//             <select
//               {...register("subject", { required: "Subject is required" })}
//               className="select select-bordered"
//             >
//               <option value="">Select a subject</option>
//               <option value="Math">Math</option>
//               <option value="Science">Science</option>
//               <option value="English">English</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.subject && (
//               <span className="text-error">{errors.subject.message}</span>
//             )}
//           </div>

//           <div className="form-control">
//             <label className="label">What specific topics or goals?</label>
//             <textarea
//               {...register("topicsGoals", {
//                 required: "Topics or goals are required",
//               })}
//               className="textarea textarea-bordered"
//               placeholder="Enter specific topics or goals"
//             />
//             {errors.topicsGoals && (
//               <span className="text-error">{errors.topicsGoals.message}</span>
//             )}
//           </div>

//           <div className="form-control">
//             <label className="label">
//               What is your current grade or learning level?
//             </label>
//             <select
//               {...register("gradeLevel", {
//                 required: "Grade level is required",
//               })}
//               className="select select-bordered"
//             >
//               <option value="">Select grade/level</option>
//               <option value="Grade 1-5">Grade 1-5</option>
//               <option value="Grade 6-8">Grade 6-8</option>
//               <option value="Grade 9-12">Grade 9-12</option>
//               <option value="College">College</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.gradeLevel && (
//               <span className="text-error">{errors.gradeLevel.message}</span>
//             )}
//           </div>

//           <div className="form-control">
//             <label className="label">
//               What is your preferred mode of learning?
//             </label>
//             <div className="flex gap-4">
//               <label>
//                 <input
//                   type="radio"
//                   {...register("modeOfLearning", {
//                     required: "Mode of learning is required",
//                   })}
//                   value="Online"
//                 />{" "}
//                 Online
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   {...register("modeOfLearning")}
//                   value="Offline"
//                 />{" "}
//                 Offline
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   {...register("modeOfLearning")}
//                   value="Either"
//                 />{" "}
//                 Either
//               </label>
//             </div>
//             {errors.modeOfLearning && (
//               <span className="text-error">
//                 {errors.modeOfLearning.message}
//               </span>
//             )}
//           </div>

//           {modeOfLearning === "Offline" && (
//             <div className="form-control">
//               <label className="label">
//                 If offline, where are you located?
//               </label>
//               <input
//                 {...register("location")}
//                 className="input input-bordered"
//                 placeholder="Enter location"
//               />
//             </div>
//           )}

         

//           <div className="form-control">
//             <label className="label">
//               When are you available for sessions?
//             </label>

//             <div className="flex gap-4">
//               <input
//                 type="date"
//                 {...register("availableDate", { required: true })}
//                 className="input input-bordered w-full"
//               />
//               <input
//                 type="time"
//                 {...register("availableTime", { required: true })}
//                 className="input input-bordered w-full"
//               />
//             </div>
//           </div>

//           <div className="form-control">
//             <label className="label">How many sessions per week?</label>
//             <select
//               {...register("sessionsPerWeek", {
//                 required: "Sessions per week are required",
//               })}
//               className="select select-bordered"
//             >
//               <option value="">Select number</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5+">5+</option>
//             </select>
//             {errors.sessionsPerWeek && (
//               <span className="text-error">
//                 {errors.sessionsPerWeek.message}
//               </span>
//             )}
//           </div>

//           <div className="form-control">
//             <label className="label">
//               What's your budget or expected hourly rate?
//             </label>
//             <input
//               type="number"
//               {...register("budget")}
//               className="input input-bordered"
//               placeholder="Enter amount"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label">Are you open to negotiation?</label>
//             <select
//               {...register("openToNegotiation", {
//                 required: "Negotiation preference is required",
//               })}
//               className="select select-bordered"
//             >
//               <option value="">Select option</option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//             {errors.openToNegotiation && (
//               <span className="text-error">
//                 {errors.openToNegotiation.message}
//               </span>
//             )}
//           </div>

//           <div className="form-control">
//             <label className="label">When do you want to start?</label>
//             <input
//               type="date"
//               {...register("startDate")}
//               className="input input-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label">
//               Do you have a deadline or target exam date?
//             </label>
//             <input
//               type="date"
//               {...register("deadline")}
//               className="input input-bordered"
//             />
//           </div>

//           <div className="form-control">
//             <label className="label">
//               What type of help are you looking for?
//             </label>
//             <div className="flex gap-4 flex-wrap">
//               <label>
//                 <input
//                   type="checkbox"
//                   {...register("helpType")}
//                   value="Exam Prep"
//                 />{" "}
//                 Exam Prep
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   {...register("helpType")}
//                   value="Homework"
//                 />{" "}
//                 Homework
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   {...register("helpType")}
//                   value="Concept Clarity"
//                 />{" "}
//                 Concept Clarity
//               </label>
//             </div>
//           </div>

//           <div className="form-control">
//             <label className="label">Anything else we should know?</label>
//             <textarea
//               {...register("additionalNotes")}
//               className="textarea textarea-bordered"
//               placeholder="Enter additional notes"
//             />
//           </div>

//           <div className="form-control mt-4">
//             <button
//               type="submit"
//               className="btn btn-primary"
//               disabled={mutation.isLoading}
//             >
//               {mutation.isLoading ? "Posting..." : "Post Job"}
//             </button>
//           </div>
//         </form>

       
//       </div>
//     </motion.div>
//   );
// };

// export default PostJob;


import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useMutation } from '@tanstack/react-query';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PostJob = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const mutation = useMutation({
    mutationFn: (data) => axiosSecure.post('/jobs', data),
    onSuccess: () => {
      Swal.fire('Success', 'Job posted successfully!', 'success');
      reset();
      navigate('/services');
    },
    onError: (error) => {
      if (error.response?.status === 402) {
        Swal.fire({
          title: 'Payment Required',
          text: 'You have posted 3 jobs. Please pay a $10 fee to continue.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Pay $10',
        });
      } else {
        Swal.fire('Error', error.response?.data?.message || 'Failed to post job', 'error');
      }
    },
  });

  const onSubmit = (data) => {
    const jobData = {
      ...data,
      email: user?.email,
      postedAt: new Date(),
    };
    mutation.mutate(jobData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#005482]">Post a Teaching Job</h2>
          <p className="mt-2 text-gray-600">Fill out the details below to find your perfect tutor</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Subject Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#005482] mb-1">
                  Subject
                </label>
                <select
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70C5D7] focus:border-[#70C5D7]"
                >
                  <option value="">Select a subject</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <span className="text-[#DA3A60] text-sm mt-1">{errors.subject.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#005482] mb-1">
                  Grade Level
                </label>
                <select
                  {...register('gradeLevel', { required: 'Grade level is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70C5D7] focus:border-[#70C5D7]"
                >
                  <option value="">Select grade/level</option>
                  <option value="Grade 1-5">Grade 1-5</option>
                  <option value="Grade 6-8">Grade 6-8</option>
                  <option value="Grade 9-12">Grade 9-12</option>
                  <option value="College">College</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gradeLevel && <span className="text-[#DA3A60] text-sm mt-1">{errors.gradeLevel.message}</span>}
              </div>
            </div>

            {/* Topics and Goals */}
            <div>
              <label className="block text-sm font-medium text-[#005482] mb-1">
                Topics or Goals
              </label>
              <textarea
                {...register('topicsGoals', { required: 'Topics or goals are required' })}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70C5D7] focus:border-[#70C5D7]"
                placeholder="Describe the specific topics you need help with or your learning goals"
              />
              {errors.topicsGoals && <span className="text-[#DA3A60] text-sm mt-1">{errors.topicsGoals.message}</span>}
            </div>

            {/* Learning Mode and Location */}
            <div className="bg-[#70C5D7] bg-opacity-10 p-6 rounded-lg">
              <label className="block text-sm font-medium text-[#005482] mb-3">
                Preferred Mode of Learning
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    {...register('modeOfLearning', { required: 'Mode of learning is required' })}
                    value="Online"
                    className="mr-2"
                  />
                  <span>Online</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    {...register('modeOfLearning')}
                    value="Offline"
                    className="mr-2"
                  />
                  <span>Offline</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    {...register('modeOfLearning')}
                    value="Either"
                    className="mr-2"
                  />
                  <span>Either</span>
                </label>
              </div>
              {errors.modeOfLearning && <span className="text-[#DA3A60] text-sm mt-1">{errors.modeOfLearning.message}</span>}
            </div>

            {/* Schedule and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#005482] mb-1">
                  Sessions per Week
                </label>
                <select
                  {...register('sessionsPerWeek', { required: 'Sessions per week are required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70C5D7] focus:border-[#70C5D7]"
                >
                  <option value="">Select number</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
                {errors.sessionsPerWeek && <span className="text-[#DA3A60] text-sm mt-1">{errors.sessionsPerWeek.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#005482] mb-1">
                  Budget (per hour)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    {...register('budget')}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70C5D7] focus:border-[#70C5D7]"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            {/* Availability and Start Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#005482] mb-1">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  {...register('startDate')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70C5D7] focus:border-[#70C5D7]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#005482] mb-1">
                  Open to Negotiation
                </label>
                <select
                  {...register('openToNegotiation', { required: 'Negotiation preference is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70C5D7] focus:border-[#70C5D7]"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.openToNegotiation && <span className="text-[#DA3A60] text-sm mt-1">{errors.openToNegotiation.message}</span>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#DA3A60] text-white py-3 px-6 rounded-md hover:bg-[#c43255] transition-colors duration-200 font-medium"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PostJob;