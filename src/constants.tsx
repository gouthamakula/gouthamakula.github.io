import p1_1 from './assets/p1-1.png';
import ic1 from './assets/introcard1.png';
import ic2 from './assets/introcard2.png';
import ic3 from './assets/introcard3.png';


export const projects = [
    {
        'name': 'Stock Binger',
        'title': 'Build an Application - Stock Binger',
        'gh': 'https://github.com/Stock-Binger/sb-intro',
        'summary': 'Designed the Core functionalities for tracking and analysing stock data, including real time updates on stock performance. ',
        'pic': p1_1,
        'subtitle': 'Data at your FingerTips using AI',
        'tech_stack': ['Java', 'Spring', 'AWS', 'React', 'Redis Distributed', 'Helm charts'],
        'url': 'https://github.com/Stock-Binger/sb-intro',
    },
    {
        'name': 'Meeting Summarizer',
        'gh': 'https://github.com/gouthamakula/AISummarizer',
        'title': 'Spotify Profiles',
        'summary': 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        'pic': p1_1,
        'subtitle': 'Real Time Audio to Text Model',
        'tech_stack': ['Python', 'Js'],
        'url': 'https://github.com/gouthamakula/AISummarizer',
    }
];

export const experiences = [
    {
        'title': 'Chargebee Technologies',
        'role': 'Software Development Engineer, 2 years of experience',
        'acheivements': [
            {
                'title': 'Workflow Automation Feature',
                'subtitle': 'Worked on automation feature'
            },
        ],
        'from': '2022',
        'to': 'Jan 2024',
        'url': 'https://www.chargebee.com/',
    }, 
    {
        'title': 'Amrita School Of Engineering',
        'role': 'LeetCode DSA ',
        'acheivements': [
            {
                'title': 'Workflow Automation Feature',
                'subtitle': 'Worked on automation feature'
            },
        ],
        'from': '2018',
        'to': '2022',
        'url': 'https://leetcode.com/u/akulagoutham23/',
    }
];

export const introCards = [ic1, ic2, ic3]