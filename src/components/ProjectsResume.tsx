import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function ProjectsResume() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Trybe Futebol Clube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu accumsan urna. Quisque massa tortor, congue vitae mollis quis, accumsan et lacus.',
      printUrl: '',
      projectUrl: '',
      repositoryUrl: '',
    },
    {
      id: 2,
      title: 'Trybe Futebol Clube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu accumsan urna. Quisque massa tortor, congue vitae mollis quis, accumsan et lacus.',
      printUrl: '',
      projectUrl: '',
      repositoryUrl: '',
    },
    {
      id: 3,
      title: 'Trybe Futebol Clube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu accumsan urna. Quisque massa tortor, congue vitae mollis quis, accumsan et lacus.',
      printUrl: '',
      projectUrl: '',
      repositoryUrl: '',
    },
    {
      id: 4,
      title: 'Trybe Futebol Clube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu accumsan urna. Quisque massa tortor, congue vitae mollis quis, accumsan et lacus.',
      printUrl: '',
      projectUrl: '',
      repositoryUrl: '',
    },
    {
      id: 5,
      title: 'Trybe Futebol Clube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu accumsan urna. Quisque massa tortor, congue vitae mollis quis, accumsan et lacus.',
      printUrl: '',
      projectUrl: '',
      repositoryUrl: '',
    },
    {
      id: 6,
      title: 'Trybe Futebol Clube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu accumsan urna. Quisque massa tortor, congue vitae mollis quis, accumsan et lacus.',
      printUrl: '',
      projectUrl: '',
      repositoryUrl: '',
    },
    {
      id: 7,
      title: 'Trybe Futebol Clube',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu accumsan urna. Quisque massa tortor, congue vitae mollis quis, accumsan et lacus.',
      printUrl: '',
      projectUrl: '',
      repositoryUrl: '',
    },
  ]);
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      {projects.map((project) => <Grid item key={project.id}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={project.printUrl}
            alt="project's print screen"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Projeto</Button>
            <Button size="small">Repositório</Button>
          </CardActions>
        </Card>
      </Grid>)}
    </Grid>
  );
}
