export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Video {
  id: string;
  title: string;
  duration: string;
  url: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  instructor: string;
  duration: string;
  level: string;
  lessons: number;
  image: string;
  videos: Video[];
  notes: Note[];
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Understanding Smart Contract Vulnerabilities",
    excerpt:
      "Learn about the most common vulnerabilities in smart contracts and how to identify them during security audits.",
    content: `Smart contracts are self-executing contracts with the terms of the agreement directly written into code. However, they are susceptible to various vulnerabilities that can lead to significant financial losses.

## Common Vulnerabilities

### 1. Reentrancy Attacks
Reentrancy is one of the most devastating vulnerabilities. It occurs when external contract calls are allowed to make new calls to the calling contract before the first execution is complete.

### 2. Integer Overflow/Underflow
Before Solidity 0.8.0, arithmetic operations could overflow or underflow without throwing an error, leading to unexpected behavior.

### 3. Access Control Issues
Improper access control can allow unauthorized users to execute privileged functions.

### 4. Front-Running
Attackers can observe pending transactions and insert their own transactions with higher gas fees to exploit the situation.

## Prevention Strategies

- Use established security patterns like Checks-Effects-Interactions
- Implement proper access control mechanisms
- Use SafeMath libraries for arithmetic operations
- Conduct thorough security audits before deployment

## Conclusion

Security in smart contracts is paramount. Understanding these vulnerabilities is the first step toward building more secure decentralized applications.`,
    author: "Alex Chen",
    date: "2024-12-20",
    category: "Smart Contracts",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Bug Bounty Hunting: A Beginner's Guide",
    excerpt:
      "Everything you need to know to start your journey as a bug bounty hunter in the cybersecurity space.",
    content: `Bug bounty hunting has become one of the most lucrative career paths in cybersecurity. Companies pay researchers to find and report security vulnerabilities in their systems.

## Getting Started+

### Prerequisites
- Basic understanding of web technologies (HTML, CSS, JavaScript)
- Knowledge of common vulnerabilities (OWASP Top 10)
- Familiarity with tools like Burp Suite, OWASP ZAP

### Setting Up Your Environment
1. Install a Linux distribution (Kali Linux recommended)
2. Set up Burp Suite or similar proxy tools
3. Create accounts on bug bounty platforms

## Top Bug Bounty Platforms
- HackerOne
- Bugcrowd
- HackenProof
- Synack

## Tips for Success
- Start with programs that have wide scopes
- Focus on one vulnerability type initially
- Document everything meticulously
- Be patient and persistent

## Conclusion

Bug bounty hunting requires dedication and continuous learning. Start small, build your skills, and gradually tackle more complex targets.`,
    author: "Sarah Mitchell",
    date: "2024-12-18",
    category: "Bug Bounty",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Web3 Security Best Practices",
    excerpt:
      "Discover the essential security practices every Web3 developer should implement in their projects.",
    content: `Web3 represents the next evolution of the internet, but with great innovation comes great responsibility for security.

## Key Security Considerations

### Wallet Security
- Never store private keys in plain text
- Use hardware wallets for significant holdings
- Implement multi-signature wallets for team funds

### Smart Contract Security
- Follow the principle of least privilege
- Implement circuit breakers for emergencies
- Use time locks for sensitive operations

### Frontend Security
- Validate all user inputs
- Implement proper CORS policies
- Use secure communication protocols

## Audit Checklist
1. Code review by multiple developers
2. Automated testing with high coverage
3. Third-party security audit
4. Bug bounty program

## Conclusion

Security in Web3 is everyone's responsibility. By following these best practices, you can significantly reduce the risk of security incidents.`,
    author: "Mike Johnson",
    date: "2024-12-15",
    category: "Web3",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "Penetration Testing Methodologies",
    excerpt:
      "An in-depth look at various penetration testing methodologies used by security professionals.",
    content: `Penetration testing is a critical component of any organization's security strategy. Understanding different methodologies helps ensure comprehensive coverage.

## Popular Methodologies

### OWASP Testing Guide
The OWASP Testing Guide provides a comprehensive framework for web application security testing.

### PTES (Penetration Testing Execution Standard)
PTES defines a complete penetration test lifecycle from pre-engagement to reporting.

### OSSTMM
The Open Source Security Testing Methodology Manual offers a scientific methodology for security testing.

## Testing Phases

1. **Planning & Reconnaissance**
2. **Scanning & Enumeration**
3. **Exploitation**
4. **Post-Exploitation**
5. **Reporting**

## Conclusion

Choosing the right methodology depends on your specific needs and the type of system being tested.`,
    author: "David Park",
    date: "2024-12-12",
    category: "Penetration Testing",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Zero-Day Vulnerabilities Explained",
    excerpt:
      "Understanding zero-day vulnerabilities and their impact on cybersecurity landscape.",
    content: `Zero-day vulnerabilities are among the most dangerous security threats as they are unknown to the software vendor and have no patches available.

## What is a Zero-Day?

A zero-day vulnerability is a software security flaw that is unknown to the vendor. The term "zero-day" refers to the fact that developers have had zero days to fix the problem.

## Detection Challenges

- Traditional signature-based detection fails
- Behavior analysis is the primary detection method
- Machine learning is increasingly used for detection

## Protection Strategies

1. Keep all software updated
2. Use defense-in-depth strategies
3. Implement network segmentation
4. Monitor for anomalous behavior

## Conclusion

While zero-days cannot be completely prevented, proper security hygiene and monitoring can minimize their impact.`,
    author: "Emily Watson",
    date: "2024-12-10",
    category: "Vulnerabilities",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "Blockchain Security Auditing",
    excerpt:
      "A comprehensive guide to auditing blockchain applications and protocols.",
    content: `Blockchain security auditing is essential for ensuring the safety of decentralized applications and the funds they manage.

## Audit Process

### 1. Scope Definition
Define what will be audited and establish clear boundaries.

### 2. Code Review
Manual review of the codebase looking for vulnerabilities.

### 3. Automated Analysis
Use tools like Slither, Mythril, and Echidna for automated testing.

### 4. Testing
Create test cases for identified issues and edge cases.

### 5. Reporting
Document all findings with severity ratings and recommendations.

## Common Findings

- Logic errors
- Access control issues
- Economic vulnerabilities
- Gas optimization issues

## Conclusion

A thorough audit combines automated tools with expert manual review for comprehensive coverage.`,
    author: "James Liu",
    date: "2024-12-08",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    readTime: "9 min read",
  },
];

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Security Masterclass",
    description:
      "Master web application security from beginner to advanced level with hands-on labs.",
    fullDescription: `This comprehensive course covers everything you need to know about web application security. From basic concepts to advanced exploitation techniques, you'll gain the skills needed to identify and fix security vulnerabilities.

## What You'll Learn
- Understanding web security fundamentals
- OWASP Top 10 vulnerabilities in depth
- SQL Injection, XSS, CSRF, and more
- Security testing with Burp Suite
- Writing secure code

## Prerequisites
- Basic understanding of HTML, CSS, JavaScript
- Familiarity with HTTP protocol
- No prior security experience required`,
    instructor: "Dr. Robert Smith",
    duration: "24 hours",
    level: "Beginner to Advanced",
    lessons: 48,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    videos: [
      {
        id: "v1",
        title: "Introduction to Web Security",
        duration: "15:30",
        url: "#",
      },
      {
        id: "v2",
        title: "Understanding HTTP & HTTPS",
        duration: "22:45",
        url: "#",
      },
      {
        id: "v3",
        title: "Setting Up Your Lab Environment",
        duration: "18:20",
        url: "#",
      },
      { id: "v4", title: "SQL Injection Basics", duration: "35:00", url: "#" },
      {
        id: "v5",
        title: "Advanced SQL Injection Techniques",
        duration: "42:15",
        url: "#",
      },
      {
        id: "v6",
        title: "Cross-Site Scripting (XSS)",
        duration: "38:30",
        url: "#",
      },
      {
        id: "v7",
        title: "CSRF Attacks Explained",
        duration: "25:00",
        url: "#",
      },
      {
        id: "v8",
        title: "Authentication Vulnerabilities",
        duration: "45:00",
        url: "#",
      },
    ],
    notes: [
      {
        id: "n1",
        title: "Web Security Cheat Sheet",
        content:
          "Quick reference guide for common web vulnerabilities and their mitigations.",
      },
      {
        id: "n2",
        title: "SQL Injection Payloads",
        content:
          "Collection of SQL injection payloads for different database systems.",
      },
      {
        id: "n3",
        title: "XSS Prevention Guide",
        content:
          "Best practices for preventing cross-site scripting attacks in your applications.",
      },
    ],
  },
  {
    id: "2",
    title: "Ethical Hacking & Penetration Testing",
    description:
      "Learn ethical hacking techniques used by professional penetration testers worldwide.",
    fullDescription: `Become a certified ethical hacker with this practical course. Learn real-world penetration testing techniques and methodologies used by security professionals.

## Course Highlights
- Comprehensive penetration testing methodology
- Network and system hacking
- Web application testing
- Wireless security
- Social engineering

## Who Is This For?
- IT professionals wanting to transition to security
- Developers interested in security testing
- System administrators
- Anyone interested in ethical hacking`,
    instructor: "Mark Anderson",
    duration: "32 hours",
    level: "Intermediate",
    lessons: 64,
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    videos: [
      {
        id: "v1",
        title: "Penetration Testing Methodology",
        duration: "28:00",
        url: "#",
      },
      {
        id: "v2",
        title: "Reconnaissance Techniques",
        duration: "35:20",
        url: "#",
      },
      {
        id: "v3",
        title: "Network Scanning with Nmap",
        duration: "42:00",
        url: "#",
      },
      {
        id: "v4",
        title: "Vulnerability Assessment",
        duration: "38:15",
        url: "#",
      },
      { id: "v5", title: "Exploitation Basics", duration: "45:30", url: "#" },
      { id: "v6", title: "Metasploit Framework", duration: "55:00", url: "#" },
      { id: "v7", title: "Post-Exploitation", duration: "40:00", url: "#" },
      { id: "v8", title: "Report Writing", duration: "30:00", url: "#" },
    ],
    notes: [
      {
        id: "n1",
        title: "Nmap Command Reference",
        content: "Complete reference for Nmap scanning techniques and options.",
      },
      {
        id: "n2",
        title: "Metasploit Cheat Sheet",
        content:
          "Essential Metasploit commands and modules for penetration testing.",
      },
      {
        id: "n3",
        title: "Report Template",
        content: "Professional penetration testing report template.",
      },
    ],
  },
  {
    id: "3",
    title: "Smart Contract Security & Auditing",
    description:
      "Deep dive into blockchain security with focus on Solidity smart contract auditing.",
    fullDescription: `Master the art of smart contract security and become a blockchain security auditor. This course covers everything from Solidity basics to advanced vulnerability analysis.

## Topics Covered
- Solidity programming fundamentals
- Common smart contract vulnerabilities
- Manual code review techniques
- Automated security tools
- Writing audit reports

## Career Opportunities
- Smart contract auditor
- Blockchain security researcher
- DeFi security engineer`,
    instructor: "Lisa Chen",
    duration: "28 hours",
    level: "Advanced",
    lessons: 56,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    videos: [
      {
        id: "v1",
        title: "Solidity Fundamentals Review",
        duration: "32:00",
        url: "#",
      },
      { id: "v2", title: "Reentrancy Attacks", duration: "45:00", url: "#" },
      {
        id: "v3",
        title: "Integer Overflow/Underflow",
        duration: "28:30",
        url: "#",
      },
      {
        id: "v4",
        title: "Access Control Vulnerabilities",
        duration: "35:15",
        url: "#",
      },
      { id: "v5", title: "Flash Loan Attacks", duration: "50:00", url: "#" },
      {
        id: "v6",
        title: "Using Slither & Mythril",
        duration: "42:00",
        url: "#",
      },
      {
        id: "v7",
        title: "Manual Audit Walkthrough",
        duration: "65:00",
        url: "#",
      },
      { id: "v8", title: "Writing Audit Reports", duration: "38:00", url: "#" },
    ],
    notes: [
      {
        id: "n1",
        title: "Solidity Security Patterns",
        content: "Design patterns for writing secure smart contracts.",
      },
      {
        id: "n2",
        title: "Vulnerability Checklist",
        content: "Comprehensive checklist for smart contract security audits.",
      },
      {
        id: "n3",
        title: "DeFi Attack Vectors",
        content: "Common attack vectors in decentralized finance protocols.",
      },
    ],
  },
  {
    id: "4",
    title: "Bug Bounty Hunting Bootcamp",
    description:
      "From zero to hero in bug bounty hunting with practical techniques and real-world examples.",
    fullDescription: `Start earning money through bug bounty programs. This bootcamp teaches you everything from setting up your environment to submitting your first successful vulnerability report.

## What You'll Master
- Bug bounty platforms overview
- Reconnaissance techniques
- Vulnerability identification
- Report writing
- Getting paid

## Success Stories
Learn from hunters who have earned over $1M in bug bounties.`,
    instructor: "Tom Williams",
    duration: "20 hours",
    level: "Beginner",
    lessons: 40,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    videos: [
      {
        id: "v1",
        title: "Bug Bounty Platforms Overview",
        duration: "20:00",
        url: "#",
      },
      {
        id: "v2",
        title: "Setting Up Your Hunting Environment",
        duration: "35:00",
        url: "#",
      },
      { id: "v3", title: "Subdomain Enumeration", duration: "28:00", url: "#" },
      {
        id: "v4",
        title: "Finding Your First Bug",
        duration: "45:00",
        url: "#",
      },
      { id: "v5", title: "IDOR Vulnerabilities", duration: "38:00", url: "#" },
      { id: "v6", title: "Business Logic Flaws", duration: "42:00", url: "#" },
      {
        id: "v7",
        title: "Writing Effective Reports",
        duration: "30:00",
        url: "#",
      },
      {
        id: "v8",
        title: "Getting Paid & Building Reputation",
        duration: "25:00",
        url: "#",
      },
    ],
    notes: [
      {
        id: "n1",
        title: "Recon Methodology",
        content:
          "Step-by-step reconnaissance methodology for bug bounty hunting.",
      },
      {
        id: "n2",
        title: "Tools List",
        content: "Essential tools every bug bounty hunter should have.",
      },
      {
        id: "n3",
        title: "Report Templates",
        content: "Templates for writing professional vulnerability reports.",
      },
    ],
  },
  {
    id: "5",
    title: "Network Security Fundamentals",
    description:
      "Build a strong foundation in network security concepts and practices.",
    fullDescription: `Understand how networks work and how to secure them. This course covers networking fundamentals, security protocols, and hands-on labs.

## Course Content
- TCP/IP fundamentals
- Network security architectures
- Firewall configuration
- VPN and encryption
- Intrusion detection systems

## Hands-On Labs
Practice with real network equipment and simulated environments.`,
    instructor: "Jennifer Brown",
    duration: "18 hours",
    level: "Beginner",
    lessons: 36,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    videos: [
      { id: "v1", title: "Network Fundamentals", duration: "25:00", url: "#" },
      { id: "v2", title: "TCP/IP Deep Dive", duration: "40:00", url: "#" },
      {
        id: "v3",
        title: "Common Network Attacks",
        duration: "35:00",
        url: "#",
      },
      { id: "v4", title: "Firewall Basics", duration: "30:00", url: "#" },
      { id: "v5", title: "VPN Configuration", duration: "38:00", url: "#" },
      { id: "v6", title: "Wireless Security", duration: "42:00", url: "#" },
      { id: "v7", title: "IDS/IPS Systems", duration: "35:00", url: "#" },
      { id: "v8", title: "Network Monitoring", duration: "28:00", url: "#" },
    ],
    notes: [
      {
        id: "n1",
        title: "Network Protocols Reference",
        content: "Quick reference for common network protocols and ports.",
      },
      {
        id: "n2",
        title: "Firewall Rules Guide",
        content: "Best practices for configuring firewall rules.",
      },
      {
        id: "n3",
        title: "Wireshark Cheat Sheet",
        content: "Essential Wireshark filters and techniques.",
      },
    ],
  },
  {
    id: "6",
    title: "Mobile Application Security",
    description:
      "Learn to find and fix security vulnerabilities in iOS and Android applications.",
    fullDescription: `Mobile apps are everywhere, and so are their vulnerabilities. This course teaches you how to assess the security of mobile applications on both iOS and Android platforms.

## What's Covered
- Mobile app architecture
- Static and dynamic analysis
- Reverse engineering
- API security testing
- Secure coding practices

## Tools You'll Use
- Frida, Objection
- APKTool, Jadx
- MobSF
- Burp Suite Mobile`,
    instructor: "Kevin Zhang",
    duration: "22 hours",
    level: "Intermediate",
    lessons: 44,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    videos: [
      {
        id: "v1",
        title: "Mobile Security Overview",
        duration: "22:00",
        url: "#",
      },
      { id: "v2", title: "Android App Structure", duration: "30:00", url: "#" },
      { id: "v3", title: "iOS App Structure", duration: "28:00", url: "#" },
      {
        id: "v4",
        title: "Static Analysis Techniques",
        duration: "45:00",
        url: "#",
      },
      {
        id: "v5",
        title: "Dynamic Analysis with Frida",
        duration: "55:00",
        url: "#",
      },
      { id: "v6", title: "API Security Testing", duration: "40:00", url: "#" },
      {
        id: "v7",
        title: "Certificate Pinning Bypass",
        duration: "35:00",
        url: "#",
      },
      {
        id: "v8",
        title: "Secure Mobile Development",
        duration: "32:00",
        url: "#",
      },
    ],
    notes: [
      {
        id: "n1",
        title: "Android Security Checklist",
        content: "Security testing checklist for Android applications.",
      },
      {
        id: "n2",
        title: "iOS Security Checklist",
        content: "Security testing checklist for iOS applications.",
      },
      {
        id: "n3",
        title: "Frida Scripts",
        content: "Useful Frida scripts for mobile app analysis.",
      },
    ],
  },
];

export const getBlogById = (id: string): Blog | undefined => {
  return blogs.find((blog) => blog.id === id);
};

export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === id);
};
