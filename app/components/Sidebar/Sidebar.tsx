'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Sidebar.css'

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);

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

    return (
        <aside className="nav-sidebar flex-shrink-0 h-100">
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
                            {/* Nav items here */}
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
