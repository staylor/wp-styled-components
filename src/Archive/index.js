import React from 'react';
import PropTypes from 'prop-types';
import styled from 'emotion/react';
import { withTheme } from 'theming';

export const LoadMore = withTheme(styled.button`
  appearance: none;
  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.detail};
  box-sizing: border-box;
  color: ${p => p.theme.colors.inactive};
  cursor: pointer;
  font-size: 16px;
  height: 32px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  transition: 400ms;
  width: 80px;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
    outline: 0 none;
  }
`);

const Archive = ({ edges, component: Post, canLoadMore = false, loadMore }) => [
  <ul key={'ul'}>
    {edges.map(({ cursor, node }) =>
      <li key={cursor}>
        <Post post={node} />
      </li>
    )}
  </ul>,
  canLoadMore &&
    <LoadMore key={'button'} onClick={loadMore}>
      MORE
    </LoadMore>,
];

Archive.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any,
  canLoadMore: PropTypes.bool,
  loadMore: PropTypes.func,
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.object,
      cursor: PropTypes.string,
    })
  ).isRequired,
};

export default Archive;
