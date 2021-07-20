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
          <div className="mixform__text">
            <div className="mixform__image">
                <img src={props.img} />
            </div>
          <div className="mixfor__title--container">
            <div className="mixform__title">{props.title}</div>
          </div>
            <div className="mixform__icon--container">
              {/* <img className="icon-play" src={playIcon} alt="Likes Icon" /> */}
              <img className="mixform__icon--icons" src={likesIcon} alt="Likes Icon" />
              <img className="mixform__icon--icons" src={viewIcon} alt="View Icon" />
            </div>
          </div>
            <div>
              <audio className="mixform__audio" controls preload="none">
                <source src={camiloSong} type="audio/mpeg" />
                <source src="audio/my_song.ogg" type="audio/ogg" />
              </audio>
            </div>
        </div>
      </div>
      <CommentForm />
      </>
    )
}

export default MixForm;
