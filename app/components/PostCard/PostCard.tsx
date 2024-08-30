import React from 'react'
import './PostCard.css'

const PostCard = () => {
  return (

    
        <div className="container mt-4">
            <div className="card shadow-sm rounded border-0 bg-white">
              
                <div className="card-header d-flex justify-content-between align-items-center bg-white">
                    <div className="d-flex align-items-center">
                        <a href="#">
                            <div className="bg-gradient p-1 rounded-circle">
                                <img src="/images/avatars/avatar-2.jpg" className="border border-white rounded-circle w-30 h-30" alt="Avatar" />
                            </div>
                        </a>
                        <span className="ml-3 font-weight-bold">Johnson Emma</span>
                    </div>
                    <div className="dropdown">
                        <a className="text-dark" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#"><i className="fas fa-share-alt mr-2"></i> Share</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-edit mr-2"></i> Edit Post</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-comment-slash mr-2"></i> Disable comments</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-heart mr-2"></i> Add favorites</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#"><i className="fas fa-trash-alt mr-2"></i> Delete</a>
                        </div>
                    </div>
                </div>
    
                <div className="card-body">
                    <a href="/images/post/img4.jpg" data-toggle="lightbox">
                        <img src="/images/post/img4.jpg" className="img-fluid" alt="Post Image" />
                    </a>
                </div>
    
                <div className="card-footer">
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
                        <div className="input-group-append">
                            <a className="btn btn-outline-secondary" href="#"><i className="fas fa-image"></i></a>
                            <a className="btn btn-outline-secondary" href="#"><i className="fas fa-video"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    
  )
}

export default PostCard