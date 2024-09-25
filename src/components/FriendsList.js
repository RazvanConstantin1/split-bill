import React from "react";
import Friend from "./Friend.js";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
