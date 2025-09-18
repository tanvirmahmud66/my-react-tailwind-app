import me from "../assets/image1.png";
import image1 from "../assets/image2.png";
// src/data/projectsData.jsx

import p1 from '../assets/eminent.png';
import p2 from '../assets/melody.png';
import p3 from '../assets/binimoy.png';
import p4 from '../assets/hms.png';
import p5 from '../assets/project3.jpg';
import p6 from '../assets/amarshop.png';
import p7 from '../assets/awh.png';
import hvac from '../assets/hvac.png';
import resume from '../assets/Tanvir_Mahmud_resume.pdf'




// src/data/heroData.jsx
export const heroData = {
  name: "Tanvir Mahmud",
  title: "Software Engineer | Full-Stack Developer",
  description:
    "I build scalable web applications with modern technologies. Passionate about solving complex problems through clean, efficient code and intuitive user experiences.",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  backgroundImage:
    "linear-gradient(rgba(11, 25, 44, 0.9), rgba(11, 25, 44, 0.9)), url('/hero-pattern.svg')",
  links: {
    linkedin: {
      url: "https://www.linkedin.com/in/tanvirmahmud61/",
      text: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.89v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.59z" />
        </svg>
      ),
    },
    resume: {
      url: "https://drive.google.com/file/d/1T9_8NbXKR6l-neqjqzeBXOLLLlgvBaGB/view?usp=sharing",
      text: "Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  },
  image: {
    src: me,
    alt: "Tanvir Mahmud",
  },
};

// src/data/aboutData.jsx
export const aboutData = {
  title: "About",
  subtitle: "Software Engineer with expertise in full-stack web application development",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  image: {
    src: image1,
    alt: "Tanvir Mahmud",
  },
  profile: {
    title: "Professional Profile",
    description:
      "Software Engineer skilled in Python, JavaScript, and frameworks like Frappe ERPNext, Django, and React. Experienced in building scalable, user-focused solutions for accounting, project management, inventory, manufacturing, CRM, and HRM systems.",
  },
  info: [
    { title: "Name", value: "Tanvir Mahmud" },
    { title: "Email", value: "tanvirmahmud.cse66@gmail.com" },
    { title: "Phone", value: "+8801701744799" },
    { title: "Address", value: "Mailbag 1st Lane, DIT Road, Dhaka - 1217" },
    { title: "Education", value: "B.Sc. in Computer Science & Engineering (CSE), Stamford University Bangladesh" },
    {
      title: "Experience",
      value: "Junior Software Engineer at Panam Group",
    },
  ],
  buttons: [
    {
      type: "download",
      text: "Download CV",
      url: resume,
      icon: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      ),
    },
    {
      type: "contact",
      text: "Contact Me",
      url: "#contact",
      icon: (
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ],
  skills: {
    title: "Core Competencies",
    items: [
      "Python",
      "JavaScript",
      "Frappe",
      "ERPNext",
      "Django",
      "Rest Framework",
      "React",
      "Redux",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "CI/CD",
      "Git/GitHub",
      "Azure",
      "Agile",
      "Tailwind CSS",
      "Material UI",
      "Data Structure",
      "Algorithms",
      "PyQt5",
    ],
  },
};

// src/data/experienceData.jsx
export const experienceData = {
  title: "Work",
  subtitle: "My professional contributions and project implementations",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  experiences: [
    {
      role: "Jr. Software Engineer",
      company: "Panam Group",
      duration: "2025 - Present",
      type: "Full-time",
      description: [
        "Developing ERPnext Manufacturing Module for Metro Dying Limited",
        "Developing Assets Maintenance Module for Tracking Manufacturing Machineries",
        "Implemented CI/CD pipelines via GitHub for multiple projects",
      ],
      tags: [
        "Frappe",
        "ERPNext",
        "Python",
        "JavaScript",
        "Networking",
        "PyQt5",
      ],
    },
    {
      role: "Former Jr. Software Engineer",
      company: "Glascutt Limited",
      duration: "2024 - 2025",
      type: "Full-time",
      description: [
        "Developed real estate portfolio website using Frappe ERPNext with lead generation features",
        "Built accounting, project accounting, sales, purchase, and inventory modules for builder companies",
        "Implemented CI/CD pipelines via GitHub for multiple projects",
        "Handled client requirement gathering, analysis, and training",
        "Developed hotel management system with booking website and back-office operations",
      ],
      tags: [
        "Frappe",
        "ERPNext",
        "Python",
        "JavaScript",
        "CI/CD",
        "VPS",
        "Azure",
        "Git & Github",
        "Agile",
      ],
    },
  ],
  projects: {
    title: "Key",
    items: [
      {
        name: "Eminent Properties Limited",
        description:
          "Builder Company, accounting, project accounting, sales, purchase, stock management, and website application with all kinds of report and dashboard",
        tags: [
          "Frappe",
          "ERPNext",
          "Accounting",
          "Project Management",
          "Sales",
          "Purchase",
          "Inventory",
          "Reports",
          "Website",
          "VPS",
        ],
      },
      {
        name: "Melody Housing Agency",
        description:
          "Real estate website for property portfolio website with lead generation and custom features",
        tags: [
          "Frappe",
          "ERPNext",
          "Tailwind",
          "Jinja Template Engine",
          "Builder Patterns",
          "CI/CD",
          "Github",
          "VPS",
          "Deployment",
        ],
      },
      {
        name: "Binimoy Properties Limited",
        description:
          "Covers accounting, project finances, sales, purchases, and stock with dashboards and reports for real-time insights.",
        tags: [
          "Frappe",
          "ERPNext",
          "Accounting",
          "Project Management",
          "Inventory",
          "Reports",
          "Custom",
          "Invoice",
          "Invoice Template",
          "Requirement Gathering",
          "Training",
        ],
      },
      {
        name: "ATS - Applicant Traking System",
        description:
          "Built an Applicant Tracking System (ATS) using Frappe, ERPNext, and HRM for streamlined recruitment management.",
        tags: [
          "Frappe",
          "ERPNext",
          "HRM",
          "Payroll",
          "Role Permission Management",
          "Deployment",
          "VPS",
        ],
      },
      {
        name: "HMS - Hotel Management System",
        description:
          "Built an Applicant Tracking System (ATS) using Frappe, ERPNext, and HRM for streamlined recruitment management.",
        tags: [
          "Frappe",
          "ERPNext",
          "Booking System",
          "CMS",
          "Payment System",
          "sslcommerz",
          "Retaurent POS",
          "KYC",
          "Check IN/OUT",
          "VPS",
        ],
      },
    ],
  },
};

// src/data/skillsData.jsx
export const skillsData = {
  title: "Technical",
  subtitle: "Technologies and tools I work with regularly",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  skills: [
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
      proficiency: "Advanced",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      category: "Language",
      proficiency: "Advanced",
    },
    {
      name: "Python",
      icon: "🐍",
      category: "Language",
      proficiency: "Advanced",
    },
    {
      name: "Frappe/ERPNext",
      icon: "📊",
      category: "Framework",
      proficiency: "Expert",
    },
    {
      name: "Django",
      icon: "🦄",
      category: "Framework",
      proficiency: "Advanced",
    },
    {
      name: "Node.js",
      icon: "⬢",
      category: "Backend",
      proficiency: "Intermediate",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      category: "Database",
      proficiency: "Advanced",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      category: "Database",
      proficiency: "Intermediate",
    },
    {
      name: "Redis",
      icon: "🔴",
      category: "Database",
      proficiency: "Intermediate",
    },
    {
      name: "Git/GitHub",
      icon: "🐙",
      category: "Tools",
      proficiency: "Advanced",
    },
    {
      name: "CI/CD",
      icon: "🔄",
      category: "DevOps",
      proficiency: "Intermediate",
    },
    {
      name: "Azure",
      icon: "☁️",
      category: "Cloud",
      proficiency: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      category: "Frontend",
      proficiency: "Advanced",
    },
    {
      name: "Material UI",
      icon: "🧩",
      category: "Frontend",
      proficiency: "Intermediate",
    },
    {
      name: "Docker",
      icon: "🐳",
      category: "DevOps",
      proficiency: "Beginner",
    },
    {
      name: "REST APIs",
      icon: "🔌",
      category: "Backend",
      proficiency: "Advanced",
    },
  ],
  categories: [
    "Frontend",
    "Backend",
    "Database",
    "Language",
    "Framework",
    "DevOps",
    "Cloud",
    "Tools",
  ],
};

export const projectsData = {
  title: "My",
  subtitle: "Key projects developed during my tenure at Glascutt Limited",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  projects: [
    {
      id: "eminent-properties-erp",
      title: "Eminent Properties ERP",
      description: "ERP system aligned with legacy software",
      tags: ["ERPNext", "Frappe", "Leagacy Integration"],
      image: p1,
      details: [
        "Developed accounting modules",
        "Integrated with existing legacy systems",
        "Managed CI/CD with GitHub",
      ],
      liveUrl: "https://eminent.glascutr.com",
      githubUrl: null,
      role: "Full-stack Developer",
      duration: "3 months",
    },
    {
      id: "melody-housing-agency",
      title: "Melody Housing Agency",
      description:
        "Real estate portfolio website with lead generation features using Frappe ERPNext",
      tags: ["Frappe", "ERPNext", "JavaScript", "VPS"],
      image: p2,
      details: [
        "Developed custom features based on client requirements",
        "Implemented lead generation system",
        "Deployed on VPS with CI/CD via GitHub",
      ],
      liveUrl: "https://melodyhousingagency.com/",
      githubUrl: null,
      role: "Full-Stack Developer",
      duration: "3 months",
    },
    {
      id: "binimoy-properties-erp",
      title: "Binimoy Properties ERP",
      description:
        "ERP system for builder company with accounting and project modules",
      tags: ["Accounting", "Project Accounting", "Inventory", "Reports"],
      image: p3,
      details: [
        "Developed modules for accounting and project accounting",
        "Created custom financial reports",
        "Handled client training and ongoing support",
      ],
      liveUrl: null,
      githubUrl: null,
      role: "Developer",
      duration: "2 months",
    },
    {

      id: 'summit-hvac-solutions',
      title: 'Summit HVAC Solutions',
      description: 'Service management system for HVAC company with scheduling and invoicing features',
      tags: ['Service Management', 'CRM', 'Invoicing', 'Scheduling'],
      image: hvac, // Replace with actual image reference
      details: [
        'Built job scheduling and technician assignment module',
        'Integrated invoicing and customer management features',
        'Implemented responsive UI for easy field access'
      ],
      liveUrl: 'https://hvacbd.netlify.app/',
      githubUrl: 'https://github.com/tanvirmahmud66/product_portfolio_template_1',
      role: 'Product Owner',
      duration: '1 months'
    },
    {
      id: 'hotel-management-system',
      title: 'Hotel Management System',
      description: 'Complete hotel booking solution with backoffice operations',
      tags: ['Booking System', 'POS', 'sslcommerz'],
      image: p4,
      details: [
        "Developed check-in/out system",
        "Integrated payment gateway",
        "Created backoffice management interface",
      ],
      liveUrl: null,
      githubUrl: null,
      role: "Full-Stack Developer",
      duration: "2 months",
    },
    {
      id: "attendance-tracking-system",
      title: "Attendance Tracking System",
      description: "HRM system with employee attendance and payroll",
      tags: ["Attendance", "Payroll", "HR Management"],
      image: p5,
      details: [
        "Developed attendance tracking module",
        "Created employee management system",
        "Streamlined HR back-office operations",
      ],
      liveUrl: null,
      githubUrl: null,
      role: "Full-stack Developer",
      duration: "2 months",
    },
    {
      id: "amarshop-website-erp-django",
      title: "Amarshop - Ecommerce ERP",
      description:
        "Ecommerce with inventory, sale, and purchase build with Django",
      tags: ["Django", "Ecommerce", "ERP with Django"],
      image: p6,
      details: [
        "Custom Ecommerce ERP for Small Business",
        "Custom Admin Dashboard & Website",
      ],
      liveUrl: "https://tanvir62.pythonanywhere.com/admin-panel/",
      githubUrl: null,
      role: "Full-Stack Developer",
      duration: "6 months",
    },
    {
      id: "awa-software-house",
      title: "AWA Software House",
      description: "Portfolio Website for Software Company",
      tags: ["React", "Tailwind", "Deployment"],
      image: p7,
      details: [
        "Software company portfolio website",
        "Custom Admin Dashboard & Website",
      ],
      liveUrl: "https://awasoftwarehouse.netlify.app/",
      githubUrl: null,
      role: "Developer",
      duration: "1 months",
    },
  ],
};

export const projectDetailsData = {
  projects: [
    {
      id: "eminent-properties-erp",
      title: "Eminent Properties Limited",
      description: "ERP system aligned with legacy software",
      tags: ["ERPNext", "Frappe", "Leagacy Integration"],
      image: p1,
      details: [
        "Developed modules for accounting and project accounting",
        "Created custom financial reports",
        "Developed inventory management for construction materials",
        "Portfolio website",
      ],
      challenges: [
        "Real-time synchronization across multiple devices",
        "PCI compliance for payment processing",
        "Handling peak season traffic",
      ],
      technologies: ["Frappe Framework", "ERPNext", "Python", "Javascript"],
      impact: [
        {
          title: "Product",
          description: "Realbook accounting solution",
        },
      ],
      liveUrl: "https://eminent.glascutr.com",
      githubUrl: null,
      role: "Full-stack Developer",
      duration: "3 months",
      screenshots: [p1],
    },
    {
      id: "melody-housing-agency",
      title: "Melody Housing Agency",
      description:
        "Real estate portfolio website with lead generation features using Frappe ERPNext",
      tags: ["Frappe", "ERPNext", "JavaScript", "VPS"],
      image: p2,
      details: [
        "Developed custom features based on client requirements",
        "Implemented lead generation system",
        "Deployed on VPS with CI/CD via GitHub",
        "Integrated with WhatsApp and email notification systems",
        "Created custom property listing pages with advanced filters",
      ],
      challenges: [
        "Migrating from legacy system with minimal downtime",
        "Training non-technical staff on new system",
        "Handling high traffic during property launches",
      ],
      technologies: [
        "Frappe Framework",
        "ERPNext",
        "JavaScript",
        "Jinja Template Engine",
        "Tailwind",
        "MariaDB",
        "Nginx",
        "GitHub Actions",
        "CI/CD",
      ],
      impact: [
        {
          title: "Efficiency Gains",
          description: "Reduced manual processes by 70% through automation",
        },
        {
          title: "Business Growth",
          description: "Enabled handling of 3x more clients with same staff",
        },
        {
          title: "Client Feedback",
          description:
            '"The system transformed our operations and gave us real-time visibility into our business."',
        },
      ],
      liveUrl: "https://melodyhousingagency.com/",
      githubUrl: null,
      role: "Full-stack Developer",
      duration: "3 months",
      screenshots: [p2],
    },
    {
      id: "binimoy-properties-erp",
      title: "Binimoy Properties ERP",
      description:
        "ERP system for builder company with accounting and project modules",
      tags: ["Accounting", "Project Accounting", "Inventory", "Reports"],
      image: p3,
      details: [
        "Developed modules for accounting and project accounting",
        "Created custom financial reports",
        "Handled client training and ongoing support",
        "Integrated with banking APIs for transaction reconciliation",
        "Developed inventory management for construction materials",
      ],
      challenges: [
        "Complex financial reporting requirements",
        "Integration with government tax systems",
        "Multi-currency support for international projects",
      ],
      technologies: ["Frappe Framework", "ERPNext", "Python", "JavaScript"],
      impact: [
        {
          title: "Process Improvement",
          description:
            "Reduced financial reporting time from 3 days to 4 hours",
        },
        {
          title: "Accuracy",
          description: "Eliminated manual errors in financial calculations",
        },
      ],
      liveUrl: null,
      githubUrl: null,
      role: "Developer",
      duration: "2 months",
      screenshots: [p3],
    },
    {
      id: "hotel-management-system",
      title: "Hotel Management System",
      description: "Complete hotel booking solution with backoffice operations",
      tags: ["Booking System", "POS", "KYC", "Payments"],
      image: p4,
      details: [
        "Developed check-in/out system",
        "Integrated payment gateway",
        "Created backoffice management interface",
        "Implemented room allocation algorithms",
        "Developed housekeeping management module",
        "Created reporting dashboard for management",
      ],
      challenges: [
        "Real-time synchronization across multiple devices",
        "PCI compliance for payment processing",
        "Handling peak season traffic",
      ],
      technologies: [
        "Frappe Framework",
        "ERPNext",
        "API",
        "Tailwind",
        "Javascript",
        ,
        "Jinja Template Engine",
        "CI/CD",
      ],
      impact: [
        {
          title: "Guest Experience",
          description: "Reduced check-in time from 5 minutes to under 1 minute",
        },
        {
          title: "Revenue",
          description:
            "Increased upsell opportunities through integrated POS system",
        },
      ],
      liveUrl: null,
      githubUrl: null,
      role: "Full-stack Developer",
      duration: "2 months",
      screenshots: [p4],
    },

    {
      id: "attendance-tracking-system",
      title: "ATS - HR Simplified",
      description: "Applicant Tracking System integrated with HR modules",
      tags: ["Frappe", "HRMS", "ATS", "Employee Lifecycle"],
      image: p5,
      details: [
        "Developed modules for attendance, employee management, and payroll",
        "Integrated job application and interview scheduling features",
        "Streamlined HR back-office operations for daily use",
        "Custom dashboards for hiring pipeline visibility",
      ],
      challenges: [
        "Ensuring seamless workflow between recruitment and employee onboarding",
        "Maintaining data privacy and role-based access control",
        "Optimizing large candidate data processing and filtering",
      ],
      technologies: [
        "Frappe Framework",
        "ERPNext HRMS",
        "Python",
        "JavaScript",
        "REST API",
      ],
      impact: [
        {
          title: "Efficiency",
          description:
            "Reduced HR operational workload by automating hiring and onboarding processes",
        },
      ],
      liveUrl: null,
      githubUrl: null,
      role: "Full Stack Developer",
      duration: "2 months",
      screenshots: [p5],
    },
    {
      id: "amarshop-website-erp-django",
      title: "AmarShop - Smart eCommerce",
      description:
        "Full-fledged eCommerce platform with inventory, order management, and secure checkout",
      tags: ["Python", "Django", "eCommerce", "Inventory", "Stock Manage"],
      image: p6, // Replace with your AmarShop image variable
      details: [
        "Developed modules for product catalog, inventory, and order management",
        "Integrated payment gateways for smooth transactions",
        "Built customer and admin dashboards for real-time insights",
        "Implemented cart, wishlist, and user authentication features",
      ],
      challenges: [
        "Designing scalable architecture for managing a large number of SKUs",
        "Ensuring secure payment and order processing flow",
        "Improving website performance and responsiveness across devices",
      ],
      technologies: [
        "Python",
        "JavaScript",
        "Django",
        "Rest Framework",
        "JWT",
        "Bootstrap",
      ],
      impact: [
        {
          title: "User Engagement",
          description:
            "Increased online customer retention through intuitive UI and seamless purchase experience",
        },
      ],
      liveUrl: "https://tanvir62.pythonanywhere.com/admin-panel/", // Add if deployed
      githubUrl: "https://github.com/tanvirmahmud66/amarshop_v1", // Add if open-sourced
      role: "Full Stack Developer",
      duration: "6 months",
      screenshots: [p6], // Replace with actual screenshot variable(s)
    },
    {
      id: "awa-software-house",
      title: "AWA - Automated Workflow Assistant",
      description:
        "An enterprise-grade workflow automation system for managing internal processes and approvals",
      tags: ["React", "Portfolio", "Tailwind"],
      image: p7, // Replace with your AWA image variable
      details: [
        "Developed dynamic workflow builder to automate internal request handling",
        "Implemented role-based access for departments and employees",
        "Created dashboards for pending tasks, approvals, and escalations",
        "Integrated notification and reminder system for deadlines and actions",
      ],
      challenges: [
        "Handling complex conditional workflows with approval hierarchies",
        "Maintaining data integrity and audit trails",
        "Providing real-time updates and role-specific views",
      ],
      technologies: ["React", "Tailwind", "JavaScript"],
      impact: [
        {
          title: "Process Automation",
          description:
            "Improved internal efficiency by reducing manual task handling by over 60%",
        },
      ],
      liveUrl: "https://awasoftwarehouse.netlify.app", // Add if deployed
      githubUrl: "https://github.com/tanvirmahmud66/Software_Firm_Website", // Add if open-sourced
      role: "Full Stack Developer",
      duration: "1 month",
      screenshots: [p7], // Replace with actual screenshot variable(s)
    },
  ],
};

// src/data/educationData.jsx
export const educationData = {
  title: "Academic",
  subtitle: "My formal education and academic achievements",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  educations: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Stamford University Bangladesh",
      duration: "2023",
      highlights: [
        "CGPA: 3.17/4.0",
        "Specialized in software development",
        "Completed comprehensive computer science curriculum",
      ],
      tags: [
        "Algorithms",
        "Data Structures",
        "Database",
        "Software Engineeing",
        "Project",
        "ACM",
      ],
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "New Govt. Degree College, Rajshahi",
      duration: "2016",
      highlights: ["GPA: 5.0/5.0", "Science Division", "Rajshahi Board"],
      tags: ["Mathematics", "Physics", "Chemistry"],
      icon: "📚",
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution:
        "Islami Academy High School, Technical & Agriculture College ",
      duration: "2014",
      highlights: ["GPA: 5.0/5.0", "Science Division", "Rajshahi Board"],
      tags: ["Science", "Mathematics", "Computer"],
      icon: "🏫",
    },
  ],
};

// src/data/productsData.jsx
export const productsData = {
  title: "Service",
  subtitle: "Solutions I've delivered and what's coming next",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  completed: {
    title: "ERP Solutions",
    icon: "FiCheckCircle",
    items: [
      {
        title: "Hotel Booking Platform",
        description:
          "Complete hotel and resort management system with booking, front desk, housekeeping, and billing modules.",
        features: [
          "Online Room Booking",
          "Front Desk Management",
          "Housekeeping",
          "Billing & Invoicing",
          "Customer Portal",
          "Inventory & Asset Management",
          "Accounting",
          "HR & Payroll",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
        status: "In Development",
      },
      {
        title: "E-Commerce Platform",
        description:
          "Scalable e-commerce backend integrated with ERP for inventory, sales, and customer management.",
        features: [
          "Product Catalog Management",
          "Customer Accounts",
          "Cart & Checkout",
          "Order & Return Management",
          "Inventory & Warehouse",
          "Sales Analytics",
          "Payment Gateway Integration",
          "SEO & Web Portal",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript", "Vue.js"],
        status: "Live",
      },
      {
        title: "Retail Software",
        description:
          "Point-of-sale and retail ERP solution for managing sales, stock, and finance.",
        features: [
          "POS System",
          "Inventory & Stock Control",
          "Sales & Purchase",
          "Barcode & Label Printing",
          "Loyalty Program",
          "Cash Flow Management",
          "Accounting & Taxation",
          "Mobile POS Support",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
        status: "Live",
      },
      {
        title: "Home Service Platform",
        description:
          "ERP system for businesses offering AC repair, plumbing, electrical and cleaning services.",
        features: [
          "Service Booking",
          "Technician Scheduling",
          "Job Cards & Tasks",
          "Quotation & Invoicing",
          "Customer Feedback",
          "Payment Integration",
          "Inventory Management",
          "CRM",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
        status: "In Development",
      },
      {
        title: "Real Estate Portal",
        description:
          "ERP for real estate developers and agents to manage properties, leads, and transactions.",
        features: [
          "Property Listings",
          "Booking & Reservation",
          "Sales Pipeline",
          "Commission Management",
          "Legal Document Tracking",
          "Installment Plans",
          "Accounting",
          "Customer Portal",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
        status: "In Development",
      },
      {
        title: "Logistics Management System",
        description:
          "Complete logistics ERP solution for courier, delivery and freight businesses.",
        features: [
          "Fleet & Vehicle Management",
          "Shipment Tracking",
          "Route Optimization",
          "Hub & Warehouse Handling",
          "Driver Payroll",
          "Customer Portal",
          "Invoicing",
          "Mobile App Support",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
        status: "Planned",
      },
      {
        title: "Digital Gold Platform",
        description:
          "Platform for buying, selling, and storing digital gold with secure vault integration.",
        features: [
          "Buy/Sell Gold in Real-Time",
          "Live Pricing API Integration",
          "Gold Wallet & Vault Tracking",
          "Customer KYC",
          "Transaction Ledger",
          "GST Compliance",
          "Reports & Audits",
          "Secure Authentication",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "REST API"],
        status: "In Development",
      },
      {
        title: "Remittance Software",
        description:
          "Cross-border money transfer solution with compliance, payout management, and reporting.",
        features: [
          "Customer KYC & AML",
          "Exchange Rate Management",
          "Payout Partner Integration",
          "Transaction Ledger",
          "Commission Setup",
          "Notifications & Alerts",
          "Compliance Reports",
          "Mobile App API",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript", "REST API"],
        status: "Planned",
      },
      {
        title: "Online Stock Trading Platform",
        description:
          "ERP backend for managing stock portfolios, trades, user KYC, and reporting.",
        features: [
          "User Portfolio Management",
          "KYC & Compliance",
          "Order Placement & Tracking",
          "Trade History",
          "Live Market Feed Integration",
          "Brokerage Calculation",
          "Transaction & Wallet",
          "Reports & Analytics",
        ],
        technologies: ["Frappe", "Python", "JavaScript", "REST API"],
        status: "Prototype",
      },
      {
        title: "Payment Gateway System (PSO/PSP)",
        description:
          "Payment gateway backend system for managing merchant onboarding, transactions, and settlements.",
        features: [
          "Merchant KYC & Approval",
          "Transaction Routing",
          "Settlement Management",
          "Dispute Handling",
          "Multi-Currency Support",
          "Compliance Reporting",
          "Dashboard & Logs",
          "API Integrations",
        ],
        technologies: ["Frappe", "Python", "JavaScript", "OAuth2"],
        status: "Planned",
      },
      {
        title: "Accounting & MIS Software",
        description:
          "Robust accounting and MIS system for SMEs and enterprises.",
        features: [
          "Double Entry Bookkeeping",
          "Chart of Accounts",
          "Trial Balance, P&L, Balance Sheet",
          "Accounts Payable/Receivable",
          "Cash Flow & MIS Reports",
          "Bank Reconciliation",
          "Cost Center & Budgeting",
          "Multi-Currency",
        ],
        technologies: ["Frappe", "ERPNext", "Python"],
        status: "Live",
      },
      {
        title: "HR and Payroll System",
        description:
          "HRM and Payroll management solution for employee lifecycle, attendance, and salary.",
        features: [
          "Employee Management",
          "Leave & Attendance",
          "Payroll Processing",
          "Appraisal & Promotion",
          "Recruitment Workflow",
          "Loan & Advance",
          "Statutory Compliance",
          "Department & Shift Planning",
        ],
        technologies: ["Frappe", "ERPNext", "Python"],
        status: "Live",
      },
      {
        title: "Online Pharmacy (B2B/B2C)",
        description:
          "Pharmacy ERP system for managing medicine inventory, prescriptions, orders, and delivery.",
        features: [
          "Medicine Catalog",
          "Doctor Prescription Upload",
          "Customer & Vendor Management",
          "Inventory & Batch Tracking",
          "Order Management",
          "GST/Billing",
          "Customer App/API",
          "Expiry & Stock Alert",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
        status: "In Development",
      },
      {
        title: "Digital Insurance Platform",
        description:
          "Custom ERP for managing insurance policy issuance, claim processing, and compliance.",
        features: [
          "Policy Creation & Renewal",
          "Customer Onboarding",
          "KYC Verification",
          "Premium Payment Tracking",
          "Claim Management",
          "Agent Commissions",
          "Compliance & IRDA Reports",
          "Customer Portal",
        ],
        technologies: ["Frappe", "Python", "JavaScript"],
        status: "Prototype",
      },
      {
        title: "Hospital Management Software",
        description:
          "ERP solution for hospitals covering OPD/IPD, pharmacy, lab, and billing.",
        features: [
          "Patient Registration & EMR",
          "Appointments",
          "Doctor Scheduling",
          "Billing & Payments",
          "Pharmacy & Lab Integration",
          "Inpatient & Ward Management",
          "Inventory & Stock",
          "Reporting & Compliance",
        ],
        technologies: ["Frappe", "ERPNext", "Python"],
        status: "Live",
      },
      {
        title: "Agritech Portal",
        description:
          "ERP system for agricultural input companies and agri-marketplaces.",
        features: [
          "Farmer Registration",
          "Crop Planning",
          "Input Sales (Fertilizer, Seeds)",
          "Field Visit Tracking",
          "Warehouse & Inventory",
          "Market Price Analytics",
          "Subsidy & Scheme Management",
          "Geo Mapping",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "REST API"],
        status: "In Development",
      },
      {
        title: "HVAC Management Software",
        description:
          "ERP for HVAC contractors managing installation, AMC, service tickets, and parts.",
        features: [
          "Service Request Booking",
          "AMC Management",
          "Technician Scheduling",
          "Job Card & Work Log",
          "Inventory & Spare Parts",
          "Quotation & Invoicing",
          "Customer Portal",
          "Warranty Tracking",
        ],
        technologies: ["Frappe", "ERPNext", "Python", "JavaScript"],
        status: "In Development",
      },
    ],
  },
  planned: {
    title: "Future Plans",
    icon: "FiClock",
    items: [
      {
        title: "AI Analytics Dashboard",
        description:
          "Smart BI dashboards with predictive insights and alerting.",
        features: [
          "ML-Driven Forecasting",
          "Live Data Visualization",
          "Smart Alerts",
          "API Integrations",
        ],
        technologies: ["Python", "TensorFlow", "React", "GraphQL"],
        status: "Planning",
      },
      {
        title: "Mobile Workforce App",
        description:
          "Manage on-site teams with tracking and offline-first capabilities.",
        features: [
          "Live GPS Tracking",
          "Task Assignment",
          "Offline Support",
          "Photo & Field Reports",
        ],
        technologies: ["React Native", "Firebase", "Redux", "AWS"],
        status: "Prototype",
      },
    ],
  },
};

// src/data/contactData.jsx
export const contactData = {
  title: "Let's Connect",
  subtitle:
    "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  contactInfo: {
    title: "Contact Information",
    items: [
      {
        icon: "FiMail",
        title: "Email",
        value: "tanvirmahmud.cse66@gmail.com",
        link: "mailto:tanvirmahmud.cse66@gmail.com",
      },
      {
        icon: "FiPhone",
        title: "Phone",
        value: "+880 1701 744 799",
        link: "tel:+8801701744799",
      },
      {
        icon: "FiMapPin",
        title: "Location",
        value: "Mailbag 1st Lane, DIT Road, Dhaka - 1217",
        link: "https://goo.gl/maps/xyz",
      },
    ],
  },
  socialLinks: [
    {
      icon: "FiLinkedin",
      url: "https://linkedin.com/in/tanvirmahmud61",
      name: "LinkedIn",
    },
    {
      icon: "FiGithub",
      url: "https://github.com/tanvirmahmud66",
      name: "GitHub",
    },
    {
      icon: "FiTwitter",
      url: "https://twitter.com/yourusername",
      name: "Twitter",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.793484770083!2d90.3840103154316!3d23.79046739290086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73f5f3a2a8d%3A0x8a1e3b3b3b3b3b3b!2sDIT%20Road%2C%20Dhaka%201217!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd",
  formFields: [
    {
      id: "name",
      label: "Your Name",
      type: "text",
      placeholder: "John Doe",
      required: true,
    },
    {
      id: "email",
      label: "Your Email",
      type: "email",
      placeholder: "john@example.com",
      required: true,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Project Inquiry",
      required: true,
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell me about your project...",
      required: true,
      rows: 4,
    },
  ],
};

// Data.jsx
const footerData = {
  personalInfo: {
    name: "Tanvir Mahmud",
    highlightName: "Mahmud",
    role: "Junior Software Engineer specializing in full-stack development with expertise in Python, JavaScript, and modern frameworks.",
    phone: "+8801701744799",
    email: "tanvirmahmud.cse66@gmail.com",
    address: "Mailbag 1st Lane, DIT Road, Dhaka - 1217",
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/tanvirmahmud66",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tanvirmahmud61",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:tanvirmahmud.cse66@gmail.com",
      icon: "email",
    },
  ],
  quickLinks: [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Skills", url: "#skills" },
    { name: "Education", url: "#education" },
  ],
  legalLinks: [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
};

export default footerData;
