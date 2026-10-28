import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// Video Editing & Content Creation stack
// Inverted pyramid: 5 -> 4 -> 3 -> 2
const techStack: TechItem[][] = [
  // Row 1 - 5 items (Core Video & Graphic Design Suite)
  [
    { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg", url: "https://adobe.com/products/premiere" },
    { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", url: "https://adobe.com/products/aftereffects" },
    { name: "CapCut", icon: "/images/capcut.svg", url: "https://www.capcut.com" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", url: "https://canva.com" },
  ],
  // Row 2 - 4 items (Leading AI Script & Ideation Models)
  [
    { name: "ChatGPT", icon: "https://img.icons8.com/color/48/chatgpt.png", url: "https://chatgpt.com" },
    { name: "Claude", icon: "/images/claude.svg", url: "https://claude.ai" },
    { name: "Gemini", icon: "/images/gemini.svg", url: "https://gemini.google.com" },
    { name: "Grok", icon: "/images/grok.svg", url: "https://x.ai" },
  ],
  // Row 3 - 3 items (AI Voice & Video Publishing Channels)
  [
    { name: "ElevenLabs", icon: "/images/elevenlabs.svg", url: "https://elevenlabs.io" },
    { name: "YouTube", icon: "https://img.icons8.com/color/48/youtube-play.png", url: "https://youtube.com" },
    { name: "TikTok", icon: "https://cdn.simpleicons.org/tiktok/ffffff", url: "https://tiktok.com" },
  ],
  // Row 4 - 2 items (Cloud Footage & Content Workflow)
  [
    { name: "Google Drive", icon: "https://img.icons8.com/color/48/google-drive--v2.png", url: "https://drive.google.com" },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion/ffffff", url: "https://notion.so" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Editing & Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
