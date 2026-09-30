export const profile = {
  name: 'Ravi Kant',
  role: 'Backend Engineer / AI/ML / Embedded Systems',
  intro: 'I build dependable systems at the intersection of software, intelligence, and the physical world.',
  location: 'Ahmedabad, India',
  availability: 'Open to engineering opportunities',
  email: 'ravi.kant.dev@gmail.com',
  github: 'https://github.com/ravikant',
  linkedin: 'https://www.linkedin.com/in/ravi-kant/',
}

export const skillGroups = [
  { label: 'Programming', items: ['Python', 'Java', 'C', 'SQL'] },
  { label: 'Backend', items: ['Flask', 'REST APIs', 'JWT', 'RBAC'] },
  { label: 'Databases', items: ['MySQL', 'SQLite', 'Redis'] },
  { label: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'ONNX'] },
  { label: 'Systems', items: ['Linux', 'Docker', 'Git'] },
  { label: 'Embedded', items: ['ESP32', 'Arduino', 'Microprocessors'] },
  { label: 'Other', items: ['System Design', 'DSA'] },
]

export const projects = [
  { number: '01', title: 'Quiz Master V2', kicker: 'Scalable exam platform', description: 'A role-aware assessment platform for authors, instructors, and learners with secure evaluation flows.', achievements: ['JWT authentication + RBAC', 'RESTful service architecture', 'Responsive admin workflows'], tags: ['Flask', 'SQLite', 'Redis', 'Vue'], github: 'https://github.com/ravikant', demo: '#contact', featured: true },
  { number: '02', title: 'LLM Compression', kicker: 'Tensor networks / MPO', description: 'Research into tensor-network decompositions that make language models smaller and more efficient to serve.', achievements: ['MPO decomposition experiments', 'Parameter-efficiency analysis', 'Reproducible notebooks'], tags: ['PyTorch', 'Tensor Networks', 'Research'], github: 'https://github.com/ravikant' },
  { number: '03', title: 'Health Monitoring System', kicker: 'Edge-first embedded system', description: 'An ESP32-based sensor system that captures health signals and exposes a compact monitoring interface.', achievements: ['Sensor data acquisition', 'Low-power edge processing', 'Live telemetry dashboard'], tags: ['ESP32', 'Arduino', 'IoT'], github: 'https://github.com/ravikant' },
  { number: '04', title: 'KrishiBalancer', kicker: 'e-Yantra robotics', description: 'Robotics competition project focused on reliable navigation, control logic, and real-world constraints.', achievements: ['Embedded control loops', 'Hardware-software integration', 'Team-based delivery'], tags: ['C', 'Arduino', 'Robotics'], github: 'https://github.com/ravikant' },
  { number: '05', title: 'Image Classification System', kicker: 'Applied computer vision', description: 'A complete inference pipeline that turns a trained visual model into a practical classification service.', achievements: ['Model training pipeline', 'ONNX export experiments', 'Inference API design'], tags: ['TensorFlow', 'ONNX', 'Python'], github: 'https://github.com/ravikant' },
]

export const timeline = [
  { year: '2025', type: 'Research', title: 'LLM compression with tensor networks', detail: 'Exploring MPO-based model compression and efficient inference.' },
  { year: '2024', type: 'Competition', title: 'e-Yantra Robotics / KrishiBalancer', detail: 'Built an embedded robotics solution with a focus on control and reliability.' },
  { year: '2024', type: 'Engineering', title: 'Quiz Master V2', detail: 'Designed a maintainable backend and role-aware platform architecture.' },
  { year: '2023', type: 'Systems', title: 'Embedded health monitoring', detail: 'Connected sensor data, edge logic, and a readable monitoring experience.' },
]

export const education = [
  { degree: 'B.Tech Electrical Engineering', school: 'IITRAM Ahmedabad', meta: 'Engineering systems · Embedded systems' },
  { degree: 'BS in Data Science and Applications', school: 'IIT Madras', meta: 'Machine learning · Data systems' },
]

export const certifications = [
  { name: 'Deep Learning Specialization', issuer: 'Neural networks and applied ML' },
  { name: 'Data Structures & Algorithms', issuer: 'Problem solving and computational thinking' },
  { name: 'Embedded Systems Foundations', issuer: 'Microcontrollers and connected devices' },
]