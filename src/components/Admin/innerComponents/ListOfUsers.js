import React from 'react';
import { useSelector } from 'react-redux';
import { getList } from '../../../redux/auth/authSelectors';
import s from '../Admin.module.css';

const ListOfUsers = () => {
  const list = useSelector(getList);

  return (
    <>
      <h2 className={s.title}>Result of request</h2>
      <div>{list}</div>
    </>
  );
};

export default ListOfUsers;
