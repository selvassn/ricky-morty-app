import React from "react";
import { Link } from "react-router-dom";
import styles from "./characters.module.scss";

const CharacterCard = (props: any) => {
  return (
    <div
      className={`card col-md-6 bg-dark mb-4 ${styles.characterCard}`}
    >
      <div
        className="card-body d-md-flex"
        style={{ backgroundColor: "rgb(60, 62, 68)" }}
      >
        <div>
          <img src={props.character.image} alt={props.character.name}/>
        </div>
        <div className="px-4 pt-2">
          <div>
            <h5>
              <Link className={styles.anchor} to={`character/${props.character.id}`}>
                {props.character.name}
              </Link>
              <i
                 onClick={(e) => props.toggleFavCallback(props.character)}
                className={`bi px-2 btn btn-link ${
                    props.character.isFavorite ? "bi-heart-fill" : "bi-heart"
                }`}
              ></i>
            </h5>
            <div>{props.character.status}</div>
          </div>
          <div>
            <p>Last known location:</p>
            <p>{props.character.origin.name}</p>
          </div>
          {props.character.episode.length > 0 && (
            <div>
              <p>First seen in:</p>
              <p>{props.character.episode[0].name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
