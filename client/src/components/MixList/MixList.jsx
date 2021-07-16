import React from 'react';
import './MixList.scss';

import likesIcon from '../../assets/icons/Icon-likes.svg';
import playIcon from '../../assets/icons/icon-play.png';


function MixList(props) {
    return (    
      <div className="mixlist">
        
        <div className="mixlist__card">
          <div>
              <img src={props.img} />
          </div>
          <div>
            <div>{props.title}</div>
            <div>
              <img src={likesIcon} alt="Likes Icon" />
              <span>Likes</span>
            </div>
          </div>
          <div>
            <img className="icon-play" src={playIcon} alt="Likes Icon" />
          </div>
        </div>

      </div>
    )
}

export default MixList;
