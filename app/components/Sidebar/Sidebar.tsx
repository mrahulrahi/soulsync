'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Sidebar.css'

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(prevMode => !prevMode);
  }

  // Update body class based on dark mode state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Cleanup function to remove the class on unmount
    return () => {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Handle clicks outside the sidebar
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      // Remove any existing "open-menu" class from body
      document.body.classList.remove('open-menu', 'overflow-hidden');
    }
  }

  // Add event listener on component mount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <aside className="nav-sidebar flex-shrink-0 h-100" ref={sidebarRef}>  {/* Assign ref to sidebar element */}
  <div>
                <div className="nav-head d-flex align-items-center justify-content-between">
                    <Link href="/" className="nav-brand">
                        <Image src="/images/logo.svg" alt="logo" width={130} height={50} quality={100} />
                    </Link>
                    <button 
                        className="dark-mode-btn border-0 bg-transparent" 
                        onClick={handleDarkModeToggle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17.45 12.46a7 7 0 0 0-1-9.83a7.09 7.09 0 0 0-5.92-1.4a7 7 0 0 0-4 11.15a4.76 4.76 0 0 1 1.08 2.86v.29a2 2 0 0 0-.61 1.4v2a2 2 0 0 0 2 2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1a2 2 0 0 0 2-2v-2a2 2 0 0 0-.57-1.4v-.43a4.26 4.26 0 0 1 1.02-2.64M9 18.93v-2h6v2Zm6.89-7.72a6.18 6.18 0 0 0-1.46 3.72H9.56a6.67 6.67 0 0 0-1.5-3.78a5 5 0 0 1 2.84-8A5 5 0 0 1 17 8.07a4.92 4.92 0 0 1-1.11 3.14"/>
                        </svg>
                    </button>
                </div>
                <div className="nav-body">
                    <div className="nav-body-top d-flex flex-column w-100 align-items-center">
                        <div className="nbt-profile-img-box rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                            <div className="nbt-profile-img ratio ratio-1x1 rounded-circle overflow-hidden">
                                <Image src="/images/avatars/avatar-2.jpg" alt="logo" fill className="w-100 h-100 object-fit-cover" />
                            </div>
                        </div>
                        <div className="profile-name text-center">Johnson Emma</div>
                        <ul className="profile-details d-flex justify-content-around mt-4 w-100">
                            <li>
                                <h6>Post</h6>
                                <p>130</p>
                            </li>
                            <li>
                                <h6>Following</h6>
                                <p>1,230</p>
                            </li>
                            <li>
                                <h6>Followers</h6>
                                <p>8,430</p>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-body-bottom">
                    <nav className="nav-list">
                            <div className="nav-item">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                        </svg>
                                    </div>
                                    <span> Feed </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                    <span> Explore </span>
                                </a>
                            </div>
                            <div className="nav-item active">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.15 2.86a2.89 2.89 0 0 0-3-.71L4 6.88a2.9 2.9 0 0 0-.12 5.47l5.24 2a.93.93 0 0 1 .53.52l2 5.25A2.87 2.87 0 0 0 14.36 22h.07a2.88 2.88 0 0 0 2.69-2l4.73-14.17a2.89 2.89 0 0 0-.7-2.97M20 5.2l-4.78 14.18a.88.88 0 0 1-.84.62a.92.92 0 0 1-.87-.58l-2-5.25a2.91 2.91 0 0 0-1.67-1.68l-5.25-2A.9.9 0 0 1 4 9.62a.88.88 0 0 1 .62-.84L18.8 4.05A.91.91 0 0 1 20 5.2" /></svg>
                                    </div>
                                    <span> Message <span className="nav-tag"> 3</span></span>
                                  
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                                        </svg>
                                    </div>
                                    <span> Trending </span> 
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 7.82a1.25 1.25 0 0 0 0-.19l-2-5A1 1 0 0 0 19 2H5a1 1 0 0 0-.93.63l-2 5a1.25 1.25 0 0 0 0 .19A.58.58 0 0 0 2 8a4 4 0 0 0 2 3.4V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.56A4 4 0 0 0 22 8a.58.58 0 0 0 0-.18M13 20h-2v-4h2Zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6v-8a4 4 0 0 0 3-1.38a4 4 0 0 0 6 0A4 4 0 0 0 18 12Zm0-10a2 2 0 0 1-2-2a1 1 0 0 0-2 0a2 2 0 0 1-4 0a1 1 0 0 0-2 0a2 2 0 0 1-4 .15L5.68 4h12.64L20 8.15A2 2 0 0 1 18 10" /></svg>
                                    </div>
                                    <span> Marketplace </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <span> Settings </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <span> My Profile </span>
                                </a>
                            </div>
                            <div className="nav-hr my-2"></div>
                            <div className="nav-item">
                                <a href="/login" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </div>
                                    <span> Logout </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    </aside>
  )
}

export default Sidebar
