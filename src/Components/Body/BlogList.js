// src/Components/Body/BlogList.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import {
  Card, CardContent, CardMedia, Typography,
  Grid, Button, Collapse, Box
} from '@mui/material';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <Grid container spacing={4}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog.id}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              maxHeight: expandedId === blog.id ? 'none' : 400, // allow expansion
              overflow: 'hidden',
            }}
          >
            {blog.imageUrl && (
              <CardMedia
                component="img"
                height="160"
                image={blog.imageUrl}
                alt={blog.title}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{blog.title || 'No Title'}</Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.content ? `${blog.content.slice(0, 100)}...` : 'No content available.'}
              </Typography>
              <Collapse in={expandedId === blog.id} timeout="auto" unmountOnExit>
                <Box mt={1}>
                  <Typography variant="body2">
                    {blog.content || 'No additional content available.'}
                  </Typography>
                </Box>
              </Collapse>
              <Button
                onClick={() => handleReadMore(blog.id)}
                size="small"
                sx={{ marginTop: 1 }}
              >
                {expandedId === blog.id ? 'Show Less' : 'Read More'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;
