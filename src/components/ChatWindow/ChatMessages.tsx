import { Box, Avatar, Typography, Tooltip } from '@mui/material';
import { avatarColorMap } from '../../utils/avatarColor';
import { useEffect, useRef } from 'react';

const messages = [
  {
    id: 1,
    sender: 'Pankaj - Github',
    text: `I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.`,
    time: '1 min',
    isMe: false,
    seen: false,
  },
  {
    id: 2,
    sender: 'Me',
    text: 'Let me just look into this for you, Pankaj.',
    time: '1min',
    isMe: true,
    seen: true,
  },
];

export default function ChatMessages() {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        px: { xs: 1, sm: 3 },
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        background: '#fff',
      }}
      role="list"
      aria-label="Messages"
    >
      {messages.map((msg) =>
        !msg.isMe ? (
          <Box
            key={msg.id}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              animation: 'fadeInMsg 0.4s cubic-bezier(.77,0,.18,1)',
              '@keyframes fadeInMsg': {
                from: { opacity: 0, transform: 'translateY(16px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
            role="listitem"
            aria-label={`Message from ${msg.sender}`}
          >
            <Avatar
              sx={{
                width: 28,
                height: 28,
                mr: 1,
                mb: 0.2,
                bgcolor: avatarColorMap[msg.sender] || '#6C63FF',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              {msg.sender[0]}
            </Avatar>
            <Box
              sx={{
                background: 'linear-gradient(120deg,#e7e0ff 0%,#f3e6ff 60%,#ffd6e0 100%)',
                borderRadius: 3,
                px: 2,
                py: 1.5,
                maxWidth: 420,
                minWidth: 80,
                mb: 0.5,
                color: '#222',
                fontSize: 15,
                boxShadow: '0 1px 4px rgba(108,99,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                transition: 'box-shadow 0.2s',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(108,99,255,0.12)',
                },
              }}
            >
              <Typography sx={{ fontSize: 15, color: '#222', mb: 1, wordBreak: 'break-word' }}>
                {msg.text}
              </Typography>
              <Tooltip title="Sent at 2024-05-24 12:53 AM">
                <Typography variant="caption" sx={{ color: '#888', fontSize: 12, mt: 0.5 }}>
                  {msg.time}
                </Typography>
              </Tooltip>
            </Box>
          </Box>
        ) : (
          <Box
            key={msg.id}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              animation: 'fadeInMsg 0.4s cubic-bezier(.77,0,.18,1)',
            }}
            role="listitem"
            aria-label="Your message"
          >
            <Box
              sx={{
                background: 'rgba(108,99,255,0.10)',
                borderRadius: 3,
                px: 2,
                py: 1.5,
                maxWidth: 380,
                minWidth: 80,
                mb: 0.5,
                color: '#222',
                fontSize: 15,
                boxShadow: '0 1px 4px rgba(56,72,112,0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                position: 'relative',
                transition: 'box-shadow 0.2s',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(56,72,112,0.12)',
                },
              }}
            >
              <Typography sx={{ fontSize: 15, color: '#222', mb: 1, wordBreak: 'break-word' }}>
                {msg.text}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                <Typography variant="caption" sx={{ color: '#888', fontSize: 12 }}>
                  Seen
                </Typography>
                <Tooltip title="Sent at 2024-05-24 12:53 AM">
                  <Typography variant="caption" sx={{ color: '#bbb', fontSize: 12 }}>
                    {msg.time}
                  </Typography>
                </Tooltip>
              </Box>
            </Box>
            <Avatar src='/Avatar.jpg' sx={{width: 28,
                height: 28,
                mr: 1,
                mb: 0.2,
                color: '#fff',
                fontWeight: 600,
                fontSize: 15}}/>
          </Box>
        )
      )}
      <div ref={endRef} />
    </Box>
  );
}
