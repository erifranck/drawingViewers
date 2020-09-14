import React from 'react';
import { Card } from './Card';

export const RandomCard = (props) => {
      return (
            <div className="random-card-wrapper">
                  <div className="random-card-front f-width">
                        <div className="random-card-content">

                        </div>
                        <button onClick={props.onClick}>
                              SELECT RANDOM
                        </button>
                  </div>
                  <div className="random-card-back f-width">
                        { props.selected &&
                              <Card
                                    image={props.selected.url.trim()}
                                    username={props.selected.name}
                              >
                        }
                  </div>
            </div>
      )
}