import FollowBox from "./components/FollowBox/FollowBox";
import Sidebar from "./components/Sidebar/Sidebar";
import TopHeader from "./components/TopHeader/TopHeader";



export default function Home() {
  return (
    <main className="d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <TopHeader />
    
    <div className="main-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="main-head"><h2>Feed</h2></div>
            <div className="main-body d-flex justify-content-between gap-4">
              <div></div>
              <FollowBox />
            </div>
     
          </div>
        </div>
      </div>
    </div>
      </div>
    </main>
  );
}
