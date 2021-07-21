import React, { useState } from 'react';
import './UploadForm.scss';

import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/storage';

function UploadForm(props) {
  const firebase = useFirebaseApp();
  const storage = firebase.storage();

  const [form, setForm] = useState({
    title: '',
    genre: '',
    imageUrl: '',
    songFile: '',
  });
  
  const handleChange = (e, element) => {
    setForm({...form, [element]: e.target.value});
  };

  const handleFile = (e, element) => {
    e.preventDefault();
    setForm({...form, [element]: e.target.files[0]});
  };

  const uploadImageFile = (file, callback) => {
    const storageRef = storage.ref('images')
    const uploadTask = storageRef.child('image_'+ file.name).put(file);

    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      callback({ progress });
    }, error => {
      callback({ error });
    }, () => {
      const downloadURL = uploadTask.snapshot.downloadURL;
      callback({ downloadURL });
    });
  };

  const uploadAudioFile = (file, callback) => {
    const storageRef = storage.ref('audios')
    const uploadTask = storageRef.child('audio_'+ file.name).put(file);

    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('progress: ', progress);
      callback({ progress });
    }, error => {
      callback({ error });
    }, () => {
      const downloadURL = uploadTask.snapshot.downloadURL;
      callback({ downloadURL });
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('click upload form: ', form);

    uploadImageFile(form.imageUrl, result => {
      if (result.progress) {
        console.log('result.progress: ', result.progress);
        // Handle progress
        return;
      }
  
      if (result.downloadURL) {
        console.log('result.downloadURL: ', result.downloadURL);
        // setForm({ ...form, imageUrl: result.downloadURL });
        return;
      }
  
      if (result.error) {
        // Handle error
        console.log('result: ', result.error);
      }
    });

    uploadAudioFile(form.songFile, result => {
      if (result.progress) {
        console.log('result.progress: ', result.progress);
        // Handle progress
        return;
      }
  
      if (result.downloadURL) {
        console.log('result.downloadURL: ', result.downloadURL);
        // setForm({ ...form, songFile: result.downloadURL });
        return;
      }
  
      if (result.error) {
        // Handle error
        console.log('result: ', result.error);
      }
    });

    // save form on database

  };

    return (    
      <div className="uploadForm">
          <h3 className="uploadForm__title">Upload Music</h3>
          <form>
            <div>
              <label htmlFor="title">title</label>
              <input type="text" name="title" onChange={e => handleChange(e, 'title')} />
            </div>
            <div>
              <label htmlFor="genre">genre</label>
              <select name="genre" id="genre" onChange={e => handleChange(e, 'genre')}>
                <option value="merengue">Merengue</option>
                <option value="pop">Pop</option>
                <option value="regueton">Regueton</option>
                <option value="rock">Rock</option>
                <option value="salsa">Salsa</option>
                <option value="spanish">Spanish</option>
                <option value="tropical">Tropical</option>
                <option value="vallenato">vallenato</option>
              </select>
            </div>
            <div>
              <div>
                <label htmlFor="image-file">Image</label>
                <input type="file" id="image-file" name="image-file" accept="image/png, image/jpeg" onChange={e => handleFile(e, 'imageUrl')} />
              </div>
              <div>
                <label htmlFor="song-file">Song</label>
                <input type="file" id="song-file" name="song-file" accept=".mp3,audio/*" onChange={e => handleFile(e, 'songFile')} />
              </div>
            </div>
              <button className="register__button1" onClick={handleClick}>Upload</button>
            </form>
      </div>
    )
}

export default UploadForm;
