import React, { useState } from 'react';
import './MixForm.scss';

import CommentForm from '../CommentForm/CommentForm';

import likesIcon from '../../assets/icons/Icon-likes.svg';
import viewIcon from '../../assets/icons/Icon-views.svg';
import playIcon from '../../assets/icons/icon-play.png';
import camiloSong from '../../assets/music/Camilo-RopaCara.mp3';

function MixForm(props) {

  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  const handleLike = () => {
    console.log('likes:',likes+1)
    setLikes(likes+1);
  };
  
  const handleView = () => {
    console.log('views:', views+1)
    setViews(views+1);
  };
  
  const handleComment = (comment) => {
    console.log('handlecomment: ', comment);
  };

    return (
      <>
      <div className="mixform">
        
        <div className="mixform__card">
          <div className="mixform__text">
            <div className="mixform__image">
                <img src={props.image} />
            </div>
          <div className="mixfor__title--container">
            <div className="mixform__title">{props.title}</div>
          </div>
            <div className="mixform__icon--container">
              {/* <img className="icon-play" src={playIcon} alt="Likes Icon" /> */}
              <img className="mixform__icon--icons" src={likesIcon} alt="Likes Icon" onClick={handleLike} />
              <img className="mixform__icon--icons" src={viewIcon} alt="View Icon" onClick={handleView} />
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
      <CommentForm handleClick={handleComment} />
      </>
    )
}

export default MixForm;
