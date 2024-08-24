import FollowBox from "./components/FollowBox/FollowBox";
import LatestBox from "./components/LatestBox/LatestBox";
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
              <div className="col-lg-10 mx-auto">
                <div className="main-head"><h2>Feed</h2></div>
                <div className="main-body d-flex justify-content-between gap-4">
                  <div></div>
                  <div className="body-sidebar w-100 d-flex flex-column gap-4">
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
