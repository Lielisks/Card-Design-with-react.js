import React from 'react';

function People({ images , title,subtitle, description}) {
  
    return ( 
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={images} alt="Workers"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-8">{subtitle}</p>
            </div>
          </div>
      
          <div className="content">
               {description}
          </div>

          <div className="buton">
          <button class="button is-link is-light">Know Better</button>
          </div>
        </div>
      </div>
    );
}

export default People;