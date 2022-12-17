import { Box, ButtonGroup, IconButton, Paper, Popover, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react';

export default function ContactInfo() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          <IconButton href="https://github.com/nnnnadia">
            <GitHubIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/nadiadutra/">
            <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-describedby={id} onClick={handleClick}>
            <WhatsAppIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClickCapture={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <img alt="WhatsApp contact QR code" src="https://github.com/nnnnadia/nnnnadia.github.io/blob/main/src/images/whatsapp-contact-qr.jpeg?raw=true" width="100em" height="100em" />
          </Popover>
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
