import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import projectService from '../service/projectService';

export default function ProjectsResume() {
  const [projects, setProjects] = useState(projectService.getAll());

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
            <Button size="small">
              <Link
                href={project.projectUrl}
                underline="none"
              >
                Projeto
              </Link>
            </Button>
            <Button size="small">
              <Link
                href={project.repositoryUrl}
                underline="none"
              >
                Repositório
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>)}
    </Grid>
  );
}
