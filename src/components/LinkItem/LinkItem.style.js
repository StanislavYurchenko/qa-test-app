import styled from 'styled-components';

export const Link = styled.li`
  &:not(:last-child) {
    margin-right: 1px;
  }
`;

export const LinkHref = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  background-color: rgba(218, 225, 232, 0.5);
  transition: background-color 0.2s linear;

  &:hover {
    background-color: rgba(218, 225, 232, 1);
  }
`;

export const Svg = styled.svg`
  fill: #02172a;
  width: 32px;
  height: 32px;
  transform: translate(40%, 40%);
`;

export const Span = styled.span`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;
