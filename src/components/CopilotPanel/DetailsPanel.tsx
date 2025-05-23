import { useState } from 'react';
import {
  Box, Typography, Avatar, IconButton, Divider, Collapse, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChevronRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChevronDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import LinkIcon from '@mui/icons-material/Link';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ForumIcon from '@mui/icons-material/Forum';

const sections = [
  "USER DATA",
  "CONVERSATION ATTRIBUTES",
  "COMPANY DETAILS",
  "SALESFORCE",
  "STRIPE",
  "JIRA FOR TICKETS"
];

export default function DetailsPanel() {
  const [open, setOpen] = useState<{ [k: string]: boolean }>({});

  const handleToggle = (section: string) => {
    setOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Box
      sx={{
        width: '95%',
        maxWidth: 410,
        mx: 'auto',
        my: 0.7,
        background: '#fff',
        borderRadius: 3,
        boxShadow: '0 2px 16px rgba(56, 72, 112, 0.08)',
        border: '1px solid #ececec',
        overflow: 'hidden',
        minHeight: 600,
      }}
    >
      {/* Tabs hai */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        px: 2,
        pt: 2,
        pb: 0,
        position: 'relative'
      }}>
        <IconButton sx={{ color: '#555', mr: 1 }}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: '#555' }}>
          <OpenInNewIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{
        px: 2,
        pt: 2,
        pb: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: '#aaa', fontWeight: 500, fontSize: 14, minWidth: 70 }}>Assignee</Typography>
          <Avatar sx={{ width: 24, height: 24, mr: 1 }} src="/Avatar.jpg" />
          <Typography sx={{ fontWeight: 500, fontSize: 15 }}>Simran Jain</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: '#aaa', fontWeight: 500, fontSize: 14, minWidth: 70 }}>Team</Typography>
          <GroupIcon sx={{ fontSize: 20, color: '#888', mr: 1 }} />
          <Typography sx={{ fontWeight: 500, fontSize: 15 }}>Unassigned</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* LINKS hai ye */}
      <Box sx={{ px: 2, py: 1 }}>
        <Typography sx={{
          color: '#222',
          fontWeight: 700,
          fontSize: 13,
          mb: 0.5,
          letterSpacing: 1,
        }}>
          LINKS
        </Typography>
        <List dense sx={{ width: '100%' }}>
          {[
            { icon: <LinkIcon fontSize="small" />, label: "Tracker ticket" },
            { icon: <AssignmentTurnedInIcon fontSize="small" />, label: "Back-office tickets" },
            { icon: <ForumIcon fontSize="small" />, label: "Side conversations" }
          ].map((item) => (
            <ListItem key={item.label} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32, color: '#222' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
              />
              <ListItemSecondaryAction>
                <IconButton sx={{
                  bgcolor: '#f5f5f5',
                  color: '#888',
                  width: 28,
                  height: 28,
                  p: 0.5,
                  '&:hover': { bgcolor: '#ececec' }
                }}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Expandable Sections hai */}
      {sections.map((section) => (
        <Box key={section}>
          <Box
            sx={{
              px: 2,
              py: 1.2,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 14,
              color: '#222',
              textTransform: 'uppercase',
              letterSpacing: 1,
              borderBottom: '1px solid #f2f2f2'
            }}
            onClick={() => handleToggle(section)}
          >
            <Box sx={{ flex: 1 }}>{section}</Box>
            {open[section] ? <ChevronDownIcon fontSize="small" /> : <ChevronRightIcon fontSize="small" />}
          </Box>
          <Collapse in={open[section]}>
            <Box sx={{ px: 3, py: 2, color: '#888', fontSize: 14 }}>
              {section} content goes here...
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
