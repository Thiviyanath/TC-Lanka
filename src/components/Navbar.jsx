import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const links=[['Home','/'],['About','/about'],['Services','/services'],['Portfolio','/portfolio'],['Careers','/careers'],['Blog','/blog']];
export default function Navbar(){return <motion.header className="nav-shell" initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.7}}><Link className="brand" to="/">TC<span>LANKA</span></Link><nav>{links.map(([n,p])=><NavLink key={n} to={p} className={({isActive})=>isActive?'active':''}>{n}</NavLink>)}</nav><Link className="nav-cta" to="/contact">Start Project</Link></motion.header>}
