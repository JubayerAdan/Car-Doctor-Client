import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const ServicesCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>

        <div className="flex text-[#FF3811]">
          <p className="text-xl  font-bold">Price: ${price}</p>
          <Link to={`/book/${_id}`}>
            <FaArrowRight />
          </Link>
        </div>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default ServicesCard;
