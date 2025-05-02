import me from '../assets/me.jpeg'
import image1 from '../assets/image1.svg'
// src/data/projectsData.jsx
import p1 from '../assets/eminent.png';
import p2 from '../assets/melody.png';
import p3 from '../assets/binimoy.png';
import p4 from '../assets/project1.jpg';
import p5 from '../assets/project3.jpg';
import p6 from '../assets/amarshop.png';
import p7 from '../assets/awh.png';
import resume from '../assets/Tanvir_Mahmud_resume.pdf'








// src/data/heroData.jsx
export const heroData = {
    name: "Tanvir Mahmud",
    title: "Software Engineer | Full-Stack Developer",
    description: "I build scalable web applications with modern technologies. Passionate about solving complex problems through clean, efficient code and intuitive user experiences.",
    highlightColor: "#FF6500",
    secondaryColor: "#1E3E62",
    backgroundImage: "linear-gradient(rgba(11, 25, 44, 0.9), rgba(11, 25, 44, 0.9)), url('/hero-pattern.svg')",
    links: {
        linkedin: {
            url: "https://www.linkedin.com/in/tanvirmahmud61/",
            text: "LinkedIn",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.89v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.59z" />
                </svg>
            )
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
            )
        }
    },
    image: {
        src: me,
        alt: "Tanvir Mahmud"
    }
};







// src/data/aboutData.jsx
export const aboutData = {
    title: "About",
    subtitle: "Junior Software Engineer with expertise in full-stack development",
    highlightColor: "#FF6500",
    secondaryColor: "#1E3E62",
    image: {
        src: image1,
        alt: "Tanvir Mahmud"
    },
    profile: {
        title: "Professional Profile",
        description: "Junior Software Engineer skilled in Python, JavaScript, and frameworks like Frappe ERPNext, Django, and React. Experienced in building scalable, user-focused solutions for accounting, project management, inventory, manufacturing, CRM, and HRM systems."
    },
    info: [
        { title: 'Name', value: 'Tanvir Mahmud' },
        { title: 'Email', value: 'tanvirmahmud.cse66@gmail.com' },
        { title: 'Phone', value: '+8801701744799' },
        { title: 'Address', value: 'Mailbag 1st Lane, DIT Road, Dhaka - 1217' },
        { title: 'Education', value: 'B.Sc. in CSE, Stamford University' },
        { title: 'Experience', value: 'Junior Software Engineer at Glascutt Limited' }
    ],
    buttons: [
        {
            type: 'download',
            text: 'Download CV',
            url: resume,
            icon: (
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            )
        },
        {
            type: 'contact',
            text: 'Contact Me',
            url: '#contact',
            icon: (
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ],
    skills: {
        title: "Core Competencies",
        items: [
            'Python', 'JavaScript', 'Frappe', 'ERPNext', 'Django', 'Rest Framework',
            'React', 'Redux', 'MySQL', 'PostgreSQL', 'Redis', 'CI/CD', 'Git/GitHub',
            'Azure', 'Agile', 'Tailwind CSS', 'Material UI', 'Data Structure', 'Algorithms'
        ]
    }
};






// src/data/experienceData.jsx
export const experienceData = {
    title: "Work",
    subtitle: "My professional contributions and project implementations",
    highlightColor: "#FF6500",
    secondaryColor: "#1E3E62",
    experiences: [
      {
        role: "Junior Software Engineer",
        company: "Glascutt Limited",
        duration: "2024 - Present",
        description: [
          "Developed real estate portfolio website using Frappe ERPNext with lead generation features",
          "Built accounting, project accounting, sales, purchase, and inventory modules for builder companies",
          "Implemented CI/CD pipelines via GitHub for multiple projects",
          "Handled client requirement gathering, analysis, and training",
          "Developed hotel management system with booking website and back-office operations"
        ],
        tags: ["Frappe", "ERPNext", "Python", "JavaScript", "CI/CD", "VPS", "Azure", "Git & Github", "Agile"]
      },
    ],
    projects: {
      title: "Key",
      items: [
        {
          name: "Eminent Properties Limited",
          description: "Builder Company, accounting, project accounting, sales, purchase, stock management, and website application with all kinds of report and dashboard",
          tags: ["Frappe", "ERPNext", "Accounting", "Project Management", "Sales","Purchase", "Inventory","Reports", "Website","VPS"]
        },
        {
          name: "Melody Housing Agency",
          description: "Real estate website for property portfolio website with lead generation and custom features",
          tags: ["Frappe", "ERPNext", "Tailwind","Jinja Template Engine","Builder Patterns","CI/CD", "Github", "VPS", "Deployment"]
        },
        {
          name: "Binimoy Properties Limited",
          description: "Covers accounting, project finances, sales, purchases, and stock with dashboards and reports for real-time insights.",
          tags: ["Frappe", "ERPNext", "Accounting","Project Management","Inventory", "Reports", "Custom","Invoice", "Invoice Template", "Requirement Gathering", "Training"]
        },
        {
          name: "ATS - Applicant Traking System",
          description: "Built an Applicant Tracking System (ATS) using Frappe, ERPNext, and HRM for streamlined recruitment management.",
          tags: ["Frappe", "ERPNext", "HRM", "Payroll", "Role Permission Management","Deployment", "VPS"]
        },
        {
          name: "HMS - Hotel Management System",
          description: "Built an Applicant Tracking System (ATS) using Frappe, ERPNext, and HRM for streamlined recruitment management.",
          tags: ["Frappe", "ERPNext", "Booking System", "CMS", "Payment System","sslcommerz", "Retaurent POS","KYC","Check IN/OUT","VPS"]
        },
      ]
    }
  };







// src/data/skillsData.jsx
export const skillsData = {
    title: "Technical Skills",
    subtitle: "Technologies and tools I work with regularly",
    highlightColor: "#FF6500",
    secondaryColor: "#1E3E62",
    skills: [
      { 
        name: 'React', 
        icon: '⚛️',
        category: 'Frontend',
        proficiency: 'Advanced'
      },
      { 
        name: 'JavaScript', 
        icon: '🟨',
        category: 'Language',
        proficiency: 'Advanced'
      },
      { 
        name: 'Python', 
        icon: '🐍',
        category: 'Language',
        proficiency: 'Advanced'
      },
      { 
        name: 'Frappe/ERPNext', 
        icon: '📊',
        category: 'Framework',
        proficiency: 'Expert'
      },
      { 
        name: 'Django', 
        icon: '🦄',
        category: 'Framework',
        proficiency: 'Intermediate'
      },
      { 
        name: 'Node.js', 
        icon: '⬢',
        category: 'Backend',
        proficiency: 'Intermediate'
      },
      { 
        name: 'MySQL', 
        icon: '🗄️',
        category: 'Database',
        proficiency: 'Advanced'
      },
      { 
        name: 'PostgreSQL', 
        icon: '🐘',
        category: 'Database',
        proficiency: 'Intermediate'
      },
      { 
        name: 'Redis', 
        icon: '🔴',
        category: 'Database',
        proficiency: 'Intermediate'
      },
      { 
        name: 'Git/GitHub', 
        icon: '🐙',
        category: 'Tools',
        proficiency: 'Advanced'
      },
      { 
        name: 'CI/CD', 
        icon: '🔄',
        category: 'DevOps',
        proficiency: 'Intermediate'
      },
      { 
        name: 'Azure', 
        icon: '☁️',
        category: 'Cloud',
        proficiency: 'Beginner'
      },
      { 
        name: 'Tailwind CSS', 
        icon: '🎨',
        category: 'Frontend',
        proficiency: 'Advanced'
      },
      { 
        name: 'Material UI', 
        icon: '🧩',
        category: 'Frontend',
        proficiency: 'Intermediate'
      },
      { 
        name: 'Docker', 
        icon: '🐳',
        category: 'DevOps',
        proficiency: 'Intermediate'
      },
      { 
        name: 'REST APIs', 
        icon: '🔌',
        category: 'Backend',
        proficiency: 'Advanced'
      }
    ],
    categories: [
      'Frontend',
      'Backend',
      'Database',
      'Language',
      'Framework',
      'DevOps',
      'Cloud',
      'Tools'
    ]
  };






export const projectsData = {
  title: "My Projects",
  subtitle: "Key projects developed during my tenure at Glascutt Limited",
  highlightColor: "#FF6500",
  secondaryColor: "#1E3E62",
  projects: [
    {
      id: 'eminent-properties-erp',
      title: 'Eminent Properties ERP',
      description: 'ERP system aligned with legacy software',
      tags: ['ERPNext', 'Frappe', 'Leagacy Integration'],
      image: p1,
      details: [
        'Developed accounting modules',
        'Integrated with existing legacy systems',
        'Managed CI/CD with GitHub'
      ],
      liveUrl: null,
      githubUrl: null,
      role: 'Full-stack Developer',
      duration: '4 months'
    },
    {
      id: 'melody-housing-agency',
      title: 'Melody Housing Agency',
      description: 'Real estate portfolio website with lead generation features using Frappe ERPNext',
      tags: ['Frappe', 'ERPNext', 'JavaScript', 'VPS'],
      image: p2,
      details: [
        'Developed custom features based on client requirements',
        'Implemented lead generation system',
        'Deployed on VPS with CI/CD via GitHub'
      ],
      liveUrl: 'https://melody.glascutr.com',
      githubUrl: null,
      role: 'Full-Stack Developer',
      duration: '3 months'
    },
    {
      id: 'binimoy-properties-erp',
      title: 'Binimoy Properties ERP',
      description: 'ERP system for builder company with accounting and project modules',
      tags: ['Accounting', 'Project Accounting', 'Inventory', 'Reports'],
      image: p3,
      details: [
        'Developed modules for accounting and project accounting',
        'Created custom financial reports',
        'Handled client training and ongoing support'
      ],
      liveUrl: null,
      githubUrl: null,
      role: 'Developer',
      duration: '3 months'
    },
    {
      id: 'hotel-management-system',
      title: 'Hotel Management System',
      description: 'Complete hotel booking solution with backoffice operations',
      tags: ['Booking System', 'POS', 'sslcommerz'],
      image: p4,
      details: [
        'Developed check-in/out system',
        'Integrated payment gateway',
        'Created backoffice management interface'
      ],
      liveUrl: null,
      githubUrl: null,
      role: 'Full-Stack Developer',
      duration: '2 months'
    },
    {
      id: 'attendance-tracking-system',
      title: 'Attendance Tracking System',
      description: 'HRM system with employee attendance and payroll',
      tags: ['Attendance', 'Payroll', 'HR Management'],
      image: p5,
      details: [
        'Developed attendance tracking module',
        'Created employee management system',
        'Streamlined HR back-office operations'
      ],
      liveUrl: null,
      githubUrl: null,
      role: 'Developer',
      duration: '2 months'
    },
    {
      id: 'amarshop-website-erp-django',
      title: 'Amarshop - Ecommerce ERP',
      description: 'Ecommerce with inventory, sale, and purchase build with Django',
      tags: ['Django', 'Ecommerce', 'ERP with Django'],
      image: p6,
      details: [
        'Custom Ecommerce ERP for Small Business',
        'Custom Admin Dashboard & Website',
      ],
      liveUrl: null,
      githubUrl: null,
      role: 'Full-Stack Developer',
      duration: '5 months'
    },
    {
      id: 'awa-software-house',
      title: 'AWA Software House',
      description: 'Portfolio Website for Software Company',
      tags: ['React', 'Tailwind', 'Deployment'],
      image: p7,
      details: [
        'Software company portfolio website',
        'Custom Admin Dashboard & Website',
      ],
      liveUrl: 'https://awasoftwarehouse.netlify.app/',
      githubUrl: null,
      role: 'Developer',
      duration: '1 months'
    },
    
  ]
};



export const projectDetailsData = {
  projects: [
    {
      id: 'melody-housing-agency',
      title: 'Melody Housing Agency',
      description: 'Real estate portfolio website with lead generation features using Frappe ERPNext',
      tags: ['Frappe', 'ERPNext', 'JavaScript', 'VPS'],
      image: p1,
      details: [
        'Developed custom features based on client requirements',
        'Implemented lead generation system',
        'Deployed on VPS with CI/CD via GitHub',
        'Integrated with WhatsApp and email notification systems',
        'Created custom property listing pages with advanced filters'
      ],
      challenges: [
        'Migrating from legacy system with minimal downtime',
        'Training non-technical staff on new system',
        'Handling high traffic during property launches'
      ],
      technologies: [
        'Frappe Framework',
        'ERPNext',
        'JavaScript',
        'MariaDB',
        'Nginx',
        'GitHub Actions'
      ],
      impact: [
        {
          title: 'Efficiency Gains',
          description: 'Reduced manual processes by 70% through automation'
        },
        {
          title: 'Business Growth',
          description: 'Enabled handling of 3x more clients with same staff'
        },
        {
          title: 'Client Feedback',
          description: '"The system transformed our operations and gave us real-time visibility into our business."'
        }
      ],
      liveUrl: 'https://melodyhousing.com',
      githubUrl: null,
      role: 'Lead Developer',
      duration: '6 months',
      screenshots: [p1, p2]
    },
    {
      id: 'binimoy-properties-erp',
      title: 'Binimoy Properties ERP',
      description: 'ERP system for builder company with accounting and project modules',
      tags: ['Accounting', 'Project Accounting', 'Inventory', 'Reports'],
      image: p2,
      details: [
        'Developed modules for accounting and project accounting',
        'Created custom financial reports',
        'Handled client training and ongoing support',
        'Integrated with banking APIs for transaction reconciliation',
        'Developed inventory management for construction materials'
      ],
      challenges: [
        'Complex financial reporting requirements',
        'Integration with government tax systems',
        'Multi-currency support for international projects'
      ],
      technologies: [
        'Frappe Framework',
        'ERPNext',
        'Python',
        'JavaScript',
        'Chart.js',
        'REST APIs'
      ],
      impact: [
        {
          title: 'Process Improvement',
          description: 'Reduced financial reporting time from 3 days to 4 hours'
        },
        {
          title: 'Accuracy',
          description: 'Eliminated manual errors in financial calculations'
        }
      ],
      liveUrl: null,
      githubUrl: null,
      role: 'Full-stack Developer',
      duration: '8 months'
    },
    {
      id: 'hotel-management-system',
      title: 'Hotel Management System',
      description: 'Complete hotel booking solution with backoffice operations',
      tags: ['Booking System', 'POS', 'KYC', 'Payments'],
      image: p3,
      details: [
        'Developed check-in/out system',
        'Integrated payment gateway',
        'Created backoffice management interface',
        'Implemented room allocation algorithms',
        'Developed housekeeping management module',
        'Created reporting dashboard for management'
      ],
      challenges: [
        'Real-time synchronization across multiple devices',
        'PCI compliance for payment processing',
        'Handling peak season traffic'
      ],
      technologies: [
        'Frappe Framework',
        'ERPNext',
        'Stripe API',
        'WebSockets',
        'Bootstrap',
        'Redis'
      ],
      impact: [
        {
          title: 'Guest Experience',
          description: 'Reduced check-in time from 5 minutes to under 1 minute'
        },
        {
          title: 'Revenue',
          description: 'Increased upsell opportunities through integrated POS system'
        }
      ],
      liveUrl: null,
      githubUrl: null,
      role: 'Lead Developer',
      duration: '5 months'
    }
  ]
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
          "Completed comprehensive computer science curriculum"
        ],
        tags: ["Algorithms", "Data Structures", "Database", "Software Engineeing", "Project", "ACM"],
        icon: "🎓"
      },
      {
        degree: "Higher Secondary Certificate (H.S.C)",
        institution: "New Govt. Degree College, Rajshahi",
        duration: "2016",
        highlights: [
          "GPA: 5.0/5.0",
          "Science Division",
          "Rajshahi Board"
        ],
        tags: ["Mathematics", "Physics", "Chemistry"],
        icon: "📚"
      },
      {
        degree: "Secondary School Certificate (S.S.C)",
        institution: "Islami Academy High School, Technical & Agriculture College ",
        duration: "2014",
        highlights: [
          "GPA: 5.0/5.0",
          "Science Division",
          "Rajshahi Board"
        ],
        tags: ["Science", "Mathematics", "Computer"],
        icon: "🏫"
      }
    ]
  };






  // src/data/productsData.jsx
export const productsData = {
    title: "My Products",
    subtitle: "Solutions I've built and innovations I'm planning",
    highlightColor: "#FF6500",
    secondaryColor: "#1E3E62",
    completed: {
      title: "Completed Works",
      icon: "FiCheckCircle",
      items: [
        {
          title: "Frappe ERPNext Solutions",
          description: "Custom ERP systems for real estate and manufacturing clients",
          features: [
            "Accounting & Inventory Modules",
            "Project Management",
            "Custom Reporting",
            "HR Management"
          ],
          technologies: ["Frappe", "Python", "JavaScript", "MySQL"],
          status: "Live"
        },
        {
          title: "Hotel Management System",
          description: "End-to-end solution for hotel operations",
          features: [
            "Booking Engine",
            "POS Integration",
            "KYC Verification",
            "Payment Processing"
          ],
          technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
          status: "Live"
        }
      ]
    },
    planned: {
      title: "Future Plans",
      icon: "FiClock",
      items: [
        {
          title: "AI-Powered Analytics Dashboard",
          description: "Business intelligence with predictive analytics",
          features: [
            "Machine Learning Models",
            "Real-time Data Visualization",
            "Custom Alert System",
            "API Integrations"
          ],
          technologies: ["Python", "TensorFlow", "React", "GraphQL"],
          status: "Planning"
        },
        {
          title: "Mobile Workforce App",
          description: "Field service management solution",
          features: [
            "GPS Tracking",
            "Task Assignment",
            "Offline Capability",
            "Photo Documentation"
          ],
          technologies: ["React Native", "Firebase", "Redux", "AWS"],
          status: "Prototype"
        }
      ]
    }
  };






  // src/data/contactData.jsx
export const contactData = {
    title: "Let's Connect",
    subtitle: "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
    highlightColor: "#FF6500",
    secondaryColor: "#1E3E62",
    contactInfo: {
      title: "Contact Information",
      items: [
        {
          icon: "FiMail",
          title: "Email",
          value: "tanvirmahmud.cse66@gmail.com",
          link: "mailto:tanvirmahmud.cse66@gmail.com"
        },
        {
          icon: "FiPhone",
          title: "Phone",
          value: "+880 1701 744 799",
          link: "tel:+8801701744799"
        },
        {
          icon: "FiMapPin",
          title: "Location",
          value: "Mailbag 1st Lane, DIT Road, Dhaka - 1217",
          link: "https://goo.gl/maps/xyz"
        }
      ]
    },
    socialLinks: [
      {
        icon: "FiLinkedin",
        url: "https://linkedin.com/in/tanvirmahmud61",
        name: "LinkedIn"
      },
      {
        icon: "FiGithub",
        url: "https://github.com/tanvirmahmud66",
        name: "GitHub"
      },
      {
        icon: "FiTwitter",
        url: "https://twitter.com/yourusername",
        name: "Twitter"
      }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.793484770083!2d90.3840103154316!3d23.79046739290086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73f5f3a2a8d%3A0x8a1e3b3b3b3b3b3b!2sDIT%20Road%2C%20Dhaka%201217!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd",
    formFields: [
      {
        id: "name",
        label: "Your Name",
        type: "text",
        placeholder: "John Doe",
        required: true
      },
      {
        id: "email",
        label: "Your Email",
        type: "email",
        placeholder: "john@example.com",
        required: true
      },
      {
        id: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Project Inquiry",
        required: true
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell me about your project...",
        required: true,
        rows: 4
      }
    ]
  };






// Data.jsx
const footerData = {
    personalInfo: {
      name: "Tanvir Mahmud",
      highlightName: "Mahmud",
      role: "Junior Software Engineer specializing in full-stack development with expertise in Python, JavaScript, and modern frameworks.",
      phone: "+8801701744799",
      email: "tanvirmahmud.cse66@gmail.com",
      address: "Mailbag 1st Lane, DIT Road, Dhaka - 1217"
    },
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/tanvirmahmud66",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tanvirmahmud61",
        icon: "linkedin"
      },
      {
        name: "Email",
        url: "mailto:tanvirmahmud.cse66@gmail.com",
        icon: "email"
      }
    ],
    quickLinks: [
      { name: "About", url: "#about" },
      { name: "Experience", url: "#experience" },
      { name: "Projects", url: "#projects" },
      { name: "Skills", url: "#skills" },
      { name: "Education", url: "#education" }
    ],
    legalLinks: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Sitemap", url: "#" }
    ]
  };
  
  export default footerData;

  