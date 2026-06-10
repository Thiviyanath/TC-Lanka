import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services, projects, process } from '../data/content.js';

export default function Home(){return <main>
  <section className="hero container">
    <div className="hero-copy">
      <motion.div className="pill" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>Sri Lankan Digital Engineering Company</motion.div>
      <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.1}}>Engineering Digital Products from Sri Lanka to the <span>World</span></motion.h1>
      <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.2}}>TC LANKA designs and builds secure, scalable and intelligent digital solutions — from websites and mobile apps to AI, cloud, cybersecurity, automation and access control systems.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.3}}><Link className="btn primary" to="/contact">Start a Project</Link><Link className="btn ghost" to="/services">Explore Services</Link></motion.div>
      <div className="stats"><div><b>25+</b><span>Projects</span></div><div><b>10+</b><span>Services</span></div><div><b>24/7</b><span>Support</span></div><div><b>Global</b><span>Vision</span></div></div>
    </div>
    <motion.div className="hero-board" initial={{opacity:0,scale:.92,rotate:-2}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:.8}}>{['AI','Cloud','Apps','Security','UX/UI','SEO'].map(x=><motion.div className="tech-tile" whileHover={{scale:1.06}} key={x}><strong>{x}</strong><span>TCL Service</span></motion.div>)}</motion.div>
  </section>
  <section className="container section"><SectionTitle eyebrow="WHAT WE DO" title="Premium Digital Solutions" text="A complete digital service ecosystem for startups, SMEs and growing brands."/><div className="service-grid">{services.slice(0,8).map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}</div></section>
  <section className="container section split"><div><SectionTitle eyebrow="WHY TCL" title="Built cleaner, faster and more scalable." text="We combine modern engineering, premium design and business-focused execution."/><ul className="check-list">{['Premium UI with strong brand identity','Secure code and OWASP-aware development','AI, cloud and automation ready architecture','Clear communication and continuous support'].map(x=><li key={x}><CheckCircle2 size={20}/>{x}</li>)}</ul></div><div className="glass-panel"><h3>Our Process</h3>{process.map((p,i)=><div className="process" key={p}><span>0{i+1}</span><p>{p}</p></div>)}</div></section>
  <section className="container section"><SectionTitle eyebrow="CASE STUDIES" title="Featured Digital Work" text="Portfolio style project cards you can replace with your real work."/><div className="project-grid">{projects.map(p=><article className="project-card" key={p.title}><span>{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><ArrowRight/></article>)}</div></section>
  <section className="container cta"><h2>Ready to build your next digital product?</h2><p>Let’s create a premium website, app, AI system or business platform for your brand.</p><Link className="btn primary" to="/contact">Contact TC LANKA</Link></section>
</main>}
