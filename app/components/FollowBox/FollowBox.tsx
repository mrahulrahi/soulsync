import './FollowBox.css'

const FollowBox = () => {
  return (
    <div className="follow-box overflow-hidden">
      <div className="follow-box-head d-flex justify-content-between">
        <h4>Who to follow</h4>
        <a href="#!" className="btn-link">Refresh</a>
      </div>
      <div className="follow-box-body">
        <div className="follow-box-row d-flex">
          <div className="follow-box-avatar flex-shrink-0 rounded-circle overflow-hidden"><img src="/images/avatars/avatar-2.jpg" alt="" /></div>
          <div className="follow-box-details ms-3">
            <h5>Johnson Emma</h5>
            <p>Australia</p>
          </div>
          <div className="follow-box-cta ms-auto"><a href="#!" className="btn btn-outline">Follow</a></div>
        </div>

        <div className="follow-box-row d-flex">
          <div className="follow-box-avatar flex-shrink-0 rounded-circle overflow-hidden"><img src="/images/avatars/avatar-2.jpg" alt="" /></div>
          <div className="follow-box-details ms-3">
            <h5>Johnson Emma</h5>
            <p>Australia</p>
          </div>
          <div className="follow-box-cta ms-auto"><a href="#!" className="btn btn-outline">Follow</a></div>
        </div>

        <div className="follow-box-row d-flex">
          <div className="follow-box-avatar flex-shrink-0 rounded-circle overflow-hidden"><img src="/images/avatars/avatar-2.jpg" alt="" /></div>
          <div className="follow-box-details ms-3">
            <h5>Johnson Emma</h5>
            <p>Australia</p>
          </div>
          <div className="follow-box-cta ms-auto"><a href="#!" className="btn btn-outline">Follow</a></div>
        </div>

        <div className="follow-box-row d-flex">
          <div className="follow-box-avatar flex-shrink-0 rounded-circle overflow-hidden"><img src="/images/avatars/avatar-2.jpg" alt="" /></div>
          <div className="follow-box-details ms-3">
            <h5>Johnson Emma</h5>
            <p>Australia</p>
          </div>
          <div className="follow-box-cta ms-auto"><a href="#!" className="btn btn-outline">Follow</a></div>
        </div>
      </div>

    </div>
  )
}

export default FollowBox