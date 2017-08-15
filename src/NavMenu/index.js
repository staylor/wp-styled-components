import styled from 'emotion/react';
import { withTheme } from 'theming';
import responsive from '../responsive';

export const NavWrapper = withTheme(styled.nav`
  display: block;
  margin: ${p => p.theme.padding / 2}px 0;

  & li {
    position: relative;
  }

  & a {
    color: ${p => p.theme.colors.black};
    display: block;
    font-size: 14px;
    line-height: ${p => p.theme.padding * 1.5}px;
    padding: 0 ${p => p.theme.padding * 0.75}px;
    text-decoration: none;
    text-transform: uppercase;

    ${responsive.desktop} {
      font-size: 14px;
      line-height: ${p => p.theme.padding * 2}px;
      padding: 0 ${p => p.theme.padding}px;
    }
  }

  & li:hover > a,
  & ul ul :hover > a,
  & a:focus {
    background: ${p => p.theme.colors.subnav.hoverBackground};
  }

  & ul li:hover > ul {
    display: block;
  }
`);

export const Level = withTheme(styled.ul`
  list-style: none;
  margin: 0 0 0 ${p => p.theme.padding / 2 * -1}px;

  & ul {
    display: none;
    left: ${p => p.theme.padding}px;
    position: absolute;
    top: ${p => p.theme.padding * 1.5}px;
    z-index: 99999;

    ${responsive.desktop} {
      top: ${p => p.theme.padding * 2}px;
    }

    a {
      font-size: 13px;
      line-height: 20px;
      background: ${p => p.theme.colors.subnav.background};
      border-bottom: 1px dotted ${p => p.theme.colors.subnav.detail};
      color: ${p => p.theme.colors.dark};
      height: auto;
      padding: ${p => p.theme.padding / 2}px ${p => p.theme.padding}px;
      width: 168px;
    }

    & ul {
      left: 100%;
      top: 0;
    }
  }
`);

export const NavItem = styled.li`display: inline-block;`;
