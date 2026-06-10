import { motion } from 'framer-motion';
export default function SectionTitle({eyebrow,title,text}){return <motion.div className="section-title" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65}}><span>{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</motion.div>}
