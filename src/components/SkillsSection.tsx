'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SkillsSectionProps {
  fadeInUp: any
  staggerContainer: any
}

const SKILLS_DATA = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL", "HCL", "C#", "R", "HTML/CSS"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Three.js", "Motion", "Redux", "Material-UI"]
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express.js", "FastAPI", "REST API", "MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite"]
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, ECS, S3, Lambda, RDS, CloudFront)", 
      "AWS (CodePipeline, CodeBuild, CodeDeploy)", 
      "AWS (VPC, ALB, SNS, EventBridge, CloudWatch)",
      "AWS (CloudFormation, X-Ray, Detective)",
      "AWS (Organizations, SCPs, GuardDuty, Security Hub)",
      "Terraform", "Docker", "Ansible", "GitHub Actions", 
      "Jenkins", "CI/CD Pipelines", "Blue-Green Deployment", 
      "AWS CDK", "AWS Step Functions", "Infrastructure as Code"
    ]
  },
  {
    category: "AI / Machine Learning",
    items: [
      "AWS SageMaker", "AWS Bedrock", "Amazon Q", "TensorFlow", "PyTorch", 
      "Scikit-learn", "Pandas / NumPy", "LSTM / Neural Networks", 
      "OpenCV / Image Processing", "Deep Learning", "MLOps", "LLM APIs", "RAG Pipelines"
    ]
  },
  {
    category: "Tools & Platforms",
    items: ["Claude Code", "Kiro", "Cursor AI", "GitHub Copilot", "Git", "VS Code", "Jupyter Notebook", "Postman", "Figma", "MCP Protocol", "AI Agent Frameworks", "SonarQube"]
  }
];

const OTHER_SKILLS = {
  category: "Cs Fundamentals",
  items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Computer Networks", "Operating Systems", "Software Engineering", "Database Management Systems"]
};

export default function SkillsSection({ fadeInUp, staggerContainer }: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="w-full py-24 flex flex-col items-center justify-center relative overflow-hidden select-none"
    >
      {/* BACKGROUND GRAPHIC: Futuristic abstract mesh pattern layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
        <div className="w-[800px] h-[800px] rounded-full border border-sky-500/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)] animate-[spin_120s_linear_infinite] absolute" />
        <div className="w-[600px] h-[500px] rounded-full border border-purple-500/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)] rotate-45 absolute" />
        {/* Deep background microdot matrix texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      {/* SECTION HEADER: Adjusted padding-bottom (pb-3) and line-height (leading-tight) to stop font clipping */}
      <motion.div variants={fadeInUp} className="text-center mb-20 z-10 w-full max-w-xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 pb-3 pt-1 leading-tight block drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
          Skills & Technologies
        </h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto mt-2 rounded-full" />
      </motion.div>

      {/* CORE SKILLS CATEGORIES STACK */}
      <div className="w-full max-w-5xl px-6 md:px-12 flex flex-col gap-12 z-10">
        {SKILLS_DATA.map((group) => (
          <div key={group.category} className="w-full flex flex-col items-start">
            {/* Category Subheader Title with thin vertical left highlight line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[3px] h-4 bg-sky-500 rounded-full shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
              <h3 className="text-lg font-bold tracking-wide text-slate-200">
                {group.category}
              </h3>
            </div>

            {/* Badges Flow Track Container */}
            <div className="pt-6 flex flex-wrap gap-2.5 w-full">
              {group.items.map((skill) => (
                <motion.div
                  key={skill}
                  variants={fadeInUp}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="bg-[#080d16]/20 border border-slate-900 hover:border-sky-500/30 rounded-xl text-xs font-sans text-slate-400 hover:text-sky-300 transition-colors duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-sm cursor-default"
                  style={{paddingRight:10, paddingLeft: 10, paddingTop: 5, paddingBottom: 5}}
                >
                  <p>{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* LOWER ROW SECTION: CS Fundamentals Taper */}
        <div className="w-full flex flex-col items-center mt-8 pt-12 border-t border-slate-900/40">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-6 block">
            Other Skills
          </span>
          
          <div className="w-full flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[3px] h-4 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              <h3 className="text-sm font-mono font-bold tracking-wider text-slate-400 uppercase">
                {OTHER_SKILLS.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 w-full">
              {OTHER_SKILLS.items.map((skill) => (
                <motion.div
                  key={skill}
                  variants={fadeInUp}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="px-4 py-2 bg-[#06080f]/60 border border-slate-950 hover:border-purple-500/30 rounded-xl text-xs font-sans text-slate-500 hover:text-purple-300 transition-colors duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.6)] backdrop-blur-sm cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  )
}