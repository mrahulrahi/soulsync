import './LatestBox.css'

const LatestBox = () => {
  return (
    <div className="latest-box overflow-hidden">
      <div className="latest-box-head d-flex justify-content-between">
        <h4>Latest</h4>
        <a href="#!" className="btn-link">Sell all</a>
      </div>
      <div className="latest-box-body">
        <div className="latest-box-grid">
          <div className="latest-box-img"><img src="/images/post/img2.jpg" alt="" /></div>
          <div className="latest-box-img"><img src="/images/post/img7.jpg" alt="" /></div>
          <div className="latest-box-img"><img src="/images/post/img5.jpg" alt="" /></div>
          <div className="latest-box-img"><img src="/images/post/img3.jpg" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default LatestBox