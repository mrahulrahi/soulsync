import Sidebar from "./components/Sidebar/Sidebar";
import TopHeader from "./components/TopHeader/TopHeader";



export default function Home() {
  return (
    <main className="d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <TopHeader />
      </div>
    </main>
  );
}
