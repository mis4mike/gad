import { css } from '@emotion/core'

export const styles = (theme) => ({
  convoCount: css({
    label: 'convoCount',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.XS,
    margin: '-1px 0 -1px -1px',
    fontFamily: theme.font.paragraph,
    color: theme.color.textLight,
    border: `2px solid ${theme.color.border}`,
    borderRadius: '8px',
  }),
  number: css({
    fontSize: theme.textSize.M,
    lineHeight: theme.textSize.M,
    margin: 0,
    textAlign: 'center',
  }),
  convos: css({
    margin: `-${theme.spacing.S} 0 ${theme.spacing.XS} 0`,
    fontWeight: 'bold',
  }),
})
