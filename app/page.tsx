import FollowBox from "./components/FollowBox/FollowBox";
import LatestBox from "./components/LatestBox/LatestBox";
import PostCard from "./components/PostCard/PostCard";
import Sidebar from "./components/Sidebar/Sidebar";
import TopHeader from "./components/TopHeader/TopHeader";



export default function Home() {
  return (
    <main className="page-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1 h-100">
        <TopHeader />

        <div className="main-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <div className="main-body d-flex flex-wrap justify-content-between gap-4">
                  <div className="body-content flex-grow-1">
                    <div className="main-head"><h2>Feed</h2></div>
                    
                    <PostCard />
                  </div>
                  <div className="body-sidebar flex-shrink-0 d-flex flex-column gap-4">
                    <FollowBox />
                    <LatestBox />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
