import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../components/header";
import {Container, Grid, Paper} from "@mui/material";

interface ButtonAppBarProps {
  body?: React.ReactElement
}

export default function BasePage ({body}: ButtonAppBarProps) {
  return (
    <Box sx={{flexGrow: 1}}>
      <Header/>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {body}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
