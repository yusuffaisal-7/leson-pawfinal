


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const AddTutor = () => {
//   const axiosSecure = useAxiosSecure();
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       // Handle profile photo upload
//       let photoURL = '';
//       if (data.photo[0]) {
//         const formData = new FormData();
//         formData.append('image', data.photo[0]);
//         const imgRes = await fetch(image_hosting_api, {
//           method: 'POST',
//           body: formData,
//         });
//         const imgData = await imgRes.json();
//         if (imgData.success) {
//           photoURL = imgData.data.display_url;
//         } else {
//           throw new Error('Image upload failed');
//         }
//       }

//       // Handle profile video upload (optional, assuming similar upload logic)
//       let videoURL = '';
//       if (data.video[0]) {
//         const videoFormData = new FormData();
//         videoFormData.append('video', data.video[0]);
//         // Note: ImgBB does not support videos; you may need a different service (e.g., Cloudinary, Vimeo)
//         // Placeholder logic; replace with actual video upload API
//         const videoRes = await fetch('https://api.video-host.com/upload', {
//           method: 'POST',
//           body: videoFormData,
//         });
//         const videoData = await videoRes.json();
//         if (videoData.success) {
//           videoURL = videoData.data.url;
//         }
//       }

//       // Structure tutor data
//       const tutorData = {
//         name: data.name,
//         dateOfBirth: data.dateOfBirth,
//         gender: data.gender,
//         contactNumber: data.contactNumber,
//         email: data.email,
//         subjects: data.subjects.split(',').map(subject => subject.trim()),
//         educationalQualifications: data.educationalQualifications,
//         experience: parseInt(data.experience),
//         certifications: data.certifications.split(',').map(cert => cert.trim()),
//         institution: data.institution,
//         teachingMode: data.teachingMode,
//         availability: data.availability.split(',').map(slot => slot.trim()),
//         hourlyRate: parseFloat(data.hourlyRate) || null,
//         address: {
//           city: data.city,
//           state: data.state,
//           country: data.country,
//           permanentAddress: data.permanentAddress || '',
//           postalCode: data.postalCode,
//         },
//         bio: data.bio,
//         photoURL,
//         videoURL,
//         status: 'active',
//       };

//       // Submit tutor data
//       const res = await axiosSecure.post('/tutors', tutorData);
//       if (res.data.insertedId) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Tutor Added Successfully',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         reset();
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to Add Tutor',
//         text: error.response?.data?.message || 'An error occurred',
//       });
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">Add a New Tutor</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* Basic Information */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold">Basic Information</h3>
//           <div className="form-control">
//             <label className="label">Full Name</label>
//             <input {...register('name', { required: true })} className="input input-bordered" placeholder="Tutor's Name" />
//           </div>
//           <div className="form-control">
//             <label className="label">Date of Birth</label>
//             <input {...register('dateOfBirth', { required: true })} type="date" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">Gender</label>
//             <select {...register('gender', { required: true })} className="select select-bordered">
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="form-control">
//             <label className="label">Contact Number</label>
//             <input {...register('contactNumber', { required: true })} type="tel" className="input input-bordered" placeholder="Contact Number" />
//           </div>
//           <div className="form-control">
//             <label className="label">Email Address</label>
//             <input {...register('email', { required: true })} type="email" className="input input-bordered" placeholder="Tutor's Email" />
//           </div>
//           <div className="form-control">
//             <label className="label">Profile Photo</label>
//             <input {...register('photo')} type="file" accept="image/*" className="file-input file-input-bordered" />
//           </div>
//         </div>

//         {/* Professional Information */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold">Professional Information</h3>
//           <div className="form-control">
//             <label className="label">Subjects / Courses Taught (comma-separated)</label>
//             <input {...register('subjects', { required: true })} className="input input-bordered" placeholder="e.g., Math, Science" />
//           </div>
//           <div className="form-control">
//             <label className="label">Educational Qualifications</label>
//             <textarea {...register('educationalQualifications', { required: true })} className="textarea textarea-bordered" placeholder="e.g., B.Sc. in Mathematics, M.Ed." />
//           </div>
//           <div className="form-control">
//             <label className="label">Years of Experience</label>
//             <input {...register('experience', { required: true })} type="number" className="input input-bordered" placeholder="Years of Experience" />
//           </div>
//           <div className="form-control">
//             <label className="label">Certifications / Licenses (comma-separated)</label>
//             <input {...register('certifications')} className="input input-bordered" placeholder="e.g., Teaching License, TESOL" />
//           </div>
//           <div className="form-control">
//             <label className="label">Institution / School Affiliation</label>
//             <input {...register('institution')} className="input input-bordered" placeholder="e.g., XYZ University" />
//           </div>
//           <div className="form-control">
//             <label className="label">Teaching Mode</label>
//             <select {...register('teachingMode', { required: true })} className="select select-bordered">
//               <option value="">Select Mode</option>
//               <option value="Online">Online</option>
//               <option value="Offline">Offline</option>
//               <option value="Both">Both</option>
//             </select>
//           </div>
//           <div className="form-control">
//             <label className="label">Availability Schedule (comma-separated)</label>
//             <input {...register('availability', { required: true })} className="input input-bordered" placeholder="e.g., Mon 9-11 AM, Wed 2-4 PM" />
//           </div>
//           <div className="form-control">
//             <label className="label">Hourly Rate (optional)</label>
//             <input {...register('hourlyRate')} type="number" step="0.01" className="input input-bordered" placeholder="e.g., 50.00" />
//           </div>
//         </div>

//         {/* Address Information */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold">Address Information</h3>
//           <div className="form-control">
//             <label className="label">City</label>
//             <input {...register('city', { required: true })} className="input input-bordered" placeholder="City" />
//           </div>
//           <div className="form-control">
//             <label className="label">State</label>
//             <input {...register('state', { required: true })} className="input input-bordered" placeholder="State" />
//           </div>
//           <div className="form-control">
//             <label className="label">Country</label>
//             <input {...register('country', { required: true })} className="input input-bordered" placeholder="Country" />
//           </div>
//           <div className="form-control">
//             <label className="label">Permanent Address (optional)</label>
//             <textarea {...register('permanentAddress')} className="textarea textarea-bordered" placeholder="Permanent Address" />
//           </div>
//           <div className="form-control">
//             <label className="label">Zip / Postal Code</label>
//             <input {...register('postalCode', { required: true })} className="input input-bordered" placeholder="Postal Code" />
//           </div>
//         </div>

//         {/* Other Information */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold">Other Information</h3>
//           <div className="form-control">
//             <label className="label">Short Bio / About Me</label>
//             <textarea {...register('bio', { required: true })} className="textarea textarea-bordered" placeholder="Tell us about yourself" />
//           </div>
//           <div className="form-control">
//             <label className="label">Profile Video (optional)</label>
//             <input {...register('video')} type="file" accept="video/*" className="file-input file-input-bordered" />
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary">Add Tutor</button>
//       </form>
//     </div>
//   );
// };

// export default AddTutor;


import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTutor = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Handle profile photo upload
      let photoURL = '';
      if (data.photo[0]) {
        const formData = new FormData();
        formData.append('image', data.photo[0]);
        const imgRes = await fetch(image_hosting_api, {
          method: 'POST',
          body: formData,
        });
        const imgData = await imgRes.json();
        if (imgData.success) {
          photoURL = imgData.data.display_url;
        } else {
          throw new Error('Image upload failed');
        }
      }

      // Structure tutor data
      const tutorData = {
        name: data.name,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        contactNumber: data.contactNumber,
        email: data.email,
        subjects: data.subjects.split(',').map(subject => subject.trim()),
        educationalQualifications: data.educationalQualifications,
        experience: parseInt(data.experience),
        certifications: data.certifications.split(',').map(cert => cert.trim()),
        institution: data.institution,
        teachingMode: data.teachingMode,
        availability: data.availability.split(',').map(slot => slot.trim()),
        hourlyRate: parseFloat(data.hourlyRate) || null,
        address: {
          city: data.city,
          state: data.state,
          country: data.country,
          permanentAddress: data.permanentAddress || '',
          postalCode: data.postalCode,
        },
        bio: data.bio,
        photoURL,
        status: 'active',
      };

      // Submit tutor data
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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Add a New Tutor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Information</h3>
          <div className="form-control">
            <label className="label">Full Name</label>
            <input {...register('name', { required: true })} className="input input-bordered" placeholder="Tutor's Name" />
          </div>
          <div className="form-control">
            <label className="label">Date of Birth</label>
            <input {...register('dateOfBirth', { required: true })} type="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">Gender</label>
            <select {...register('gender', { required: true })} className="select select-bordered">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">Contact Number</label>
            <input {...register('contactNumber', { required: true })} type="tel" className="input input-bordered" placeholder="Contact Number" />
          </div>
          <div className="form-control">
            <label className="label">Email Address</label>
            <input {...register('email', { required: true })} type="email" className="input input-bordered" placeholder="Tutor's Email" />
          </div>
          <div className="form-control">
            <label className="label">Profile Photo</label>
            <input {...register('photo')} type="file" accept="image/*" className="file-input file-input-bordered" />
          </div>
        </div>

        {/* Professional Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Professional Information</h3>
          <div className="form-control">
            <label className="label">Subjects / Courses Taught (comma-separated)</label>
            <input {...register('subjects', { required: true })} className="input input-bordered" placeholder="e.g., Math, Science" />
          </div>
          <div className="form-control">
            <label className="label">Educational Qualifications</label>
            <textarea {...register('educationalQualifications', { required: true })} className="textarea textarea-bordered" placeholder="e.g., B.Sc. in Mathematics, M.Ed." />
          </div>
          <div className="form-control">
            <label className="label">Years of Experience</label>
            <input {...register('experience', { required: true })} type="number" className="input input-bordered" placeholder="Years of Experience" />
          </div>
          <div className="form-control">
            <label className="label">Certifications / Licenses (comma-separated)</label>
            <input {...register('certifications')} className="input input-bordered" placeholder="e.g., Teaching License, TESOL" />
          </div>
          <div className="form-control">
            <label className="label">Institution / School Affiliation</label>
            <input {...register('institution')} className="input input-bordered" placeholder="e.g., XYZ University" />
          </div>
          <div className="form-control">
            <label className="label">Teaching Mode</label>
            <select {...register('teachingMode', { required: true })} className="select select-bordered">
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">Availability Schedule (comma-separated)</label>
            <input {...register('availability', { required: true })} className="input input-bordered" placeholder="e.g., Mon 9-11 AM, Wed 2-4 PM" />
          </div>
          <div className="form-control">
            <label className="label">Hourly Rate (optional)</label>
            <input {...register('hourlyRate')} type="number" step="0.01" className="input input-bordered" placeholder="e.g., 50.00" />
          </div>
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Address Information</h3>
          <div className="form-control">
            <label className="label">City</label>
            <input {...register('city', { required: true })} className="input input-bordered" placeholder="City" />
          </div>
          <div className="form-control">
            <label className="label">State</label>
            <input {...register('state', { required: true })} className="input input-bordered" placeholder="State" />
          </div>
          <div className="form-control">
            <label className="label">Country</label>
            <input {...register('country', { required: true })} className="input input-bordered" placeholder="Country" />
          </div>
          <div className="form-control">
            <label className="label">Permanent Address (optional)</label>
            <textarea {...register('permanentAddress')} className="textarea textarea-bordered" placeholder="Permanent Address" />
          </div>
          <div className="form-control">
            <label className="label">Zip / Postal Code</label>
            <input {...register('postalCode', { required: true })} className="input input-bordered" placeholder="Postal Code" />
          </div>
        </div>

        {/* Other Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Other Information</h3>
          <div className="form-control">
            <label className="label">Short Bio / About Me</label>
            <textarea {...register('bio', { required: true })} className="textarea textarea-bordered" placeholder="Tell us about yourself" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Add Tutor</button>
      </form>
    </div>
  );
};

export default AddTutor;