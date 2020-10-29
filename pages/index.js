import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import mockData from '../src/constants/mockData';
import ArticlesList from '../src/components/ArticlesList';
import styles from '../src/styles/index';

export async function getStaticProps() {
  return {
    props: {
      data: mockData,
    },
  };
}
const useStyles = makeStyles(styles);

export default function Index({ data }) {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header} />
      <main className={classes.root}>
        <ArticlesList data={data} />
        <Link href="/article" className={classes.link}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={classes.link}>Add new article</a>
        </Link>
      </main>
      <footer className={classes.footer} />
    </>
  );
}
