export interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  seen?: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  unread: boolean;
  time: string;
  badgeType?: "timer" | "count";
  badgeValue?: string;
}

