import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionStyle>
      <div>
        {title && <Title>{title}</Title>}
        {children}
      </div>
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
