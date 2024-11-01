'use client';

import React from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';
import Link from 'next/link';

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Please enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special character'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const SignUp = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, values)
        .then((response) => {
          toast.success('User Registered Successfully');
          resetForm();
          router.push('./login');
        })
        .catch((err) => {
          if (err.response?.data?.code === 11000) {
            toast.error('Email already exists');
          } else {
            toast.error('Registration failed');
          }
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8FFF1] to-[#F8FFF8] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 relative">
              <Image src="/logo.svg" alt="BlinkFind Logo" layout="fill" objectFit="contain" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#130F26] mb-6">
            Create Your Account
          </h2>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#130F26]">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                onChange={formik.handleChange}
                value={formik.values.name}
                className="focus:ring-[#51B504] focus:border-[#51B504] block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-xs text-red-600 mt-2">{formik.errors.name}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#130F26]">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                className="focus:ring-[#51B504] focus:border-[#51B504] block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-xs text-red-600 mt-2">{formik.errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#130F26]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                className="focus:ring-[#51B504] focus:border-[#51B504] block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-xs text-red-600 mt-2">{formik.errors.password}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#130F26]">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                className="focus:ring-[#51B504] focus:border-[#51B504] block w-full sm:text-sm border-gray-300 rounded-md"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <p className="text-xs text-red-600 mt-2">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#51B504] hover:bg-[#3c8e04] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#51B504]"
              disabled={formik.isSubmitting}
            >
              Sign Up
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
            Already have an Account?{' '}
            <Link href="/login" className="border-b text-blue-400 border-gray-500 border-dotted">
              Sign In
            </Link>
          </p>  
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
