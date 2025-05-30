import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are a dedicated tutoring platform connecting students with expert tutors. Our mission is to make learning accessible, personalized, and effective for everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At our core, we aim to empower students by providing access to quality education and support. We enable students to browse and filter tutors by subject or location, post job requests, and manage their learning journey seamlessly. For tutors, we offer tools to create listings, build public profiles, and apply to student requests, all while ensuring secure payments and admin oversight.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mobile-responsive platform for learning on the go</li>
              <li>Secure payment system with Stripe integration</li>
              <li>Role-based admin panel for user and content management</li>
              <li>Optional Zoom integration for video-based tutoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-12 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">For Students</h3>
            <p className="text-gray-700">
              Find tutors by subject or location, post job requests, and manage your profile with ease.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">For Tutors</h3>
            <p className="text-gray-700">
              Create listings, build your public profile, and apply to student requests anytime.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">For Admins</h3>
            <p className="text-gray-700">
              Manage users, verify tutors, monitor jobs, and track platform statistics securely.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether you're a student seeking help or a tutor ready to make an impact, we're here to support your journey.
        </p>
        <a
          href="/register"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default AboutUs;