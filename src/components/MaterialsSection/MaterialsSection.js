import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle } from './MaterialsSection.style';

function MaterialsSection({ title, children }) {
  return (
    <SectionStyle>
      <div>{children}</div>
    </SectionStyle>
  );
}

MaterialsSection.propTypes = {
  children: PropTypes.node,
};

export default MaterialsSection;
