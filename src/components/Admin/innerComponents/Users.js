import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getStudentsRequest, getAdminsRequest } from '../../../redux/auth/authOperations';

import s from '../Admin.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = evt => {
    const { name } = evt.target;
    if (name === 'update' || name === 'delete') {
      history.push('/admin/construct');
    }
    if (name === 'student') {
      dispatch(getStudentsRequest());
      history.push('/admin/results');
    }
    if (name === 'admin') {
      dispatch(getAdminsRequest());
      history.push('/admin/results');
    }
  };

  return (
    <>
      <h2 className={s.title}>Users options</h2>
      <ul className={s.adminList}>
        <li className={s.adminItem}>
          Get all students
          <button type="button" className={s.sendButton} name="student" onClick={handleClick}>
            Send Request
          </button>
        </li>
        <li className={s.adminItem}>
          Get all admins{' '}
          <button type="button" className={s.sendButton} name="admin" onClick={handleClick}>
            Send Request
          </button>
        </li>
        <li className={s.adminItem}>
          Update user options
          <button type="button" className={s.sendButton} name="update" onClick={handleClick}>
            Go to Form
          </button>
        </li>
        <li className={s.adminItem}>
          Delete user
          <button type="button" className={s.sendButton} name="delete" onClick={handleClick}>
            Go to Form
          </button>
        </li>
      </ul>
    </>
  );
};

export default Users;
