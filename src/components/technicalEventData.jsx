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
    id: 'project_presentation',
    name: 'Project Presentation',
    poster: '/assets/Events/ECE/project.jpg',
    tags: ['ECE','E-Hearts'],
    registrationFee: {
      amount: '10',
      perTeam: false
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 500 },
      ]
    },
    content: {
      'Description': 'Join with us to showoff your skills regarding the project demo presentation.',
      'Rules And Regulation': [
        "Time Limit : 10-20 minutes + Q&A",
        "Team Size : 2-5 members (as per event guidelines)",
        "Language : English (or as specified)",
        "Originality & Authenticity : Project must be original; borrowed content must be properly cited"
      ],
    },
    registrationLink: 'https://forms.gle/a5K2D5WudqW5EhqM9'
  },

  {
    id: 'ec_paper_presentation',
    name: 'Paper Presentation',
    poster: '/assets/Events/ECE/paper.jpg',
    tags: ['ECE','E-Hearts'],
    registrationFee: {
      amount: '10',
      perTeam: false
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 500 },
      ]
    },
    content: {
      'Description': 'Join with us to showoff your skills regarding the project demo presentation.',
      'Rules And Regulation': [
        "Time Limit : 10-15 minutes presentation + Q&A",
        "Format : PPT, PDF, or any approved slide format",
        "Originality : Must be original, with proper citations",
        "Language : English",
        "Team Size : 2-3 members max"
      ],
    },
    registrationLink: 'https://forms.gle/9AV4PDCTis6KHNkL6'
  },

  {
    id: 'poster_design_competition',
    name: 'Poster Design Competition',
    poster: '/assets/Events/ECE/poster.jpg',
    tags: ['ECE','E-Hearts'],
    registrationFee: {
      amount: '10',
      perTeam: false
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 200 },
      ]
    },
    content: {
      'Description': 'Poster Designing Competition',
      "Theme": "Breaking the Chains of Poverty",
      'Rules And Regulation': [
        "The design should be based on your own imagination/idea. Don't take other people's work.",
        "Medium poster size.",
        "The jury's decision cannot be changed.",
        "Posters must be submitted by February 22nd, 2025, before 10 AM. Late submissions will be disqualified.",
        "Announcement of winners on February 22nd, 2025."
      ],
    },
    registrationLink: 'https://forms.gle/9AV4PDCTis6KHNkL6'
  },

  {
    id: 'ec_quiz_competition',
    name: 'Quiz Competition',
    poster: '/assets/Events/ECE/quiz.jpg',
    tags: ['ECE','E-Hearts'],
    registrationFee: {
      amount: '0',
      perTeam: false
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 200 },
      ]
    },
    content: {
      'Description': 'Quiz Related to Electronics',
      'Rules And Regulation': [
        "Team Formation: Participants can compete individually.",
        "Eligibility: Any department students can participate (or as per event guidelines).",
        "Time Limit: Each round/question will have a specified time limit for answering.",
        "Fair Play: No use of mobile phones, calculators, or any external help during the quiz."
      ],
    },
    registrationLink: 'https://forms.gle/ZobqrknJJJte7RZi7'
  },

  {
    id: 'website_designing',
    name: 'Website Designing',
    poster: '/assets/Events/CSE/design.jpg',
    tags: ['CSE','Evolve'],
    registrationFee: {
      amount: 50,
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
      amount: 50,
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
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Gear up, lock \'n load, and dominate the battlefield! 💥Join the Mini Militia Tournament at EVOLVE and prove your combat skills.Will you be the last one standing? 🏆Ready, set, fight! 🔫✨',
      'Rules And Regulation': [
        'Team Size: Each team consists of solo players.',
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
    id: 'bme_paper_presentation',
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
    },
    registrationLink: 'https://forms.gle/WQoRbuwdvjounBqh9'
  },

  {
    id: 'medreveal',
    name: 'MedReveal',
    poster: '/assets/Events/BME/medreveal.jpg',
    tags: ['BME','Techycardia'],
    registrationFee: {
      amount: 25,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Explore, analyze, and decode! MedReveal is the ultimate challenge that puts your knowledge of biomedical devices to the test. Dive deep into the mechanics, functionality, and innovations of medical technology as you compete against the brightest minds in the field!',
      'Guidelines' : [
        'Teams can consist of a minimum of one and a maximum of two participants',
        'Each team will be provided with a dissected biomedical device, and they must identify the internal components.',    
        'A set of questions related to the components, functionality, and significance of the device will be provided.',   
        'Participants must analyze the device and write precise answers within the given time limit.',    
        'The total time allotted for the activity is 30 minutes.',  
        'Accuracy, clarity, and completeness of answers will be evaluated.',  
        'Handling of the device should be done with care to avoid damage.',   
        'The team with the most correct and well-explained answers will be declared the winner.'
      ],
    },
    registrationLink: 'https://forms.gle/VGZLXLNZt2NxGFQt5'
  },

  {
    id: 'medmystery',
    name: 'MedMystery',
    poster: '/assets/Events/BME/medmystery.jpg',
    tags: ['BME','Techycardia'],
    registrationFee: {
      amount: 25,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Diagnose, analyze, and solve! MedMystery is the ultimate medical case challenge that puts your clinical reasoning, problem-solving skills, and medical knowledge to the test. Step into the role of a medical expert, crack complex cases, and compete against the sharpest minds in the field!',
      'Guidelines' : [
        'Teams can have a minimum of one and a maximum of two participants',
        'Each team will be presented with a unique medical case scenario that includes symptoms, patient history, and test results.',  
        'The objective is to analyze the given case, identify the possible medical condition, and suggest appropriate diagnostic steps or treatments.',   
        'Participants must submit their findings within the given 30-minute time limit.',  
        'Logical reasoning, medical knowledge, and problem-solving skills will be key evaluation criteria.',   
        'Use of external reference materials or digital devices is not allowed.',    
        'Clear and well-structured answers with proper justification will score higher.',  
        'The team with the most accurate diagnosis and reasoning will be declared the winner.'
      ],
    },
    registrationLink: 'https://forms.gle/gLD8Laf29v1eLj627'
  },

  {
    id: 'thrillvile',
    name: 'ThrillVille',
    poster: '/assets/Events/BME/thrillvile.jpg',
    tags: ['BME','Techycardia'],
    content: {
      'Description': 'Dare to step into ThrillVille, a one-of-a-kind spooky biomedical-themed entertainment zone at TECHYCARDIA 3.0! Get ready for an electrifying fusion of thrill, science, and spine-chilling fun as we bring you an unforgettable experience packed with exciting games, eerie challenges, and interactive zones designed to test your wits and courage.',
      'Guidelines' : [
        'Dare to enter? Register at the gates… or be locked out forever! 🔑🚪',
        'Obey the masters of the underworld (our coordinators)… or suffer the consequences! 🔮👁',
        'No reckless souls! Running or pushing may awaken the lurking spirits. 👻⚰',
        'Handle haunted props with care… Some might not like being touched! 🕷🖤',
        'Beat the ticking clock… Escape before the darkness swallows you whole! ⏳💀',
        'Only the bravest survive! Complete challenges to claim your eerie rewards. 🎁🩸',
        'Respect the haunted grounds—or risk becoming part of them… forever. ☠🏚',
        'Laugh, scream, and enjoy… But beware—you’re never truly alone. 👀🎃',
        '💀 Register before entering… if you dare'
      ],
    },
  },

  {
    id: 'organ_odyssey',
    name: 'Organ Odyssey',
    poster: '/assets/Events/BME/organ.jpg',
    tags: ['BME','Techycardia'],
    content: {
      'Description': 'Step into the fascinating world of human anatomy with Organ Odyssey, an immersive experience that brings the intricacies of the human body to life! As part of TECHYCARDIA 3.0, this recreated Anatomy Hall will showcase detailed models of human organs, organ systems, and their functions, offering an insightful journey into the marvels of biomedical science.',
      'What to Expect?' : [
        'Explore lifelike representations of major human organs and systems.',
        'Understand the structure, function, and importance of each organ.',
        'Engage in interactive learning experiences designed for students and enthusiasts alike.'
      ],
    },
  },

  {
    id: 'buried_treasure',
    name: 'Buried Treasure',
    poster: '/assets/Events/BME/buried.jpg',
    tags: ['BME','Techycardia'],
    registrationFee: {
      amount: 50,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: 1000
    },
    content: {
      'Description': 'Decode, discover, and dominate! BURIED RICHES is the ultimate treasure hunt that will put your teamwork, problem-solving skills, and quick thinking to the test. Embark on an exhilarating adventure, solve mind-bending clues, and race against time to uncover hidden riches!',
      'Guidelines' : [
        'Teams must consist of a minimum of 2 and a maximum of 4 participants.',
        'The treasure hunt will include multiple stages with puzzles, riddles, and interactive challenges.',    
        'Each clue will lead to the next location, testing problem-solving skills and teamwork.',      
        'Participants must carefully follow the instructions provided for each challenge.',     
        'The use of external help, mobile phones, or the internet is strictly prohibited.',      
        'Teams must complete the hunt within the given time to be eligible for winning.',   
        'Clues may involve logical reasoning, general knowledge, and physical tasks.',     
        'The team that successfully finds the final treasure first will be declared the winner.'
      ],
    },
    registrationLink: 'https://forms.gle/KVdSrJBJqfbvHNCs8'
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
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSecO1sm1F5hmuGQGwpsYI24VUXerGVfA93ATNOSQj4py7fv9g/viewform?usp=header'
  },
  {
    id: 'ce_paper_presentation',
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
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeFGWmohsViAZUy3ZAupWUwIL3G6wbElJN0JwSwysZ22hVB7w/viewform?usp=header'
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
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdn_Tc2UAO1b23l6tv-2B3a3WY5fdpVNNv-mGUnDAwjO2fveg/viewform?usp=header'
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
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfkXYlh0tz1bIqt96IhDe-M7p_AnFTfT13IlWRp6JRgfVz8cQ/viewform?usp=header'
  },

  {
    id: 'caccia_gusto',
    name: 'Caccia Gusto',
    poster: '/assets/Events/FT/cacia.jpg',
    tags: ['FT','Food Technology'],
    registrationFee: {
      amount: 20,
      perTeam: false
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 1500 },
      ]
    },
    content: {
      'Description': 'Are you ready to dive into the world of flavours? FOODOMECHS , where food meets tech ,in association with ASTHRA 2K25, the  techno-cultural fest of Musaliar College Of Engineering, presents  Caccia Gusto  – a Food identification Competition.',
      'Why Us':' Participating in this competition will not only be a fun and engaging experience, but it will also help you develop essential skills in food analysis, identification, and quality control. You’ll get to learn about different ingredients, their textures, flavors, and aromas, and how to identify them accurately.Plus, you’ll get to compete with your peers, network with industry professionals, and win exciting prizes!',
      'Guidelines' : [
        'Team consist of two members.',
        'Competition will be of three rounds',
        'First round will be logo identification.', 
        'Second round will be touching.',
        'Third round will be tasting.',
        'Spot registration will be provided',
        'Mobile phones are strictly prohibited.', 
        'Participants should bring ID card and report before 1 hour.',
        'There would be time limit for between 24 3 3 levels.',
        'In second round and three round the participants were blindfolded.', 
        'Participants gets two chances to touching the sample and tasting.',     
      ],
    },
    registrationLink: 'https://surveyheart.com/form/67a246c1019da868b9737c6e'
  },

  {
    id: 'food_explorer',
    name: 'Food Explorer',
    poster: '/assets/Events/FT/food.jpg',
    tags: ['FT','Food Technology'],
    registrationFee: {
      amount: 20,
      perTeam: false
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 1500 },
      ]
    },
    content: {
      'Description': '👨‍🍳 FOODOMECHS – Where Food Meets Tech! 🌟 In association with ASTHRA 2K25, the ultimate Techno-Cultural Fest of Musaliar College of Engineering, we bring you Food Explorer – a thrilling Reel Competition! 📢 Think you can bust food myths with science? Now’s your chance to prove it! Create a 1-minute Instagram Reel debunking common food myths with solid scientific facts. 🍽🔍',
      'Why Us':' Participating in this competition will not only be a fun and engaging experience, but it will also help you develop essential skills in food analysis, identification, and quality control. You’ll get to learn about different ingredients, their textures, flavors, and aromas, and how to identify them accurately.Plus, you’ll get to compete with your peers, network with industry professionals, and win exciting prizes!',
      'Guidelines' : [
        'Max Duration: 1 Minute',
        'Format: Vertical (9:16) for Instagram Reels',
        'Original Content Only – No plagiarism',
        'Solo or Team Participation (Max: 3 members)',
        'Content: The reel should focus on debunking one common food myth using scientific facts.'
      ],
      'Structure' : [
        'Introduce the Myth (e.g.: "Ajinomoto (MSG) is poisonous and causes health issues.")',
        'Provide Scientific Explanation (e.g: "MSG is scientifically safe when consumed in normal amounts. The so-called \'Chinese Restaurant Syndrome\' is largely a myth with no strong scientific backing.")',
        'Use research, experiments, or expert opinions.',
        'Demonstration (if possible)',
        'Show proof, comparisons, or visual facts to demonstrate the scientific truth.'
      ]
    },
    registrationLink: 'https://surveyheart.com/form/67a1ac7b8d1bca0c1b789115'
  },
  
  {
    id: 'tech_bite',
    name: 'Tech Bite',
    poster: '/assets/Events/FT/tech.jpg',
    tags: ['FT','Food Technology'],
    registrationFee: {
      amount: 30,
      perTeam: false
    },
    prizes: {
      type: 'individual',
      distribution: [
        { position: 1, amount: 1500 },
      ]
    },
    content: {
      'Description': '👨‍🍳 FOODOMECHS – Where Food Meets Tech! 🌟 In association with ASTHRA 2K25, the ultimate Techno-Cultural Fest of Musaliar College of Engineering, we bring you Food Explorer – a thrilling Reel Competition! 📢 Think you can bust food myths with science? Now’s your chance to prove it! Create a 1-minute Instagram Reel debunking common food myths with solid scientific facts. 🍽🔍',
      'Why Us':' Participating in this competition will not only be a fun and engaging experience, but it will also help you develop essential skills in food analysis, identification, and quality control. You’ll get to learn about different ingredients, their textures, flavors, and aromas, and how to identify them accurately.Plus, you’ll get to compete with your peers, network with industry professionals, and win exciting prizes!',
      'Guidelines' : [
        'Maximum duration 30 minutes.',
        'A team must contain 5 participants.',
        'One person at a time.',
        'Everyone in the group must be talked.',
        'Topics will be announced in advance and will allow time for doing research .',
        'Teams will present their arguments, with each speaker having a time of 3-5 minutes.',
        'Each team will introduce themselves and present their opening statement.',
        'Teams will respond to opposing teams arguments',
        'Each team will summarize their arguments.',
      ],
    },
    registrationLink: 'https://surveyheart.com/form/67a242ae019da868b9733da8'
  },

  {
    id: 'nutritrack',
    name: 'NutriTrack',
    poster: '/assets/Events/FT/nutri.jpg',
    tags: ['FT','Food Technology'],
    registrationFee: {
      amount: 25,
      perTeam: false
    },
    prizes: {
      type: 'pool',
      amount: '',
    },
    content: {
      'Description': 'Are you ready to take charge of your health? "FOODOMECHS", where food meets tech, in association with "ASTHRA 2K25", the techno-cultural fest of "Musaliar College of Engineering", presents "Nutritional Assessment Outlet"– a dedicated space to evaluate and understand your nutritional status.  ',
      'Why Visit': 'Understanding your "body composition, BMI, and fat percentage"is crucial for a "healthier lifestyle". This assessment will help you gain insights into your health metrics, identify areas for improvement, and make informed dietary choices.',
      'Guidelines' : [
        'Follow given timings strictly',
        'Wear light clothing for accurate results',
        'Avoid food/drinks 30 mins before assessment',
        'Medical conditions? Inform us for better accuracy',
        'Data is confidential & for program use only',
        'Volunteers are available for assistance',
      ],
    },
  },

];