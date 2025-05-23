import React from 'react';
import { Box, Typography, Stack, IconButton, Avatar, Tooltip } from '@mui/material';
import { MoreHorizontal, MoonStar, PanelBottomClose } from 'lucide-react';

const BUTTON_SIZE = 36;

const ChatHeader: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 3,
      py: 2,
      borderBottom: '1px solid #eee',
      minHeight: 64,
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}
  >
    <Stack direction="row" spacing={1} alignItems="center">
      <Avatar sx={{ width: 36, height: 36, bgcolor: '#6C63FF', fontWeight: 600 }}>P</Avatar>
      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18 }}>
        Pankaj Baranwal
      </Typography>
      <Box
        sx={{
          width: 10,
          height: 10,
          bgcolor: '#2ecc40',
          borderRadius: '50%',
          ml: 1,
          boxShadow: '0 0 0 2px #fff',
        }}
        title="Online"
      />
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center">
      <Tooltip title="More options">
        <IconButton
          sx={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: 2,
            background: '#f4f4f6',
            transition: 'background 0.2s, transform 0.1s',
            '&:hover': { background: '#ececed', transform: 'scale(1.07)' },
          }}
        >
          <MoreHorizontal size={20} color="#222" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Toggle dark mode">
        <IconButton
          sx={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: 2,
            background: '#f4f4f6',
            transition: 'background 0.2s, transform 0.1s',
            '&:hover': { background: '#ececed', transform: 'scale(1.07)' },
          }}
        >
          <MoonStar size={20} color="#222" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Close chat">
        <IconButton
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: BUTTON_SIZE,
            px: 2,
            borderRadius: '999px',
            background: '#222',
            color: '#fff',
            fontWeight: 500,
            fontSize: 15,
            border: 'none',
            transition: 'background 0.2s, transform 0.1s',
            '&:hover': { background: '#111', transform: 'scale(1.07)' },
            ml: 1,
          }}
        >
          Close
          <PanelBottomClose size={18} color="#fff" style={{ marginLeft: 8 }} />
        </IconButton>
      </Tooltip>
    </Stack>
  </Box>
);

export default ChatHeader;
