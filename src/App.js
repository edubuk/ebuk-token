import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { Home } from "./components/Pages/Home";
import Footer from "./components/Pages/Footer";
import Dashboard from "./components/Dashboard/User/Dashboard";
import UserStatus from "./components/Dashboard/User/UserStatus";
import UserKYC from "./components/Dashboard/User/UserKYC";
import PendingTx from "./components/Dashboard/Admin/PendingTx";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AdminRoute from "./components/Routes/AdminRoute";
import { BiSolidUserDetail } from "react-icons/bi";
import { LuFileScan } from "react-icons/lu";
import { RxTokens } from "react-icons/rx";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { useState } from "react";
import Preloader from "./components/Pages/Preloader";


function App() {
  const [isLoaded,setLoaded]= useState(false);

  const userLinks = [
    { name: "Status", path: "user-status", icon: <BiSolidUserDetail /> },
    { name: "KYC", path: "user-kyc", icon: <LuFileScan /> },
    { name: "Buy Tokens", path: "buy-token", icon: <RxTokens /> },
  ];

  const adminLinks = [
    { name: "Pending Tx", path: "pending-status", icon: <MdOutlinePendingActions /> },
    { name: "Approved Tx", path: "approved-status", icon: <AiOutlineFileDone /> },
  ];

  return (
    <>
    {!isLoaded&&<Preloader onLoaded = {()=>setLoaded(true)}/>}
    {isLoaded&&<>
      <Toaster position="top-center" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* User Dashboard Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard links={userLinks} />}>
            <Route index element={<UserStatus />} /> {/* Default route */}
            <Route path="user-status" element={<UserStatus />} />
            <Route path="user-kyc" element={<UserKYC />} />
            <Route path="buy-token" element={<div>Buy Token Page</div>} />
          </Route>
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Dashboard links={adminLinks} />}>
            <Route path="pending-status" element={<PendingTx />} />
            <Route path="approved-status" element={<div>Approved Transactions</div>} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      </>
    }
    </>
  );
}

export default App;
