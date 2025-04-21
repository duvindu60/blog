// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Feedback from './Components/Footer/Feedback';
import Navbar from './Components/Header/Navbar';
import Intro from './Components/Body/Intro';
import BlogList from './Components/Body/BlogList';
import BlogForm from './Components/Body/BlogForm';


const About = () => <h2>About Page</h2>;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
