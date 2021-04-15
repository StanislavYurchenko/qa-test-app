import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import s from '../Admin.module.css';

const Tests = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/admin/construct');
  };

  return (
    <>
      <h2 className={s.title}>Tests options</h2>
      <ul className={s.adminList}>
        <li data-option="student" className={s.adminItem}>
          Create new question
          <button type="button" className={s.sendButton} onClick={handleClick}>
            Go to Form
          </button>
        </li>
        <li data-option="admin" className={s.adminItem}>
          Update question
          <button type="button" className={s.sendButton} onClick={handleClick}>
            Go to Form
          </button>
        </li>
        <li data-option="update" className={s.adminItem}>
          Delete question
          <button type="button" className={s.sendButton} onClick={handleClick}>
            Go to Form
          </button>
        </li>
      </ul>
    </>
  );
};

export default Tests;
