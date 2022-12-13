import { Box, ButtonGroup, IconButton, Paper, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react';

export default function ContactInfo() {
  return (
    <Paper
      sx={{
        width: 500,
        height: 300,
        backgroundColor: 'primary.dark',
        color: 'white'
      }}
      elevation={6}
    >
      <Stack height="inherit" alignItems="center" justifyContent="center" spacing={4}>
        <Box>
          <Typography variant="h3">Nádia Dutra</Typography>
          <Typography
            variant="subtitle1"
            textTransform="uppercase"
            gutterBottom
          >
            Developer Full Stack
          </Typography>
        </Box>
        <ButtonGroup variant="text" >
          <IconButton>
            <GitHubIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <WhatsAppIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <TelegramIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <EmailIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
        </ButtonGroup>
      </Stack>
    </Paper>
  );
}
