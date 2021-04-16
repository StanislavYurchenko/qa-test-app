import React from 'react';
import { useSelector } from 'react-redux';
import { getList } from '../../../redux/auth/authSelectors';
import s from '../Admin.module.css';

const ListOfUsers = () => {
  const list = useSelector(getList);

  return (
    <>
      <h2 className={s.title}>Result of request</h2>
      {list.length === 0 ? (
        <span>List of users is empty</span>
      ) : (
        <ul className={s.listResult}>
          <li key="table-header" className={`${s.itemResult} ${s.head}`}>
            <span>Avatar</span>
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span>Subscription</span>
          </li>
          {list.map(user => (
            <li key={user.email} className={s.itemResult}>
              <img src={user.avatar} alt="avatar" className={s.avatarka} />
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.role}</span>
              <span>{user.subscription}</span>
            </li>
          ))}
          ;
        </ul>
      )}
    </>
  );
};

export default ListOfUsers;
