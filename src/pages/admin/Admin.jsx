import React from "react";
import CarouselVideo from "../../components/carousel/CarouselVideo";
import AdminProfile from "../../components/adminProfile/AdminProfile";
import AdminHeader from "../../components/adminHeader/AdminHeader"

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <AdminProfile />
      <CarouselVideo />
    </>
  );
};

export default Admin;
