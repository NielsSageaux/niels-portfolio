const projects = [
  {
    id: 'p1',
    title: 'Portfolio Site',
    description: 'Did this website on my own.',
    longDescription: 'I built a clean, minimal portfolio site to sharpen my React and Vite skills. The trickiest part was implementing the badges on the project cards. It\'s currently hosted on Hostinger, with plans to migrate to a self-hosted home server soon.',
    techs: ['React', 'Vite'],
    languages: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://github.com/NielsSageaux/portfolio'
  },
  {
    id: 'p2',
    title: 'Discord Bot',
    description: 'A modest Python discord bot.',
    longDescription: 'I built a Discord bot for our Dofus guild that uses the Google Sheets API as a lightweight database and token system, and it\'s hosted on a Hostinger VPS. It tracks members, their ranks, and token balances, and provides commands to award tokens, match players who need help with experienced members, close threads, and log activity. In the screenshot, you can see the /passage command in action: the bot replies with details about the achievement (including its price), a dropdown listing related achievements for the same boss, and a button that creates a thread tagging both the client and the designated player for the run.',
    techs: '',
    languages: ['Python'],
    link: 'https://github.com/NielsSageaux/MDR_Bot/tree/v2'
  },
  {
    id: 'p3',
    title: 'Video Game',
    description: 'A 2D platformer indie game.',
    longDescription: 'In 2023, a friend and I participated in the GMTK Game Jam, which gave us 48 hours to create a game around the theme “Roles Reversed.” We chose a 2D car platformer with a twist: the car drives autonomously while the player sketches the track on the fly to guide it to the goal. I led development and my friend took charge of graphics and design. The project is built with C#/Unity and features some levels, different cars, on-road boosts, collectible coins, and checkpoints. See the in-game screenshot below; you can play it via the link provided.',
    techs: ['Unity'],
    languages: ['C#'],
    link: 'https://point-luna-studios.itch.io/road-builder'
  },
  {
    id: 'p4',
    title: 'Desktop App',
    description: 'A simple to-do list app.',
    longDescription: 'I built my first desktop app to learn React and Vite, discovering Electron along the way. It\'s a tabbed to‑do list for managing multiple projects, styled with a Post‑it–inspired theme. The playful name (TooDooTak) is meant to sound like if "to do tasks" was a drum beat. Surprisingly, the slider was the trickiest part.',
    techs: ['Electron', 'React', 'Vite'],
    languages: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://github.com/NielsSageaux/toodootak'
  },
  {
    id: 'p5',
    title: 'Business Software',
    description: 'A software managing funds.',
    longDescription: 'I began freelancing in late 2024 to modernize a 20‑year‑old application used by attorneys. The last update was built with Java WebObjects; my role was to migrate the frontend to Angular while leaving the backend intact. I worked within a large, lightly documented in‑house framework based on Kendo UI for Angular, focusing on the UI and web‑service integrations. My scope centered on funds and real‑estate management modules. The screenshot below shows one of the pages I updated. Unfortunately, I can\'t share the code for privacy reasons.',
    techs: ['Angular'],
    languages: ['TypeScript', 'CSS', 'HTML'],
    link: ''
  },
  {
    id: 'p6',
    title: 'Data Analysis',
    description: 'A WIP prediction model.',
    longDescription: 'In mid‑2025, I was contacted by a founder building a startup in the reclaimed building‑materials space. The idea is to help reconditioning companies find nearby material “deposits.” My first task was a prediction model to estimate construction end dates—data that\'s hard to obtain because public records are published too late. Below is the BDNB schema (a large French building database) and a link to a live open platform tracking current construction projects.',
    techs: [],
    languages: ['Parquet', 'Python'],
    link: 'https://existants.fr/carte/'
  },
  {
    id: 'p7',
    title: 'Image Processing',
    description: 'A nearfield fingertip recognition',
    longDescription: 'During my internship at a music‑tech startup, I worked on IRIS (Infrared Intelligent Surface), a sensor array composed of emitter–receiver cells. Each cell captures reflected‑light intensity from objects above, producing an image like the one shown. My role was to implement computer‑vision algorithms to identify key features (the palm\'s center, finger contours, and fingertips) and to infer object height via a point‑spread transform. I transfered the 3D positions of the objects to a Unity prototype for interaction demos. A link to the IRIS homepage is included.',
    techs: ['OpenCV'],
    languages: ['C++'],
    link: 'https://www.embodme.com/iris'
  },
  {
    id: 'p8',
    title: 'Computer Science Professor',
    description: '1 year of teaching in MPI',
    longDescription: 'For a year, I taught as a contract instructor in a Classe Préparatoire (MPI, second year), focused on math, physics, and computer science. We used OCaml for functional/recursive thinking, C for rigorous systems programming, and SQL for practical data work. Topics ranged widely (often math‑heavy) including graph theory, formal languages, and complexity classes. The image shows a k‑means clustering visualization, a technique used in many AI models.',
    techs: [],
    languages: ['OCaml', 'C', 'SQL'],
    link: ''
  }
  
];

export default projects;
