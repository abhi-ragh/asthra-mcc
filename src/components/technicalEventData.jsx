// src/data/technicalEventData.js
export const technicalEvents = [
  {
    id: 'coding_competition',
    name: 'Coding Competition',
    poster: '/assets/Events/cse/code.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2000
    },
    content: {
      'Description': 'Unleash your coding prowess at EVOLVE! 🚀Race against time, crack the challenges, and emerge as the ultimate code champion. 🏆Are you ready to evolve your skills? 💻✨',
      'Rules And Regulation': [
        'The coding competition will be 2 hours long.',
        'Participants can bring their own Laptops otherwise systems will be provided.',
        'Participants will be given a set of problems of varying difficulty levels (easy, medium, hard).',
        'Participants must work individually. Collaboration or sharing of code is strictly prohibited.',
        'Participants must not use any pre-written code or access external resources (e.g., GitHub, Stack Overflow) during the competition.',
        'Any form of malpractice will result in immediate disqualification.',
        'Certificates will be provided for the participants.',
        'Participants should bring their ID card and report 1 hour before the event.'
      ],
    },
    registrationLink: 'https://forms.gle/5rcLgrdPqR85QDjA9'
    },
  {
    id: 'website_designing',
    name: 'Website Designing',
    poster: '/assets/Events/cse/design.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2000
    },
    content: {
      'Description': 'Forge your creativity into code! 🔥Unleash your design skills at EVOLVE\'s Design Forge.Craft a website that wows, and claim the crown of creativity! 🏆Are you ready to design the future? 💻✨',
      'Rules And Regulation': [
        'Participants must submit their code and screenshots of the output via a Google Drive link before the deadline of 21st February 2025, 11:59 PM.',
        'The competition focuses on creativity, design skills, and technical implementation.',
        'Participants must create a website with a clear representation of the theme.',
        'Participants must adhere to the theme and ensure their website aligns with the given guidelines.',
        'Any form of malpractice (e.g., plagiarism) will result in immediate disqualification.',
        'Participants must submit the following via a Google Drive link:',
        '   - Source Code: A zip file containing all the code files (HTML, CSS, JS, etc.).',
        '   - Screenshots: High-quality screenshots of the website showcasing all pages and features.',
        'The Google Drive link must be shared with the organizers via the submission portal before the deadline.',
        'Certificates will be provided for the participants.'
      ],
      'Themes' : [
        'Futuristic UI/UX 🌌 – Design a sci-fi-inspired website with sleek animations, neon colors, and AI-driven interactions.',
        'Digital Renaissance 🎨 – Merge classic art styles with modern web design, blending traditional aesthetics with digital interfaces.',
        'Hyper Minimalism ⚪⚫ – Create an ultra-clean, clutter-free website focusing on white space, typography, and seamless interactions.',
        'The Green Web 🌿 – Design an eco-friendly website promoting sustainability with energy-efficient animations and nature-inspired aesthetics.',
        'Retro Web 90s/2000s 🕹️ – Bring back the nostalgic pixel art, GIFs, and marquee texts of early web design with modern usability.'
      ]
    },
    registrationLink: 'https://forms.gle/2ZsHWFerQviu9Eyp7'
    },
  {
    id: 'debugging_competition',
    name: 'Debugging Competition',
    poster: '/assets/Events/cse/fix.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Bugs are the art, debugging is the craft! 🎨Step into EVOLVE and show off your debugging mastery.Find the flaws, fix the code, and rise to the top! 🚀Ready to debug your way to glory? 💻🔍',
      'Rules And Regulation': [
        'The debugging competition will be 1 hour long.',
        'Participants can bring their own Laptops otherwise systems will be provided.',
        'The competition will involve debugging a set of buggy code snippets provided by the organizers.',
        'Participants can choose from one of the provided languages.',
        'Each code snippet will have a specific problem statement and expected output.',
        'Participants must identify and fix the errors in the code to produce the correct output.',
        'Each correctly debugged code snippet will carry a specific score based on its difficulty.',
        'Participants must work individually. Collaboration or sharing of solutions is strictly prohibited.',
        'Participants must not use any external resources (e.g., debugging tools, online forums, or pre-written code).',
        'Any form of malpractice will result in immediate disqualification.',
        'Certificates will be provided for the participants.',
        'Participants should bring their ID card and report 1 hour before the event.'
      ],
    },
    registrationLink: 'https://forms.gle/6KNrL7LYL7LsoWV97'
    },
  {
    id: 'task_master',
    name: 'Task Master',
    poster: '/assets/Events/cse/task.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Master the tasks, capture the flag! 🚩Prove your skills in speed, logic, and precision at EVOLVE.Complete the challenges, claim the crown, and become the ultimate Taskmaster! 🏆Are you ready to take on the challenge? 💻✨',
      'Rules And Regulation': [
        'Participants will be provided with unique challenges (e.g., typing speed, database query challenge etc.).',
        'The competition focuses on speed, accuracy, and problem-solving skills across multiple tasks.',
        'Participants must complete all challenges in the given order or as specified by the organizers.',
        'The first participant to complete all challenges successfully will be declared the winner.',
        'Participants must work individually. Collaboration or sharing of solutions is strictly prohibited.',
        'Participants must not use any unauthorized tools or assistance that violate the competition rules.',
        'Any form of malpractice will result in immediate disqualification.',
        'Certificates will be provided for the participants.',
        'Participants should bring their ID card and report 1 hour before the event.'
      ],
    },
    registrationLink: 'https://forms.gle/dXKgjvb31JY3fCaX7'
    },
  {
    id: 'cloning_competition',
    name: 'Cloning Competition',
    poster: '/assets/Events/cse/mirror.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Mirror the Web, but make it yours! 🌐Step into EVOLVE and showcase your frontend magic.Reflect the design, refine the details, and rise to the top! 🚀Ready to mirror your way to glory? 💻✨',
      'Rules And Regulation': [
        'The cloning competition will be 1 hour long.',
        'Participants can bring their own Laptops otherwise systems will be provided.',
        'Participants will be provided with the URL or screenshot of an existing webpage that they need to clone.',
        'The competition focuses on frontend development only.',
        'Participants must recreate the frontend design of the given webpage as closely as possible.',
        'The webpage to be cloned will be announced at the start of the competition.',
        'Participants must work individually. Collaboration or sharing of code is strictly prohibited.',
        'Participants must not use any pre-built templates or external tools that violate the competition rules.',
        'Any form of malpractice will result in immediate disqualification.',
        'Certificates will be provided for the participants.',
        'Participants should bring their ID card and report 1 hour before the event.'
      ],
    },
    registrationLink: 'https://forms.gle/ZfapJssdz8oMa7tz9'
    },
  {
    id: 'lights_camera_action',
    name: 'Lights, Camera, Action!',
    poster: '/assets/Events/cse/lights.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Lights. Camera. Action! 🎥✨  Team up and let your creativity shine! One acts, one edits – together, craft a 1-minute masterpiece in front of the green screen. 🌟🎬  Do you have what it takes to steal the spotlight? 🏆🎭',
      'Rules And Regulation': [
        'A Team Consists of 2 Participants',
        'Participants will work in teams of two, with one member acting in front of a green screen and the other shooting and editing the video.',
        'The competition focuses on creativity, teamwork, and technical skills in video shooting and editing.',
        'Teams must create a 1-minute video using the green screen and submit the edited video before 4 PM on the day of the competition.',
        'Teams must adhere to the theme or scenario provided by the organizers.',
        'Teams must work independently. Collaboration or sharing of resources with other teams is strictly prohibited.',
        'Certificates will be provided for the participants.',
        'Participants should bring their ID card and report 1 hour before the event.',
        'Teams must submit their final edited video in MP4 format via a Google Drive link.'
      ],
    },
    registrationLink: 'https://forms.gle/dfuN2rfRnfmKudxY6'
    },
  {
    id: 'squid_game',
    name: 'Squid Game',
    poster: '/assets/Events/ece/squid.jpg',
    tags: ['ECE','E-Hearts'],
    registrationFee: {
      amount: '50',
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'The challenge awaits! Do you have what it takes to win? 💀🔥',
      'Rules And Regulation': [
        "All players must register at the Google Forms provided below and DM us @_leictreonaic_ to receive the unique player number.",
        "Each round eliminates players who fail the challenge. Eliminated players must leave the game arena.",
        "Players must follow the instructions from the game masters or they will be disqualified.",
        "Cheating results in immediate elimination.",
        "Players who fail to complete a challenge within the time limit are eliminated.",
        "Players must report at the basketball court at sharp 1 PM to complete the registration process."
      ],
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHwhDCZq80BQA5taVjfTa5jFD1n2NdYI5uCuXkXHSJCRlLIg/viewform?usp=dialog'
    },
  ];