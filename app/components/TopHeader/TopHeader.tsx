import './TopHeader.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav className="py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center justify-content-center justify-content-sm-between">
                                <div className="search-box-group">
                                    <span className="search-icon d-flex align-items-center justify-content-center" id="basic-addon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                <div className="header-right d-flex align-items-center gap-4">
                                    <div className="dropdown upload-dropdown">
                                        <a className="btn btn-default" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Upload
                                        </a>

                                        <ul className="dropdown-menu">
                                            <div className="upload-head"><h4>Upload Video</h4></div>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <a className="notification-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                            </svg>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <div className="notification-head">Notification</div>
                                            <div className="notification-body">
                                                <div className="notification-row">
                                                    <a className="notification-box d-flex align-items-start" href="#">
                                                        <div className="avatar rounded-circle overflow-hidden flex-shrink-0">
                                                            <Image src="/images/avatars/avatar-2.jpg" alt="logo" width={32} height={32} quality={100} />
                                                        </div>
                                                        <div>
                                                            <div><strong>Adrian Mohani</strong>  Lorem ipsum dolor cursus
                                                                <span className="text-link"> Adipiscing massa convallis  </span>
                                                            </div>
                                                            <div className="notification-time"> 2 hours ago </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="notification-footer">
                                                <a href="#!" className="">See all</a>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <a className="notification-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                            </svg>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <div className="notification-head">Messages</div>
                                            <div className="notification-body">
                                                <div className="notification-row">
                                                    <a className="notification-box d-flex align-items-start" href="#">
                                                        <div className="avatar rounded-circle overflow-hidden flex-shrink-0">
                                                            <Image src="/images/avatars/avatar-2.jpg" alt="logo" width={32} height={32} quality={100} />
                                                        </div>
                                                        <div>
                                                            <div className="d-flex justify-content-between"><strong>Adrian Mohani</strong>   <div className="notification-time"> 2 hours ago </div></div>
                                                            <div> Lorem ipsum dolor cursus Adipiscing massa convallis </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="notification-footer">
                                                <a href="#!" className="">See all</a>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <a className="avatar rounded-circle overflow-hidden" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Image src="/images/avatars/avatar-2.jpg" alt="logo" width={32} height={32} quality={100} />
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Account setting</a></li>
                                            <li><a className="dropdown-item" href="#">Payments</a></li>
                                            <li><a className="dropdown-item" href="#">Help</a></li>
                                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header