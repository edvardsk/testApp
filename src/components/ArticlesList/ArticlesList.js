import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function ArticleList({ data }) {
  const classes = useStyles();
  return (
    <>
      {data.map((item) => {
        return (
          <Card className={classes.root} key={item.id}>
            <h2 className={classes.title}>{item.title}</h2>
            <p>{item.article}</p>
            <div className={classes.date}>{new Date(item.date).toLocaleDateString()}</div>
          </Card>
        );
      })}
    </>
  );
}
