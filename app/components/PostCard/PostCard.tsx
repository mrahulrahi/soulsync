import React from 'react';
import './PostCard.css';
import Image from 'next/image';
import { FaEllipsis, FaRegImage, FaVideo, FaShareNodes } from "react-icons/fa6";
import Link from 'next/link';

interface PostCardProps {
    singlePost: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ singlePost }) => {
    return (
        <div className="mt-4">
            {singlePost ? (
                <div className="post-card shadow-sm rounded border-0 bg-white">
                    <div className="post-card-header d-flex justify-content-between align-items-center bg-white">
                        <div className="d-flex align-items-center">
                            <a href="#" className="post-profile-img-box rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                                <div className="post-profile-img ratio ratio-1x1 rounded-circle overflow-hidden">
                                    <Image src="/images/avatars/avatar-2.jpg" alt="profile" fill className="w-100 h-100 object-fit-cover" />
                                </div>
                            </a>
                            <span className="ml-3 font-weight-bold">Johnson Emma</span>
                        </div>
                        <div className="dropdown">
                            <button className="text-dark dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaEllipsis />
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#"><FaShareNodes /> Share</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-edit mr-2"></i> Edit Post</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-comment-slash mr-2"></i> Disable comments</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-heart mr-2"></i> Add favorites</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i className="fas fa-trash-alt mr-2"></i> Delete</a>
                            </div>
                        </div>
                    </div>
                    <div className="post-card-body">
                        <a href="/images/post/img4.jpg" data-toggle="lightbox">
                            <img src="/images/post/img4.jpg" className="img-fluid" alt="Post Image" />
                        </a>
                    </div>
                    <div className="post-card-footer">
                        <div className="d-flex justify-content-between mb-3">
                            <a href="#" className="d-flex align-items-center">
                                <i className="fas fa-thumbs-up mr-2"></i> Like
                            </a>
                            <a href="#" className="d-flex align-items-center">
                                <i className="fas fa-comment mr-2"></i> Comment
                            </a>
                            <a href="#" className="d-flex align-items-center ml-auto">
                                <i className="fas fa-share mr-2"></i> Share
                            </a>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/images/avatars/avatar-1.jpg" className="rounded-circle border border-white" alt="Avatar" width="30" />
                            <img src="/images/avatars/avatar-4.jpg" className="rounded-circle border border-white ml-n2" alt="Avatar" width="30" />
                            <img src="/images/avatars/avatar-2.jpg" className="rounded-circle border border-white ml-n2" alt="Avatar" width="30" />
                            <span className="ml-2">Liked <strong>Johnson</strong> and <strong>209 Others</strong></span>
                        </div>
                        <div className="border-top pt-3">
                            <div className="d-flex mb-3">
                                <img src="/images/avatars/avatar-1.jpg" className="rounded-circle border border-white" alt="Avatar" width="40" />
                                <div className="bg-light text-dark p-2 rounded ml-2 flex-grow-1 position-relative">
                                    <p>In ut odio libero vulputate <i className="fas fa-heart"></i> <i className="fas fa-grin-tongue-wink"></i></p>
                                    <div className="position-absolute top-0 start-0 w-2 h-2 bg-light transform rotate-45"></div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <img src="/images/avatars/avatar-1.jpg" className="rounded-circle border border-white" alt="Avatar" width="40" />
                                <div className="bg-light text-dark p-2 rounded ml-2 flex-grow-1 position-relative">
                                    <p>Nam liber tempor cum soluta nobis eleifend option <i className="fas fa-grin-tongue-wink-alt"></i></p>
                                    <div className="position-absolute top-0 start-0 w-2 h-2 bg-light transform rotate-45"></div>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Add your Comment..." />
                            <div className="input-group-append d-flex gap-3">
                                <a className="" href="#"><FaRegImage /></a>
                                <a className="" href="#"><FaVideo /></a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (

                <div className="bg-white shadow rounded-md">
                    {/* Post Header */}
                    <div className="d-flex justify-content-between align-items-center px-4 py-3">
                        <div className="d-flex align-items-center">
                            <Link href="#">
                                    <div className="bg-gradient p-1 rounded-circle">
                                        <img src="/images/avatars/avatar-2.jpg" className="border rounded-circle w-8 h-8" alt="Avatar" />
                                    </div>
                            </Link>
                            <span className="ms-3 fw-semibold">Johnson Emma</span>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#"><i className="bi bi-share me-2"></i> Share</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-pencil me-2"></i> Edit Post</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-chat-dots me-2"></i> Disable comments</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-heart me-2"></i> Add favorites</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-trash me-2"></i> Delete</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Post Images */}
                    <div className="p-2">
                        <div className="row g-2">
                            <div className="col-12">
                                <Link href="/images/post/img9.jpg">
                                 
                                        <img src="/images/post/img9.jpg" className="img-fluid rounded" alt="Post Image" />
                                   
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link href="/images/post/img10.jpg">
                                 
                                        <img src="/images/post/img10.jpg" className="img-fluid rounded" alt="Post Image" />
                                  
                                </Link>
                            </div>
                            <div className="col-6 position-relative">
                                <Link href="/images/post/img11.jpg">
                                 
                                        <img src="/images/post/img11.jpg" className="img-fluid rounded" alt="Post Image" />
                                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white bg-dark bg-opacity-50 rounded">
                                            + 15 more
                                        </div>
                                  
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Post Interactions */}
                    <div className="py-3 px-4">
                        <div className="d-flex align-items-center mb-3">
                            <a href="#" className="d-flex align-items-center text-dark me-3">
                                <i className="bi bi-heart me-2"></i> Like
                            </a>
                            <a href="#" className="d-flex align-items-center text-dark me-3">
                                <i className="bi bi-chat me-2"></i> Comment
                            </a>
                            <a href="#" className="d-flex align-items-center text-dark ms-auto">
                                <i className="bi bi-share me-2"></i> Share
                            </a>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/images/avatars/avatar-1.jpg" className="w-6 h-6 rounded-circle border border-white me-1" alt="Avatar" />
                            <img src="/images/avatars/avatar-4.jpg" className="w-6 h-6 rounded-circle border border-white me-1" alt="Avatar" />
                            <img src="/images/avatars/avatar-2.jpg" className="w-6 h-6 rounded-circle border border-white" alt="Avatar" />
                            <div className="ms-2">Liked <strong>Johnson</strong> and <strong>209 Others</strong></div>
                        </div>

                        {/* Comments */}
                        <div className="border-top pt-4">
                            <div className="d-flex mb-3">
                                <img src="/images/avatars/avatar-1.jpg" className="w-10 h-10 rounded-circle me-3" alt="Avatar" />
                                <div className="bg-light p-2 rounded position-relative">
                                    <p className="mb-0">In ut odio libero vulputate <i className="bi bi-heart"></i> <i className="bi bi-laugh"></i></p>
                                    <div className="position-absolute top-0 start-0 w-3 h-3 bg-light transform rotate-45"></div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <img src="/images/avatars/avatar-1.jpg" className="w-10 h-10 rounded-circle me-3" alt="Avatar" />
                                <div className="bg-light p-2 rounded position-relative">
                                    <p className="mb-0">Nam liber tempor cum soluta nobis eleifend option <i className="bi bi-laugh"></i></p>
                                    <div className="position-absolute top-0 start-0 w-3 h-3 bg-light transform rotate-45"></div>
                                </div>
                            </div>
                        </div>

                        {/* Comment Input */}
                        <div className="bg-light rounded-pill position-relative mt-3">
                            <input type="text" placeholder="Add your Comment.." className="bg-transparent form-control border-0 rounded-pill" />
                            <div className="position-absolute end-0 bottom-0 d-flex align-items-center pe-3 text-xl">
                                <a href="#" className="me-2"><i className="bi bi-image"></i></a>
                                <a href="#"><i className="bi bi-film"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default PostCard;
