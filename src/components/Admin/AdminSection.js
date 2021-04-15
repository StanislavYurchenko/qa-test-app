import React from 'react';
import PropTypes from 'prop-types';
import s from './Admin.module.css';

const AdminSection = ({ children }) => {
  return (
    <section className={s.adminSection}>
      <>{children}</>
    </section>
  );
};

AdminSection.propTypes = {
  children: PropTypes.node,
};

export default AdminSection;
