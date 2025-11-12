export const routes = [
  {
    id: 'safest',
    name: 'Safest Route',
    recommended: true,
    time: '18 min',
    distance: '0.9 mi',
    safetyScore: 92,
    lighting: { percent: 95, level: 'High' },
    traffic: 'High',
    incidents: 0,
    details: [
      'Well-lit streets (95% coverage)',
      'High foot traffic',
      'No incidents in 30 days'
    ]
  },
  {
    id: 'balanced',
    name: 'Balanced Route',
    recommended: false,
    time: '14 min',
    distance: '0.8 mi',
    safetyScore: 78,
    lighting: { percent: 72, level: 'Medium' },
    traffic: 'Medium',
    incidents: 1,
    details: [
      'Moderate lighting (72% coverage)',
      'Medium foot traffic',
      '1 minor incident (30 days)'
    ]
  },
  {
    id: 'fastest',
    name: 'Fastest Route',
    recommended: false,
    time: '11 min',
    distance: '0.7 mi',
    safetyScore: 61,
    lighting: { percent: 45, level: 'Low' },
    traffic: 'Low',
    incidents: 3,
    details: [
      'Limited lighting (45% coverage)',
      'Low foot traffic after 8pm',
      '3 incidents (30 days)'
    ]
  }
];

export const contacts = [
  { id: 1, name: 'Sarah Johnson', phone: '+1 (555) 123-4567', active: true, initials: 'SJ' },
  { id: 2, name: 'Mom', phone: '+1 (555) 987-6543', active: true, initials: 'M' },
  { id: 3, name: 'Alex Chen', phone: '+1 (555) 456-7890', active: false, initials: 'AC' }
];

export const communityPosts = [
  {
    id: 1,
    author: 'Sarah M.',
    initials: 'SM',
    location: 'Washington Sq',
    time: '2 hours ago',
    content: 'Really creepy guy in Wash Sq. Do not recommend this route after dark.',
    likes: 12,
    comments: 3,
    type: 'warning'
  },
  {
    id: 2,
    author: 'Mike Chen',
    initials: 'MC',
    location: 'Bobst Library',
    time: '5 hours ago',
    content: 'PSA: New LED street lights installed. Much safer now!',
    likes: 24,
    comments: 7,
    type: 'positive'
  },
  {
    id: 3,
    author: 'Jessica R.',
    initials: 'JR',
    location: 'University Pl',
    time: '1 day ago',
    content: "The street isn't busy after 10pm. Avoid for evening walks.",
    likes: 18,
    comments: 5,
    type: 'info'
  }
];

export const safetyData = {
  location: 'Washington Square Park',
  overallScore: 85,
  scoreChange: '+3',
  lighting: '87%',
  activity: 'High',
  incidents: 2,
  recentReports: [
    {
      type: 'positive',
      location: 'Main Street & 5th Ave',
      description: 'Well-lit, lots of people around. Felt very safe.',
      time: '2 hours ago',
      verified: true
    },
    {
      type: 'lighting',
      location: 'Oak Street alley',
      description: 'Poor lighting near the parking area',
      time: '5 hours ago',
      verified: true
    }
  ]
};