import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App'
import './index.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </ThemeProvider>
  , document.getElementById('root'))
