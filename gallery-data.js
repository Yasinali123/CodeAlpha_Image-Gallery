const collectionThemes = [
    { id: "mystic-forests", label: "Mystic Forests" },
    { id: "majestic-peaks", label: "Majestic Peaks" },
    { id: "ocean-breezes", label: "Ocean Breezes" },
    { id: "desert-landscapes", label: "Desert Landscapes" },
    { id: "snowy-mountains", label: "Snowy Mountains" },
    { id: "deep-oceans", label: "Deep Oceans" },
    { id: "loyal-companions", label: "Loyal Companions" },
    { id: "feline-grace", label: "Feline Grace" },
    { id: "tropical-birds", label: "Tropical Birds" },
    { id: "macaw-parrots", label: "Macaw Parrots" },
    { id: "wild-tigers", label: "Wild Tigers" },
    { id: "sea-turtles", label: "Sea Turtles" },
    { id: "workspace-setups", label: "Workspace Setups" },
    { id: "mobile-devices", label: "Mobile Devices" },
    { id: "robotics-evolution", label: "Robotics Evolution" },
    { id: "circuit-boards", label: "Circuit Boards" },
    { id: "server-rooms", label: "Server Rooms" },
    { id: "vr-headsets", label: "VR Headsets" }
];

const collectionItems = [
    {
        file: "mystic-forest.jpg",
        title: "Mystic Forest",
        filter: "mystic-forests",
        category: "Mystic Forests",
        meta: "Fog, towering pines, and a quiet woodland trail.",
        shape: "tall"
    },
    {
        file: "misty-forest-trail.jpg",
        title: "Misty Forest Trail",
        filter: "mystic-forests",
        category: "Mystic Forests",
        meta: "A moody path winding through dense evergreen haze."
    },
    {
        file: "majestic-peaks.jpg",
        title: "Majestic Peaks",
        filter: "majestic-peaks",
        category: "Majestic Peaks",
        meta: "Sharp mountain ridges rising into crisp alpine light.",
        shape: "wide"
    },
    {
        file: "alpine-peak-vista.jpg",
        title: "Alpine Peak Vista",
        filter: "majestic-peaks",
        category: "Majestic Peaks",
        meta: "Layered summits and wide-open mountain atmosphere."
    },
    {
        file: "ocean-breeze.jpg",
        title: "Ocean Breeze",
        filter: "ocean-breezes",
        category: "Ocean Breezes",
        meta: "Fresh coastal energy, rolling surf, and open water."
    },
    {
        file: "rolling-wave-crash.jpg",
        title: "Rolling Wave Crash",
        filter: "ocean-breezes",
        category: "Ocean Breezes",
        meta: "A textured ocean swell captured in motion.",
        shape: "wide"
    },
    {
        file: "desert-landscape.jpg",
        title: "Desert Landscape",
        filter: "desert-landscapes",
        category: "Desert Landscapes",
        meta: "Warm sand tones and quiet horizons under open skies."
    },
    {
        file: "golden-sand-dunes.jpg",
        title: "Golden Sand Dunes",
        filter: "desert-landscapes",
        category: "Desert Landscapes",
        meta: "Sculpted dunes with long shadows and clean lines."
    },
    {
        file: "snowy-mountain.jpg",
        title: "Snowy Mountain",
        filter: "snowy-mountains",
        category: "Snowy Mountains",
        meta: "Snow-capped slopes and cold air over rugged terrain.",
        shape: "tall"
    },
    {
        file: "stormy-snow-range.jpg",
        title: "Stormy Snow Range",
        filter: "snowy-mountains",
        category: "Snowy Mountains",
        meta: "Dark weather rolling over bright winter peaks."
    },
    {
        file: "deep-ocean.jpg",
        title: "Deep Ocean",
        filter: "deep-oceans",
        category: "Deep Oceans",
        meta: "A calm dive into rich blue underwater space."
    },
    {
        file: "midnight-blue-depths.jpg",
        title: "Midnight Blue Depths",
        filter: "deep-oceans",
        category: "Deep Oceans",
        meta: "Minimal underwater blue with a cinematic, open feel.",
        shape: "wide"
    },
    {
        file: "loyal-companion.jpg",
        title: "Loyal Companion",
        filter: "loyal-companions",
        category: "Loyal Companions",
        meta: "Gentle focus on a faithful dog portrait."
    },
    {
        file: "monochrome-dog-portrait.jpg",
        title: "Monochrome Dog Portrait",
        filter: "loyal-companions",
        category: "Loyal Companions",
        meta: "A close canine portrait with bold contrast."
    },
    {
        file: "feline-grace.jpg",
        title: "Feline Grace",
        filter: "feline-grace",
        category: "Feline Grace",
        meta: "Soft fur, quiet poise, and a cat's steady gaze."
    },
    {
        file: "curious-cat-gaze.jpg",
        title: "Curious Cat Gaze",
        filter: "feline-grace",
        category: "Feline Grace",
        meta: "A thoughtful portrait with calm, curious eyes.",
        shape: "tall"
    },
    {
        file: "tropical-bird.jpg",
        title: "Tropical Bird",
        filter: "tropical-birds",
        category: "Tropical Birds",
        meta: "Bright plumage and lush tropical color."
    },
    {
        file: "toucan-branch-glow.jpg",
        title: "Toucan Branch Glow",
        filter: "tropical-birds",
        category: "Tropical Birds",
        meta: "A vibrant perched bird with a clean tropical palette."
    },
    {
        file: "macaw-parrot.jpg",
        title: "Macaw Parrot",
        filter: "macaw-parrots",
        category: "Macaw Parrots",
        meta: "A colorful macaw with strong jungle personality.",
        shape: "wide"
    },
    {
        file: "sunlit-macaw-perch.jpg",
        title: "Sunlit Macaw Perch",
        filter: "macaw-parrots",
        category: "Macaw Parrots",
        meta: "Blue and gold feathers lit in clear daylight."
    },
    {
        file: "wild-tiger.jpg",
        title: "Wild Tiger",
        filter: "wild-tigers",
        category: "Wild Tigers",
        meta: "A powerful tiger moment framed with intensity."
    },
    {
        file: "tiger-portrait-glare.jpg",
        title: "Tiger Portrait Glare",
        filter: "wild-tigers",
        category: "Wild Tigers",
        meta: "Close-up stripes, focused eyes, and strong presence."
    },
    {
        file: "sea-turtle.jpg",
        title: "Sea Turtle",
        filter: "sea-turtles",
        category: "Sea Turtles",
        meta: "A graceful swimmer drifting through clear ocean light."
    },
    {
        file: "coral-reef-turtle.jpg",
        title: "Coral Reef Turtle",
        filter: "sea-turtles",
        category: "Sea Turtles",
        meta: "A sea turtle gliding above a colorful reef.",
        shape: "wide"
    },
    {
        file: "workspace-setup.jpg",
        title: "Workspace Setup",
        filter: "workspace-setups",
        category: "Workspace Setups",
        meta: "A polished desk scene built for creative flow."
    },
    {
        file: "dual-screen-workstation.jpg",
        title: "Dual Screen Workstation",
        filter: "workspace-setups",
        category: "Workspace Setups",
        meta: "A sleek work desk with multiple focused screens."
    },
    {
        file: "mobile-devices.jpg",
        title: "Mobile Devices",
        filter: "mobile-devices",
        category: "Mobile Devices",
        meta: "Modern phone-centric visuals for product stories.",
        shape: "tall"
    },
    {
        file: "phone-display-closeup.jpg",
        title: "Phone Display Closeup",
        filter: "mobile-devices",
        category: "Mobile Devices",
        meta: "A handheld phone detail with crisp product framing."
    },
    {
        file: "robotics-evolution.jpg",
        title: "Robotics Evolution",
        filter: "robotics-evolution",
        category: "Robotics Evolution",
        meta: "Future-facing robotics with a clean tech mood."
    },
    {
        file: "robotic-arm-future.jpg",
        title: "Robotic Arm Future",
        filter: "robotics-evolution",
        category: "Robotics Evolution",
        meta: "Industrial robotics with a futuristic engineering feel.",
        shape: "wide"
    },
    {
        file: "circuit-board.jpg",
        title: "Circuit Board",
        filter: "circuit-boards",
        category: "Circuit Boards",
        meta: "Macro electronics texture with signal-rich detail."
    },
    {
        file: "motherboard-signal-lines.jpg",
        title: "Motherboard Signal Lines",
        filter: "circuit-boards",
        category: "Circuit Boards",
        meta: "Close-up PCB details with a dense hardware pattern."
    },
    {
        file: "server-room.jpg",
        title: "Server Room",
        filter: "server-rooms",
        category: "Server Rooms",
        meta: "Cold blue infrastructure and machine-room symmetry."
    },
    {
        file: "server-rack-closeup.jpg",
        title: "Server Rack Closeup",
        filter: "server-rooms",
        category: "Server Rooms",
        meta: "Rack-mounted hardware captured in a focused frame.",
        shape: "wide"
    },
    {
        file: "vr-headset.jpg",
        title: "VR Headset",
        filter: "vr-headsets",
        category: "VR Headsets",
        meta: "Immersive hardware and modern interactive tech."
    },
    {
        file: "immersive-vr-motion.jpg",
        title: "Immersive VR Motion",
        filter: "vr-headsets",
        category: "VR Headsets",
        meta: "A live virtual reality moment with motion and depth."
    }
];

const photoLibrary = [
    ...collectionItems.map((item) => ({
        file: item.file,
        title: item.title,
        category: item.category,
        usedIn: ["Collection", "Photo Library"]
    })),
    {
        file: "our-gallery-space.jpg",
        title: "Our Gallery Space",
        category: "About Story",
        usedIn: ["About", "Photo Library"]
    },
    {
        file: "nature-scene.jpg",
        title: "Nature Scene",
        category: "Home Showcase",
        usedIn: ["Home", "Photo Library"]
    },
    {
        file: "wildlife-scene.jpg",
        title: "Wildlife Scene",
        category: "Home Showcase",
        usedIn: ["Home", "Photo Library"]
    },
    {
        file: "tech-scene.jpg",
        title: "Tech Scene",
        category: "Home Showcase",
        usedIn: ["Home", "Photo Library"]
    },
    {
        file: "warm-desert-landscape.jpg",
        title: "Warm Desert Landscape",
        category: "Home Showcase",
        usedIn: ["Home", "Photo Library"]
    },
    {
        file: "mountain-lake.jpg",
        title: "Mountain Lake",
        category: "Home Showcase",
        usedIn: ["Home", "Photo Library"]
    },
    {
        file: "tiger-close-up-portrait.jpg",
        title: "Tiger Close-up Portrait",
        category: "Home Showcase",
        usedIn: ["Home", "Photo Library"]
    },
    {
        file: "city-lights-reflection.jpg",
        title: "City Lights Reflection",
        category: "Home Showcase",
        usedIn: ["Home", "Photo Library"]
    }
];

window.galleryData = {
    collectionThemes,
    collectionItems,
    photoLibrary
};
