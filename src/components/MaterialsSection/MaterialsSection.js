import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle, Title } from './MaterialsSection.style';

function MaterialsSection({ title, children }) {
  return (
    <SectionStyle>
      <div>
        {title && <Title>{title}</Title>}
        {children}
      </div>
    </SectionStyle>
  );
}

MaterialsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default MaterialsSection;
