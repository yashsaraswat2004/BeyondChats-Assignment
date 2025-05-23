import React, { useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import InboxList from '../Inbox/InboxList';
import ChatHeader from '../ChatWindow/ChatHeader';
import ChatMessages from '../ChatWindow/ChatMessages';
import ChatInput from '../ChatWindow/ChatInput';
import CopilotPanel from '../CopilotPanel/CopilotPanel';
import MenuIcon from '@mui/icons-material/Menu';

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: 'background.default',
      }}
    >
      {/* Sidebar Inbox */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: { md: 320 },
          minWidth: { md: 260 },
          flexShrink: 0,
        }}
      >
        <InboxList />
      </Box>

      {/* Mobile responsive sidebar*/}
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
        PaperProps={{ sx: { width: 280 } }}
      >
        <InboxList />
      </Drawer>

      {/* Main Chat Window hai */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Mobile responsive Chat Window*/}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            px: 1,
            py: 1,
            borderBottom: '1px solid #eee',
            background: '#fff',
          }}
        >
          <IconButton onClick={() => setSidebarOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <IconButton onClick={() => setCopilotOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </Box>

      {/* Copilot Panel */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: { md: 380 },
          minWidth: { md: 320 },
          flexShrink: 0,
        }}
      >
        <CopilotPanel />
      </Box>

      {/* Copilot Panel responsive wala */}
      <Drawer
        anchor="right"
        open={copilotOpen}
        onClose={() => setCopilotOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
        PaperProps={{ sx: { width: 320 } }}
      >
        <CopilotPanel />
      </Drawer>
    </Box>
  );
};

export default MainLayout;
