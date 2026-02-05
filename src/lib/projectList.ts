export const activeProjects = [
]

export const openProjects = [
    {
        name: "npuzzle",
        position: "Just-for-fun Project",
        description: "Nikoli puzzle with paper-like scribbler using canvas to imitate paper and pen puzzle sensation. Status : STUB since Nikoli itself started digitializing its puzzles a few months ago albeit without the scribbling capabilty.",
        techstacks: "Kubernetes - GO - Svelte - MongoDB",
        features: [
            "Micro frontend",
            "Micro backend",
            "PWA",
            "Firebase Auth"
        ],
        github: "https://github.com/orgs/NPuzzleX/repositories",
    },
    {
        name: "Email blasting",
        position: "Just-for-fun Project",
        description: "Email blasting desktop app written with nodeGUI. Originally made to help me with a boring mundane task, but decided to release it anyway just for the heck of it.",
        techstacks: "Node",
        github: "https://github.com/MonMonMnemonics/gmailsmtp2",
        link: "https://github.com/MonMonMnemonics/gmailsmtp2/releases"
    },
    {
        name: "MChatX",
        position: "Passion Project",
        description: "Message relayer, active only as a legacy since it's still serving thousands of clients per second.",
        techstacks: "VPS - Node - Angular - MongoDB & Firebase",
        features: [
            "Firebase Realtime Database",
            "Event Subscription System",
            "Custom SMTP server",
            "OBS integration",
            "Discord Bot",
            "Android + Desktop client with QT",
            "Chrome + Mozilla Web extension"
        ],
        github: "https://github.com/mchatx",
    },
    {
        name: "Holodex",
        position: "Collaborator",
        description: "Centralized website for everything VTuber with all the extra goodies such as realtime translation and multi-view.",
        techstacks: "VPS - Node - Vue - PostgreSQL",
        workedFeature: [
            "Whole translation and script management system in backend",
            "Translator + Translation script manager webapp client",
        ],
        github: "https://github.com/HolodexNet",
        link: "https://holodex.net/"
    },
    {
        name: "Image Hosting (Defunct)",
        position: "Developer",
        description: "Fully self-hosted image hosting all in a single server.",
        techstacks: "Vercel - Node - React - MongoDB",
        features: [
            "Auto file encryption and indexing system",
            "Ready to be deployed in Vercel",
        ],        
        githubs: [
            {
                link: "https://github.com/MonMonMnemonics/imghosting-react",
                desc: "Frontend"
            },
            {
                link: "https://github.com/MonMonMnemonics/Imanity-Backend",
                desc: "Backend"
            },
        ]
    },
    {
        name: "Website Scrapper",
        position: "Just-for-fun Project",
        description: "A simple website scrapper for Syosetu website.",
        techstacks: "Node",
        features: [
            "Automated scrapper with headless browser."
        ],        
        github: "https://github.com/MonMonMnemonics/Sysotetudl",
    },
]

export const closedProjects = [
    {
        name: "Panen",
        position: "Fullstack Dev + ML Engineer",
        description: "Machine learning based shrimp aquaculture monitoring and decision making system",
        techstacks: "VPS - Laravel - React - Python - PostgreSQL",
        features: [
            "Easy integration with 3rd party ERP",
            "Decision tree automatic task generation",
            "Price forecaster",
            "Growth forecaster based on 20+ pond condition",
            "Calculate optimized schedule to maximize profit",
            "Pond monitoring system with computer vision"
        ],
    },
    {
        name: "Flavar (Defunct)",
        position: "Backend Developer",
        description: "Marketplace app with AR technology to show product using AR",
        techstacks: "VPS - Laravel - PostgreSQL",
        features: [
            "Payment system using Xendit",
            "AR marketplace with Three.js"
        ],
    },
    {
        name: "IWTIF 2021 (Defunct)",
        position: "Backend Developer",
        description: "Indonesia Wellness & Tourism International Festival 2021. Basically, a marketplace website similar to shopee for health and wellbeing products.",
        techstacks: "VPS - Node - Vue - PostgreSQL",
        features: [
            "Payment system using Xendit",
            "S3 cloud storage using DO Spaces",
            "Mailgun"
        ],
    },
    {
        name: "Terbook (Defunct)",
        position: "Backend Developer",
        description: "Similar to IWTIF but for booking services for a beauty parlor or a salon.",
        techstacks: "VPS - Node - Vue - PostgreSQL",
        features: [
            "Nothing new, more or less the same tech stack as IWTIF",
        ],
    },
    {
        name: "Hugo static webpage",
        position: "Collaborator",
        description: "Just a simple static website written using HUGO.",
        techstacks: "HUGO",
    },
]

export const otherProjects = [
    {
        name: "Starwish",
        position: "part-time programmer",
        description: "Programming part-time job I took when I was in Nagoya (~2015-2018). It's like an employment agency where workers were assigned with seemingly random programming jobs.",
        techstacks: "VB.net, .net, flask, Symfony.",
    },
    {
        name: "Hotel Management 2 (Defunct)",
        position: "Developer",
        description: "Just a rewrite of the previous version but in C# (~2015).",
        techstacks: "C# - sqlite3",
    },
    {
        name: "Hotel Management (Defunct)",
        position: "Developer",
        description: "Full package hotel management system for PSBB MAN 3 Malang, this was way way a long time ago around ~2013.",
        techstacks: "VB.net - MS Access",
        features: [
            "Daily and Monthly financial report.",
            "Room booking system and status tracking system.",
        ],
    }
]
