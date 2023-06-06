export const activeProjects = [
    {
        name: "npuzzle",
        position: "Just-for-fun Project",
        description: "Nikoli puzzle with scribbler using canvas.",
        techstacks: "GO - Svelte - MongoDB",
        features: [
            "Kubernetes",
            "Micro frontend",
            "Micro backend",
            "PWA",
            "Firebase Auth"
        ],
        github: "https://github.com/orgs/NPuzzleX/repositories",
        link: "https://npuzzle.3mworkshop.com"
    },
    {
        name: "Email blasting",
        position: "Just-for-fun Project",
        description: "Email blasting script written in Node originally made to help with boring desk job, so might as well make a webapp(soon TM) and make it usable for anyone.",
        techstacks: "Node",
        github: "https://github.com/MonMonMnemonics/gmail-auto-smtp",
    },
]


export const openProjects = [
    {
        name: "MChatX",
        position: "Passion Project",
        description: "Message relayer, active only as a legacy since it's still serving thousands of clients per second.",
        techstacks: "Node - Angular - MongoDB & Firebase",
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
        link: "https://mchatx.org"
    },
    {
        name: "Holodex",
        position: "Collaborator",
        description: "Centralized website for everything VTuber with all the extra goodies such as realtime translation and multi-view.",
        techstacks: "Node - Vue - PostgreSQL",
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
        techstacks: "Node - React - MongoDB",
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
        name: "IWTIF 2021 (Defunct)",
        position: "Backend Developer",
        description: "Indonesia Wellness & Tourism International Festival 2021. Basically, a marketplace website similar to shopee for health and wellbeing products.",
        techstacks: "Node - Vue - PostgreSQL",
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
        techstacks: "Node - Vue - PostgreSQL",
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
