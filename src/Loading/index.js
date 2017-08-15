import styled from 'emotion/react';
import { withTheme } from 'theming';

export const Container = withTheme(styled.div`
  background: ${p => p.theme.colors.white};
  min-height: 400px;
  padding: 200px 0 0;
`);

export const ActivityIndicator = withTheme(styled.div`
  background: ${p => p.theme.colors.white}
    url('/images/icons/icon-activity-indicator.gif') no-repeat 50% 10px;
  height: 56px;
  width: 100%;
`);
