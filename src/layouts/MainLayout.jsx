import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: isMobile ? "0" : "340px",
          padding: isMobile ? "15px" : "20px",
          minHeight: "100vh",
          transition: "0.3s",
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