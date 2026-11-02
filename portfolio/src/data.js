// ALL your content lives here. Edit this file to update the whole site.

export const profile = {
  name: "Naveen Negi",
  email: "naveen72170@gmail.com",
  phone: "+91 75055 99216",
  github: "https://github.com/Naveen-Negi721700",
  githubUser: "Naveen-Negi721700",
  linkedin: "https://www.linkedin.com/in/naveen-negi-423429326/", // paste your LinkedIn URL to show it
  portfolio: "", // optional second portfolio link
  resume: "/Naveen_negi_resume.pdf", // put the PDF in /public
};

export const stats = [
  ["160", "Days DSA challenge"],
  ["2", "Industry roles"],
  ["4", "Products shipped"],
  ["2028", "B.Tech batch"],
];

export const principles = [
  ["Secure by default", "JWT access and refresh tokens live in httpOnly cookies, and every public endpoint validates its API key."],
  ["Limit everything", "Rate limits per IP, per user and per API key keep a public API from being abused."],
  ["Make AI accountable", "The Gemini assistant can create things from chat, but it always asks before it deletes."],
];

export const facts = [
  ["Degree", "B.Tech, Computer Science & Engineering"],
  ["College", "Shivalik College of Engineering, Dehradun"],
  ["Batch", "Aug 2024 – Jul 2028"],
  ["Class XII", "UK Board — 76%"],
];

export const milestones = [
  ["2024", "Finished Class XII (UK Board, 76%) at Saraswati Vidya Mandir Inter College, Rishikesh."],
  ["Aug 2024", "Began B.Tech in Computer Science & Engineering at Shivalik College of Engineering."],
  ["DSA", "Completed the GeeksforGeeks 160 Days DSA Challenge and earned the certificate."],
  ["May – Jun 2026", "Web Developer at C4 Cause: shipped Smadhuna Foundation and JMD Global Services websites."],
  ["2026", "Built and deployed Backora, a backend-as-a-service platform with an AI assistant."],
  ["Aug 2026", "Joined Zetheta Algorithms as a Full Stack Engineer Intern."],
];

export const projects = [
  {
    tag: "BaaS · Security · 2026",
    name: "Backora",
    blurb: "A backend-as-a-service where developers manage projects, collections and API keys, and drop signup and login into their own apps through a public API.",
    stats: [["3", "Rate-limit scopes"], ["2", "Token types"], ["AI", "Chat-driven dashboard"]],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Redis", "Cloudinary", "Gemini"],
    points: [
      "JWT authentication with access and refresh tokens in httpOnly cookies, silent token refresh, protected routes and API key validation.",
      "Redis-backed rate limiting per IP, per user and per API key, plus Cloudinary image uploads and email notifications.",
      "A Gemini-powered assistant (function calling) and dashboard that create projects, collections and API keys from chat, with confirmation before deletes.",
    ],
    repo: "https://github.com/Naveen-Negi721700", live: "https://baas-project.vercel.app/",
  },
  {
    tag: "Full-stack · 2026",
    name: "ShrinkIt.io",
    blurb: "A full-stack URL shortener with custom links, QR codes and a dashboard to manage every link you have generated.",
    stats: [["JWT", "Authentication"], ["QR", "Code generation"], ["REST", "API design"]],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    points: [
      "JWT authentication, custom short links and QR code generation.",
      "A dashboard to view and manage previously generated links.",
      "REST APIs built with Node.js and Express, with data stored in MongoDB.",
    ],
    repo: "https://github.com/Naveen-Negi721700", live: "https://shrinkit-eight.vercel.app/",
  },
  {
    tag: "Client work · C4 Cause",
    name: "Smadhuna Foundation",
    blurb: "A responsive website for Smadhuna Foundation, built and deployed on Vercel during my web developer role.",
    stats: [["Vercel", "Deployed"], ["Next.js", "Frontend"], ["Mongo", "Database"]],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    points: [
      "Responsive layouts, service pages and reusable components built to project requirements.",
      "Backend APIs for data handling and database integration.",
    ],
    repo: "https://github.com/Naveen-Negi721700/Smadhuna_Foundation", live: "https://smadhuna-foundation.vercel.app/",
  },
  {
  tag: "Full-stack · 2025",
  name: "Passop",
  blurb: "A secure password manager that allows users to save, manage, and access their website credentials in one place.",
  stats: [["Security", "Password Management"], ["CRUD", "Operations"], ["Storage", "Database"]],
  stack: ["React", "Node.js", "Express.js", "MongoDB"],
  points: [
    "Implemented functionality to securely store, update, and delete website credentials.",
    "Built a responsive interface for managing saved passwords with an easy-to-use dashboard.",
    "Integrated backend APIs and MongoDB for persistent credential storage.",
  ],
  repo: "https://github.com/Naveen-Negi721700/Passop", live: "https://passop-five-xi.vercel.app/",
},
];

export const skills = [
  ["01", "Languages", ["JavaScript", "C", "C++"], "Problem solving in C++ and JavaScript."],
  ["02", "Frontend", ["React.js", "Next.js", "Tailwind CSS", "HTML & CSS"], "Responsive interfaces, built by hand."],
  ["03", "Backend & APIs", ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Rate limiting"], "Security first, endpoints second."],
  ["04", "Data", ["MongoDB", "Mongoose", "Redis"], "Schemas and caching for real traffic."],
  ["05", "Infra & Tools", ["Docker", "Git / GitHub", "Postman", "Cloudinary", "Vercel"], "Shipped, not just built."],
];
export const fundamentals = ["DSA", "OOP", "REST APIs", "Authentication", "API Security", "Backend Architecture"];

export const achievements = [
  ["160", "GeeksforGeeks", "160 Days DSA Challenge", "Completed the full challenge and earned the certificate, strengthening problem solving and data structures."],
  ["02", "Industry experience", "Two roles in 2026", "Web Developer at C4 Cause, then Full Stack Engineer Intern at Zetheta Algorithms."],
  ["BaaS", "Backora", "Shipped a platform", "Built and deployed a backend-as-a-service with JWT auth, Redis rate limiting and an AI assistant."],
];

export const experience = [
  ["Aug 2026", "Full Stack Engineer Intern", "Zetheta Algorithms Private Limited", [
    "Developed a multi-step loan application form for a full-stack web application.",
    "Built responsive UI components for mobile and desktop devices.",
    "Fixed application bugs and improved overall functionality.",
  ]],
  ["May 2026 – Jun 2026", "Web Developer", "C4 Cause", [
    "Built and deployed websites for Smadhuna Foundation and JMD Global Services using Next.js, Tailwind CSS, Node.js, Express.js and MongoDB.",
    "Developed backend APIs for data handling and database integration.",
    "Created responsive layouts, service pages and reusable web components.",
    "Collaborated with team members and deployed the websites on Vercel.",
  ]],
];

export const education = [
  ["Aug 2024 – Jul 2028", "B.Tech, Computer Science & Engineering", "Shivalik College of Engineering · Dehradun", ""],
  ["2024", "Class XII (UK Board)", "Saraswati Vidya Mandir Inter College · Rishikesh", "76%"],
];
