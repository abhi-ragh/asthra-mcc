// src/data/eventData.js
{ /* export const events = [
  {
    id: 'cse-1',
    name: 'Coding Sprint',
    poster: '/assets/Events/cse/code.jpg',
    tags: ['Computer Science', 'Tech Fest', 'Day 1', 'CSE'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2000
    },
    content: {
      Description: 'A competitive programming challenge testing your algorithmic skills.',
      Rules: [
        'Individual participation only',
        'Time limit: 3 hours',
        'Languages allowed: C++, Java, Python',
        'Internet access is not allowed during the contest'
      ]
    },
    registrationLink: 'https://example.com/register/code-quest'
  },
  {
    id: 'cse-2',
    name: 'Fix-It Frenzy',
    poster: '/assets/Events/cse/fix.jpg',
    tags: ['Computer Science', 'Tech Fest', 'Day 1', 'CSE', 'Hackathon'],
    registrationFee: {
      amount: 50,
      perTeam: true
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 5000 },
        { position: 2, amount: 3000 },
        { position: 3, amount: 2000 }
      ]
    },
    content: {
      Description: '24-hour hackathon to build innovative solutions.',
      Rules: [
        'Team size: 2-4 members',
        'Bring your own laptops',
        'Original ideas only'
      ]
    },
    registrationLink: 'https://example.com/register/hackathon'
  },
  {
    id: 'ce-1',
    name: 'Bridge Building',
    poster: '/assets/Events/ce/bridge.jpg',
    tags: ['Civil Engineering', 'Tech Fest', 'Day 1', 'CE'],
    content: {
      Description: 'Design and build a model bridge using provided materials.',
      Guidelines: [  // Example of different section name
        'Teams of 3 required',
        'Materials will be provided',
        'Time limit: 4 hours'
      ],
      Judging: [  // Example of different section name
        'Structural integrity',
        'Design innovation',
        'Weight to strength ratio'
      ]
    },
    registrationLink: 'https://example.com/register/bridge'
  },
  {
    id: 'cultural-1',
    name: 'DJ Night',
    poster: '/assets/Events/cultural/dj.jpg',
    tags: ['Cultural', 'Day 2', 'DJ EVE'],
    content: {
      Details: 'Experience an electrifying night with our guest DJ!',  // Different content structure
      Venue: 'Main Ground',
      Time: '7 PM onwards'
    }
    // No registration or prizes for this event
  },
  {
    id: 'inter-1',
    name: 'Robotics Challenge',
    poster: '/assets/Events/inter/robotics.jpg',
    tags: ['Inter College', 'Tech Fest', 'Day 3', 'Robotics'],
    registrationFee: {
      amount: 200,
      perTeam: true
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 10000 },
        { position: 2, amount: 5000 }
      ]
    },
    content: {
      About: 'Inter-college robotics competition showcasing innovation',  // Different section name
      Specifications: [  // Different section name
        'Robot must fit within 30x30x30 cm cube',
        'Maximum weight: 3kg',
        'Remote controlled only'
      ],
      Rules: [
        'Team size: 2-4 members',
        'Multiple entries allowed per college',
        'Preliminary and final rounds'
      ]
    },
    registrationLink: 'https://example.com/register/robotics'
  }
]; */ }

export const events = [
  {
    id: 'campus-ambassador',
    name: 'Call For Campus Ambassadors',
    poster: '/assets/Events/ambassador.jpg',
    tags: ['General'],
    content: {
      'Why This?': [
        'Recognition as a Campus Ambassador',
        'Networking Oppurtunities with Administrators, Organizers, Industry Experts',
        'Skill Development in Leadership, Communication and Organisation',
        'Win Exciting Prizes'
      ]
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdEkHJn93hocAhuIqRPbN4sjLEKLz_BZth-2Gil4hcRSYrN0g/viewform?usp=dialog'
  },
  {
  id: 'mehndi-competition',
  name: 'Mehndi Competition',
  poster: '/assets/Events/mehndi.png',
  tags: ['General','Day 2 | Feb 24','Day 2 | Off-stage'],
  registrationFee: {
    amount: 150,
    perTeam: true
  },
  prizes: {
    type: 'pool',
    amount: 1500
  },
  content: {
    'Description': 'Where art meets skin! 🎨 Musaliar College presents Gulabi Hath, a mehndi competition that celebrates the beauty of intricate designs. Prepare to transform hands into works of art, using henna as your medium and creativity as your guide. Ready to leave your mark?',
    'Guidelines': [
      'Participant cannot use products other than provided.',
      'Participants should bring their own partners.',
      'Participants must currently be a college student.',
      'Participants are requested to carry their ID card of their respected colleges for registration.Registration will be confirmed only after verifying the ID cards.',
      'Time limit is 1 hour.',
      'Design should be drawn on one side of the hand and the design may extent upto elbow joint.',
      'Decision of the judges will be final and any kind of arguments or appeal related to the judgement will not be entertained.',
      'Any violation of above mentioned rules leads to disqualification.',
      'There is only online registration, no spot registration.',
      'Participants should report their presence at least 1 hour before event starts.',
      'Participants should not involve in any kind of violence inside and outside of the venue at anytime before and after the event.',
      'Certificates will be provided for all the participants.'
    ] 
  },
  registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe-lpizS8kWZLJSgmDuyHlIW_HiFJ_uLV0AbymW-IRsvqpgVQ/viewform'
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    poster: '/assets/Events/treasure.png',
    tags: ['General','Day 2 | Feb 24','Day 2 | Off-stage'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 5000
    },
    content: {
      'Description': 'Enter the Realm of Tumbbad! 🎭 Musaliar College throws open the gates to a world of intrigue and hidden riches! The Tumbbad Treasure Hunt awaits, a quest that will test your limits and reward the bold. Prepare to embark on a journey of discovery, where only the cleverest and most resourceful will prevail. Are you ready to write your legend?',
      'Guidelines': [
        'Teams consist of 4 members.',
        'Teams must begin and end at the designated locations.',
        'Clues must be solved by the team without external assistance (unless otherwise specified).',
        'Teams are generally prohibited from contacting individuals outside their team for help with clues (unless specified otherwise).',
        'The use of electronic devices (phones, internet) is [Allowed/Restricted/Limited - specify allowed uses].',
        'Teams must not tamper with, remove, or alter clues in any way. Doing so may result in disqualification.',
        'Teams are responsible for their own safety. Avoid risky behavior and be mindful of their surroundings. Report any accidents or incidents to the organizers immediately.',
        'Teams must complete the treasure hunt within the specified time limit. Teams exceeding the time limit may be penalized or disqualified.',
        'Any disputes or questions regarding the rules or clues should be directed to the event organizers, whose decisions are final.',
        'The team that successfully finds the treasure and adheres to all rules and guidelines within the time limit will be declared the winner. In case of multiple teams finding the treasure, the fastest time will determine the winner.',
        'Participants are requested to carry their ID card of their respective colleges for registration. Registration will be confirmed only after verifying the ID cards.'
      ],
      'Disclaimer': [
        'Participants acknowledge that they participate in the treasure hunt at their own risk and release the organizers from any liability for accidents or injuries that may occur during the event.',
        'The organizers reserve the right to modify the rules or guidelines as necessary for the smooth and fair conduct of the treasure hunt.'
      ]
    },
    registrationLink: 'https://forms.gle/3sYxpyuh84hAatXk7'
    },
    {
      id: 'embroidery-competition',
      name: 'Embroidery Competition',
      poster: '/assets/Events/embroidery.png',
      tags: ['General','Day 3 | Feb 25','Day 3 | Off-stage'],
      registrationFee: {
        amount: 150,
        perTeam: false
      },
      prizes: {
        type: 'pool',
        amount: 1500
      },
      content: {
        'Description': 'Ready to get your fingers nimble…with thread? 😉 Musaliar College\'s Zardozi competition is your chance to shine! From delicate details to bold statements, let your embroidery do the talking. Think you\'ve got the magic touch?',
        'Rules And Regulations': [
          'Participants must bring their own embroidery materials',
          'All stitches must be done manually using a needle and thread. Machine embroidery is not allowed',
          'Pre-drawn or pre-stitched designs are not allowed',
          'The time limit is 2 hours',
          'The decision of the judges is final and binding.',
          'Participants are requested to carry their ID card of their respected colleges for registration'
        ]
      },
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSda7yWwVoQNV8W9a81p6tOlRIUEMjCGOObUlz-oPwwUK7mtYg/viewform?usp=header'
      },
      {
        id: 'broll-competition',
        name: 'B-Roll Competition',
        poster: '/assets/Events/broll.png',
        tags: ['General','Day 3 | Feb 25','Day 3 | Off-stage'],
        registrationFee: {
          amount: 150,
          perTeam: false
        },
        prizes: {
          type: 'pool',
          amount: 1500
        },
        content: {
          'Description': 'Calling all Visual Storytellers! 🎬 The lens is your weapon, the story your canvas! Musaliar College proudly presents the ultimate B-roll challenge for Asthra! Unleash your cinematic vision and weave compelling narratives with the art of B-roll. From breathtaking landscapes to intimate moments, capture the essence of storytelling without a single word. Are you ready to paint a thousand pictures?',
          'Rules And Regukation': [
            'The footage must be original and recorded by the participant.',
            'The video length should be  minimum 30 seconds and maximum 1 minute',
            'Any software can be used for color grading and minor enhancements, but AI-generated or heavily manipulated content may not be allowed.',
            'No logos, watermarks, or promotional content should be included',
            'Videos should be submitted in mp4 or hevc format ',            
            'Participants are requested to carry their ID card of their respected colleges for registration'
          ]
        },
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScRk5WDjHycuacgc2_grZAkJNcBKXjF3jWrlXeBpKAuhyKtHA/viewform?usp=dialog'
        }
];
