import React from "react";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li>{friend.name}</li>
      ))}
    </ul>
  );
};

export default FriendsList;
