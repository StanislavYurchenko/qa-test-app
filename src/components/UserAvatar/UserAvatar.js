import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { AppBlock, Avatar, LoaderWrapper } from './UserAvatar.style.js';
import { getUserAvatar } from '../../redux/auth/authSelectors';
import { addAvatar } from '../../redux/auth/authOperations';

export default function UserAvatar() {
  const [previewImg, setPreviewImg] = useState(null);

  const userAvatar = useSelector(getUserAvatar);

  const dispatch = useDispatch();

  const handlerUploadFile = async file => {
    try {
      let reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImg(reader.result);
        console.log(previewImg);
      };

      const isLt2M = file && file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        throw new Error('Image must smaller than 2MB!');
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        setPreviewImg(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserProfile = async () => {
    const response = await fetch(previewImg);
    const file = await response.blob();
    console.log(file);

    dispatch(addAvatar(file));
  };

  useEffect(() => {
    if (previewImg) {
      updateUserProfile();
    }
  }, [previewImg]);

  return (
    <AppBlock>
      <Avatar src={previewImg ? previewImg : userAvatar} alt="user avatar image" />
      <UserName>{userName}</UserName>

      <LoaderWrapper>
        <input
          accept=".jpg, .png, .jpeg"
          id="icon-button-file"
          onChange={e => handlerUploadFile(e.target.files[0])}
          type="file"
          name="image"
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera style={{ fontSize: 30 }} />
          </IconButton>
        </label>
      </LoaderWrapper>
    </AppBlock>
  );
}
