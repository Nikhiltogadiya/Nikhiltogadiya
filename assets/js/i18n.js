/* ============================================================
   i18n — English & German Translations
   ============================================================ */

const translations = {
  en: {
    /* Navbar */
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.skills':     'Skills',
    'nav.education':  'Education',
    'nav.contact':    'Contact',

    /* Hero */
    'hero.greeting':     "Hello, I'm",
    'hero.description':  'I build autonomous multi-agent systems, constrained LLM Fine-Tuning, and production-ready AI pipelines — from research labs to real-world robotics and manufacturing floors.',
    'hero.btn.work':     'View My Work',
    'hero.btn.about':    'About Me',
    'hero.stat.projects':  'AI/ML Projects',
    'hero.stat.partners':  'Industry Partners',
    'hero.stat.tech':      'AI Technologies',

    /* Typing phrases */
    'typing.0': 'AI/ML Engineer',
    'typing.1': 'Agentic AI Developer',
    'typing.2': 'Generative AI Specialist',
    'typing.3': 'LLM & RAG Architect',
    'typing.4': 'Robotics AI Engineer',

    /* About */
    'about.title':    'About',
    'about.title.me': 'Me',
    'about.subtitle': 'Turning cutting-edge AI research into real-world impact',
    'about.p1': "I'm an <strong>AI/ML Engineer</strong> currently pursuing my M.Sc. in Digital Technology at <strong>Ostfalia Hochschule</strong> in Germany, specializing in <strong>Agentic AI</strong> and <strong>Generative AI</strong> systems.",
    'about.p2': 'My work spans building <strong>autonomous multi-agent museum guides</strong> on Temi robots with RAG-based retrieval, engineering <strong>constrained LLM Fine-Tuning</strong> for automated test generation at <strong>Volkswagen AG</strong>, and creating end-to-end AI pipelines that convert natural language into manufacturable 3D CAD models.',
    'about.p3': "I thrive at the intersection of <strong>research and production</strong> — taking complex AI concepts from paper to deployment. Whether it's fine-tuning LLMs with LoRA, orchestrating multi-agent workflows, or deploying ML services in Docker containers, I love building systems that work in the real world.",
    'about.card1.title': 'Multi-Agent AI',
    'about.card1.desc':  'Autonomous systems with tool-use orchestration',
    'about.card2.title': 'Generative AI',
    'about.card2.desc':  'LLM fine-tuning, constrained decoding, RAG',
    'about.card3.title': 'Production ML',
    'about.card3.desc':  'Docker, FastAPI, end-to-end pipelines',
    'about.card4.title': 'Industry Partners',
    'about.card4.desc':  'Volkswagen, WOBCOM, Ostfalia',

    /* Experience */
    'exp.title':    'Professional',
    'exp.title.hl': 'Experience',
    'exp.subtitle': 'Building AI systems for industry and research',

    'exp1.role':    'Werkstudent (AI/Robotics)',
    'exp1.date':    '09/2024 – Present',
    'exp1.location':'📍 Wolfenbüttel, Germany',
    'exp1.p1': 'Architected multi-agent AI museum tour guide on 2 Temi robots with RAG-based retrieval (HuggingFace embeddings + vector DB), achieving 90%+ answer coverage with sub-1s response times via confidence-gated prompting for multilingual visitor interaction.',
    'exp1.p2': 'Developed <strong>pytemi</strong>, a custom Python library for Temi robot control (REST API abstraction, navigation, sensors) serving as core project infrastructure.',
    'exp1.p3': 'Mentored team on RAG optimization and multi-robot handover protocols, coordinating integration toward production deployment.',

    'exp2.role':    'Educational Project — Constrained LLM Test Generation',
    'exp2.date':    '03/2025 – 07/2025',
    'exp2.location':'📍 Wolfsburg, Germany',
    'exp2.p1': 'Proposed and implemented a two-stage constrained text generation framework combining formal grammar enforcement (.lark DSL) with DFA-based token masking (Syncode) to guarantee syntactic correctness of generated system test cases.',
    'exp2.p2': 'Applied parameter-efficient fine-tuning (LoRA) on LLaMA 3B and 8B models to improve semantic alignment between requirement descriptions and generated test steps, analyzing performance trade-offs across model sizes.',
    'exp2.p3': 'Evaluated generation quality using BLEU, SacreBLEU, and ROUGE-L against reference test cases, systematically benchmarking structural validity and semantic accuracy for autonomous driving validation tasks.',

    'exp3.role':    'Educational Project — Energy Time Series Forecasting',
    'exp3.date':    '03/2024 – 07/2024',
    'exp3.location':'📍 Wolfsburg, Germany',
    'exp3.p1': 'Developed and optimized deep learning models (RNN, LSTM, GRU) in TensorFlow for multivariate time-series forecasting of smart meter energy data; evaluated performance using MAE and RMSE and selected the best-performing architecture.',
    'exp3.p2': 'Designed and implemented an end-to-end ML pipeline, including data preprocessing, feature engineering, sequence modeling, model validation, and RESTful API deployment with FastAPI for real-time inference.',
    'exp3.p3': 'Containerized and deployed the ML application using Docker on a local server, enabling scalable prediction services and supporting data-driven energy management decisions.',

    /* Projects */
    'proj.title':    'Personal',
    'proj.title.hl': 'Projects',
    'proj.subtitle': 'Side projects exploring the frontiers of AI',

    'proj1.subtitle': 'Multi-Agent LLM System for 3D CAD Generation',
    'proj1.p1': 'Engineered an end-to-end AI pipeline converting natural language prompts into manufacturable 3D CAD models using a 4-agent architecture (requirements, planning, code generation, verification) with automated error-correction loops.',
    'proj1.p2': 'Implemented self-learning design memory using ChromaDB with RAG-based retrieval, enabling reuse of successful design patterns and iterative improvement.',
    'proj1.p3': 'Integrated sandboxed CadQuery execution, Vision-Language Model verification, and STL/STEP export via Flask web UI and CLI.',

    'proj2.subtitle': 'AI-Powered Attendance & Revenue Prediction for Ice Hockey',
    'proj2.p1': 'Engineered an end-to-end ML pipeline to forecast game-day attendance and revenue for a professional ice hockey team using 3 seasons of real sales data, achieving R² = 0.76 with ~90% prediction accuracy.',
    'proj2.p2': 'Designed a custom ETL pipeline and 19 domain-specific features (weather, holidays, opponent strength, team form) from multi-format sources.',
    'proj2.p3': 'Deployed the trained model via a FastAPI REST API with an interactive React dashboard for scenario-based revenue forecasting and data exploration.',

    'proj3.subtitle': 'Formal grammar-constrained LLM Fine-Tuning for automated system test generation in autonomous driving validation',
    'proj3.date':     '03/2025 – 07/2025',
    'proj3.p1': 'Proposed and implemented a two-stage constrained text generation framework combining formal grammar enforcement (.lark DSL) with DFA-based token masking (Syncode) to guarantee syntactic correctness of generated system test cases.',
    'proj3.p2': 'Applied parameter-efficient fine-tuning (LoRA) on LLaMA 3B and 8B models to improve semantic alignment between requirement descriptions and generated test steps, analyzing performance trade-offs across model sizes.',
    'proj3.p3': 'Evaluated generation quality using BLEU, SacreBLEU, and ROUGE-L against reference test cases, systematically benchmarking structural validity and semantic accuracy for autonomous driving validation tasks.',

    'proj4.subtitle': 'Deep learning pipeline for smart meter energy consumption prediction with real-time FastAPI inference',
    'proj4.date':     '03/2024 – 07/2024',
    'proj4.p1': 'Developed and optimized deep learning models (RNN, LSTM, GRU) in TensorFlow for multivariate time-series forecasting of smart meter energy data; evaluated performance using MAE and RMSE and selected the best-performing architecture.',
    'proj4.p2': 'Designed and implemented an end-to-end ML pipeline, including data preprocessing, feature engineering, sequence modeling, model validation, and RESTful API deployment with FastAPI for real-time inference.',
    'proj4.p3': 'Containerized and deployed the ML application using Docker on a local server, enabling scalable prediction services and supporting data-driven energy management decisions.',

    'proj5.title':    'ROS2 TurtleBot3 – Camera-Based Navigation & Sokoban Puzzle Solving',
    'proj5.subtitle': 'Autonomous robot navigation with computer vision, BFS grid traversal, and A* Sokoban puzzle solving in ROS 2',
    'proj5.p1': 'Developed a camera-based navigation and control system for a TurtleBot3 robot in ROS 2 Humble, integrating sensor fusion and real-time velocity control.',
    'proj5.p2': 'Implemented a computer vision module using OpenCV for lane detection and real-time image processing for lane centering.',
    'proj5.p3': 'Realized autonomous grid navigation using BFS and an A*-based Sokoban puzzle solver with path planning and obstacle avoidance.',
    'proj5.p4': 'Integrated odometry, camera data, and velocity control in a modular ROS 2 architecture.',

    /* Skills */
    'skills.title':    'Technical',
    'skills.title.hl': 'Skills',
    'skills.subtitle': 'Technologies I work with daily',
    'skills.cat1': '💻 Programming Languages',
    'skills.cat2': '🧠 ML & Deep Learning / Data Science',
    'skills.cat3': '🤖 Generative AI & LLMs',
    'skills.cat4': '🔗 Agentic AI & RAG',
    'skills.cat5': '📝 NLP',
    'skills.cat6': '🚀 Deployment & Version Control Tools',
    'skills.cat7': '📊 Data & Libraries',
    'skills.cat8': '👁️ Computer Vision',

    /* Education */
    'edu.title':    'Education',
    'edu.subtitle': 'My academic journey',
    'edu1.degree': 'M.Sc. Digital Technology',
    'edu1.meta':   '📍 Wolfenbüttel, Germany \u00a0|\u00a0 09/2023 – Present',
    'edu2.degree': 'Bachelor in Computer Application',
    'edu2.meta':   '📍 Surat, India \u00a0|\u00a0 06/2019 – 03/2022',

    /* Contact */
    'contact.title':    'Get In',
    'contact.title.hl': 'Touch',
    'contact.subtitle': "Have questions or want to collaborate? Let's connect!",
    'contact.heading':  "Let's Talk",
    'contact.desc':     "I'm always interested in discussing new projects, opportunities, or just chatting about AI/ML.",
    'contact.email.label':    'Email',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.desc':  'Connect with me professionally',
    'contact.github.label':   'GitHub',
    'contact.github.desc':    'Check out my code',
    'contact.cta.title':      '🚀 Open to Opportunities',
    'contact.cta.desc':       'Currently seeking full-time roles in:',
    'contact.cta.li1':        'AI/ML Engineering',
    'contact.cta.li2':        'Agentic AI & Multi-Agent Systems',
    'contact.cta.li3':        'Generative AI & LLMs',
    'contact.cta.li4':        'Research & Development',
    'contact.cta.btn':        'Send Message',

    /* Footer */
    'footer.tagline':   'AI/ML Engineer · Agentic AI & Generative AI',
    'footer.copyright': 'Nikhil Togadiya. Built with ❤️ and code.',
  },

  de: {
    /* Navbar */
    'nav.about':      'Über mich',
    'nav.experience': 'Erfahrung',
    'nav.projects':   'Projekte',
    'nav.skills':     'Fähigkeiten',
    'nav.education':  'Ausbildung',
    'nav.contact':    'Kontakt',

    /* Hero */
    'hero.greeting':     'Hallo, ich bin',
    'hero.description':  'Ich entwickle autonome Multi-Agenten-Systeme, eingeschränkte LLM-Fine-Tuning und produktionsreife KI-Pipelines — von Forschungslaboren bis hin zur realen Robotik und Fertigungsumgebung.',
    'hero.btn.work':     'Meine Arbeit',
    'hero.btn.about':    'Über mich',
    'hero.stat.projects':  'KI/ML-Projekte',
    'hero.stat.partners':  'Industriepartner',
    'hero.stat.tech':      'KI-Technologien',

    /* Typing phrases */
    'typing.0': 'KI/ML-Ingenieur',
    'typing.1': 'Agentic-KI-Entwickler',
    'typing.2': 'Generative-KI-Spezialist',
    'typing.3': 'LLM- & RAG-Architekt',
    'typing.4': 'Robotik-KI-Ingenieur',

    /* About */
    'about.title':    'Über',
    'about.title.me': 'mich',
    'about.subtitle': 'Modernste KI-Forschung in echten Mehrwert verwandeln',
    'about.p1': 'Ich bin ein <strong>KI/ML-Ingenieur</strong> und absolviere derzeit meinen M.Sc. in Digital Technology an der <strong>Ostfalia Hochschule</strong> in Deutschland, mit Schwerpunkt auf <strong>Agentic AI</strong> und <strong>Generative-KI</strong>-Systemen.',
    'about.p2': 'Meine Arbeit umfasst den Aufbau <strong>autonomer Multi-Agenten-Museumsführer</strong> auf Temi-Robotern mit RAG-basiertem Retrieval, die Entwicklung <strong>eingeschränkter LLM-Fine-Tuning</strong> zur automatisierten Testgenerierung bei <strong>Volkswagen AG</strong> sowie die Erstellung von End-to-End-KI-Pipelines, die natürliche Sprache in fertigungsreife 3D-CAD-Modelle umwandeln.',
    'about.p3': 'Ich arbeite an der Schnittstelle von <strong>Forschung und Produktion</strong> — von der wissenschaftlichen Idee bis zur Deployment-Reife. Ob LLM-Fine-Tuning mit LoRA, Orchestrierung von Multi-Agenten-Workflows oder der Einsatz von ML-Diensten in Docker-Containern — ich liebe es, Systeme zu bauen, die in der realen Welt funktionieren.',
    'about.card1.title': 'Multi-Agenten-KI',
    'about.card1.desc':  'Autonome Systeme mit Tool-Use-Orchestrierung',
    'about.card2.title': 'Generative KI',
    'about.card2.desc':  'LLM-Fine-Tuning, eingeschränktes Decoding, RAG',
    'about.card3.title': 'Produktions-ML',
    'about.card3.desc':  'Docker, FastAPI, End-to-End-Pipelines',
    'about.card4.title': 'Industriepartner',
    'about.card4.desc':  'Volkswagen, WOBCOM, Ostfalia',

    /* Experience */
    'exp.title':    'Berufliche',
    'exp.title.hl': 'Erfahrung',
    'exp.subtitle': 'KI-Systeme für Industrie und Forschung entwickeln',

    'exp1.role':    'Werkstudent (KI/Robotik)',
    'exp1.date':    '09/2024 – Heute',
    'exp1.location':'📍 Wolfenbüttel, Deutschland',
    'exp1.p1': 'Entwicklung eines Multi-Agenten-KI-Museumsführers auf 2 Temi-Robotern mit RAG-basiertem Retrieval (HuggingFace-Embeddings + Vektordatenbank), mit über 90 % Antwortabdeckung und Antwortzeiten unter 1 Sekunde durch Confidence-Gated Prompting für mehrsprachige Besucherinteraktion.',
    'exp1.p2': 'Entwicklung von <strong>pytemi</strong>, einer eigenen Python-Bibliothek zur Steuerung von Temi-Robotern (REST-API-Abstraktion, Navigation, Sensoren) als zentrale Projektinfrastruktur.',
    'exp1.p3': 'Betreuung des Teams bei der RAG-Optimierung und Multi-Roboter-Übergabeprotokollen sowie Koordination der Integration bis zur Produktionsreife.',

    'exp2.role':    'Bildungsprojekt — Eingeschränkte LLM-Testgenerierung',
    'exp2.date':    '03/2025 – 07/2025',
    'exp2.location':'📍 Wolfsburg, Deutschland',
    'exp2.p1': 'Konzeption und Implementierung eines zweistufigen Frameworks zur eingeschränkten Textgenerierung, das formale Grammatikdurchsetzung (.lark DSL) mit DFA-basierter Token-Maskierung (Syncode) kombiniert, um die syntaktische Korrektheit generierter Systemtestfälle zu gewährleisten.',
    'exp2.p2': 'Anwendung von parametereffizientem Fine-Tuning (LoRA) auf LLaMA-3B- und 8B-Modellen zur Verbesserung der semantischen Ausrichtung zwischen Anforderungsbeschreibungen und generierten Testschritten sowie Analyse von Performance-Kompromissen zwischen Modellgrößen.',
    'exp2.p3': 'Bewertung der Generierungsqualität mit BLEU, SacreBLEU und ROUGE-L anhand von Referenztestfällen, systematisches Benchmarking struktureller Validität und semantischer Genauigkeit für Validierungsaufgaben im autonomen Fahren.',

    'exp3.role':    'Bildungsprojekt — Energie-Zeitreihenprognose',
    'exp3.date':    '03/2024 – 07/2024',
    'exp3.location':'📍 Wolfsburg, Deutschland',
    'exp3.p1': 'Entwicklung und Optimierung von Deep-Learning-Modellen (RNN, LSTM, GRU) in TensorFlow für die multivariate Zeitreihenprognose von Smart-Meter-Energiedaten; Leistungsbewertung mit MAE und RMSE und Auswahl der besten Architektur.',
    'exp3.p2': 'Konzeption und Implementierung einer End-to-End-ML-Pipeline einschließlich Datenvorverarbeitung, Feature Engineering, Sequenzmodellierung, Modellvalidierung und RESTful-API-Deployment mit FastAPI für Echtzeit-Inferenz.',
    'exp3.p3': 'Containerisierung und Deployment der ML-Anwendung mit Docker auf einem lokalen Server, um skalierbare Prognosedienste zu ermöglichen und datengetriebene Energiemanagement-Entscheidungen zu unterstützen.',

    /* Projects */
    'proj.title':    'Persönliche',
    'proj.title.hl': 'Projekte',
    'proj.subtitle': 'Nebenprojekte an den Grenzen der KI',

    'proj1.subtitle': 'Multi-Agenten-LLM-System zur 3D-CAD-Generierung',
    'proj1.p1': 'Entwicklung einer End-to-End-KI-Pipeline, die natürlichsprachliche Eingaben mit einer 4-Agenten-Architektur (Anforderungen, Planung, Code-Generierung, Verifikation) und automatisierten Fehlerkorrekturschleifen in fertigungsreife 3D-CAD-Modelle umwandelt.',
    'proj1.p2': 'Implementierung eines selbstlernenden Design-Speichers mit ChromaDB und RAG-basiertem Retrieval zur Wiederverwendung erfolgreicher Designmuster und iterativer Verbesserung.',
    'proj1.p3': 'Integration von Sandbox-CadQuery-Ausführung, Vision-Language-Modell-Verifikation sowie STL/STEP-Export über Flask-Web-UI und CLI.',

    'proj2.subtitle': 'KI-gestützte Besuchs- und Umsatzprognose im Eishockey',
    'proj2.p1': 'Entwicklung einer End-to-End-ML-Pipeline zur Prognose der Spieltagsbesuche und Einnahmen eines professionellen Eishockeyteams auf Basis von 3 Saisonen echter Verkaufsdaten, mit R² = 0,76 und einer Vorhersagegenauigkeit von ~90 %.',
    'proj2.p2': 'Entwicklung einer maßgeschneiderten ETL-Pipeline und 19 domänenspezifischer Features (Wetter, Feiertage, Gegnerstärke, Teamform) aus verschiedenen Quellformaten.',
    'proj2.p3': 'Deployment des trainierten Modells über eine FastAPI-REST-API mit einem interaktiven React-Dashboard für szenariobasierte Umsatzprognosen und Datenanalyse.',

    'proj3.subtitle': 'Formal-grammatikbasiertes LLM-Fine-Tuning zur automatisierten Systemtestgenerierung für die Validierung autonomer Fahrzeuge',
    'proj3.date':     '03/2025 – 07/2025',
    'proj3.p1': 'Konzeption und Implementierung eines zweistufigen Frameworks zur eingeschränkten Textgenerierung, das formale Grammatikdurchsetzung (.lark DSL) mit DFA-basierter Token-Maskierung (Syncode) kombiniert, um die syntaktische Korrektheit generierter Systemtestfälle zu gewährleisten.',
    'proj3.p2': 'Anwendung von parametereffizientem Fine-Tuning (LoRA) auf LLaMA-3B- und 8B-Modellen zur Verbesserung der semantischen Ausrichtung zwischen Anforderungsbeschreibungen und generierten Testschritten sowie Analyse von Performance-Kompromissen zwischen Modellgrößen.',
    'proj3.p3': 'Bewertung der Generierungsqualität mit BLEU, SacreBLEU und ROUGE-L anhand von Referenztestfällen, systematisches Benchmarking struktureller Validität und semantischer Genauigkeit für Validierungsaufgaben im autonomen Fahren.',

    'proj4.subtitle': 'Deep-Learning-Pipeline zur Energieverbrauchsprognose von Smart Metern mit FastAPI-Echtzeit-Inferenz',
    'proj4.date':     '03/2024 – 07/2024',
    'proj4.p1': 'Entwicklung und Optimierung von Deep-Learning-Modellen (RNN, LSTM, GRU) in TensorFlow für die multivariate Zeitreihenprognose von Smart-Meter-Energiedaten; Leistungsbewertung mit MAE und RMSE und Auswahl der besten Architektur.',
    'proj4.p2': 'Konzeption und Implementierung einer End-to-End-ML-Pipeline einschließlich Datenvorverarbeitung, Feature Engineering, Sequenzmodellierung, Modellvalidierung und RESTful-API-Deployment mit FastAPI für Echtzeit-Inferenz.',
    'proj4.p3': 'Containerisierung und Deployment der ML-Anwendung mit Docker auf einem lokalen Server, um skalierbare Prognosedienste zu ermöglichen und datengetriebene Energiemanagement-Entscheidungen zu unterstützen.',

    'proj5.title':    'ROS2 TurtleBot3 – Kamerabasierte Navigation & Sokoban-Puzzlelösung',
    'proj5.subtitle': 'Autonome Roboternavigation mit Computer Vision, BFS-Gitterfahrt und A*-basierter Sokoban-Puzzlelösung in ROS 2',
    'proj5.p1': 'Entwicklung eines kamerabasierten Navigations- und Steuerungssystems für einen TurtleBot3-Roboter in ROS 2 Humble mit Sensorfusion und Echtzeit-Geschwindigkeitssteuerung.',
    'proj5.p2': 'Implementierung eines Computer-Vision-Moduls mit OpenCV für Spurerkennung und Echtzeit-Bildverarbeitung zur Spurzentrierung.',
    'proj5.p3': 'Realisierung autonomer Gridnavigation mittels BFS-Algorithmus sowie einer A*-basierten Sokoban-Puzzlelösung mit Pfadplanung und Hindernisumgehung.',
    'proj5.p4': 'Integration von Odometrie-Daten, Kameradaten und Geschwindigkeitssteuerung in einer modularen ROS 2-Architektur.',

    /* Skills */
    'skills.title':    'Technische',
    'skills.title.hl': 'Fähigkeiten',
    'skills.subtitle': 'Technologien, mit denen ich täglich arbeite',
    'skills.cat1': '💻 Programmiersprachen',
    'skills.cat2': '🧠 ML & Deep Learning / Data Science',
    'skills.cat3': '🤖 Generative KI & LLMs',
    'skills.cat4': '🔗 Agentic KI & RAG',
    'skills.cat5': '📝 NLP',
    'skills.cat6': '🚀 Deployment & Versionskontrolle',
    'skills.cat7': '📊 Daten & Bibliotheken',
    'skills.cat8': '👁️ Computer Vision',

    /* Education */
    'edu.title':    'Ausbildung',
    'edu.subtitle': 'Mein akademischer Werdegang',
    'edu1.degree': 'M.Sc. Digital Technology',
    'edu1.meta':   '📍 Wolfenbüttel, Deutschland \u00a0|\u00a0 09/2023 – Heute',
    'edu2.degree': 'Bachelor in Computer Application',
    'edu2.meta':   '📍 Surat, Indien \u00a0|\u00a0 06/2019 – 03/2022',

    /* Contact */
    'contact.title':    'Kontakt',
    'contact.title.hl': 'aufnehmen',
    'contact.subtitle': 'Fragen oder Interesse an einer Zusammenarbeit? Melden Sie sich!',
    'contact.heading':  "Lass uns reden",
    'contact.desc':     'Ich freue mich immer über Gespräche zu neuen Projekten, Möglichkeiten oder einfach über KI/ML.',
    'contact.email.label':    'E-Mail',
    'contact.linkedin.label': 'LinkedIn',
    'contact.linkedin.desc':  'Professionell vernetzen',
    'contact.github.label':   'GitHub',
    'contact.github.desc':    'Meinen Code ansehen',
    'contact.cta.title':      '🚀 Offen für Möglichkeiten',
    'contact.cta.desc':       'Derzeit auf der Suche nach Vollzeitstellen in:',
    'contact.cta.li1':        'KI/ML-Engineering',
    'contact.cta.li2':        'Agentic KI & Multi-Agenten-Systeme',
    'contact.cta.li3':        'Generative KI & LLMs',
    'contact.cta.li4':        'Forschung & Entwicklung',
    'contact.cta.btn':        'Nachricht senden',

    /* Footer */
    'footer.tagline':   'KI/ML-Ingenieur · Agentic KI & Generative KI',
    'footer.copyright': 'Nikhil Togadiya. Mit ❤️ und Code gebaut.',
  }
};
