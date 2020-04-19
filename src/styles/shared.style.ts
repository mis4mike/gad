export const knockout = (theme) => ({
  backgroundColor: theme.color.knockoutBackground,
  color: '#fff',
})

export const selected = (theme) => ({
  borderColor: theme.color.borderDark,
})

export const dropShadow = (theme) => ({
  filter: `drop-shadow(1px 1px 2px ${theme.color.shadow})`,
})

export const stylizedButton = (theme) => ({
  display: 'inline-block',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontWeight: 'bold',
  color: theme.color.text,
  letterSpacing: '2px',
  backgroundColor: theme.color.background,
  border: `1px solid ${theme.color.borderDark}`,
  padding: theme.spacing.M,
  cursor: 'pointer',
})
