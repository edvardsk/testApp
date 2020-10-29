export default ({ palette }) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
  },
  header: {
    flexGrow: 0,
    backgroundColor: palette.primary.main,
    minHeight: '70px',
    marginBottom: '16px',
  },
  footer: {
    flexGrow: 0,
    backgroundColor: palette.primary.main,
    minHeight: '70px',
    marginTop: '16px',
  },
  link: {
    color: palette.secondary.main,
    fontWeight: 600,
    textDecoration: 'none',
  },
});
