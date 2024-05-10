import Link from 'next/link'
import Image from 'next/image'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside>
            <div>
                <div className="nav-head d-flex align-items-center justify-content-between">
                    <Link href="/" className="nav-brand">
                        <Image src="/images/logo.png" alt="logo" width={130} height={50} quality={100} />
                    </Link>
                </div>
                <div className="nav-body">
                    <div className="nav-body-top d-flex flex-column w-100 align-items-center">
                        <div className="nbt-profile-img-box rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                            <div className="nbt-profile-img ratio ratio-1x1 rounded-circle overflow-hidden">
                                <Image src="/images/avatars/avatar-2.jpg" alt="logo" fill className="w-100 h-100 object-fit-cover" />
                            </div>
                        </div>
                        <div className="profile-name mt-3 text-center">Johnson Emma</div>
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
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                        </svg>
                                    </div>
                                    <span> Feed </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#!" className="nav-link d-flex gap-3 align-items-center">
                                    <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                                    </div>
                                    <span> Explore </span>
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