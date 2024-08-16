import './FollowBox.css'

const FollowBox = () => {
  return (
    <div className="follow-box">
        <div className="follow-box-head d-flex justify-content-between">
            <h4>Who to follow</h4>
            <a href="#!">Refresh</a>
        </div>
        <div className="follow-box-body">
            <div className="follow-box-row">
                <div></div>
                <div></div>
                <div><a href="#!" className="btn btn-outline">Follow</a></div>
            </div>
        </div>

    </div>
  )
}

export default FollowBox