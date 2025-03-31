import { Users, Palette, MessageSquare, ChevronRight, Phone, Wallet, Trophy, DollarSign, UserCircle, Dice1 as Dice, MonitorPlay, Gamepad2 } from 'lucide-react';
import React from 'react';

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  slack: string;
}

export interface BrandAsset {
  name: string;
  description: string;
  contact: ContactInfo;
}

export interface Phase {
  name: string;
  subDomain: string;
  domain: string;
  pillar: string;
  icon: React.ReactNode;
}

export const phases: Phase[] = [
  // Player Experience - Player Journey
  {
    name: "Consideration",
    subDomain: "Onboarding and My Account",
    domain: "Player Journey",
    pillar: "Player Experience",
    icon: <UserCircle className="w-4 h-4" />
  },
  {
    name: "Registration",
    subDomain: "Onboarding and My Account",
    domain: "Player Journey",
    pillar: "Player Experience",
    icon: <UserCircle className="w-4 h-4" />
  },
  {
    name: "Verification (KYC)",
    subDomain: "Onboarding and My Account",
    domain: "Player Journey",
    pillar: "Player Experience",
    icon: <UserCircle className="w-4 h-4" />
  },
  // Player Experience - Payment
  {
    name: "First Time Deposit",
    subDomain: "Cashier Portal",
    domain: "Payment",
    pillar: "Player Experience",
    icon: <Wallet className="w-4 h-4" />
  },
  {
    name: "Claim Bonus",
    subDomain: "Cashier Portal",
    domain: "Payment",
    pillar: "Player Experience",
    icon: <Trophy className="w-4 h-4" />
  },
  {
    name: "Withdraw money",
    subDomain: "Cashier Portal",
    domain: "Payment",
    pillar: "Player Experience",
    icon: <DollarSign className="w-4 h-4" />
  },
  // Sports
  {
    name: "Browse Sports",
    subDomain: "Betting",
    domain: "Sports",
    pillar: "Sports",
    icon: <Gamepad2 className="w-4 h-4" />
  },
  {
    name: "Choose Sport Event",
    subDomain: "Betting",
    domain: "Sports",
    pillar: "Sports",
    icon: <Gamepad2 className="w-4 h-4" />
  },
  {
    name: "Bet Sports",
    subDomain: "Betting",
    domain: "Sports",
    pillar: "Sports",
    icon: <Gamepad2 className="w-4 h-4" />
  },
  // Gaming
  {
    name: "Choose game",
    subDomain: "Live Casino",
    domain: "Gaming",
    pillar: "Gaming",
    icon: <Dice className="w-4 h-4" />
  },
  {
    name: "Choose room",
    subDomain: "Live Casino",
    domain: "Gaming",
    pillar: "Gaming",
    icon: <MonitorPlay className="w-4 h-4" />
  },
  {
    name: "Play game",
    subDomain: "Live Casino",
    domain: "Gaming",
    pillar: "Gaming",
    icon: <Dice className="w-4 h-4" />
  },
  {
    name: "Leave room",
    subDomain: "Live Casino",
    domain: "Gaming",
    pillar: "Gaming",
    icon: <MonitorPlay className="w-4 h-4" />
  },
];

export const brandContacts: ContactInfo[] = [
  {
    name: "Sarah Chen",
    role: "Brand Director",
    email: "sarah.chen@entertainment.com",
    slack: "@sarahc"
  },
  {
    name: "Mike Rodriguez",
    role: "Art Director",
    email: "mike.r@entertainment.com",
    slack: "@miker"
  }
];

export const brandAssets: BrandAsset[] = [
  {
    name: "Core Brand Kit",
    description: "Primary logos, colors, and typography guidelines",
    contact: brandContacts[0]
  },
  {
    name: "Game Assets",
    description: "UI elements, characters, and environmental assets",
    contact: brandContacts[1]
  }
];