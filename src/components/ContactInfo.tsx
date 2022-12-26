import { Box, ButtonGroup, IconButton, Paper, Popover, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react';

export default function ContactInfo() {
  const [anchorElWA, setAnchorElWA] = React.useState<HTMLButtonElement | null>(null);
  const [anchorElT, setAnchorElT] = React.useState<HTMLButtonElement | null>(null);

  const handleClickWA = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElWA(event.currentTarget);
  };
  const handleCloseWA = () => {
    setAnchorElWA(null);
  }

  const handleClickT = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElT(event.currentTarget);
  };
  const handleCloseT = () => {
    setAnchorElT(null);
  }

  const openWA = Boolean(anchorElWA);
  const openT = Boolean(anchorElT);

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
            textAlign="center"
            gutterBottom
          >
            Full Stack Developer
          </Typography>
        </Box>
        <ButtonGroup variant="text" >
          <IconButton href="https://github.com/nnnnadia">
            <GitHubIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/nadiadutra/">
            <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton onClick={handleClickWA}>
            <WhatsAppIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <Popover
            open={openWA}
            anchorEl={anchorElWA}
            onClickCapture={handleCloseWA}
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
          <IconButton onClick={handleClickT}>
            <TelegramIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <Popover
            open={openT}
            anchorEl={anchorElT}
            onClickCapture={handleCloseT}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <img alt="Telegram contact QR code" src="https://github.com/nnnnadia/nnnnadia.github.io/blob/main/src/images/telegram-contact-qr.jpeg?raw=true" width="100em" height="100em" />
          </Popover>
          <IconButton>
            <EmailIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
        </ButtonGroup>
      </Stack>
    </Paper>
  );
}
