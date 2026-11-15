export const personalInfo = {
  name: "Doppalapudi Yeshwanth",
  shortName: "Yeshwanth",
  role: "AI & ML Systems Engineer",
  subtitle: "AI/ML & GraphRAG Systems Engineer based in Pune, India",
  university: "Ajeenkya DY Patil University, Pune",
  degree: "B.Tech CSE '28 • CGPA 9.76/10 (University Top 1%)",
  email: "yeshwanthd2006@gmail.com",
  github: "https://github.com/DoppalapudiYeshwanth",
  linkedin: "https://www.linkedin.com/in/doppalapudi-yeshwanth-15916831a",
  quote: "Building resilient GraphRAG pipelines, neural networks from scratch, and production AI workflows.",
  aboutBio:
    "I'm Doppalapudi Yeshwanth — a Computer Science & AI Engineer (B.Tech CSE '28, 9.76/10 CGPA) specializing in evidence-grounded GraphRAG architectures, deep learning internals from scratch, and healthcare & enterprise data pipelines.",
};

export const heroPills = [
  { label: "Hybrid GraphRAG", variant: "dark" },
  { label: "Neo4j & Cypher", variant: "amber" },
  { label: "PyTorch & NumPy", variant: "dark" },
  { label: "LLMOps", variant: "amber" },
  { label: "FastAPI & Node.js", variant: "dark" },
];

export const marqueeItems = [
  "Hybrid GraphRAG",
  "Neural Networks From Scratch",
  "LLMOps & Fallback Pipelines",
  "Healthcare AI Integration",
  "Full-Stack Engineering",
];

export const projects = [
  {
    number: "01.",
    title: "ResiliGraph-RAG — Hybrid GraphRAG",
    period: "Oct 2026 – Present",
    tags: ["Python", "Neo4j", "Pydantic", "Instructor", "Groq LLMs", "Streamlit"],
    description:
      "Achieved 96.7% top-5 retrieval accuracy (MRR 0.967) and lifted multi-hop recall from 84% to 92% via Neo4j vector search + Cypher traversal. Enforced 100% schema-valid extraction (657 entities, 473 relationships from 800 chunks), sustained 800K tokens/day at $0 cost via a 4-model fallback chain, and hit 94% coverage across 204 pytest tests.",
    liveUrl: "https://resiligraph.streamlit.app",
    githubUrl: "https://github.com/DoppalapudiYeshwanth",
  },
  {
    number: "02.",
    title: "Multi-Layer Perceptron (MLP) Neural Network from Scratch",
    period: "2026",
    tags: ["Python", "NumPy", "PyTorch Benchmark", "Streamlit", "Pillow"],
    description:
      "Modular, pure-NumPy deep learning framework and real-time handwritten digit classifier (784 → 128 → 64 → 10) built without external ML libraries. Reached 97.68% validation accuracy (0.0198 loss) on 70,000 MNIST samples in 10 epochs, verified against numerical gradient checking (<1e-6 relative error) and PyTorch floating-point parity.",
    liveUrl: "https://handwrittentextdetector.streamlit.app",
    githubUrl: "https://github.com/DoppalapudiYeshwanth",
  },
  {
    number: "03.",
    title: "Mini-Autograd Engine — Reverse-Mode Autodiff Library",
    period: "2026",
    tags: ["Python", "OOP (__slots__)", "Graphviz", "Pytest", "GitHub Actions CI"],
    description:
      "Built a PyTorch-style neural network API (Module, Neuron, Layer, MLP) from scratch with dynamic computation graph visualization and momentum-based SGD (β = 0.9). Achieved 97.5% classification accuracy and cut hinge loss from 0.4535 to 0.1047 over 60 epochs on non-linear two-moons data.",
    liveUrl: null,
    githubUrl: "https://github.com/DoppalapudiYeshwanth/mini-autograd-engine",
  },
  {
    number: "04.",
    title: "TravelNest — Full-Stack Travel Listing Platform",
    period: "Dec 2025 – Jan 2026",
    tags: ["Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary"],
    description:
      "Built and deployed an Airbnb-style travel listing platform with 8 categories and full CRUD across 15 route handlers and 3 data models. Consolidated 8 per-category routes into 1 query-parameter route with schema-level enum validation and MongoDB-backed sessions.",
    liveUrl: null,
    githubUrl: "https://github.com/DoppalapudiYeshwanth",
  },
];

export const experiences = [
  {
    role: "Data Analytics Intern",
    company: "NASSCOM (IT-ITES SSC)",
    location: "Bangalore",
    period: "Aug 2026 – Present",
    highlights: [
      "Cleaned programme data in Excel and built pipelines feeding Power BI dashboards, cutting manual reporting effort by 30% for Future Skills Prime.",
      "Managed and validated 10,000+ records across multiple data sources for backend integration.",
    ],
  },
  {
    role: "AIML Intern",
    company: "SETV Healthcare Technologies Pvt. Ltd.",
    location: "Remote",
    period: "Apr 2026 – May 2026",
    highlights: [
      "Integrated PACS and LIS/LIMS workflows across 3 diagnostic systems, reducing manual data handoffs by 25%.",
      "Contributed data preparation and interoperability pipelines for Medulina, the company's enterprise AI model.",
    ],
  },
  {
    role: "AIML Intern",
    company: "TechSaksham (Microsoft & SAP CSR) — Edunet & AICTE",
    location: "Remote",
    period: "Feb 2025 – Mar 2025",
    highlights: [
      "Built and deployed an ML diagnosis system predicting 40 diseases from patient symptoms with 90% accuracy across 4 benchmarked algorithms.",
      "Delivered real-time predictions via an interactive Streamlit interface.",
    ],
  },
];

export const certifications = [
  "Microsoft Certified: Azure Developer Associate (Microsoft & NASSCOM)",
  "Foundations of Prompt Engineering (AWS)",
  "Google Cloud Computing Foundations with Kubernetes (In Progress)",
  "Java Advanced (Infosys Springboard)",
];