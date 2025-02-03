// src/data/eventData.js
export const techEvents = {
  cse: [
    {
      id: 'cse-1',
      name: 'Code Quest',
      poster: '/assets/images/test.jpg',
      description: 'A competitive programming challenge testing your algorithmic skills.',
      rules: [
        'Individual participation only',
        'Time limit: 3 hours',
        'Languages allowed: C++, Java, Python',
        'Internet access is not allowed during the contest'
      ],
      registrationFee: {
        amount: 200,
        perTeam: false // if true, fee is per team; if false, fee is per person
      },
      prizes: {
        type: 'pool', // can be 'pool' or 'individual'
        amount: 10000, // used when type is 'pool'
        distribution: null // null when type is 'pool'
      },
      registrationLink: 'https://example.com/register/code-quest'
    },
    {
      id: 'cse-2',
      name: 'Hackathon',
      poster: '/assets/images/test.jpg',
      description: '24-hour hackathon to build innovative solutions.',
      rules: [
        'Team size: 2-4 members',
        'Bring your own laptops',
        'Original ideas only'
      ],
      registrationFee: {
        amount: 500,
        perTeam: true
      },
      prizes: {
        type: 'individual',
        amount: null, // null when type is 'individual'
        distribution: [
          { position: 1, amount: 5000 },
          { position: 2, amount: 3000 },
          { position: 3, amount: 2000 }
        ]
      },
      registrationLink: 'https://example.com/register/hackathon'
    },
    {
      id: 'cse-3',
      name: 'Debug Master',
      poster: '/assets/images/test.jpg',
      description: 'Find and fix bugs in given code snippets.',
      rules: [
        'Individual participation',
        'Time limit: 2 hours'
      ],
      registrationFee: {
        amount: 100,
        perTeam: false
      },
      prizes: {
        type: 'individual',
        amount: null,
        distribution: [
          { position: 1, amount: 3000 },
          { position: 2, amount: 1500 }
        ]
      },
      registrationLink: 'https://example.com/register/debug-master'
    }
  ],
    ce: [
        {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          }
    ],
    bme: [
        {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          }
    ],
    ft: [
        {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          }
    ],
    ec: [
        {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          },
          {
            id: 'cse-1',
            name: 'Code Quest',
            poster: '/assets/images/test.jpg',
            description: 'A competitive programming challenge testing your algorithmic skills.',
            rules: [
              'Individual participation only',
              'Time limit: 3 hours',
              'Languages allowed: C++, Java, Python',
              'Internet access is not allowed during the contest'
            ],
            registrationLink: 'https://example.com/register/code-quest'
          }
    ]
  };
  
  export const interCollegeEvents = [
    {
        id: 'cse-1',
        name: 'Code Quest',
        poster: '/assets/images/test.jpg',
        description: 'A competitive programming challenge testing your algorithmic skills.',
        rules: [
          'Individual participation only',
          'Time limit: 3 hours',
          'Languages allowed: C++, Java, Python',
          'Internet access is not allowed during the contest'
        ],
        registrationLink: 'https://example.com/register/code-quest'
      },
      {
        id: 'cse-1',
        name: 'Code Quest',
        poster: '/assets/images/test.jpg',
        description: 'A competitive programming challenge testing your algorithmic skills.',
        rules: [
          'Individual participation only',
          'Time limit: 3 hours',
          'Languages allowed: C++, Java, Python',
          'Internet access is not allowed during the contest'
        ],
        registrationLink: 'https://example.com/register/code-quest'
      },
      {
        id: 'cse-1',
        name: 'Code Quest',
        poster: '/assets/images/test.jpg',
        description: 'A competitive programming challenge testing your algorithmic skills.',
        rules: [
          'Individual participation only',
          'Time limit: 3 hours',
          'Languages allowed: C++, Java, Python',
          'Internet access is not allowed during the contest'
        ],
        registrationLink: 'https://example.com/register/code-quest'
      },
      {
        id: 'cse-1',
        name: 'Code Quest',
        poster: '/assets/images/test.jpg',
        description: 'A competitive programming challenge testing your algorithmic skills.',
        rules: [
          'Individual participation only',
          'Time limit: 3 hours',
          'Languages allowed: C++, Java, Python',
          'Internet access is not allowed during the contest'
        ],
        registrationLink: 'https://example.com/register/code-quest'
      },
      {
        id: 'cse-1',
        name: 'Code Quest',
        poster: '/assets/images/test.jpg',
        description: 'A competitive programming challenge testing your algorithmic skills.',
        rules: [
          'Individual participation only',
          'Time limit: 3 hours',
          'Languages allowed: C++, Java, Python',
          'Internet access is not allowed during the contest'
        ],
        registrationLink: 'https://example.com/register/code-quest'
      }
  ];