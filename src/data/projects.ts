export interface CaseStudySection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  noteLabel?: string;
  placeholder?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  cardDescription: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  role: string;
  status: string;
  timeline: string;
  highlights: string[];
  placeholderNote?: string;
  sections: CaseStudySection[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ubuntu-cultural-connect",
    title: "Ubuntu Cultural Connect",
    category: "Full-Stack Software Engineering",
    summary:
      "A South African cultural tourism platform designed to connect tourists with local cultural experiences and hotspot owners.",
    cardDescription:
      "A cultural tourism platform that gives indigenous experiences visibility while helping hotspot owners manage and promote what they offer.",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "JavaScript",
      "REST APIs",
      "Supabase",
    ],
    image: "/projects/ubuntu-cultural-connect.svg",
    imageAlt:
      "Abstract placeholder graphic for the Ubuntu Cultural Connect project",
    githubUrl: "",
    role: "Technical Lead and Group Leader",
    status: "Completed academic project",
    timeline: "Third-year Software Engineering project",
    highlights: [
      "Cultural experience discovery",
      "Search and filtering",
      "Hotspot owner management",
      "Experience management",
      "User authentication",
      "Database integration",
      "REST API communication",
    ],
    sections: [
      {
        title: "Problem Statement",
        paragraphs: [
          "South Africa has a rich ecosystem of cultural experiences, from traditional cooking and storytelling to music, crafts, heritage tours and township experiences. Many of these experiences are offered by local hotspot owners who do not have an accessible digital platform through which tourists can discover them.",
          "Ubuntu Cultural Connect was designed to address this visibility gap by creating a platform where cultural experiences can be presented, searched and managed, while also promoting indigenous tourism.",
        ],
      },
      {
        title: "Proposed Solution",
        paragraphs: [
          "Ubuntu Cultural Connect is a South African cultural tourism platform designed to connect tourists with local cultural experiences and hotspot owners. The platform promotes indigenous tourism by providing visibility to cultural experiences such as traditional cooking, storytelling, music, crafts, heritage tours and township experiences.",
          "The platform brings experience discovery and experience management into one application, supported by user authentication, a relational database and REST API communication.",
        ],
      },
      {
        title: "System Features",
        paragraphs: [
          "The project was designed around the following capabilities:",
        ],
        bullets: [
          "Cultural experience discovery for tourists.",
          "Search and filtering to help users find relevant experiences.",
          "Hotspot owner management of their profiles and experiences.",
          "Experience management, including the information presented to tourists.",
          "User authentication.",
          "Database integration for application data.",
          "REST API communication between the client and backend.",
        ],
        note:
          "This was a collaborative team project. The feature list describes the platform scope, not a claim that every feature was implemented individually by me.",
        noteLabel: "Team project",
      },
      {
        title: "Technical Architecture",
        paragraphs: [
          "The application followed a client-server structure. A JavaScript front end communicated with a FastAPI backend through REST endpoints. The backend used Python and SQLAlchemy to work with a PostgreSQL database, while Supabase formed part of the project's technology stack.",
          "This separation made it possible to develop the user-facing application and backend services in parallel, with the API acting as the contract between both sides.",
        ],
      },
      {
        title: "Technologies Used",
        bullets: [
          "FastAPI for the backend API.",
          "Python for server-side application logic.",
          "PostgreSQL as the relational database.",
          "SQLAlchemy for database modelling and integration.",
          "JavaScript for the client application.",
          "REST APIs for communication between the client and backend.",
          "Supabase as part of the project technology stack.",
        ],
      },
      {
        title: "My Contributions",
        paragraphs: [
          "As Technical Lead and Group Leader, I coordinated technical development and helped the team plan and integrate its work. I contributed to application development and backend integration, and worked with team members to design, implement and improve the platform.",
          "My role also involved supporting collaboration across the team, helping to align the work being done by different members and contributing to the delivery of a working academic project.",
          "The platform was a group effort. I contributed to the technical direction, backend integration and implementation work, but I did not personally build every feature.",
        ],
      },
      {
        title: "Challenges & Lessons Learned",
        paragraphs: [
          "Coordinating a team project while also contributing to implementation required clear communication and a practical approach to task planning. Keeping the front end and backend aligned depended on consistent API expectations and incremental integration.",
          "The project strengthened my understanding of REST API design, relational data modelling and the importance of agreeing on interfaces early. It also reinforced that technical leadership is not only about writing code, but about helping a team make progress together.",
        ],
        note:
          "No performance statistics or deployment outcomes are claimed for this project.",
        noteLabel: "Scope note",
      },
    ],
  },
  {
    slug: "wildlife-identification-rescue",
    title: "Drone-Assisted Wildlife Identification and Rescue System",
    category: "Machine Learning Concepts and Graph Algorithms",
    summary:
      "A proposed drone-assisted system that combines image similarity detection with graph-based pathfinding to support wildlife identification and rescue planning during forest fires.",
    cardDescription:
      "An academic design that explores K-Nearest Neighbours for image similarity and Dijkstra's algorithm for minimum-cost rescue routing.",
    technologies: [
      "K-Nearest Neighbours",
      "Euclidean Distance",
      "Feature Vectors",
      "Graph Theory",
      "Dijkstra's Algorithm",
      "Drone-based Image Capture",
    ],
    image: "/projects/wildlife-rescue.svg",
    imageAlt:
      "Abstract placeholder graphic for the Wildlife Identification and Rescue System",
    githubUrl: "",
    role: "Algorithm design and technical analysis",
    status: "Academic design — proposed system",
    timeline: "Machine learning and algorithms coursework",
    highlights: [
      "Image similarity detection",
      "Feature-vector comparison",
      "K-Nearest Neighbours",
      "Weighted graph modelling",
      "Dijkstra's shortest-path algorithm",
      "Rescue route planning",
    ],
    sections: [
      {
        title: "Problem Statement",
        paragraphs: [
          "During forest fires, emergency response teams may struggle to identify and locate dangerous animals that could threaten nearby communities. Large geographical areas, smoke and limited visibility make locating and prioritising these animals difficult.",
          "The challenge is not only identifying what is in the environment, but also determining how response teams can reach affected areas efficiently.",
        ],
      },
      {
        title: "Proposed Solution",
        paragraphs: [
          "This project proposes a drone-assisted system designed to help emergency response teams identify potentially dangerous wildlife during forest fires and determine efficient routes to reach affected areas.",
          "The system combines image-based similarity detection with graph-based pathfinding techniques to support wildlife identification and rescue operations. The work focused on the algorithmic design rather than a deployed drone platform.",
        ],
      },
      {
        title: "Wildlife Identification Using K-Nearest Neighbours",
        paragraphs: [
          "The identification component uses K-Nearest Neighbours (KNN) to compare an image captured by a drone with images in a labelled dataset.",
        ],
        bullets: [
          "The drone captures an image.",
          "The image is converted into a feature vector.",
          "Dataset images are represented as feature vectors.",
          "Euclidean distance is calculated between feature vectors.",
          "KNN identifies the nearest matching examples.",
          "The resulting matches support the identification of animals resembling potentially dangerous species.",
        ],
        note:
          "The design describes feature-vector similarity at a conceptual level. It does not claim the use of deep learning or a computer vision framework.",
        noteLabel: "Implementation scope",
      },
      {
        title: "Route Planning Using Graph Algorithms",
        paragraphs: [
          "The routing component represents geographical locations or regions as graph nodes and connections between locations as edges. Weighted edges represent travel distance or cost.",
          "Dijkstra's shortest-path algorithm is then applied to calculate minimum-cost routes for emergency response teams.",
        ],
        bullets: [
          "Nodes represent locations or regions.",
          "Edges represent connections between locations.",
          "Edge weights represent travel distance or cost.",
          "Dijkstra's algorithm calculates the minimum-cost route.",
        ],
        note:
          "Dijkstra's algorithm does not automatically find the safest route. Safety would need to be incorporated into the graph's edge weights or constraints, for example by penalising hazardous terrain or restricted areas. The project explores this as a design consideration.",
        noteLabel: "Important distinction",
      },
      {
        title: "Proposed Functionality vs. Implemented Work",
        paragraphs: [
          "This was an academic project focused on algorithmic reasoning and system design. It should be understood as a proposed system, not as a fully deployed drone platform.",
          "The project explored how KNN and Dijkstra's algorithm could contribute to the overall system. It did not claim real-world deployment, operational accuracy or integration with live drone hardware.",
        ],
        note:
          "No deep learning, computer vision framework, deployed drone system or measured identification accuracy is claimed.",
        noteLabel: "Scope note",
      },
      {
        title: "What I Learned",
        paragraphs: [
          "The project strengthened my understanding of how machine learning fundamentals and classical graph algorithms can be combined in a single system design. It also highlighted the importance of being precise about what an algorithm optimises and where human judgement or additional constraints are required.",
          "Working through the limitations of KNN and Dijkstra's algorithm reinforced that a technically sound proposal must clearly distinguish between proposed functionality, implemented work and real-world assumptions.",
        ],
      },
    ],
  },
  {
    slug: "fundisa",
    title: "FUNDISA",
    category: "Application Development",
    summary:
      "A dedicated project entry for FUNDISA. Confirmed project details will be added as they become available.",
    cardDescription:
      "Project details are being prepared. This case study contains structured placeholders for the overview, features, architecture and contribution.",
    technologies: [],
    image: "/projects/fundisa.svg",
    imageAlt: "Placeholder graphic for the FUNDISA project",
    githubUrl: "",
    role: "To be added",
    status: "Placeholder — details to be added",
    timeline: "To be added",
    highlights: [],
    placeholderNote:
      "This case study is intentionally incomplete. It contains editable placeholders rather than assumed details. Update src/data/projects.ts with confirmed information about FUNDISA.",
    sections: [
      {
        title: "Project Overview",
        placeholder: true,
        paragraphs: [
          "Add a concise overview of FUNDISA here. Describe what the application is, who it is for and what it sets out to achieve.",
        ],
      },
      {
        title: "Problem Statement",
        placeholder: true,
        paragraphs: [
          "Describe the problem FUNDISA addresses and why it matters. Avoid adding claims until they can be verified.",
        ],
      },
      {
        title: "Proposed Solution",
        placeholder: true,
        paragraphs: [
          "Explain how FUNDISA responds to the problem. Include the intended users and the main value it provides.",
        ],
      },
      {
        title: "Key Features",
        placeholder: true,
        paragraphs: [
          "List the confirmed features of FUNDISA once they are available.",
        ],
        bullets: [
          "Add feature one.",
          "Add feature two.",
          "Add feature three.",
        ],
      },
      {
        title: "Technologies Used",
        placeholder: true,
        paragraphs: [
          "Add the programming languages, frameworks, libraries and tools that FUNDISA actually uses. Do not add technologies until they are confirmed.",
        ],
      },
      {
        title: "Database Architecture",
        placeholder: true,
        paragraphs: [
          "Describe the database design, including entities, relationships and any important constraints. If FUNDISA does not use a database, replace this section.",
        ],
      },
      {
        title: "My Individual Contribution",
        placeholder: true,
        paragraphs: [
          "Describe your specific role and contributions to FUNDISA. Make clear which parts of the project you worked on and which parts were completed by others.",
        ],
      },
      {
        title: "Screenshots and Repository",
        placeholder: true,
        paragraphs: [
          "Add project screenshots and the GitHub repository URL when they are available. Update the image field and githubUrl in src/data/projects.ts.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: PROJECTS[index - 1],
    next: PROJECTS[index + 1],
  };
}
