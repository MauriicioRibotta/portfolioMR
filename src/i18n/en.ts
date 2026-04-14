export interface Translations {
  nav: {
    root: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
  };
  footer: {
    copyright: string;
    status: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    log1: string;
    log2: string;
    cta_projects: string;
    cta_contact: string;
    spec_arch: string;
    spec_perf: string;
    spec_lang: string;
    spec_status: string;
  };
  about: {
    title: string;
    avatar_label: string;
    scanning: string;
    locked: string;
    size: string;
    format: string;
    who_title: string;
    who_text: string;
    approach_title: string;
    approach_1: string;
    approach_2: string;
    approach_3: string;
    stack_cmd: string;
    cta_collaborate: string;
    cta_view_logs: string;
  };
  projects: {
    running: string;
    title: string;
    subtitle: string;
    p1_name: string;
    p1_hash: string;
    p1_stack_label: string;
    p1_stack_items: string[];
    p1_arch_label: string;
    p1_arch_text: string;
    p1_link: string;
    p1_uptime: string;
    p2_name: string;
    p2_status: string;
    p2_problem_label: string;
    p2_problem_text: string;
    p2_impact_label: string;
    p2_impact_value: string;
    p2_impact_desc: string;
    p2_cta: string;
    p2_rev: string;
    p3_name: string;
    p3_level: string;
    p3_core_label: string;
    p3_core_text: string;
    p3_perf_label: string;
    p3_env_label: string;
    p3_env_text: string;
    p3_cta_paper: string;
    p3_cta_source: string;
  };
  experience: {
    title: string;
    subtitle: string;
    e1_role: string;
    e1_period: string;
    e1_items: string[];
    e2_role: string;
    e2_period: string;
    e2_items: string[];
    e3_role: string;
    e3_period: string;
    e3_items: string[];
    e4_role: string;
    e4_period: string;
    e4_items: string[];
    init_label: string;
    stack_profile: string;
    current_objective_label: string;
    current_objective_text: string;
    current_status: string;
  };
  skills: {
    title: string;
    subtitle: string;
    dev_title: string;
    po_title: string;
    dev_additional: string;
    po_additional: string;
    log_stream: string;
    optimizing: string;
    hybrid_title: string;
    hybrid_text: string;
    uptime_label: string;
    terminal_cmd: string;
    terminal_log1: string;
    terminal_log2: string;
    terminal_log3: string;
    terminal_warning: string;
    terminal_done: string;
  };
  contact: {
    title: string;
    subtitle_1: string;
    subtitle_2: string;
    session_info: string;
    label_name: string;
    label_email: string;
    label_message: string;
    placeholder_name: string;
    placeholder_email: string;
    placeholder_message: string;
    btn_send: string;
    btn_clear: string;
    downloads_title: string;
    cv_version: string;
    cv_cmd: string;
    external_title: string;
    status_label: string;
    latency_label: string;
    uptime_label: string;
    log1: string;
    log2: string;
    log3: string;
    log4: string;
  };
}

export const en: Translations = {
  nav: {
    root: './ROOT',
    about: './ABOUT',
    projects: './PROJECTS',
    experience: './EXPERIENCE',
    skills: './SKILLS',
    contact: './CONTACT',
  },
  footer: {
    copyright: `(C) ${new Date().getFullYear()} TERMINAL_OS [BUILD_429]`,
    status: 'SERVER_STATUS: OPTIMAL',
  },
  hero: {
    greeting: 'Hello, I am Mauricio',
    tagline: 'I build logic that powers great products',
    log1: '[LOG] Initializing full-stack & product environment...',
    log2: '[OK] Systems operational. Specializing in Backend (C# .NET), Clean Architecture, and Product Ownership.',
    cta_projects: './view-projects.sh',
    cta_contact: '[ ./contact.sh ]',
    spec_arch: 'Architecture',
    spec_perf: 'Management',
    spec_lang: 'Language',
    spec_status: 'Status',
  },
  about: {
    title: '>_ABOUT_ME',
    avatar_label: 'AVATAR.IMG',
    scanning: '[SCANNING_ID...]',
    locked: '[LOCKED: ADMIN]',
    size: 'SIZE: 2.4MB',
    format: 'FORMAT: RAW_BUFFER',
    who_title: '// who I am',
    who_text: 'Superior Technician in Software Development with a solid technical foundation, focused on Backend development and specialized in the Product Owner role. I act as a critical bridge between business objectives and technical execution, transforming needs into clear and actionable requirements.',
    approach_title: '/* my approach */',
    approach_1: '* 1. Clean Architecture. I implement robust business logic (C# .NET) ensuring scalability and performance.',
    approach_2: '* 2. Product Vision. Developer and user experience are key; I prioritize clear requirements and agile methodologies (Scrum).',
    approach_3: '* 3. Continuous Improvement. Constant analysis of productive processes and workflow optimization (5S, Workflow Automation).',
    stack_cmd: 'sysctrl --get-stack',
    cta_collaborate: '[ EXECUTE_COLLABORATION ]',
    cta_view_logs: '[ VIEW_SOURCE_LOGS ]',
  },
  projects: {
    running: 'RUNNING: get_deployed_assets.sh',
    title: '>_PROJECTS',
    subtitle: 'Collection of backend services, product management initiatives, and workflow automations.',
    p1_name: 'M(APP)A_CARE_NETWORK',
    p1_hash: 'SHA-256: 8f4e2c...91a',
    p1_stack_label: 'Stack',
    p1_stack_items: ['- C# (.NET)', '- Angular', '- SCRUM', '- Product Discovery'],
    p1_arch_label: 'Role / Objective',
    p1_arch_text: 'Community health platform MVP. Led discovery, backlog, and functional documentation.',
    p1_link: 'GIT_REMOTE',
    p1_uptime: 'ROLE: PO & QA LEAD',
    p2_name: 'ENCODE_LABS_APIS',
    p2_status: 'STATUS: ACTIVE_DEVELOPMENT',
    p2_problem_label: 'The Challenge',
    p2_problem_text: 'Development and continuous maintenance of complex backend integrations in a fast-paced enterprise environment.',
    p2_impact_label: 'Databases',
    p2_impact_value: 'SQL',
    p2_impact_desc: 'MySQL / PostgreSQL / SQL Server',
    p2_cta: 'VIEW_DETAILS',
    p2_rev: 'STATUS: ACTIVE',
    p3_name: 'SANTEX_WORKFLOW_AUTO',
    p3_level: 'PROCESS_AUTOMATION',
    p3_core_label: 'Core Logic',
    p3_core_text: 'Workflow and operative processes automation based on XAcademy 2026 certification.',
    p3_perf_label: 'Sector',
    p3_env_label: 'Environment',
    p3_env_text: 'Workflow Automation\nSantex\nTechnology With Purpose Foundation',
    p3_cta_paper: 'VIEW_CERTIFICATE',
    p3_cta_source: '[ INTERNAL_LOGS ]',
  },
  experience: {
    title: '>_ git log --oneline --graph --experience',
    subtitle: 'Showing active development history for $USER. Current branch: career/master',
    e1_role: 'Backend Developer Intern @ ENCODE Labs',
    e1_period: 'APR_2023 - DEC_2025',
    e1_items: [
      'Developed and maintained RESTful APIs using C# (.NET).',
      'Implemented business logic and Clean Architecture, ensuring scalability and performance.',
      'Designed schemas and optimized queries in relational databases (MySQL, SQL Server, PostgreSQL).',
      'Collaborated in agile teams applying SCRUM, using Git and GitHub for version control.',
    ],
    e2_role: 'Product Owner @ M(app)A',
    e2_period: 'JUN_2025 - DEC_2025',
    e2_items: [
      'Led Product Discovery and stakeholder needs assessment to define community health platform MVP.',
      'Defined and prioritized user stories and functional requirements aligned with end-user needs.',
      'Created detailed user manuals and functional documentation for professional product handover.',
      'Supervised compliance with technical and functional standards as Quality Lead.',
    ],
    e3_role: 'Technical Intern (Process) @ CARPAL SA',
    e3_period: '2022',
    e3_items: [
      'Optimized internal processes through 5S methodology and tool inventory organization.',
      'Produced technical documentation of equipment tree for preventive maintenance planning.',
    ],
    e4_role: 'Sales Representative @ Festival Nacional Doma y Folklore',
    e4_period: '2023 - 2026',
    e4_items: [
      'Managed massive customer service, ensuring speed, priority handling, and cordiality.',
      'Direct business-client nexus: interpret user requirements into immediate solutions.',
    ],
    init_label: 'Initial commit: Process Industry Technician [IPET N° 412]',
    stack_profile: 'Hybrid_Profile',
    current_objective_label: 'Current_Objective',
    current_objective_text: '"Seeking to leverage my hybrid foundation in software development and process management to architect robust backend systems and guide strategic product vision."',
    current_status: 'status: active',
  },
  skills: {
    title: '>_SYSTEM_CAPABILITIES',
    subtitle: '[SECTION: SKILLS_AND_STACK] // [STATUS: DEPLOYED]',
    dev_title: 'Dev Skills',
    po_title: 'Product Owner Skills',
    dev_additional: 'C# (.NET, ASP.NET), MySQL, SQL SERVER, POSTGRESQL, HTML/CSS/JS (ANGULAR), GIT, POSTMAN, DOCKER',
    po_additional: 'JIRA, CONFLUENCE, TRELLO, NOTION, MIRO, FIGMA, SCRUM, WORKFLOW AUTOMATION',
    log_stream: 'LOG_STREAM_01',
    optimizing: 'Optimizing core processes...',
    hybrid_title: 'Hybrid Profile',
    hybrid_text: 'Bridging backend logic development with process methodologies and customer-focused product vision.',
    uptime_label: 'SYSTEM_UPTIME',
    terminal_cmd: '$ analyze --profile hybrid',
    terminal_log1: '>> Loading core modules...',
    terminal_log2: '>> DevStack verified: C#, .NET, Relational DBs.',
    terminal_log3: '>> ProductStack verified: Agile, Discovery, 5S.',
    terminal_warning: '>> Warning: Coffee levels critical.',
    terminal_done: 'Analysis complete. System ready for full-stack engagement.',
  },
  contact: {
    title: '>_ ESTABLISH_CONNECTION',
    subtitle_1: '// INITIALIZING SECURE COMMUNICATION PROTOCOL...',
    subtitle_2: '// READY FOR INPUT. PLEASE DEFINE PARAMETERS BELOW.',
    session_info: '[SESSION_ID: 0xFD429A] [ENCRYPTION: AES-256]',
    label_name: '> enter your name:',
    label_email: '> enter email_address:',
    label_message: '> input_message_body:',
    placeholder_name: '________',
    placeholder_email: 'user@remote_host',
    placeholder_message: 'Type your data transmission here...',
    btn_send: 'EXECUTE_SEND',
    btn_clear: '[ CLEAR_BUFFER ]',
    downloads_title: '// RESOURCE_DOWNLOADS',
    cv_version: 'PDF_VERSION_2024',
    cv_cmd: 'curl -O cv.pdf',
    external_title: '// EXTERNAL_NODES',
    status_label: 'STATUS:',
    latency_label: 'LATENCY:',
    uptime_label: 'UPTIME:',
    log1: '[14:02:11] SECURE_SOCKET_OPENED: PORT 443',
    log2: '[14:02:11] HANDSHAKE_COMPLETE: TLS 1.3',
    log3: '[14:02:12] SYSTEM_READY_FOR_USER_INPUT...',
    log4: '[14:02:12] WAITING_FOR_PACKETS',
  },
};
