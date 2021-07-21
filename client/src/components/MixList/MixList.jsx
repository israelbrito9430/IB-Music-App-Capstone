import React from 'react';
import './MixList.scss';

import likesIcon from '../../assets/icons/Icon-likes.svg';
import playIcon from '../../assets/icons/icon-play.png';


function MixList(props) {
    return (    
      <div className="mixlist">
        
        <div className="mixlist__card">
          <div className="mixlist__profileimg">
              <img src={props.image} />
          </div>
          <div>
            <div className="mixlist__title">{props.title}</div>
            <div>
              <img src={likesIcon} alt="Likes Icon" />
              <span>Likes</span>
            </div>
          </div>
          <div className="mixlist__playIcon">
            {/* <img className="icon-play" src={playIcon} alt="Likes Icon" /> */}
              <audio className="mixform__audio" controls preload="none">
                <source src={props.song} type="audio/mpeg" />
                <source src="audio/my_song.ogg" type="audio/ogg" />
              </audio>
          </div>
        </div>

      </div>
    )
}

export default MixList;
