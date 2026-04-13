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
    greeting: 'Hello World',
    tagline: 'I build products teams love',
    log1: '[LOG] Initializing full-stack environment...',
    log2: '[OK] Systems operational. Specializing in high-performance architectures, brutalist design systems, and developer experience.',
    cta_projects: './view-projects.sh',
    cta_contact: '[ ./contact.sh ]',
    spec_arch: 'Architecture',
    spec_perf: 'Performance',
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
    who_text: 'I am a systems-level architect and full-stack engineer operating at the intersection of performance and aesthetics. My workflow is driven by the philosophy of minimalist efficiency—stripping away the unnecessary to reveal the core logic of complex digital ecosystems.',
    approach_title: '/* my approach */',
    approach_1: '* 1. Orthogonality is non-negotiable. Components must be decoupled, predictable, and resilient.',
    approach_2: '* 2. Developer experience is user experience. Clean, documented internal structures lead to faster, safer deployment cycles.',
    approach_3: '* 3. Performance as a feature. If it\'s not sub-100ms, it\'s a bug.',
    stack_cmd: 'sysctrl --get-stack',
    cta_collaborate: '[ EXECUTE_COLLABORATION ]',
    cta_view_logs: '[ VIEW_SOURCE_LOGS ]',
  },
  projects: {
    running: 'RUNNING: get_deployed_assets.sh',
    title: '>_PROJECTS',
    subtitle: 'Collection of high-availability systems, kernel-level optimizations, and full-stack enterprise architectures. Filtered by production readiness.',
    p1_name: 'NEURAL_NODE_ORCHESTRATOR',
    p1_hash: 'SHA-256: 8f4e2c...91a',
    p1_stack_label: 'Stack',
    p1_stack_items: ['- Rust (Core Engine)', '- gRPC / Protobuf', '- Redis (Layer 1)', '- Kubernetes'],
    p1_arch_label: 'Architecture',
    p1_arch_text: 'Distributed event-mesh with 0ms cold-start latency requirements.',
    p1_link: 'GIT_REMOTE',
    p1_uptime: 'UPTIME: 99.998%',
    p2_name: 'FIN_SECURE_SHIELD',
    p2_status: 'STATUS: DEPLOYED_GLOBAL',
    p2_problem_label: 'The Problem',
    p2_problem_text: 'Legacy banking APIs suffering from 40% transaction failure rates during peak volatility.',
    p2_impact_label: 'Business Impact',
    p2_impact_value: '+214%',
    p2_impact_desc: 'Throughput Increase',
    p2_cta: 'VIEW_CASE_STUDY',
    p2_rev: 'REV_GEN: $2.4M/YR',
    p3_name: 'HYPER_VISOR_CUSTOM_LKM',
    p3_level: 'SYSTEM_CORE_LEVEL_9',
    p3_core_label: 'Core Logic',
    p3_core_text: 'Low-level Linux Kernel Module (LKM) for real-time packet inspection at the ring-0 level.',
    p3_perf_label: 'Performance',
    p3_env_label: 'Environment',
    p3_env_text: 'Kernel v5.15+\nx86_64 Architecture\nHard-ened Security Modules',
    p3_cta_paper: 'READ_WHITE_PAPER',
    p3_cta_source: '[ DOWNLOAD_SOURCE ]',
  },
  experience: {
    title: '>_ git log --oneline --graph --experience',
    subtitle: 'Showing active development history for $USER. Current branch: career/master',
    e1_role: 'Lead Systems Architect @ Neural-Grid Corp',
    e1_period: 'JAN_2022 - PRESENT',
    e1_items: [
      'Orchestrated the migration of legacy monolith to microservices architecture, reducing deployment cycles by 65%.',
      'Implemented automated CI/CD pipelines using GitHub Actions and Kubernetes, achieving 99.99% uptime across 4 global regions.',
      'Mentored a team of 12 developers, establishing rigorous PR review standards and TDD workflows.',
    ],
    e2_role: 'Senior Backend Developer @ BitStream.io',
    e2_period: 'MAR_2019 - DEC_2021',
    e2_items: [
      'Optimized SQL query performance for high-traffic endpoints, resulting in a 400ms reduction in average response latency.',
      'Architected a real-time analytics dashboard processing over 1.2M events per second via Apache Kafka.',
    ],
    e3_role: 'Software Engineer @ Proto-Systems',
    e3_period: 'JUN_2017 - FEB_2019',
    e3_items: [
      'Developed cross-platform internal tooling using Python, increasing internal operational efficiency by 30%.',
      'Integrated third-party APIs for secure payment processing and identity verification protocols.',
    ],
    init_label: 'Initial commit: Graduation [B.Sc Computer Science]',
    stack_profile: 'Stack_Profile',
    current_objective_label: 'Current_Objective',
    current_objective_text: '"Seeking to leverage 7+ years of distributed systems experience to architect the next generation of privacy-preserving computing environments."',
    current_status: 'status: active_search',
  },
  skills: {
    title: '>_SYSTEM_CAPABILITIES',
    subtitle: '[SECTION: SKILLS_AND_STACK] // [STATUS: DEPLOYED]',
    dev_title: 'Dev Skills',
    po_title: 'Product Owner Skills',
    dev_additional: 'DOCKER, KUBERNETES, AWS_S3, TRPC, PRISMA, TAILWIND_CSS, VITEST',
    po_additional: 'USER_STORIES, ROADMAPPING, KPI_TRACKING, A/B_TESTING, MIRO, FIGMA',
    log_stream: 'LOG_STREAM_01',
    optimizing: 'Optimizing core throughput...',
    hybrid_title: 'Hybrid Profile',
    hybrid_text: 'Bridging technical architecture with strategic product vision since 2018.',
    uptime_label: 'SYSTEM_UPTIME',
    terminal_cmd: '$ analyze --profile hybrid',
    terminal_log1: '>> Loading kernel modules...',
    terminal_log2: '>> DevStack verified: 12 modules active.',
    terminal_log3: '>> ProductStack verified: 8 modules active.',
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
