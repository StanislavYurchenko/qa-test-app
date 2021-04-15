import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';
import { AvatarBlock, Avatar, UserName, Wrapper } from './UserAvatar.style.js';
import { getUserAvatar, getUserName } from '../../redux/auth/authSelectors';

export default function UserAvatar() {
  const theme = useSelector(getTheme);
  const customTheme = theme && createMuiTheme(theme);

  const userAvatar = useSelector(getUserAvatar);
  const userName = useSelector(getUserName);

  return (
    <Wrapper>
      <AvatarBlock theme={customTheme}>
        {userAvatar && <Avatar src={userAvatar} alt="user avatar image" />}
      </AvatarBlock>
      <UserName theme={customTheme}>{userName}</UserName>
    </Wrapper>
  );
}
