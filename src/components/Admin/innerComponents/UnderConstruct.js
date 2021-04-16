import React from 'react';
import s from '../Admin.module.css';
import cat from '../../../images/results.svg';

const UnderConstruct = () => {
  return (
    <>
      <h2 className={s.title}>Page is under construction</h2>
      <img src={cat} className={s.catImage} width="120px"></img>
    </>
  );
};

export default UnderConstruct;
