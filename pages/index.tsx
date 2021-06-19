import React from 'react';
import Head from 'next/head'
import { AppBar, Tabs, Tab, Grid } from '@material-ui/core';
import { tabEnum } from '../types';
import TabManager from './../components/tabManager/TabManager';

export default function Home() {

  const [value, setValue] = React.useState<tabEnum>(tabEnum.user);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} >
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="user" />
                <Tab label="app" />
                <Tab label="ownership" />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        <TabManager statuse={value} />
      </main>
    </div>
  )
}
