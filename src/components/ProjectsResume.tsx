import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import projectService from '../service/projectService';

export default function ProjectsResume() {
  const [projects, setProjects] = useState(projectService.getAll());

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      {projects.map((project) => <Grid item key={project.id}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea href={project.projectUrl}>
            <CardMedia
              component="img"
              height="140"
              image={project.printUrl}
              alt="project's print screen"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ height: '6em' }}>
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" width="100%" justifyContent="center">
              <ButtonGroup variant="outlined">
                <Button size="small" href={project.projectUrl} disabled={!project.projectUrl}>
                  Projeto
                </Button>
                <Button size="small" href={project.repositoryUrl}>
                  Repositório
                </Button>
              </ButtonGroup>
            </Stack>
          </CardActions>
        </Card>
      </Grid>)}
    </Grid>
  );
}
