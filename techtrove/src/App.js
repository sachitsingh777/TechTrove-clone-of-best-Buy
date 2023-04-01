import "./App.css";
import AllRoutes from "./User/Components/AllRoutes";
import Footer from "./User/Components/Footer";
import Navbar from "./User/Components/Navbar";
import AdminSideBar from './Admin/AdminComponent/AdminSideBar'
import MainRoutes from "./Admin/Pages/MainRoutes"
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )}
export default App;
