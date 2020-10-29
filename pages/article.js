import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, TextField } from '@material-ui/core';
import styles from '../src/styles/article';
import { defaultTextValue } from '../src/constants/initialValues';
import { getFormatDate } from '../src/utils/date';

const useStyles = makeStyles(styles);

export default function Article() {
  const classes = useStyles();
  const [article, changeArticle] = useState(defaultTextValue);
  const [email, changeEmail] = useState(defaultTextValue);
  const [title, changeTitle] = useState(defaultTextValue);
  const [date, changeDate] = useState(getFormatDate());
  const submitForm = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Data: ', { email, title, date, article });
    changeEmail(defaultTextValue);
    changeTitle(defaultTextValue);
    changeDate(getFormatDate());
    changeArticle(defaultTextValue);
  };

  return (
    <main className={classes.root}>
      <Card className={classes.card}>
        <h2>Create new article</h2>
        <form className={classes.form} onSubmit={submitForm}>
          <TextField
            className={classes.textInput}
            id="article-author-email"
            label="Email"
            type="email"
            required
            variant="outlined"
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
          />
          <TextField
            className={classes.textInput}
            id="article-title"
            label="Title"
            required
            variant="outlined"
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={date}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => changeDate(e.target.value)}
            variant="outlined"
            className={classes.dateInput}
          />
          <TextField
            className={classes.textInput}
            id="article-text"
            label="Text"
            multiline
            rows={5}
            rowsMax={5}
            value={article}
            onChange={(e) => changeArticle(e.target.value)}
            variant="outlined"
            required
          />
          <Button className={classes.submitButton} variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </Card>
    </main>
  );
}
