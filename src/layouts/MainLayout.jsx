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
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div
          style={{
            marginTop: "25px",
            paddingBottom: "30px",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;