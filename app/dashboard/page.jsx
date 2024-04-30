'use client'
// pages/dashboard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const router = useRouter();

  // Example: Check if user is authenticated, if not, redirect to login page
  useEffect(() => {
    const isLoggedIn = /* Logic to check if user is logged in */;
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return <div>Dashboard Page</div>;
};

export default DashboardPage;
