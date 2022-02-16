import React, { useEffect } from "react";

const Card = ({ data, image, userName, counts }) => {
  useEffect(() => {
    if (data) {
      return data;
    }
  }, [data]);

  return (
    <div className="rounded-lg shadow-clay p-6  max-w-card w-full ">
      <div className="rounded-full shadow-sm shadow-grey-light flex items-center justify-center h-24 w-24 mx-auto overflow-hidden relative">
        <img
          alt="Profile avatar"
          className="h-auto w-full overflow-hidden relative text-center"
          src={data?.avatar}
        />
      </div>
      <h4 className="font-bold text-center my-4 mx-auto">
        {data?.username ? data.username : "Loading username..."}
      </h4>
      <ul>
        <li className="mb-2">
          Followers:
          {data?.counts?.followerCount ? data.counts.followerCount : 0}
        </li>
        <li className="mb-2">
          {`Following: 
          ${data?.counts?.followingCount ? data.counts.followingCount : 0}`}
        </li>
        <li>
          {`Total posts: 
          ${data?.counts?.postCount ? data.counts.postCount : 0}`}
        </li>
      </ul>
    </div>
  );
};

export default Card;
