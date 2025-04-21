// src/Components/Body/BlogForm.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !imageUrl) {
      setError('All fields including image URL are required.');
      return;
    }

    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        content,
        imageUrl,
        timestamp: new Date(),
      });

      setSubmitted(true);
      setTitle('');
      setContent('');
      setImageUrl('');
      setError(null);

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error adding blog:', err);
      setError('Failed to submit blog. Try again.');
    }
  };

  return (
    <Box p={3} maxWidth={600} mx="auto">
      <Typography variant="h4" gutterBottom>
        Write a Blog
      </Typography>

      {submitted && <Alert severity="success">Blog submitted successfully!</Alert>}
      {error && <Alert severity="error" sx={{ mt: 1 }}>{error}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Image URL"
          fullWidth
          margin="normal"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <TextField
          label="Content"
          fullWidth
          margin="normal"
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Submit Blog
        </Button>
      </form>
    </Box>
  );
};

export default BlogForm;
