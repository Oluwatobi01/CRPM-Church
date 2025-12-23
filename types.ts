export interface NavItem {
  label: string;
  path: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  thumbnail: string;
  duration: string;
  tags: string[];
  views?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  category: 'Worship' | 'Youth' | 'Outreach' | 'Bible Study' | 'Social';
  image: string;
  attendees: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}