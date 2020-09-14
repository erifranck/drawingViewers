import React from 'react';

export const Card = (props) => {
      return (
            <div className="card-wrapper">
                  <img className="card-image" src={props.image} alt={props.username} />
                  <div className="card-content">
                        <div className="card-row">
                              <p>UserName:</p>
                              <p>{props.username}</p>
                        </div>
                  </div>
            </div>
      );
}