import React from 'react';
import './PostCard.css';
import Image from 'next/image';
import { FaEllipsis, FaRegImage, FaVideo, FaShareNodes, FaRegHeart, FaRegComment, FaCommentSlash, FaRegStar, FaTrashCan } from "react-icons/fa6";
import Link from 'next/link';
import { FaRegEdit } from 'react-icons/fa';

interface PostCardProps {
    singlePost: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ singlePost }) => {
    return (
        <div className="mt-5 mx-auto">
            <div className="post-card shadow-sm rounded border-0 bg-white">
                <div className="post-card-header d-flex justify-content-between align-items-center bg-white">
                    <div className="d-flex align-items-center gap-2">
                        <a href="#" className="post-profile-img-box rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                            <div className="post-profile-img ratio ratio-1x1 rounded-circle overflow-hidden">
                                <Image src="/images/avatars/avatar-2.jpg" alt="profile" fill className="w-100 h-100 object-fit-cover" />
                            </div>
                        </a>
                        <span className="ml-3 font-weight-bold">Johnson Emma</span>
                    </div>
                    <div className="dropdown">
                        <button className="text-dark border-0 bg-transparent" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaEllipsis />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#"><FaShareNodes /> Share</a>
                            <a className="dropdown-item" href="#"><FaRegEdit /> Edit Post</a>
                            <a className="dropdown-item" href="#"><FaCommentSlash /> Disable comments</a>
                            <a className="dropdown-item" href="#"><FaRegStar /> Add favorites</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#"><FaTrashCan /> Delete</a>
                        </div>
                    </div>
                </div>

                <div className="post-card-body">
                    {singlePost ? (


                        <a href="/images/post/img4.jpg" data-toggle="lightbox">
                            <img src="/images/post/img4.jpg" className="w-100 h-100 object-fit-cover" alt="Post Image" />
                        </a>


                    ) : (

                        <div className="p-2">
                            <div className="row g-2">
                                <div className="col-12">
                                    <Link href="/images/post/img9.jpg" className="w-100">

                                        <img src="/images/post/img9.jpg" className="w-100 h-100 object-fit-cover rounded" alt="Post Image" />

                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link href="/images/post/img10.jpg" className="w-100">

                                        <img src="/images/post/img10.jpg" className="w-100 h-100 object-fit-cover rounded" alt="Post Image" />

                                    </Link>
                                </div>
                                <div className="col-6 position-relative">
                                    <Link href="/images/post/img11.jpg" className="w-100">

                                        <img src="/images/post/img11.jpg" className="w-100 h-100 object-fit-cover rounded" alt="Post Image" />
                                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white bg-dark bg-opacity-50 rounded">
                                            + 15 more
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

                <div className="post-card-footer">
                    <div className="d-flex justify-content-between mb-3">
                        <a href="#" className="d-flex align-items-center gap-2">
                        <FaRegHeart /> Like
                        </a>
                        <a href="#" className="d-flex align-items-center gap-2">
                        <FaRegComment /> Comment
                        </a>
                        <a href="#" className="d-flex align-items-center gap-2 ml-auto">
                        <FaShareNodes /> Share
                        </a>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <img src="/images/avatars/avatar-1.jpg" className="w-6 rounded-circle border border-white" alt="Avatar" width="30" />
                        <img src="/images/avatars/avatar-4.jpg" className="w-6 rounded-circle border border-white" alt="Avatar" width="30" />
                        <img src="/images/avatars/avatar-2.jpg" className="w-6 rounded-circle border border-white" alt="Avatar" width="30" />
                        <span className="ml-2">Liked <strong>Johnson</strong> and <strong>209 Others</strong></span>
                    </div>
                    <div className="border-top pt-3">
                        <div className="d-flex mb-3">
                            <img src="/images/avatars/avatar-1.jpg" className="w-10 h-10 flex-shrink-0 rounded-circle border border-white" alt="Avatar" width="40" />
                            <div className="bg-light text-dark p-2 rounded ml-2 flex-grow-1 position-relative">
                                <p>In ut odio libero vulputate <i className="fas fa-heart"></i> <i className="fas fa-grin-tongue-wink"></i></p>
                                <div className="position-absolute top-0 start-0 w-2 h-2 bg-light transform rotate-45"></div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src="/images/avatars/avatar-1.jpg" className="w-10 h-10 flex-shrink-0 rounded-circle border border-white" alt="Avatar" width="40" />
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
        </div >
    );
};

export default PostCard;
