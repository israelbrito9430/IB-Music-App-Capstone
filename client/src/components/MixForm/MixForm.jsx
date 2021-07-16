import React from 'react';
import './MixForm.scss';

import CommentForm from '../CommentForm/CommentForm';

import likesIcon from '../../assets/icons/Icon-likes.svg';
import viewIcon from '../../assets/icons/Icon-views.svg';
import playIcon from '../../assets/icons/icon-play.png';
import camiloSong from '../../assets/music/Camilo-RopaCara.mp3';

function MixForm(props) {
    return (
      <>
      <div className="mixform">
        
        <div className="mixform__card">
          <div>
              <img src={props.img} />
          </div>
          <div>
            <div>{props.title}</div>
            <div>
              <audio class="my_audio" controls preload="none">
                <source src={camiloSong} type="audio/mpeg" />
                <source src="audio/my_song.ogg" type="audio/ogg" />
              </audio>
            </div>
          </div>
          <div>
            {/* <img className="icon-play" src={playIcon} alt="Likes Icon" /> */}
            <img className="icon" src={likesIcon} alt="Likes Icon" />
            <img className="icon" src={viewIcon} alt="View Icon" />
          </div>
        </div>
      </div>
      <CommentForm />
      </>
    )
}

export default MixForm;
