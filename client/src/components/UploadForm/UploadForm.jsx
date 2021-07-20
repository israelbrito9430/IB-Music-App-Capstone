import React, { useState } from 'react';
import './UploadForm.scss';

function UploadForm(props) {

  const [form, setForm] = useState({
    title: '',
    genre: '',
    imageUrl: '',
    songFile: '',
  });
  
  const handleChange = (e, element) => {
    setForm({...form, [element]: e.target.value});
  };

  const handleClick = () => {
    console.log('click upload form: ', form);
  };

    return (    
      <div className="upload-form">
          <h3>Upload Music</h3>
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
              <label htmlFor="image-file">Image</label>
              <input type="file" id="image-file" name="image-file" accept="image/png, image/jpeg" onChange={e => handleChange(e, 'imageUrl')} />
            </div>
            <div>
              <label htmlFor="song-file">Song</label>
              <input type="file" id="song-file" name="song-file" accept=".mp3,audio/*" onChange={e => handleChange(e, 'songFile')} />
            </div>
            <button className="register__button1" onClick={handleClick}>UPLOAD</button>
          </form>
      </div>
    )
}

export default UploadForm;
