import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle, Title } from './Section.styled';

import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeSelectors';
import { createMuiTheme } from '@material-ui/core/styles';

function Section({ title, children }) {
  const theme = useSelector(getTheme);
  const customTheme = createMuiTheme(theme);

  return (
    <SectionStyle>
      <div>
        {title && <Title theme={customTheme}>{title}</Title>}
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
