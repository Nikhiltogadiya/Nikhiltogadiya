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
    'hero.description':  'I build multi-agent AI systems, fine-tune LLMs with grammar constraints, and ship production-ready ML pipelines to bridge the gap between research and real-world robotics.',
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
    'about.subtitle': 'From research papers to working systems',
    'about.p1': "I'm an <strong>AI/ML Engineer</strong> currently pursuing my M.Sc. in Digital Technology at <strong>Ostfalia Hochschule</strong> in Germany, specializing in <strong>Agentic AI</strong> and <strong>Generative AI</strong> systems.",
    'about.p2': 'So far I\'ve built <strong>autonomous multi-agent museum guides</strong> running on Temi robots with RAG retrieval, worked on <strong>constrained LLM Fine-Tuning</strong> for automated test generation at <strong>Volkswagen AG</strong>, and created end-to-end AI pipeline that turns plain text into manufacturable 3D CAD models.',
    'about.p3': "I enjoy taking ideas from <strong>research papers and making them work in production</strong>. Whether it's fine-tuning LLMs with LoRA, wiring up multi-agent workflows, or containerizing ML services, I'm happiest when something I built is actually running in the real world.",
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
    'exp.subtitle': 'Where I\'ve put AI to work',

    'exp1.role':    'Werkstudent (AI/Robotics)',
    'exp1.date':    '09/2024 – Present',
    'exp1.location':'📍 Wolfenbüttel, Germany',
    'exp1.p1': 'Built a multi-agent AI museum guide running on 2 Temi robots with RAG-based retrieval (HuggingFace embeddings + vector DB). Hit 90%+ answer coverage with sub-1s response times using confidence-gated prompting for multilingual visitors.',
    'exp1.p2': 'Wrote <strong>pytemi</strong>, a Python library that wraps the Temi REST API for navigation, sensors, and robot control. It became the foundation the whole project runs on.',
    'exp1.p3': 'Mentored the team on RAG tuning and multi-robot handover protocols. Coordinating the push toward production deployment.',

    'exp2.role':    'Educational Project — Constrained LLM Test Generation',
    'exp2.date':    '03/2025 – 07/2025',
    'exp2.location':'📍 Wolfsburg, Germany',
    'exp2.p1': 'Built a two-stage framework that forces LLM outputs to follow a formal grammar (.lark DSL) using DFA-based token masking (Syncode). The result: generated test cases that are syntactically correct every time.',
    'exp2.p2': 'Fine-tuned LLaMA 3B and 8B with LoRA so the model actually understands the mapping from requirement descriptions to test steps. Compared both sizes to find the sweet spot between quality and cost.',
    'exp2.p3': 'Measured output quality with BLEU, SacreBLEU, and ROUGE-L against human-written reference tests. Benchmarked both structural validity and how well the meaning carries over.',

    'exp3.role':    'Educational Project — Energy Time Series Forecasting',
    'exp3.date':    '03/2024 – 07/2024',
    'exp3.location':'📍 Wolfsburg, Germany',
    'exp3.p1': 'Trained and compared RNN, LSTM, and GRU models in TensorFlow on multivariate smart meter data. Picked the best architecture based on MAE and RMSE.',
    'exp3.p2': 'Built the full pipeline from scratch, covering data preprocessing, feature engineering, sequence modeling, validation, and a FastAPI endpoint for real-time predictions.',
    'exp3.p3': 'Packaged everything in Docker and deployed on a local server. The API serves energy consumption forecasts that feed into management dashboards.',

    /* Projects */
    'proj.title':    'Personal',
    'proj.title.hl': 'Projects',
    'proj.subtitle': 'Things I built because I was curious',

    'proj1.subtitle': 'Multi-Agent LLM System for 3D CAD Generation',
    'proj1.p1': 'Built a pipeline that takes a text description and produces a manufacturable 3D CAD model. A multi-agent system handles it (requirements, planning, code generation, and verification) with automatic error-correction loops when something fails.',
    'proj1.p2': 'Added a design memory layer (ChromaDB + RAG) so the system learns from past successes and reuses working patterns instead of starting from scratch every time.',
    'proj1.p3': 'Runs CadQuery in a sandbox, verifies outputs with a Vision-Language Model, and exports STL/STEP files. Available as both a Flask web UI and CLI.',

    'proj2.title':    'ML-Based Ticket Sales & Revenue Forecasting',
    'proj2.subtitle': 'AI-Powered Attendance & Revenue Prediction for Ice Hockey',
    'proj2.p1': 'Built an ML pipeline that predicts game-day attendance and revenue for a professional ice hockey team. Trained on 3 seasons of real sales data and hit R² = 0.76 with ~90% accuracy.',
    'proj2.p2': 'Created a custom ETL pipeline and 19 features (weather, holidays, opponent strength, team form) pulled from multiple data sources and formats.',
    'proj2.p3': 'Served the model through a FastAPI REST API with a React dashboard where users can run scenario-based forecasts and explore the data.',

    'proj3.title':    'Constrained LLM Test Generation',
    'proj3.subtitle': 'Making LLMs generate syntactically valid test cases using formal grammar constraints',
    'proj3.date':     '03/2025 – 07/2025',
    'proj3.p1': 'Built a two-stage framework that forces LLM outputs to follow a formal grammar (.lark DSL) using DFA-based token masking (Syncode). The result: generated test cases that are syntactically correct every time.',
    'proj3.p2': 'Fine-tuned LLaMA 3B and 8B with LoRA so the model actually understands the mapping from requirement descriptions to test steps. Compared both sizes to find the sweet spot between quality and cost.',
    'proj3.p3': 'Measured output quality with BLEU, SacreBLEU, and ROUGE-L against human-written reference tests. Benchmarked both structural validity and how well the meaning carries over.',

    'proj4.title':    'Energy Time Series Forecasting',
    'proj4.subtitle': 'Deep learning pipeline for smart meter energy consumption prediction with real-time FastAPI inference',
    'proj4.date':     '03/2024 – 07/2024',
    'proj4.p1': 'Trained and compared RNN, LSTM, and GRU models in TensorFlow on multivariate smart meter data. Picked the best architecture based on MAE and RMSE.',
    'proj4.p2': 'Built the full pipeline from scratch, covering data preprocessing, feature engineering, sequence modeling, validation, and a FastAPI endpoint for real-time predictions.',
    'proj4.p3': 'Packaged everything in Docker and deployed on a local server. The API serves energy consumption forecasts that feed into management dashboards.',

    'proj5.title':    'ROS2 TurtleBot3 – Camera-Based Navigation & Sokoban Puzzle Solving',
    'proj5.subtitle': 'Camera-driven robot that navigates grids, detects lanes, and solves Sokoban puzzles in ROS 2',
    'proj5.p1': 'Built a camera-based navigation system for a TurtleBot3 robot in ROS 2 Humble that fuses sensor data and controls velocity in real time.',
    'proj5.p2': 'Implemented a computer vision module for lane detection and real-time image processing so the robot stays centered in its lane.',
    'proj5.p3': 'Added autonomous grid navigation with BFS and an A*-based Sokoban puzzle solver that handles path planning and obstacle avoidance.',
    'proj5.p4': 'Tied together odometry, camera feeds, and velocity commands in a clean modular ROS 2 architecture.',

    'proj6.title':    'Autonomous Driving – Project Collection',
    'proj6.subtitle': 'Three mini-projects: deep reinforcement learning for highway driving, LiDAR sensor fusion, and adaptive cruise control',
    'proj6.p1': '<strong>Deep RL Highway Driving:</strong> Trained an agent using deep reinforcement learning (PPO) in highway-env (Gymnasium) that learns to drive on its own. It dodges collisions, stays in lane, and hits the target speed using actor-critic networks.',
    'proj6.p2': '<strong>Sensor Fusion (Dempster-Shafer):</strong> Built a LiDAR occupancy grid using Dempster-Shafer theory to label each cell as occupied, free, or unknown. Handles noisy sensor data gracefully in ROS 2 / Webots.',
    'proj6.p3': '<strong>Adaptive Cruise Control (IDM):</strong> Built a longitudinal ACC system with the Intelligent Driver Model and radar data. It keeps a safe following distance and adjusts speed automatically.',

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
    'skills.cat9': '🤖 Robotics & Simulation',

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
    'hero.description':  'Ich baue Multi-Agenten-KI-Systeme, fine-tune LLMs mit Grammatik-Constraints und bringe ML-Pipelines in Produktion, um die Brücke zwischen Forschung und realer Robotik zu schlagen.',
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
    'about.subtitle': 'Vom Paper zum laufenden System',
    'about.p1': 'Ich bin ein <strong>KI/ML-Ingenieur</strong> und absolviere derzeit meinen M.Sc. in Digital Technology an der <strong>Ostfalia Hochschule</strong> in Deutschland, mit Schwerpunkt auf <strong>Agentic AI</strong> und <strong>Generative-KI</strong>-Systemen.',
    'about.p2': 'Bisher habe ich <strong>autonome Multi-Agenten-Museumsführer</strong> auf Temi-Robotern mit RAG-Retrieval gebaut, an <strong>eingeschränktem LLM-Fine-Tuning</strong> zur automatisierten Testgenerierung bei <strong>Volkswagen AG</strong> gearbeitet und eine End-to-End-KI-Pipeline entwickelt, die Klartext in fertigungsreife 3D-CAD-Modelle verwandelt.',
    'about.p3': 'Ich nehme gerne Ideen aus <strong>Papers und bringe sie in Produktion</strong>. Ob LLMs mit LoRA fine-tunen, Multi-Agenten-Workflows aufbauen oder ML-Dienste in Docker packen: Am liebsten ist mir, wenn etwas, das ich gebaut habe, tatsächlich in der echten Welt läuft.',
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
    'exp.subtitle': 'Wo ich KI in die Praxis gebracht habe',

    'exp1.role':    'Werkstudent (KI/Robotik)',
    'exp1.date':    '09/2024 – Heute',
    'exp1.location':'📍 Wolfenbüttel, Deutschland',
    'exp1.p1': 'Multi-Agenten-KI-Museumsführer auf 2 Temi-Robotern gebaut, mit RAG-Retrieval (HuggingFace-Embeddings + Vektordatenbank). Über 90 % Antwortabdeckung bei Antwortzeiten unter 1 Sekunde dank Confidence-Gated Prompting für mehrsprachige Besucher.',
    'exp1.p2': '<strong>pytemi</strong> geschrieben, eine Python-Bibliothek, die die Temi-REST-API für Navigation, Sensoren und Robotersteuerung kapselt. Wurde zum Fundament des gesamten Projekts.',
    'exp1.p3': 'Das Team bei RAG-Tuning und Multi-Roboter-Übergabeprotokollen betreut. Koordiniere die Integration Richtung Produktionseinsatz.',

    'exp2.role':    'Bildungsprojekt — Eingeschränkte LLM-Testgenerierung',
    'exp2.date':    '03/2025 – 07/2025',
    'exp2.location':'📍 Wolfsburg, Deutschland',
    'exp2.p1': 'Zweistufiges Framework gebaut, das LLM-Ausgaben per DFA-basierter Token-Maskierung (Syncode) an eine formale Grammatik (.lark DSL) bindet. Ergebnis: generierte Testfälle, die jedes Mal syntaktisch korrekt sind.',
    'exp2.p2': 'LLaMA 3B und 8B mit LoRA fine-getuned, damit das Modell die Zuordnung von Anforderungsbeschreibungen zu Testschritten wirklich versteht. Beide Größen verglichen, um den Sweet Spot zwischen Qualität und Kosten zu finden.',
    'exp2.p3': 'Ausgabequalität mit BLEU, SacreBLEU und ROUGE-L gegen menschlich geschriebene Referenztests gemessen. Sowohl strukturelle Korrektheit als auch Bedeutungstreue geprüft.',

    'exp3.role':    'Bildungsprojekt — Energie-Zeitreihenprognose',
    'exp3.date':    '03/2024 – 07/2024',
    'exp3.location':'📍 Wolfsburg, Deutschland',
    'exp3.p1': 'RNN-, LSTM- und GRU-Modelle in TensorFlow auf multivariaten Smart-Meter-Daten trainiert und verglichen. Beste Architektur anhand von MAE und RMSE ausgewählt.',
    'exp3.p2': 'Die komplette Pipeline von Grund auf gebaut, also Datenvorverarbeitung, Feature Engineering, Sequenzmodellierung, Validierung und ein FastAPI-Endpoint für Echtzeit-Prognosen.',
    'exp3.p3': 'Alles in Docker gepackt und auf einem lokalen Server deployed. Die API liefert Energieverbrauchsprognosen für Management-Dashboards.',

    /* Projects */
    'proj.title':    'Persönliche',
    'proj.title.hl': 'Projekte',
    'proj.subtitle': 'Projekte, die aus Neugier entstanden sind',

    'proj1.subtitle': 'Multi-Agenten-LLM-System zur 3D-CAD-Generierung',
    'proj1.p1': 'Pipeline gebaut, die aus einer Textbeschreibung ein fertigungsreifes 3D-CAD-Modell erzeugt. Ein Multi-Agenten-System übernimmt das (Anforderungen, Planung, Code-Generierung und Verifikation) mit automatischen Fehlerkorrekturschleifen.',
    'proj1.p2': 'Design-Memory-Schicht ergänzt (ChromaDB + RAG), damit das System aus vergangenen Erfolgen lernt und funktionierende Muster wiederverwendet, statt jedes Mal von vorn anzufangen.',
    'proj1.p3': 'Führt CadQuery in einer Sandbox aus, prüft Ergebnisse mit einem Vision-Language-Model und exportiert STL/STEP-Dateien. Verfügbar als Flask-Web-UI und CLI.',

    'proj2.title':    'ML-basierte Ticketverkaufs- und Umsatzprognose',
    'proj2.subtitle': 'KI-gestützte Besuchs- und Umsatzprognose im Eishockey',
    'proj2.p1': 'ML-Pipeline gebaut, die Spieltag-Besucherzahlen und Umsatz eines Profi-Eishockeyteams vorhersagt. Trainiert auf 3 Saisonen echter Verkaufsdaten, mit R² = 0,76 bei ~90 % Genauigkeit.',
    'proj2.p2': 'Eigene ETL-Pipeline erstellt mit 19 Features (Wetter, Feiertage, Gegnerstärke, Teamform), zusammengezogen aus verschiedenen Datenquellen und Formaten.',
    'proj2.p3': 'Modell über eine FastAPI-REST-API bereitgestellt, mit einem React-Dashboard, in dem Nutzer Szenario-Prognosen fahren und die Daten erkunden können.',

    'proj3.title':    'Eingeschränkte LLM-Testgenerierung',
    'proj3.subtitle': 'LLMs dazu bringen, syntaktisch korrekte Testfälle mit formalen Grammatik-Constraints zu generieren',
    'proj3.date':     '03/2025 – 07/2025',
    'proj3.p1': 'Zweistufiges Framework gebaut, das LLM-Ausgaben per DFA-basierter Token-Maskierung (Syncode) an eine formale Grammatik (.lark DSL) bindet. Ergebnis: generierte Testfälle, die jedes Mal syntaktisch korrekt sind.',
    'proj3.p2': 'LLaMA 3B und 8B mit LoRA fine-getuned, damit das Modell die Zuordnung von Anforderungsbeschreibungen zu Testschritten wirklich versteht. Beide Größen verglichen, um den Sweet Spot zwischen Qualität und Kosten zu finden.',
    'proj3.p3': 'Ausgabequalität mit BLEU, SacreBLEU und ROUGE-L gegen menschlich geschriebene Referenztests gemessen. Sowohl strukturelle Korrektheit als auch Bedeutungstreue geprüft.',

    'proj4.title':    'Energie-Zeitreihenprognose',
    'proj4.subtitle': 'Deep-Learning-Pipeline zur Energieverbrauchsprognose von Smart Metern mit FastAPI-Echtzeit-Inferenz',
    'proj4.date':     '03/2024 – 07/2024',
    'proj4.p1': 'RNN-, LSTM- und GRU-Modelle in TensorFlow auf multivariaten Smart-Meter-Daten trainiert und verglichen. Beste Architektur anhand von MAE und RMSE ausgewählt.',
    'proj4.p2': 'Die komplette Pipeline von Grund auf gebaut, also Datenvorverarbeitung, Feature Engineering, Sequenzmodellierung, Validierung und ein FastAPI-Endpoint für Echtzeit-Prognosen.',
    'proj4.p3': 'Alles in Docker gepackt und auf einem lokalen Server deployed. Die API liefert Energieverbrauchsprognosen für Management-Dashboards.',

    'proj5.title':    'ROS2 TurtleBot3 – Kamerabasierte Navigation & Sokoban-Puzzlelösung',
    'proj5.subtitle': 'Kameragesteuerter Roboter, der Grids navigiert, Spuren erkennt und Sokoban-Puzzles in ROS 2 löst',
    'proj5.p1': 'Kamerabasiertes Navigationssystem für einen TurtleBot3-Roboter in ROS 2 Humble gebaut, das Sensordaten fusioniert und die Geschwindigkeit in Echtzeit steuert.',
    'proj5.p2': 'Computer-Vision-Modul für Spurerkennung und Echtzeit-Bildverarbeitung implementiert, damit der Roboter in der Spur bleibt.',
    'proj5.p3': 'Autonome Grid-Navigation mit BFS ergänzt sowie einen A*-basierten Sokoban-Puzzlelöser mit Pfadplanung und Hindernisumgehung.',
    'proj5.p4': 'Odometrie, Kamera-Feeds und Geschwindigkeitsbefehle in einer sauberen modularen ROS 2-Architektur zusammengeführt.',

    'proj6.title':    'Autonomes Fahren – Projektsammlung',
    'proj6.subtitle': 'Drei Mini-Projekte: Deep Reinforcement Learning für Autobahnfahren, LiDAR-Sensorfusion und adaptiver Tempomat',
    'proj6.p1': '<strong>Deep-RL-Autobahnfahren:</strong> Agenten mit Deep Reinforcement Learning (PPO) in highway-env (Gymnasium) trainiert, der selbstständig fährt. Er weicht Kollisionen aus, hält die Spur und erreicht die Zielgeschwindigkeit mit Actor-Critic-Netzwerken.',
    'proj6.p2': '<strong>Sensorfusion (Dempster-Shafer):</strong> LiDAR-Belegungsgitter mit Dempster-Shafer-Theorie gebaut, das jede Zelle als belegt, frei oder unbekannt einstuft. Kommt mit verrauschten Sensordaten in ROS 2 / Webots gut klar.',
    'proj6.p3': '<strong>Adaptiver Tempomat (IDM):</strong> Längsregelungs-ACC mit dem Intelligent Driver Model und Radardaten gebaut. Hält sicheren Abstand und passt die Geschwindigkeit automatisch an.',

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
    'skills.cat9': '🤖 Robotik & Simulation',

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
    'contact.subtitle': 'Fragen oder Interesse an einer Zusammenarbeit? Melde dich!',
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
