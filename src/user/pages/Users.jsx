import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.credly.com/size/680x680/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
