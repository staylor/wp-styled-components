import url from 'url';
import React, { Component } from 'react';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import { Link } from 'found';
import responsive from '../responsive';
import { sortOrderedHierarchy } from '../walker';

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

type NavMenuItem = {
  id: string,
  title: string,
  url: string,
  parent: string,
  order: number,
  type: string,
  typeName: string,
  typeSlug: string,
  dataSlug: string,
  dataID: string,
};

type NavMenuProps = {
  navMenu: {
    id: string,
    name: string,
    items: Array<NavMenuItem>,
  },
};

export default class NavMenu extends Component {
  props: NavMenuProps;

  sorted = null;
  level = 0;

  parseItem({ id, title, url: itemUrl, typeSlug, dataSlug }) {
    let path;
    if (typeSlug && dataSlug) {
      path = `/${typeSlug}/${dataSlug}`;
    } else {
      const urlObj = url.parse(itemUrl);
      if (urlObj.path === '/') {
        path = urlObj.path;
      } else {
        path = urlObj.path.replace(/\/$/, '');
      }
    }

    if (this.sorted[id]) {
      this.level += 1;
    }
    return (
      <NavItem key={id}>
        <Link to={path}>
          {title}
        </Link>
        {this.sorted[id] ? this.walk(this.sorted[id]) : null}
      </NavItem>
    );
  }

  walk(node) {
    return (
      <Level>
        {node.map(child => {
          if (!child.parent) {
            this.level = 0;
          }
          return this.parseItem(child);
        })}
      </Level>
    );
  }

  render() {
    const { navMenu } = this.props;

    if (!navMenu) {
      return null;
    }

    this.sorted = sortOrderedHierarchy(navMenu.items);
    const navMenuHtml = this.walk(this.sorted.top);

    return (
      <NavWrapper>
        {navMenuHtml}
      </NavWrapper>
    );
  }
}
