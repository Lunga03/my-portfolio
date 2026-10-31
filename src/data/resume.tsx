import { Icons } from "@/components/icons";

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  description: string;
  bullets: string[];
  tags: string[];
  logoUrl?: string;
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
  description: string;
  highlights: string[];
  logoUrl?: string;
  href?: string;
}

export interface SkillSubgroup {
  title: string;
  items: string[];
}

export interface SkillGroup {
  title: string;
  status: string;
  note: string;
  items?: string[];
  subgroups?: SkillSubgroup[];
  wide?: boolean;
}

export const DATA = {
  name: "Bonginkosi Lungisani Nxumalo",
  shortName: "Bonginkosi Nxumalo",
  initials: "BN",
  url: "https://example.com",
  location: "Johannesburg, South Africa",
  locationLink: "https://www.google.com/maps/place/Johannesburg",
  headline:
    "Computer Science Graduate | Software Engineering | Technology & Innovation",
  description:
    "Computer Science and Informatics student at the University of Johannesburg with an interest in software engineering, enterprise technology and intelligent systems.",
  intro:
    "I am a Computer Science and Informatics student at the University of Johannesburg with a strong interest in software engineering, enterprise technology and intelligent systems. I enjoy solving practical problems through programming, algorithmic thinking and application development.",
  about: [
    "I am completing a Bachelor of Science in Computer Science and Informatics at the University of Johannesburg (February 2024 – November 2026). In 2024 I ranked in the top 1% at the institution, and I am a former member of the UJenius Club.",
    "My interests sit at the intersection of software engineering, backend development and intelligent systems. I enjoy designing clear application architecture, working with relational databases and APIs, and turning requirements into working software. My academic work has given me exposure to full-stack application development, machine learning fundamentals, graph algorithms, database design and low-level programming.",
    "I have worked as a Student Marking Assistant in the Department of Computer Science and Software Engineering, where I assess C++ practicals for more than 100 first-year students and provide feedback on correctness, programming logic and coding style. I was also the Technical Lead and Group Leader for Ubuntu Cultural Connect, a third-year software engineering project, where I coordinated technical development and collaborated on a cultural tourism platform.",
    "I am currently exploring cloud computing, enterprise technology and applied AI, and I am looking for graduate opportunities where I can contribute to well-engineered software while continuing to learn from experienced engineers.",
  ],
  quickFacts: [
    { label: "Degree", value: "BSc Computer Science & Informatics" },
    { label: "University", value: "University of Johannesburg" },
    { label: "Graduation", value: "November 2026" },
    { label: "Recognition", value: "Top 1% at the institution (2024)" },
    { label: "Focus", value: "Software engineering, backend, data" },
    { label: "Location", value: "Johannesburg, South Africa" },
  ],
  avatarUrl: "",
  contact: {
    email: "lungisanibonga903@gmail.com",
    emailHref: "mailto:lungisanibonga903@gmail.com",
    linkedin: "https://www.linkedin.com/in/lungisani-nxumalo-a75a96271/",
    github: "https://github.com/Lunga03",
    cv: "/cv/Bonginkosi_Lungisani_Nxuamalo_Resume.pdf",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Lunga03",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lungisani-nxumalo-a75a96271/",
        icon: Icons.linkedin,
      },
      Email: {
        name: "Email",
        url: "mailto:lungisanibonga903@gmail.com",
        icon: Icons.email,
      },
    },
  },
  work: [
    {
      company: "University of Johannesburg",
      role: "Student Marking Assistant",
      location: "Department of Computer Science and Software Engineering",
      start: "February 2026",
      end: "November 2026",
      description:
        "Assess weekly practicals and assignments for first-year students in Introduction to Algorithm Development (C++), with a focus on accurate feedback and individual student support.",
      bullets: [
        "Mark weekly practicals and assignments for more than 100 first-year Introduction to Algorithm Development (C++) students.",
        "Provide feedback on correctness, programming logic and coding style.",
        "Assist students individually during practical marking sessions and respond to their technical questions.",
        "Apply attention to detail, technical understanding, clear communication and interpersonal skills.",
      ],
      tags: [
        "C++",
        "Code Review",
        "Technical Communication",
        "Attention to Detail",
      ],
    },
    {
      company: "Ubuntu Cultural Connect",
      role: "Technical Lead and Group Leader",
      location: "Third-year Software Engineering project",
      start: "Academic project",
      end: "",
      description:
        "Coordinated technical development for a cultural tourism platform and contributed to its design, implementation and backend integration as part of a collaborative student team.",
      bullets: [
        "Coordinated technical development across the project team and helped plan the implementation of the platform.",
        "Contributed to the design, implementation and improvement of a cultural tourism application.",
        "Worked on backend integration, REST API communication and database-backed features.",
        "Supported team collaboration, task coordination and the delivery of a working academic project.",
      ],
      tags: [
        "Technical Leadership",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "REST APIs",
        "Team Collaboration",
      ],
    },
  ] satisfies WorkExperience[],
  education: [
    {
      school: "University of Johannesburg",
      degree: "Bachelor of Science in Computer Science and Informatics",
      start: "February 2024",
      end: "November 2026",
      location: "Johannesburg, South Africa",
      description:
        "Undergraduate degree combining computer science foundations with information systems and software engineering practice.",
      highlights: [
        "Ranked in the top 1% at the institution in 2024.",
        "Former member of the UJenius Club.",
        "Areas of study include software engineering, algorithms and data structures, database systems, artificial intelligence fundamentals and low-level programming.",
      ],
      logoUrl: "",
      href: "https://www.uj.ac.za/",
    },
  ] satisfies EducationEntry[],
  achievements: [
    {
      title: "Top 1% at the institution",
      description:
        "Ranked in the top 1% of students at the University of Johannesburg in 2024.",
      year: "2024",
    },
    {
      title: "Former UJenius Club Member",
      description:
        "Former member of the University of Johannesburg's UJenius Club.",
      year: "University of Johannesburg",
    },
  ],
  skillGroups: [
    {
      title: "Programming Languages",
      status: "Used in coursework and projects",
      note: "Assembly exposure covers registers, memory addressing, stack operations, procedures and parameter passing, stack frames and EBP, basic processor instructions and low-level program execution. This is foundational familiarity, not advanced assembly expertise.",
      items: [
        "Java",
        "Python",
        "C++",
        "C",
        "SQL",
        "JavaScript",
        "C# (beginner)",
        "x86 Assembly (80x86 — familiarity)",
      ],
    },
    {
      title: "Frameworks & Backend",
      status: "Used in projects and coursework",
      note: "Backend development, API integration, application architecture and server-side programming.",
      items: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "Next.js",
        "JavaFX",
        "REST API development",
      ],
    },
    {
      title: "Databases & Data",
      status: "Used in projects and coursework",
      note: "Relational modelling, schema design, queries, CRUD operations and application data integration.",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL",
        "Supabase",
        "Database design",
        "Relational database concepts",
        "CRUD operations",
      ],
    },
    {
      title: "Development, Deployment & Tools",
      status: "Working knowledge",
      note: "Containerisation basics, deployment and hosting workflows, version control, system diagrams and data analysis. Not presented as a DevOps specialisation.",
      items: [
        "Docker",
        "Render",
        "Railway",
        "Git",
        "GitHub",
        "Draw.io",
        "Microsoft Excel",
        "RStudio",
      ],
    },
    {
      title: "Software Engineering",
      status: "Academic study and practical exposure",
      note: "Studied in Advanced Software Engineering and applied in academic projects. This is not a claim of professional certification or extensive industry experience.",
      wide: true,
      subgroups: [
        {
          title: "Requirements & Design",
          items: [
            "Software requirements analysis",
            "Functional and non-functional requirements",
            "UML and system modelling",
            "Requirements specification",
          ],
        },
        {
          title: "Application Development",
          items: [
            "Object-oriented programming",
            "Data structures and algorithms",
            "Database integration",
            "API development and integration",
            "Software implementation and deployment",
            "Debugging and problem-solving",
          ],
        },
      ],
    },
    {
      title: "AI & Emerging Technologies",
      status: "Foundational study and exploration",
      note: "Applied in the Wildlife Identification and Rescue project and related coursework. No claim of deep learning expertise or advanced AI engineering experience.",
      items: [
        "Machine learning fundamentals",
        "K-Nearest Neighbours (KNN)",
        "Euclidean distance",
        "Graph algorithms",
        "Breadth-First Search (BFS)",
        "Dijkstra's shortest-path algorithm",
        "Artificial intelligence fundamentals",
        "Cloud computing fundamentals",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
