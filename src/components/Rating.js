import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)}>
          {rating > i ? (
            <BsStarFill size={20} cursor={"pointer"} />
          ) : (
            <BsStar size={20} cursor={"pointer"} />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
