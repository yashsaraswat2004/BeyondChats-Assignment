import React, { useState } from 'react';
import { Box, Tabs, Tab, List, IconButton } from '@mui/material';
import InboxItem from './InboxItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import type { Conversation } from '../../types';
const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Pankaj - Github',
    avatarUrl: '',
    lastMessage: "Hey! I have a question...",
    unread: false,
    time: '45m',
  },
  {
    id: '2',
    name: 'Simran - Nike',
    avatarUrl: '',
    lastMessage: "Hi there, I have a qu...",
    unread: true,
    time: '30m',
    badgeType: 'timer',
    badgeValue: '3min',
  },
  {
    id: '3',
    name: 'Shone Jogi',
    avatarUrl: '',
    lastMessage: "Good morning, let me...",
    unread: true,
    time: '40m',
    badgeType: 'count',
    badgeValue: '1',
  },
  {
    id: '4',
    name: 'Beyond Chats',
    avatarUrl: '',
    lastMessage: "Bug report",
    unread: false,
    time: '45m',
  },
  {
    id: '5',
    name: 'Miracle - Examplary Bank',
    avatarUrl: '',
    lastMessage: "Hey there, I'm here to...",
    unread: false,
    time: '45m',
  },
];


const InboxList: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [selectedId, setSelectedId] = useState(conversations[0]?.id || '');

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', background: '#fff', borderRadius: 3, boxShadow: '0 2px 16px rgba(56,72,112,0.04)' }}>
      <Box sx={{ px: 2, pt: 2, pb: 1 }}>
        <Box sx={{ fontWeight: 600, fontSize: 18, letterSpacing: 0.2 }}>Your inbox</Box>
      </Box>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="fullWidth"
        sx={{
          minHeight: 36,
          mb: 1,
          '& .MuiTab-root': { minHeight: 36, fontWeight: 500, fontSize: 15, textTransform: 'none' },
          '& .Mui-selected': { color: '#7C3AED' },
          '& .MuiTabs-indicator': { backgroundColor: '#7C3AED', height: 3, borderRadius: 2 }
        }}
      >
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              5 Open
              <KeyboardArrowDownIcon sx={{ fontSize: 18, ml: 0.5 }} />
            </Box>
          }
          sx={{
            minHeight: 36,
            fontWeight: 500,
            minWidth: 0,
            px: 2,
          }}
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              Waiting longest
              <KeyboardArrowDownIcon sx={{ fontSize: 18, ml: 0.5 }} />
            </Box>
          }
          sx={{
            minHeight: 36,
            fontWeight: 500,
            minWidth: 120,
            px: 2,
          }}
        />
      </Tabs>
      <List sx={{ flex: 1, overflowY: 'auto', p: 0 }} role="list" aria-label="Inbox conversations">
        {conversations.map((conv) => (
          <InboxItem
            key={conv.id}
            conversation={conv}
            selected={conv.id === selectedId}
            onClick={() => setSelectedId(conv.id)}
          />
        ))}
      </List>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        position: 'absolute',
        bottom: 12,
        left: 16,
      }}>
        <IconButton size="small" sx={{ color: '#aaa', transition: 'color 0.2s', '&:hover': { color: '#7C3AED' } }} aria-label="Collapse sidebar">
          <MenuOpenIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: '#aaa', transition: 'color 0.2s', '&:hover': { color: '#7C3AED' } }} aria-label="Open folders/views">
          <FolderOpenIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InboxList;
