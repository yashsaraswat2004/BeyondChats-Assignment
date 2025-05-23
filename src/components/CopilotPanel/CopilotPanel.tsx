import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Stack,
  Avatar
} from '@mui/material';
import { Send, ChevronRight } from 'lucide-react';
import FinCopilotLogo from './FinCopilotLogo';
import DetailsPanel from './DetailsPanel';

// Dummy response hai 
const AI_RESPONSE = {
  text: `We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.

To assist you with your refund request, could you please provide your order ID and proof of purchase.

Please note:
We can only refund orders placed within the last 60 days, and your item must meet our requirements for condition to be refunded.`,
  sources: [
    "Getting a refund",
    "Refund for an order placed by mistake",
    "Refund for an unwanted gift"
  ]
};

export default function CopilotPanel() {
  const [tab, setTab] = useState(0);
  const [messages, setMessages] = useState<
    { sender: 'user' | 'ai'; text: string; sources?: string[] }[]
  >([]);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text }
    ]);
    setLoading(true);
    setQuestion('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: AI_RESPONSE.text, sources: AI_RESPONSE.sources }
      ]);
      setLoading(false);
    }, 1200);
  };

  const handleSuggestedClick = () => {
    sendMessage("How do I get a refund?");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(question);
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: `
          linear-gradient(to right, #DFE2F4, #F1DFE3);
        `,
        overflow: 'hidden',
      }}
    >
      {/* Tabs hai */}
      <Box sx={{ borderBottom: '1px solid #eee', px: 3, pt: 2 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{
            minHeight: 36,
            '& .MuiTab-root': { minHeight: 36, fontWeight: 500, fontSize: 15, textTransform: 'none' },
            '& .Mui-selected': { color: '#556cd6' },
            '& .MuiTabs-indicator': { backgroundColor: '#556cd6', height: 3, borderRadius: 2 }
          }}
        >
          <Tab label="AI Copilot" /> 
          <Tab label="Details" />
        </Tabs>
      </Box>

      {/* Main Content hai */}
      {tab === 0 && (
        <>
          <Box
            sx={{
              flex: 1,
              px: 3,
              py: 2,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              ...(messages.length === 0
                ? {
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }
                : {
                    alignItems: 'stretch',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                  }),
            }}
          >
            {messages.length === 0 ? (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 1 }}>
                  <FinCopilotLogo size={48} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Hi, I’m Fin AI Copilot
                </Typography>
                <Typography variant="body2" sx={{ color: '#888' }}>
                  Ask me anything about this conversation.
                </Typography>
              </>
            ) : (
              <Stack gap={3} sx={{ width: '100%', maxWidth: 520, mx: 'auto', mt: 0 }}>
                {messages.map((msg, idx) =>
                  msg.sender === 'user' ? (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <Avatar sx={{ width: 28, height: 28, mt: 0.5, fontSize: 15 }} src="/Avatar.jpg" alt="Scarlett Johnson" />
                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 0.5 }}>You</Typography>
                        <Typography sx={{ background: '#f5f5f5', borderRadius: 2, px: 2, py: 1, fontSize: 15 }}>
                          {msg.text}
                        </Typography>
                      </Box>
                    </Box>
                  ) : (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <Avatar sx={{ width: 28, height: 28, mt: 0.5, bgcolor: '#222' }}>
                        <FinCopilotLogo size={20} />
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 0.5 }}>Fin</Typography>
                        <Box
                          sx={{
                            background: 'linear-gradient(120deg, #e7e0ff 0%, #f3e6ff 60%, #ffd6e0 100%)',
                            borderRadius: 3,
                            px: 2,
                            py: 1.5,
                            fontSize: 15,
                            color: '#222',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                          }}
                        >
                          {msg.text.split('\n').map((line, i) => (
                            <Typography key={i} sx={{ fontSize: 15, color: '#222', mb: 0.5 }}>
                              {line}
                            </Typography>
                          ))}
                        </Box>
                        {/* dummy Sources */}
                        {msg.sources && (
                          <Box sx={{ mt: 1 }}>
                            <Typography sx={{ fontSize: 13, color: '#888', mb: 0.5 }}>
                              15 relevant sources found
                            </Typography>
                            <Stack gap={0.5}>
                              {msg.sources.map((src, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Box sx={{
                                    width: 8, height: 8, borderRadius: '50%',
                                    background: '#6C63FF', display: 'inline-block'
                                  }} />
                                  <Typography sx={{ fontSize: 14, color: '#222' }}>{src}</Typography>
                                </Box>
                              ))}
                            </Stack>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  )
                )}
                {loading && (
                  <Typography sx={{ color: '#aaa', fontStyle: 'italic', ml: 4 }}>
                    Fin is typing...
                  </Typography>
                )}
                <div ref={chatBottomRef} />
              </Stack>
            )}
          </Box>
          <Box sx={{ p: 3, pt: 0, background: 'transparent', position: 'relative', zIndex: 1 }}>
            {messages.length === 0 && (
              <Paper
  elevation={0}
  sx={{
    mb: 1,
    py: { xs: 0.5, sm: 1 },
    px: { xs: 1, sm: 2 },
    background: '#f3f6fd',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: { xs: 13, sm: 14 },
    color: '#222',
    cursor: 'pointer',
    flexWrap: 'wrap',
    minHeight: 40,
  }}
  onClick={handleSuggestedClick}
>
  <Box
    sx={{
      color: '#556cd6',
      mr: 1,
      display: 'flex',
      alignItems: 'center',
      fontSize: { xs: 16, sm: 18 },
      flexShrink: 0,
    }}
  >
    <ChevronRight size={18} />
  </Box>
  <Box
    sx={{
      fontWeight: 500,
      mr: 1,
      fontSize: { xs: 13, sm: 14 },
      flexShrink: 0,
    }}
  >
    Suggested
  </Box>
  <Box
    sx={{
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      fontSize: { xs: 13, sm: 14 },
      flex: 1,
      minWidth: 0,
    }}
  >
    How do I get a refund?
  </Box>
</Paper>

            )}
            <Paper
              component="form"
              elevation={1}
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                px: 2,
                py: 1,
                background: '#fff'
              }}
              onSubmit={handleSubmit}
            >
              <InputBase
                placeholder="Ask a question…"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                sx={{ flex: 1, fontSize: 15 }}
              />
              <IconButton type="submit" sx={{ color: '#556cd6' }}>
                <Send size={20} />
              </IconButton>
            </Paper>
          </Box>
        </>
      )}
      {tab === 1 && <DetailsPanel />}
    </Box>
  );
}
