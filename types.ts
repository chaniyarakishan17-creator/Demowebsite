import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Doctor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}