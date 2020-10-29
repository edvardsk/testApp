export default ({ palette }) => ({
  root: {
    backgroundColor: palette.background.default,
    maxWidth: '800px',
    padding: '20px',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    '&:not(:last-child)': {
      marginBottom: '16px',
    },
  },
  title: {
    fontSize: '24px',
    margin: '0 0 16px',
  },
  date: {
    alignSelf: 'flex-end',
    fontStyle: 'italic',
  },
});
