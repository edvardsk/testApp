export default () => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    maxWidth: '800px',
    width: '100%',
    padding: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textInput: {
    marginBottom: '16px',
  },
  dateInput: {
    alignSelf: 'flex-start',
    marginBottom: '16px',
  },
  submitButton: {
    alignSelf: 'center',
  },
});
