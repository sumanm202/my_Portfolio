export const portfolioData = {
  name: "Suman Kumar Mandal",
  profileImage: "/profile.jpeg",
  role: "Android Developer | Flutter Developer | Frontend Developer",
  contactEmail: "suman.m202@gmail.com",
  location: "Barasat, West Bengal, India",
  education: "B.Tech in Computer Science (CGPA: 7.83 till 7th semester)",
  careerGoal: "Android / Mobile App Developer",
  about: "I’m a passionate Android and Flutter Developer with hands-on experience in building modern, scalable, and user-friendly mobile applications. I enjoy turning ideas into real-world products using technologies like Kotlin, Jetpack Compose, Flutter, Firebase, and REST APIs.\n\nI’ve worked on projects ranging from library management systems to security-focused apps and portfolio platforms, with a strong focus on performance, clean architecture, and intuitive UI/UX.\n\nI’m constantly learning, experimenting with new technologies, and seeking opportunities to grow as a developer while building impactful digital solutions.",

  socialLinks: {
    github: "https://github.com/sumanm202?tab=repositories",
    linkedin: "https://www.linkedin.com/in/suman-kumar-mandal-a07845362/"
  },
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Material UI"],
    mobile: ["Android (Kotlin, Java)", "Jetpack Compose", "Flutter"],
    backendCloud: ["Firebase (Auth, Firestore, Realtime DB, FCM)", "PHP", "REST APIs"],
    aiMl: ["OpenCV", "MediaPipe", "DeepFace", "TensorFlow Lite"],
    tools: ["Git", "GitHub", "Android Studio", "VS Code", "Figma"]
  },
  skillProgress: [
    { label: "Android Development", value: 90 },
    { label: "Flutter Development", value: 85 },
    { label: "Frontend Development", value: 82 },
    { label: "Firebase Integration", value: 88 },
    { label: "AI/ML App Integration", value: 76 }
  ],
  projects: [
    {
      title: "Optometry Library App",
      description:
        "Android app using Firebase RTDB + Firestore fallback. Book listing, download system, progress tracking. MVVM architecture with ViewModel & LiveData. Solved regional Firebase access issues.",
      tech: ["Android", "Firebase RTDB", "Firestore", "MVVM", "LiveData"],
      openLink: "https://play.google.com/store/apps/details?id=com.Optometry.Library&pcampaignid=web_share"
    },
    {
      title: "SheSecure",
      description:
        "Women safety Android application. Emergency SOS, live location sharing. Firebase authentication and real-time database.",
      tech: ["Android", "Firebase Auth", "Realtime Database", "Location Services"],
      openLink: ""
    },
    {
      title: "Generator Bill Management System",
      description:
        "Web-based billing management system. PHP backend with MySQL. Invoice generation and admin dashboard.",
      tech: ["PHP", "MySQL", "Android SDK", "Firebase Auth", "Realtime Database", "Admin Dashboard"],
      openLink: "https://github.com/sumanm202/GeneratorProject"
    },
    {
  title: "Progreel – Short Video Learning Platform",
  description:
    "Android short video learning platform built with Jetpack Compose. Features Firebase authentication, video interactions (like & watch history), animated profile UI, and MVVM architecture with Hilt dependency injection.",
  tech: [
    "Kotlin",
    "Jetpack Compose",
    "Firebase Auth",
    "Firebase Firestore",
    "Hilt",
    "MVVM",
    "StateFlow"
  ],
  openLink: "https://github.com/sumanm202/ProgReel"
  },

  {
      title: "Flutter WebView App",
      description:
        "Integrated Firebase Push Notifications. JavaScript <-> Flutter communication. File upload/download support. Secure session handling.",
      tech: ["Flutter", "Firebase FCM", "WebView", "JavaScript Bridge"],
      openLink: "https://github.com/sumanm202/flutter_webview_app"
    },
    {
  title: "KitabGhar - eBook Library Management System",
  description:
    "Flask-based web application for managing digital books with role-based access (Reader, Author, Admin). Users can upload, browse, download, and manage PDF eBooks with secure authentication.",
  tech: [
    "Python",
    "Flask",
    "Jinja2",
    "Bootstrap 5",
    "Werkzeug",
    "SQLite / In-Memory DB",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  features: [
    "Role-based authentication (Reader, Author, Admin)",
    "PDF upload & download system",
    "Search & category filtering",
    "Admin dashboard for user & book management",
    "Secure password hashing & file handling"
  ],
  openLink: "https://github.com/sumanm202/KitabGhar"
  }

  ],
  certifications: [
    {
      title: "AWS Forage - Solutions Architecture Job Simulation (Certificate of Completion, June 17, 2025)",
      openLink: "https://drive.google.com/file/d/1I3E1JchLP0LtajGLiFtxRP-4VxobzgQn/view?usp=sharing"
    },
    {
      title: "Ardent - Python Django Full Stack (Industrial Training)",
      openLink: "https://drive.google.com/file/d/1rIrbBElMbScbcEHhM9gaFNNornOkm0JS/view?usp=drivesdk"
    },
    {
      title: "Deloitte Forage - Data Analytics Job Simulation (Certificate of Completion, June 14, 2025)",
      openLink: "https://drive.google.com/file/d/1E7kAOr2EcyLHrH0BS4mDhqVA1yfs5_Vl/view?usp=sharing"
    },
    {
      title: "TATA Forage - Data Visualisation: Empowering Business with Effective Insights (Certificate of Completion, June 16, 2025)",
      openLink: "https://drive.google.com/file/d/1IF0KaFPy-XJCZ8RphjZ6fSQnJSLODkD1/view?usp=sharing"
    }
  ]
};
