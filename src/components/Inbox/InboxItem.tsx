import React from 'react';
import { ListItemButton, ListItemAvatar, Avatar, Box, Tooltip, Badge } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import type { Conversation } from '../../types';
import { avatarColorMap } from '../../utils/avatarColor';

interface Props {
  conversation: Conversation & {
    badgeType?: 'timer' | 'count';
    badgeValue?: string;
  };
  selected: boolean;
  onClick: () => void;
}

const InboxItem: React.FC<Props> = ({ conversation, selected, onClick }) => {
  const isUnread = conversation.unread;
  const avatarBg = avatarColorMap[conversation.name] || '#888';

  return (
    <ListItemButton
      selected={selected}
      onClick={onClick}
      role="listitem"
      aria-label={`Conversation with ${conversation.name}${isUnread ? ', unread' : ''}`}
      sx={{
        alignItems: 'flex-start',
        py: 1.5,
        borderLeft: selected ? '3px solid #7C3AED' : '3px solid transparent',
        bgcolor: selected ? 'rgba(124,58,237,0.09)' : 'transparent',
        borderRadius: selected ? 2 : 0,
        transition: 'background 0.2s, border-radius 0.2s, box-shadow 0.2s',
        boxShadow: selected ? '0 2px 8px 0 rgba(124,58,237,0.04)' : 'none',
        mb: 0.5,
        '&:hover': {
          bgcolor: selected ? 'rgba(124,58,237,0.13)' : '#f7f7fa',
          boxShadow: '0 4px 12px 0 rgba(124,58,237,0.05)',
        },
      }}
    >
      <ListItemAvatar>
        <Badge
          color="error"
          variant="dot"
          invisible={!isUnread}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          sx={{
            '& .MuiBadge-dot': {
              animation: isUnread ? 'badgePop 0.3s cubic-bezier(.77,0,.18,1)' : 'none',
            },
            '@keyframes badgePop': {
              '0%': { transform: 'scale(0.5)' },
              '80%': { transform: 'scale(1.2)' },
              '100%': { transform: 'scale(1)' },
            },
          }}
        >
          <Avatar
            src={conversation.avatarUrl}
            alt={conversation.name}
            sx={{
              bgcolor: avatarBg,
              color: '#fff',
              fontWeight: 600,
              fontSize: 16,
              width: 32,
              height: 32,
              transition: 'transform 0.2s',
              transform: selected ? 'scale(1.08)' : 'scale(1)',
              boxShadow: selected ? '0 2px 8px rgba(124,58,237,0.10)' : undefined,
            }}
          >
            {conversation.avatarUrl ? null : conversation.name[0]}
          </Avatar>
        </Badge>
      </ListItemAvatar>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.2 }}>
          <Box
            sx={{
              fontWeight: isUnread ? 700 : 500,
              fontSize: 15,
              color: '#222',
              flex: 1,
              lineHeight: 1.2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {conversation.name}
          </Box>
          {/* Timer badge ke lie */}
          {conversation.badgeType === 'timer' && (
            <Tooltip title="Waiting time" arrow>
              <Box
                sx={{
                  ml: 1,
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: 'linear-gradient(90deg,#fbe9e7 0%,#f3e6ff 100%)',
                  color: '#a67c00',
                  borderRadius: 2,
                  px: 1,
                  py: '2px',
                  fontSize: 12,
                  fontWeight: 600,
                  minWidth: 36,
                  boxShadow: '0 1px 3px #f3e6ff',
                  justifyContent: 'center',
                  animation: 'badgePop 0.3s cubic-bezier(.77,0,.18,1)',
                }}
              >
                <AccessTimeFilledIcon sx={{ fontSize: 15, mr: 0.5 }} />
                {conversation.badgeValue}
              </Box>
            </Tooltip>
          )}
          {/* Count badge ke lie  */}
          {conversation.badgeType === 'count' && (
            <Tooltip title="Unread messages" arrow>
              <Box
                sx={{
                  ml: 1,
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: '#222',
                  color: '#fff',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  fontSize: 13,
                  fontWeight: 600,
                  justifyContent: 'center',
                  animation: 'badgePop 0.3s cubic-bezier(.77,0,.18,1)',
                }}
              >
                {conversation.badgeValue}
              </Box>
            </Tooltip>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Box
            sx={{
              fontWeight: isUnread ? 700 : 400,
              fontSize: 13,
              color: isUnread ? '#222' : '#777',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
            }}
          >
            {conversation.lastMessage}
          </Box>
          <Tooltip title="Received time" arrow>
            <Box sx={{ fontSize: 12, color: '#aaa', ml: 1, minWidth: 32, textAlign: 'right' }}>
              {conversation.time}
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </ListItemButton>
  );
};

export default InboxItem;
