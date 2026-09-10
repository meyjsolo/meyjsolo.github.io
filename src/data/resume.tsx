import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";
import { Java } from "@/components/ui/svgs/java";
import { Linux } from "@/components/ui/svgs/linux";
import { Spring } from "@/components/ui/svgs/spring";
import { Redis } from "@/components/ui/svgs/redis";
import { Nginx } from "@/components/ui/svgs/nginx";

export const DATA = {
  name: "小帅 - Software Engineer",
  initials: "AM",
  url: "https://alexmercer.dev",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "全栈工程师，做真正有用的产品。",
  summary:
    "1. 10+ 年后端开发，懂前端，会运维。\n2. 熟练使用 Linux，能单人搭建一个项目需要的所有服务（包括各种中间件），且有基本的运维能力。\n3. 有架构设计经验，参与过多个系统从 0 到 1 的建设，熟悉微服务、大数据。\n4. 做过后台管理系统，应用监控系统，日志中心，交易系统，用户画像系统，用户行为分析系统，大数据平台，DevOps 等。\n5. Vibe coding。\n6. 目前全职远程 & 自由职业。",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    skills: { order: 2, enabled: true, heading: "Skills" },
    work: { order: 3, enabled: true, heading: "Work Experience", presentLabel: "至今" },
    education: { order: 4, enabled: true, heading: "Education" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring", icon: Spring },
    { name: "Postgres", icon: Postgresql },
    { name: "Redis", icon: Redis },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Linux", icon: Linux },
    { name: "Docker", icon: Docker },
    { name: "Nginx", icon: Nginx },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "meyj-solo@foxmail.com",
    tel: "+1 512 000 0000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/meyjsolo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:meyj-solo@foxmail.com",
        icon: Icons.email,
        navbar: true,
      },
      WeChat: {
        name: "WeChat",
        type: "qrcode",
        icon: Icons.wechat,
        navbar: true,
        value: "/contact/wechat-qr.jpeg",
      },
      QQ: {
        name: "QQ",
        type: "qrcode",
        icon: Icons.qq,
        navbar: true,
        value: "/contact/qq-qr.png",
      },
    },
  },

  work: [
    {
      company: "远程 & 自由职业",
      href: "https://meridian.so",
      badges: [],
      location: "Remote",
      title: "Co-founder & Engineer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "2023/04",
      end: undefined,
      description:
        "1. 老旧项目维护。\n2. 外包零活。\n3. 自媒体。\n4. 独立项目开发。",
    },
    {
      company: "中泰证券",
      href: "https://www.zts.com.cn/",
      badges: [],
      location: "",
      title: "Software Engineer",
      logoUrl: "https://wecruit-cdn.hotjob.cn/files/oline/zts/9ffbe502-22fc-4e23-aa1f-2e97fa1bbc18.png",
      start: "2018/10",
      end: "2023/04",
      description:
        "1. 参与需求评审，拆分任务，评估开发周期。\n2. 带领团队完成开发任务，负责代码审核。\n3. 参与系统架构设计，解决开发过程中的疑难问题。\n4. 参与公司技术基础设施的架构设计，环境搭建，为其他团队提供技术支持。\n5. 指导培养新人。",
    },
    {
      company: "华宝证券",
      href: "https://asset.cnhbstock.com:18088/index.html",
      badges: [],
      location: "",
      title: "Software Engineer",
      logoUrl: "https://asset.cnhbstock.com:18088/img/mainLogo.png",
      start: "2016/11",
      end: "2018/10",
      description:
        "1. 负责实时数据计算引擎的设计，开发。\n2. 参与核心系统的架构设计，开发。\n3. 负责大数据系统的搭建，维护及相关数据 ETL 的工作。\n4. 配合运维人员排查解决系统问题，优化相关系统。",
    },
    {
      company: "东软集团",
      href: "https://www.neusoft.com/cn/",
      badges: [],
      location: "",
      title: "Software Engineer",
      logoUrl: "https://www.neusoft.com/cn/wp-content/themes/neusoft/assets/img/logo35-v2026.svg",
      start: "2013/07",
      end: "2016/11",
      description:
        "1. 参与项目设计开发。\n2. 根据需求完成项目功能点的代码实现。\n3. 为项目中的要用到的新技术做技术验证。\n4. 解决项目中的关键问题。",
    },
  ],
  education: [
    {
      school: "中南大学",
      href: "https://www.csu.edu.cn/",
      degree: "本科",
      logoUrl: "https://cdn.urongda.com/images/normal/medium/central-south-university-logo-1024px.png",
      start: "2009",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "Mapgen4",
      href: "https://meyjsolo.github.io/mapgen4/embed.html",
      dates: "2026/08 - Present",
      active: true,
      description:
        "基于开源项目 Mapgen4 打造的奇幻世界地图生成器，用于生成丰富多样的幻想世界地图。我的第一个 Vibe Coding 项目。",
      technologies: [
        "Typescript",
        "JavaScript",
        "HTML",
        "Shell",
        "Vibe Coding"
      ],
      links: [
        {
          type: "Website",
          href: "https://meyjsolo.github.io/mapgen4/embed.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mapgen4.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
