import { Link } from 'react-router-dom';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { Container, Oops } from './NotFound.style';

const NotFound = () => {
  return (
    <Container>
      <RemoveCircleIcon />
      <Oops>OOPS!!</Oops>
      <div>We can't seems to find the page you're looking for</div>
      <div>
        ERROR code: <span>404</span>
      </div>
      <div>
        <span>return to </span>
        <Link to="/">main</Link>
        <span> page</span>
      </div>
    </Container>
  );
};

export default NotFound;
