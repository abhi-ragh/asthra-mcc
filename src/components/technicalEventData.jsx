// src/data/technicalEventData.js
export const technicalEvents = [
  {
    id: 'tech_talk',
    name: 'Tech Talk',
    poster: '/assets/Events/techtalk.png',
    tags: ['General'],
    content: {
      'Description': 'Ready to launch your dream? 🚀 Musaliar College\'s Asthra fest presents a powerful Tech Talk by Franklin\'s Lectures: "How to Become a Successful Entrepreneur."  Prepare to be inspired, learn the secrets of success, and ignite your entrepreneurial spirit.  The future is yours to create. Are you ready to take the leap?',
      'Registration':'Free for the First 60 students' 
    },
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe5ZJOTupjzsJqJBqiMzykWE8FGsI7oSBFBFNUjQLt7t5q0Ug/viewform?usp=dialog'
  },
  {
    id: 'squid_game',
    name: 'Squid Game',
    poster: '/assets/Events/ECE/squid.jpg',
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
  {
    id: 'website_designing',
    name: 'Website Designing',
    poster: '/assets/Events/CSE/design.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
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
    id: 'coding_competition',
    name: 'Coding Competition',
    poster: '/assets/Events/CSE/code.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
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
    id: 'debugging_competition',
    name: 'Debugging Competition',
    poster: '/assets/Events/CSE/fix.jpg',
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
    id: 'cloning_competition',
    name: 'Cloning Competition',
    poster: '/assets/Events/CSE/mirror.jpg',
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
    poster: '/assets/Events/CSE/lights.jpg',
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
    id: 'mini_militia',
    name: 'Mini Militia',
    poster: '/assets/Events/CSE/mini.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 100,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Gear up, lock \'n load, and dominate the battlefield! 💥Join the Mini Militia Tournament at EVOLVE and prove your combat skills.Will you be the last one standing? 🏆Ready, set, fight! 🔫✨',
      'Rules And Regulation': [
        'Team Size: Each team consists of 2 players.',
        'Fair Play: Teaming up with other teams outside of your squad is strictly prohibited.',
        'Device : Players must bring their own smartphones.',
        'Disconnection Rules: If a player disconnects, they may rejoin within the same match. If unable to reconnect, the match continues.',
        'Cheating & Misconduct: Any use of hacks, third-party apps, or unfair advantages will result in immediate disqualification.',
        'Decision Authority: The organizers\' decision is final in case of any disputes.'
      ],
    },
    registrationLink: 'https://forms.gle/dAgM35de7gbm84xXA'
  },
  {
    id: 'paper_presentation',
    name: 'Paper Presentation',
    poster: '/assets/Events/BME/paper.jpg',
    tags: ['BME','Techycardia'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1900
    },
    content: {
      'Description': 'Think, Present, Impress! COLLOQUIUM challenges budding innovators to showcase their research, ideas, and technical expertise in an engaging and competitive setting. Push the boundaries of knowledge, articulate your vision, and captivate the audience with your insights!',
      'Guidelines' : [
        'Team Size : Minimum 2, Maximum 4',
        'Abstract Submission Deadline : 21th February 2025 (to be uploaded via the registration link)',
        'Abstracts (max 300 words) must be submitted by February 21, 2025.',
        'Presentations lasts between 5 to 10 minutes',
        'Use PowerPoint or similar software, and incorporate visual aids like graphs or images.',
        'Presentations should cover the introduction, methodology, results, and conclusion.',
        'Submit your slides (PDF or PowerPoint) 24 hours before the presentation.',
        'The presentation will be judged based on clarity, depth, visual effectiveness, and adherence to time.',
        'Ensure proper citations for references and follow the conference’s code of conduct.',
      ],
      'Step up, speak out, and let your ideas make an impact at TECHYCARDIA 3.0, held under ASTHRA\'25!' : ''
    },
    registrationLink: 'https://forms.gle/WQoRbuwdvjounBqh9'
  },

  {
    id: 'autocad_competition',
    name: 'AutoCAD Competition',
    poster: '/assets/Events/CE/cad.jpg',
    tags: ['CE','Civil','Archinova'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1500
    },
    content: {
      'Description': 'Unleash your design mastery at CAD CLASH! 🎯Draft, design, and dominate the ultimate AutoCAD challenge. 🏆Can you outdraw the competition and claim the title? 🖥',
      'Guidelines' : [
        "The competition will last 1.30 hours.",
        "Participants can bring their own laptops with AutoCAD installed, or systems will be provided.",
        "A set of 2D drafting and 3D modeling challenges of varying difficulty will be given.",
        "Participants must work individually - no collaboration or sharing of designs.",
        "Pre-made templates or external resources (e.g., online CAD libraries) are not allowed.",
        "Any form of plagiarism or malpractice will result in immediate disqualification.",
        "Certificates will be awarded to all participants.",
        "Participants must bring their ID card and report 1 hour before the event."
      ],
    },
    registrationLink: ''
  },

  {
    id: 'paper_presentation',
    name: 'Paper Presentation',
    poster: '/assets/Events/CE/paper.jpg',
    tags: ['CE','Civil','Archinova'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Showcase your brilliance at INNOVATE! 🚀Present your groundbreaking ideas, impress the panel, and make your vision a reality. 🌟Do you have what it takes to stand out? 💡',
      'Guidelines' : [
        "Each team can have a maximum of 2 members.",
        "Presentation time: 10 minutes (+5 minutes for Q&A).",
        "Participants must prepare a PowerPoint (PPT) or visual aid for their presentation.",
        "Working prototypes/models are encouraged but not mandatory.",
        "Judging will be based on innovation, feasibility, clarity, and presentation skills.",
        "Participants must submit their presentation files 30 minutes before the event.",
        "Certificates will be awarded to all participants.",
        "Participants must bring their ID card and report 1 hour before the event."
      ],
    },
    registrationLink: ''
  },

  {
    id: 'quiz_competition',
    name: 'Quiz Competition',
    poster: '/assets/Events/CE/quiz.jpg',
    tags: ['CE','Civil','Archinova'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Think fast, build smart! 🏗🧠Test your civil engineering knowledge at CIVIQUEST! 📖⚙Do you have what it takes to be the ultimate quiz champion? 🏆',
      'Guidelines' : [
        "Each team can have a maximum of 2 members.",
        "The quiz will consist of multiple rounds (e.g., MCQs, rapid-fire, etc.).",
        "Questions will be based on civil engineering concepts, general knowledge, and problem-solving skills.",
        "Use of mobile phones, calculators, or external help is strictly prohibited.",
        "Negative marking may be applied in certain rounds.",
        "If a team fails to answer within the given time, the question will be passed to the next team.",
        "Any form of malpractice will lead to immediate disqualification.",
        "Certificates will be awarded to all participants.",
        "Participants must bring their ID card and report 1 hour before the event."
      ],
    },
    registrationLink: ''
  },

  
  {
    id: 'bridge_designing',
    name: 'Bridge Designing',
    poster: '/assets/Events/CE/bridge.jpg',
    tags: ['CE','Civil','Archinova'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 2000
    },
    content: {
      'Description': 'Design. Build. Conquer. 🏗Put your engineering skills to the test at BRIDGECRAFT! 🌉Can your bridge withstand the ultimate challenge? ⚙',
      'Guidelines' : [
        "Each team can have a maximum of 2 members.",
        "Teams will be given materials to construct their bridge (materials will be provided).",
        "Time limit: 1 hour to build the bridge.",
        "The bridge will be evaluated based on design, strength, stability, and load-bearing capacity.",
        "No external materials or pre-built structures are allowed.",
        "Any form of malpractice or rule violation will lead to disqualification.",
        "Certificates will be awarded to all participants.",
        "Participants must bring their ID card and report 1 hour before the event."
      ],
    },
    registrationLink: ''
  },
];