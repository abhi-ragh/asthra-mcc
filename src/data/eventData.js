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
  tags: ['General','Day 2 | Feb 24','Off-stage'],
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
    tags: ['General','Day 2 | Feb 24','Off-stage'],
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
    tags: ['General','Day 3 | Feb 25','Off-stage'],
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
    tags: ['General','Day 3 | Feb 25','Off-stage'],
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
      'Rules And Regulation': [
        'The footage must be original and recorded by the participant.',
        'The video length should be  minimum 30 seconds and maximum 1 minute',
        'Any software can be used for color grading and minor enhancements, but AI-generated or heavily manipulated content may not be allowed.',
        'No logos, watermarks, or promotional content should be included',
        'Videos should be submitted in mp4 or hevc format ',            
        'Participants are requested to carry their ID card of their respected colleges for registration'
      ]
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScRk5WDjHycuacgc2_grZAkJNcBKXjF3jWrlXeBpKAuhyKtHA/viewform?usp=dialog'
  },
  {
    id: 'ipl-auction',
    name: 'IPL AUCTION',
    poster: '/assets/Events/ipl.png',
    tags: ['General','Day 3 | Feb 25','Off-stage'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Got a knack for strategy? 🤔 Asthra, Musaliar College\'s spectacular fest, challenges you to Lagaan, the IPL Auction showdown!  Will you be the shrewdest bidder, the master negotiator, or the one who misses out on the star player?  Prepare for a bidding war like no other!  Are you ready to play the game?',
      'Rules And Regulation': [
        'Team Consist Of Two Members.',
        'Competition will be of Two Rounds.', 
        'First Round will be General IPL Quiz.', 
        'Second Round Will be a Mock Ipl Auction.',
        'The Team with maximum points will be Considered as Winners.',
        'Decision Of Judges will Be Final.',
        'The Auction result will be completely based on Player Stats.', 
        'Violation Of Rules During Auction will result in disqualification.'
      ]
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScs-nv4IyZ2hQUjYtOgQ48vSns3O12UENLPMmGZQebPtp-01w/viewform?usp=header'
    },
  {
    id: 'decode-the-beats',
    name: 'Decode The Beats',
    poster: '/assets/Events/decode.png',
    tags: ['General','Day 3 | Feb 25','Off-stage'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Do you speak the language of music? 🎼 Asthra at Musaliar College challenges you to Decode the Beats! Test your musical knowledge, identify the hidden tracks, and prove your mastery of melody. Ready to unlock the music?',
      'Rules And Regulation': [
        "Participants of 2 per team.",
        "The competition will consist of 3 rounds.",
        "Use of external devices is strictly prohibited during the competition, except when specifically permitted by organizers for a designated purpose.",
        "The team with the highest score at the end of all rounds will be declared the winner.",
        "Judges' decisions are final and binding.",
        "Participants are requested to carry their ID card of their respective colleges for registration.",
        "The music used in the competition will span various genres."
      ],
      'Code Of Conduct': 'Participants are expected to maintain a respect-ful and sportsmanlike attitude throughout the competition. Any form of cheating or disruptive behavior will result in disqualification.'
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeD9oZ3RP835rObAQ60TghpvipU2YVXsWipKjWyGLRFqa65xA/viewform?usp=header'
    },
  {
    id: 'spot-photography',
    name: 'Spot Photography',
    poster: '/assets/Events/spot.png',
    tags: ['General','Day 3 | Feb 25','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Can you see the unseen? 👀 Musaliar College\'s Asthra fest challenges you with Tasveer, a spot photography competition that celebrates the power of visual storytelling. Prepare to find the extraordinary in the everyday, capture the emotions, and freeze the fleeting moments. Ready to capture the magic?',
      'Rules And Regulation': [
        "The contest will be conducted at the college.",
        "Specific theme will be provided for the contest.",
        "There will be a time limit (3 hours). Participants should submit their photos in the specified time.",
        "You are required to provide a unique title and description for each image submitted.",
        "Participants who submit their photos after the specified time will be disqualified.",
        "Images must be in JPEG format.",
        "All submitted photos must contain the original EXIF metadata information.",
        "There must be no border(s), logo(s), copyright marks, identifying marks, or any other visible references and/or marks on the image.",
        "Photos that include inappropriate and/or offensive content, including violence, human rights and/or environmental violations, contrary to the law, religious, cultural and moral traditions and practices of India, are strictly prohibited and will be immediately discarded.",
        "The decision taken by the coordinators/judges of this event in regard to judgement or any other issue shall be final.",
        "Certificates will be provided for the participants.",
        "Participants should bring their ID card and report 1 hour before the event."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSftX8V9LYAoB3QceAO4oFYW6209_q12PkGVioYsIluE_5vnIw/viewform'
    },
  {
    id: 'mini-photography',
    name: 'Miniature Photography',
    poster: '/assets/Events/mini.png',
    tags: ['General','Day 3 | Feb 25','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Get your Macro Lenses Ready! 🐜 Musaliar College\'s Asthra fest invites you to Zoompix! Explore the miniature world, capture stunning close-ups, and showcase your photography skills.  Ready to zoom in on the details? ',
      'Rules And Regulation': [
      'The contest will be conducted at the college',
      'There will be time limit(3 hour). participants should submit their photos in specified time.',
      'Participants who are submitting their photos after the specified time will be disqualified.',
      'Images must be in JPEG format.',
      'Use neutral or context-appropriate backgrounds to avoid clutter.',
      'Use a macro lens or close-up mode for sharp details.',
      'Avoid Over-Editing.Excessive manipulation may reduce authenticity.',
      'participants should bring ID card and report before 1 hour',
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfYSf42mteWpdxC8QWm1VqNx2eOQVkYIjy9_GEF_kVjF4EgsA/viewform'
    },
  {
    id: 'pencil_drawing',
    name: 'Pencil Drawing',
    poster: '/assets/Events/pencil.png',
    tags: ['General','Day 2 | Feb 24','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Where imagination meets paper! ✍ Musaliar College\'s Asthra fest challenges you to unleash your inner Picasso! The Picasso Pencil Drawing Competition is your chance to demonstrate your artistic prowess.  Prepare to transform blank pages into stunning works of art, using graphite as your medium and creativity as your guide. Ready to leave your impression?',
      'Rules And Regulation': [
        'Theme will be given on the spot',
        'Only graphite and charcoal pencils are allowed.',
        'Paper will be provided.',
        'Competition duration will be of 1.5 hour.',
        'The time in which participants complete the work will be recorded.',
        'The drawing will be judged based upon the relevance to theme.',
        'Decision of the judges shall be final.',
        'Any violations of rules leads to disqualification.',
        'Candidates must bring their college ID card.',
        'Certificates will be provided to all the participants.',                 
        'Participants should report their presence atleast 1 hour before event starts'
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf8xMbuClDKJGJ56e3nr-OI1s7ArNDSXno8qXUqQEvePUOJcA/viewform?usp=dialog'
    },
  {
    id: 'face_painting',
    name: 'Face Painting',
    poster: '/assets/Events/face.png',
    tags: ['General','Day 2 | Feb 24','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Ready to get your hands…and faces…colorful? 😉 Musaliar College\'s Asthra fest\'s Chaaya competition is your chance to shine! From whimsical designs to bold statements, let your brushes do the talking. Think you\'ve got the magic touch?',
      'Rules And Regulation': [
        "Team event (two members one is person who will be painting and the other whose face will be painted).",
        "Maximum allowed time is 2.5 hours.",
        "Theme will be given on the spot.",
        "Participants are requested to bring their own accessories.",
        "May not use stamps, stencil or air brush system.",
        "Certificates will be provided for all the participants.",
        "Any participants reaching after the reporting time at the venue will not be considered for the competition.",
        "Further instructions will be provided on the spot.",
        "Candidates should bring their respective college ID cards.",
        "Judges decision will be final."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScG_1CsUjN27Flf3wc6_HMDqo8ZME8aydfSzpSQIoJ235H4kw/viewform'
    },
  {
    id: 'wall_art',
    name: 'Wall Art',
    poster: '/assets/Events/wall.png',
    tags: ['General','Day 2 | Feb 24','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Calling all Mural Masters! 🎨 The walls are your canvas, the city your gallery! Musaliar College\'s Asthra fest proudly presents Artify, the ultimate wall art showdown! Prepare to transform blank spaces into breathtaking works of art, using vibrant colors and bold designs. Unleash your creativity, let your imagination run wild, and paint your masterpiece on a grand scale. Are you ready to leave your mark?',
      'Rules And Regulation': [
        "The artwork should align with the given theme.",
        "No offensive, vulgar, political, or religiously sensitive content is allowed.",
        "The artwork should not damage the wall’s structure or surroundings.",
        "Use of pre-printed stickers or digital projections is prohibited.",
        "Competition duration will be 3 hours.",
        "Participants should report at least 1 hour before the event starts.",
        "Candidates should bring their college ID card.",
        "The decision of the judges is final.",
        "Certificate will be provided to all the participants."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeVXK_5e5TWBsWlXtI-bap5DjmwMJaMuZvH4AsE6GhmiMFJDw/viewform'
    },
  {
    id: 'spell_bee',
    name: 'Spell Bee',
    poster: '/assets/Events/spell.jpg',
    tags: ['General','Day 2 | Feb 24','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Do you have a way with words? 📖 Musaliar College\'s Asthra fest challenges you to the ultimate spelling test: the Spell Bee! Demonstrate your knowledge of the English language, your precision in spelling, and your calm under pressure. Ready to spellbound the judges?',
      'Rules And Regulation': [
        "The competition is conducted in multiple rounds.",
        "Each participant is given one word per turn.",
        "The difficulty level of words increases in each round.",
        "Once a participant starts spelling, they cannot restart, change letters, or correct mistakes after saying a letter.",
        "A fixed time (60 seconds) is given to spell each word.",
        "Participants are requested to carry their ID card of their respective colleges for registration.",
        "Certificate will be provided to all the participants.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScyj86rNMx4XOEp6dDfuunyUOGnE8oR5goFhtm0KMGgzjn12Q/viewform'
    },
  {
    id: 'general_quiz',
    name: 'General Quiz',
    poster: '/assets/Events/quiz.jpg',
    tags: ['General','Day 2 | Feb 24','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Think you know it all? 😉 Musaliar College\'s Asthra fest\'s General Quiz is your chance to prove it! From obscure facts to common knowledge, put your brainpower to the test. Ready to answer your way to the top?',
      'Rules And Regulation': [
        "Only team entries are eligible, and the team shall consist of 2 persons.",
        "The decision of the quiz-master will be final and will not be subject to any change.",
        "The participants shall not be allowed to use mobile or other electronic instruments.",
        "The questions shall be in the form of multiple choice, True/False statements, specific answer questions, etc.",
        "Audience/Supporters shall not give any hints or clues to the competitors.",
        "Replacement of any participant of a team is not allowed after registration.",
        "Participants should bring their College ID Card.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfDxa1aq37VrakgS7OyaQg8zeqGTVqjduinNJOVhQhQlMvkkA/viewform?usp=dialog'
    },
  {
    id: 'know_your_cinema',
    name: 'Know Your Cinema',
    poster: '/assets/Events/movie.png',
    tags: ['General','Day 2 | Feb 24','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Calling all Movie Buffs! 🍿 Musaliar College\'s Asthra fest brings you the electrifying Cinephile competition! Think you know everything about movies? Put your knowledge to the test and compete against fellow film fanatics! From trivia titans to cinematic savants, only one can emerge victorious. Are you ready for the ultimate movie challenge? ',
      'Rules And Regulation': [
        "Participants must not use mobile phones, the internet, or any external help during the quiz.",
        "Questions may include movie trivia, actors, directors, dialogues, awards, and film industry history.",
        "Each round will have a specific time limit for answering questions.",
        "Teams should consist of 2 members. Substitutions may not be allowed once the quiz starts.",
        "Replacement of any participant of a team is not allowed after registration.",
        "Participants should bring their College ID Card.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScnlafW3An60Bh7NX_JROMDp0rBfIngWbKJiqbcm9m5LViVMQ/viewform?usp=dialog'
    },
  {
    id: 'origami',
    name: 'Origami',
    poster: '/assets/Events/origami.png',
    tags: ['General','Day 3 | Feb 25','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Where paper comes to life! 🦋 Musaliar College\'s Asthra fest invites you to the enchanting world of Origami! The Origami Competition is your chance to bring your imagination to three-dimensional form. Prepare to transform flat sheets into captivating sculptures, using folds as your medium and creativity as your guide. Ready to unfold your potential?',
      'Rules And Regulation': [
        "Only paper is allowed—no glue, scissors, or other materials.",
        "Time limit is 2 hours.",
        "Decision of the judges will be final and any kind of arguments or appeal related to the judgement will not be entertained.",
        "Participants are requested to carry their ID card of their respected colleges for registration.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd0QTAogVFHnxqdeJWXFt3JEC13iBcUdJrJzQGu5NBCW4mCNQ/viewform?usp=dialog'
    },
  {
    id: 'reel_competition',
    name: 'Reel Competition',
    poster: '/assets/Events/reel.png',
    tags: ['General','Day 3 | Feb 25','Off-stage'],
    registrationFee: {
      amount: 150,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Tell your story in seconds! 🎞 Musaliar College\'s Asthra fest challenges you to create magic with the Reel Deal competition! Showcase your filmmaking prowess, capture the essence of a narrative, and prove your mastery of the short-form video. Ready to reel in the accolades?',
      'Rules And Regulation': [
        "The reel must align with the given theme.",
        "Content must be original and creative.",
        "Avoid plagiarism, copyrighted music, or visuals without permission.",
        "No offensive, obscene, or inappropriate content.",
        "The format of the file should be Mp4 or MOV.",
        "The duration of the reel should be 60 seconds.",
        "Do not use AI-generated or heavily manipulated content.",
        "Participants should bring their College ID Card.",
        "Participants should report their presence at least 1 hour before the event starts.",
        "Decision of the judges shall be final."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfTdjUQUd_mgrXhusOoad3RG21IvERsVh7xvfnQKCVi006u3A/viewform?usp=dialog'
    },
  {
    id: 'elocution',
    name: 'Elocution',
    poster: '/assets/Events/elocution.png',
    tags: ['General','Day 3 | Feb 25','Off-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Where words have power! ✍ Musaliar College\'s Asthra fest challenges you to unleash your inner orator! The Talking Tom Elocution Competition is your chance to demonstrate your command of language and your ability to connect with an audience. Prepare to transform ideas into compelling narratives, using your voice as your instrument and passion as your guide. Ready to leave your mark?',
      'Rules And Regulation': [
        'The decision of the judges as regards the result of the competition will be the final and binding. ',
        'Candidates will be given time slots to finish the elocution in that duration ',
        'Each participate will be given a time limit not exceeding 10 minutes to speak on the given subject. ',
        'A warning bell will be given after 8 minutes and a final bell after 10 minutes. If the participants exceed the allocated time than the marks will be deducted. ',
        'The language for elocution will be Malayalam and English. ',
        'Specific theme will be given for elocution ',
        'Participants are requested to carry their ID card of their respected ',
        'Participants should report their presence at least 1 hours before event starts'
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeZL49tRNejdY8ZZieJObuHcGKrL8VHOULJB9fT6lQmFGDZOQ/viewform?usp=dialog'
  },
  {
    id: 'cadence',
    name: 'Cadence',
    poster: '/assets/Events/cadence.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 3000
    },
    content: {
      'Description': 'Do you have the music in you? 🎼 Musaliar College\'s Asthra fest challenges you to unleash your inner musician! Cadence, the musical instrument competition, is your chance to demonstrate your virtuosity. Prepare to transform notes into magic, using your instrument as your voice and creativity as your guide. Ready to share your melody? ',
      'Rules And Regulation': [
        "Open to individuals.",
        "Participants can choose from classical, contemporary, or folk instruments.",
        "Participants must bring their own instruments.",
        "The use of backing tracks or pre-recorded music is not allowed.",
        "Time limit is 5 minutes.",
        "The decision of the judges will be final.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSctgrsP3z_kpp5L8nZrrAF1-SCtVtw2BrTuB5QkWhTSlUxMlw/viewform?usp=dialog'
  },
  {
    id: 'naach_naach',
    name: 'Naach Naach',
    poster: '/assets/Events/naach.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 4000
    },
    content: {
      'Description': 'Ready to groove with your bestie? 😉 Musaliar College\'s Asthra fest\'s Naach Naach competition is your chance to shine! From synchronized steps to dazzling displays, let your dance do the talking. Think you\'ve got the moves to win?',
      'Rules And Regulation': [
        "Open to individuals.",
        "Each team must consist of two dancers.",
        "Performance should be between 3 to 6 minutes.",
        "Track in MP3 format, which is accessible by the university via a universal aux cable in mobile and also should be in a pendrive, must be submitted to coordinators at least 1 hour prior to the performance.",
        "The decision of judges will be final.",
        "Any kind of fluid, flame, breakable items, and extremely heavy objects are not allowed.",
        "Any dance style is allowed.",
        "Participants should bring their college ID card."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScUThS2FFb90yi3EmVerBc6gESSRSNfa7PdWrbE118Es6usRQ/viewform?usp=sharing'
  },
  {
    id: 'saregamapa',
    name: 'SAREGAMAPA',
    poster: '/assets/Events/saregama.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2500
    },
    content: {
      'Description': 'Do you have the voice of a star? 🌟 Musaliar College\'s Asthra fest challenges you to showcase your vocal prowess in the Saregamapa solo singing competition!  Test your range, control, and stage presence, and prove your mastery of melody. Ready to let your voice be heard?',
      'Rules And Regulation': [
        "Participants will not be allowed to refer to the lyrics while singing.",
        "Participants are supposed to sing all types of songs except mashup.",
        "Time limit is 5 minutes.",
        "Participants exceeding the time limit will be disqualified.",
        "Decision of the judges will be final.",
        "Karaoke should be in MP3 format, which is accessible by the universal aux cable in mobile and also should be in a pen drive, and it must be submitted to the coordinators at least 30 minutes prior to the performances.",
        "Participants are requested to carry their ID card of their respective colleges."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScELg4lH0wAwfjXvrgmkvt6lhWNwgyEX709LX9JTTCNo5pAyg/viewform?usp=dialog'
  },
  {
    id: 'spot_dubbing',
    name: 'Spot Dubbing',
    poster: '/assets/Events/Dub.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2500
    },
    content: {
      'Description': 'Ready to lend your voice to the stars? 🌟 Musaliar College\'s Asthra fest\'s Boll Bachchan competition is your chance to shine!  From side-splitting comedy to heart-pounding drama, the scenes are waiting for your unique touch. Think you\'ve got the magic touch? ',
      'Rules And Regulation': [
        "Participants must choose their own video clips.",
        "Clips can be from movies, cartoons, anime, or any other source.",
        "The duration of the video must be within 2-4 minutes.",
        "The selected clip must not contain pre-existing dubbed dialogues, only visuals with muted audio, and should be submitted to coordinators at least 1 hour prior to the event.",
        "Dubbing can be done in Malayalam and English.",
        "Participants are requested to carry their ID card of their respected colleges.",
        "Decision of the judges will be final."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSePBQ35W6Ldx7KJjzUywYkcsT9hz1Zj6RbCBdxq0nvwRqshbw/viewform?usp=dialog'
  },
  {
    id: 'stand_up_comedy',
    name: 'Stand Up Comedy',
    poster: '/assets/Events/standup.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 3000
    },
    content: {
      'Description': 'Got jokes? 🤔 Musaliar College\'s Asthra fest challenges you to Mazak!  This is your chance to showcase your comedic timing, your observational humor, and your ability to make people laugh until they cry.  Ready to take the stage?',
      'Rules And Regulation': [
        "It is an individual competition.",
        "Time limit is 5 minutes.",
        "There will be negative marks if the participants exceed the time limit.",
        "No participant can point out any individual or religion in any way, and any dual-meaning obscene content is strictly not allowed.",
        "Participants are requested to carry their ID card of their respected colleges for registration.",
        "Participants should report their presence at least 2 hours before the event starts.",
        "The decision of the judges will be final."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScS8za-CPh2k_7e5B1dc5btT7UPp1DTJUyKrWuC3FMui7ig5Q/viewform?usp=dialog'
  },
  {
    id: 'rap_battle',
    name: 'Rap Battle',
    poster: '/assets/Events/rap.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 3500
    },
    content: {
      'Description': 'Think you\'ve got bars? 🔥 Musaliar College\'s Asthra fest challenges you to step up and prove it! Gully Boy, the rap battle competition, is here! Sharpen your rhymes, perfect your delivery, and prepare to go head-to-head with the best. Ready to spit your truth? ',
      'Rules And Regulation': [
        "Time limit is 6 minutes.",
        "Can use any accompaniment like backing track, beatboxing, etc.",
        "The rapper is not allowed to use promotes or sexually suggestive lyrics, it is punishable by disqualification.",
        "Extra points for own composition (any language).",
        "Originals, covers, own compositions with or without backing tracks are allowed.",
        "Freestyling isn't compulsory for everyone.",
        "Participants are requested to carry their ID card of their respected colleges for registration.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdQMXKRTr7Zj1dVhOsuwcfVaXu5EPEjkOhElcNmUoDv3J5tKw/viewform'
  },
  {
    id: 'solo_dance',
    name: 'Solo Dance',
    poster: '/assets/Events/atrangi.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2500
    },
    content: {
      'Description': 'Where rhythm meets expression! ✨ Musaliar College\'s Asthra fest invites you to Atrangi, a solo dance competition that celebrates the beauty of movement and the power of emotion. Prepare to transform the stage into your personal canvas, using your body as your brush and dance as your paint. Ready to create a masterpiece? ',
      'Rules And Regulation': [
        "Participants can choose any track of their own choice.",
        "Time limits of track should be about 3 to 7 minutes.",
        "Additional 2 minutes are provided for stage setting.",
        "Track in mp3 format which is accessible by the university by the universal aux cable in mobile and also should be in pendrive must be submitted to coordinators at least 1 hour prior to the performance.",
        "The decision of judges will be final.",
        "No vulgarities will be tolerated in the performance or costume.",
        "Any kind of fluid, flame, breakable items, extremely heavy objects are not allowed.",
        "Interaction with audience through any properties that are used in stage while performing is allowed.",
        "Participants should bring their college ID card."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfa6SNVDcsNRCCmxSDcfZ5UCRw3aRs2i4IlG4L5tpE4X0wszQ/viewform?usp=dialog'
  },
  {
    id: 'raja_rani',
    name: 'Raja Rani',
    poster: '/assets/Events/raja.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2000
    },
    content: {
      'Description': 'Can you bring the romance? ✨ Musaliar College\'s Asthra fest challenges you to embody the spirit of Raja and Rani! The Raja Rani Mr. and Mrs. Actor Competition is your chance to showcase your acting prowess. Prepare to transport the audience to another world, using your talent as your guide. Ready to steal the show?',
      'Rules And Regulation': [
        "Participants may be given a specific theme or genre.",
        "Competitors may be required to perform a monologue or a short scene.",
        "Each performance should adhere to a fixed duration.",
        "Languages permitted are Malayalam and English.",
        "Decision of the judges will be final.",
        "Participants should report their presence at least 1 hour before event starts.",
        "Participants should bring their college ID card."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeWnDB-8ren6kWcAxrrwMN8e5iKH069t_8SgLaPTnZXumqLsA/viewform?usp=dialog'
  },
  {
    id: 'damakka',
    name: 'Damakka',
    poster: '/assets/Events/damakka.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 3500
    },
    content: {
      'Description': 'Ready to unleash your inner movie star? ✨ Musaliar College\'s Asthra fest\'s Damakka competition is your chance to shine! From hilarious comedies to intense dramas, bring your favorite scenes to life with your own unique style. Think you\'ve got what it takes to steal the show?',
      'Rules And Regulation': [
        "Participants must recreate a scene from a movie of their choice.",
        "Only team participation allowed.",
        "The recreated scene should be within 4-6 minutes.",
        "Participants are encouraged to use appropriate costumes and props to enhance realism.",
        "The recreation should stay true to the original scene.",
        "No dangerous stunts, fire, or weapons allowed.",
        "Content should not promote violence, discrimination, or inappropriate behavior.",
        "Decision of the judges will be final.",
        "Participants are requested to carry their ID card of their respected colleges.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSewn9XDgh-EBE5EVqvLCtUQ5s-7rHz1WTy9IxsRpUY9087BJQ/viewform?usp=dialog'
  },

  {
    id: 'dance_deewani',
    name: 'Dance Deewani',
    poster: '/assets/Events/dance.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 5000
    },
    content: {
      'Description': 'Do you have the rhythm in your soul? ✨ Musaliar College\'s Asthra fest challenges you to Dance Deewani! Showcase your choreographic brilliance, express your creativity through movement, and mesmerize the audience with your talent. Ready to set the stage on fire?',
      'Rules And Regulation': [
        "The competition is open to solo dancers.",
        "Participants will be given a random song or mix of songs on the spot.",
        "They must adapt their choreography spontaneously to the given music.",
        "Decision of the judges will be final.",
        "Participants should report their presence at least 1 hour before the event starts.",
        "Participants should bring their college ID card."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdq_oeLmZru8pPf-GDy33zssNfVZKGtB91i1FLN7kR0XQsirw/viewform?usp=dialog'
  },

  {
    id: 'choreonite',
    name: 'Choreonite',
    poster: '/assets/Events/choreonite.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 40000
    },
    content: {
      'Description': 'Ready to bust a move? 😉 Musaliar College\'s Asthra fest\'s Coreografia is your chance to shine! From hip-hop to classical, let your body do the talking. Think you\'ve got the magic touch?',
      'Rules And Regulation': [
        "Group should comprise of at least 12 members.",
        "Time limit for every team should be 12 minutes. Event is strictly time bound.",
        "Soundtrack should be in MP3 format which is accessible by the universal aux cable in mobile and also should be in pen drive and it must be submitted to the coordinators at least 30 minutes prior to the performance.",
        "Any kind of fluid, flame, breakable objects and extremely heavy objects are not allowed on stage.",
        "Any violation of rules will lead to disqualification.",
        "The decision of the judges will be final.",
        "At least 3 students in the crew must carry their ID cards.",
        "Green room will be provided if necessary.",
        "Participants should report their presence at least 1 hour before the event starts."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe0HYU__XLMsBh-TnITMuyiplVrmdx6n4BDlfZgdGKVDEMbMw/viewform?usp=dialog'
  },

  {
    id: 'fashion_show',
    name: 'Fashion Show',
    poster: '/assets/Events/fashion.png',
    tags: ['General','Day 3 | Feb 25','On-stage'],
    registrationFee: {
      amount: '150',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 50000
    },
    content: {
      'Description': 'Ready to slay the runway? 💃🕺 Musaliar College\'s Asthra fest brings you Fashion Fresco, the fashion competition that will set the stage on fire! Showcase your unique style, express your creativity, and compete for the title of fashion royalty.  Prepare to turn heads and steal the show!',
      'Rules And Regulation': [
        "A minimum of 12 participants are allowed per team. In addition, there should be one person in charge for the music and one for the lights.",
        "One of the crew members should be near the sound engineers at the time of their performance.",
        "Time limit should be minimum of 8 minutes and maximum of 30 minutes.",
        "There will be negative marks if the participants exceed the time limit.",
        "Participants should report their presence at least 2 hours before events start.",
        "Background track should be in MP3 format and is to be submitted at the PC desk 30 minutes prior to the event.",
        "Presenting banners, posters, or other materials directly displaying the theme is prohibited.",
        "The decision of the judges will be final.",
        "Green room will be provided if necessary.",
        "Participants are requested to carry their ID card of their respective colleges for registration."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScKJMBz2zdgR-9vO00UVFIppw6tpqtPWreIzHOTaTVIpTPP3A/viewform?usp=dialog'
  },
];