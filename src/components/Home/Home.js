import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import Header from "./Header/Header";
import UserEngagement from "./UserEngagement/UserEngagement";
import JoinOurWaitList from "./JoinOurWaitList/JoinOurWaitList";
import MeetBaai from "./MeetBaai/MeetBaai";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MeetBaai />
      <UserEngagement />
      <JoinOurWaitList />
      <Footer />
    </>
  );
};

export default Home;
