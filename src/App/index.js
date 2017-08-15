import React from 'react';
import styled from 'emotion/react';
import { ThemeProvider as ThemingProvider, withTheme } from 'theming';
import theme from '../theme';
import responsive from '../responsive';

export const PageWrapper = withTheme(styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidth}px;
  padding: 0 ${p => p.theme.padding}px;
`);

export const Content = withTheme(styled.div`
  padding: ${p => p.theme.padding}px 0;
  ${responsive.desktop} {
    display: flex;
    margin-right: ${p => p.theme.padding}px;
  }
`);

export const Primary = styled.section`${responsive.desktop} {flex: 4;}`;

export const Secondary = styled.section`
  display: block;
  min-height: 212px;
  min-width: 212px;
  ${responsive.desktop} {
    flex: 1;
  }
`;

export const ThemeProvider = () => React.createElement(ThemingProvider, { theme });
