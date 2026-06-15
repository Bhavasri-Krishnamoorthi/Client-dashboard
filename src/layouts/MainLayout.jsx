import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "340px",
          padding: "20px",
        }}
      >
        <Navbar />

        <div
          style={{
            marginTop: "25px",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;