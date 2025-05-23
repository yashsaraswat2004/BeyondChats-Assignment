import React, { useState } from 'react';
import { Box, IconButton, InputBase, Paper, MenuItem, Select, Stack, Divider, Tooltip } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SaveIcon from '@mui/icons-material/Save';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const ChatInput: React.FC = () => {
  const [chatType, setChatType] = useState('Chat');
  const [input, setInput] = useState('');
  const [shake, setShake] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    setInput('');
  };

  return (
    <Paper
      elevation={2}
      sx={{
        px: { xs: 1, sm: 2 },
        py: 1.5,
        borderRadius: 3,
        m: { xs: 1, sm: 3 },
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        boxShadow: '0 2px 16px rgba(108,99,255,0.06)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
        <ChatBubbleOutlineIcon sx={{ color: '#222', fontSize: 18, mr: 0.5 }} />
        <Select
          value={chatType}
          onChange={(e) => setChatType(e.target.value)}
          variant="standard"
          disableUnderline
          sx={{
            fontWeight: 500,
            fontSize: 15,
            minWidth: 60,
            '& .MuiSelect-icon': { right: 0 },
          }}
          IconComponent={ArrowDropDownIcon}
        >
          <MenuItem value="Chat">Chat</MenuItem>
        </Select>
      </Box>

      <Box sx={{ color: '#aaa', fontSize: 13, mb: 1, ml: '28px' }}>
        Use ⌘K for shortcuts
      </Box>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Tooltip title="Lightning actions">
          <IconButton sx={{ color: '#222', p: 0.5 }}>
            <FlashOnIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Save conversation">
          <IconButton sx={{ color: '#222', p: 0.5 }}>
            <SaveIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add emoji">
          <IconButton sx={{ color: '#222', p: 0.5 }}>
            <EmojiEmotionsIcon fontSize="small" />
          </IconButton>
        </Tooltip>
       
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      
        <form
          onSubmit={handleSend}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            animation: shake ? 'shakeInput 0.4s' : undefined,
          }}
        >
          <InputBase
            placeholder="Type your message…"
            value={input}
            onChange={e => setInput(e.target.value)}
            sx={{ flex: 1, fontSize: 15, mx: 1 }}
            inputProps={{
              'aria-label': 'Type your message',
              autoComplete: 'off',
              spellCheck: 'true',
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) handleSend(e);
            }}
          />
          <Tooltip title="Send">
            <IconButton type="submit" sx={{ color: '#556cd6', transition: 'transform 0.1s', fontSize: '18px', '&:active': { transform: 'scale(0.95)' } }}>
              Send
            </IconButton>
          </Tooltip>
        </form>
        
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
       
        <Tooltip title="More options">
          <IconButton sx={{ color: '#888', p: 0.5 }}>
            <ArrowDropDownIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <style>
        {`
          @keyframes shakeInput {
            0% { transform: translateX(0); }
            20% { transform: translateX(-6px); }
            40% { transform: translateX(6px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </Paper>
  );
};

export default ChatInput;
