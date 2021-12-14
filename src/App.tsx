import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import TaskListView from "./pages/tasks/taskListView";
import TaskPage from "./pages/tasks/taskPage";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql/',
  cache: new InMemoryCache()
});


const mdTheme = createTheme();

function App() {

  return (
    <ThemeProvider theme={mdTheme}>
      <ApolloProvider client={client}>
        <Box sx={{display: 'flex'}}>
          <CssBaseline/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TaskListView/>}/>
              <Route path="tasks/:id" element={<TaskPage/>}/>
            </Routes>
          </BrowserRouter>
        </Box>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
