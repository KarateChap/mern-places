import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import "./UserItem.scss";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  const { id, image, name, placeCount } = props;

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h2>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
