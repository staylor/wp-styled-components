import styled from 'emotion/react';
import { withTheme } from 'theming';

const Footer = withTheme(styled.footer`
  padding: ${p => p.theme.padding}px 0;
  text-align: center;
`);

export default Footer;
