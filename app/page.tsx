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
                <div className="main-body d-flex flex-wrap justify-content-between gap-5">
                  <div className="body-content flex-grow-1">
                    <div className="main-head"><h2>Feed</h2></div>

                    <PostCard singlePost={true} />
                    <PostCard singlePost={false} />

                    <div className="flex justify-center mt-6" id="toggle">
                      <a
                        href="#"
                        className="bg-white btn btn-outline font-semibold my-3 px-6 py-2 rounded-pill shadow-md"
                        data-bs-toggle="tooltip" // Optional for Bootstrap tooltips
                        data-bs-placement="top"
                        title="Click to load more"
                      >
                        Load more ..
                      </a>
                    </div>
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
