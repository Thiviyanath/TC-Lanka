import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
export default function ServiceCard({service,index}){const Icon=service.icon;return <motion.article className="service-card" initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:index*.05}} whileHover={{y:-10}}><div className="icon"><Icon size={28}/></div><h3>{service.title}</h3><p>{service.desc}</p><a>Explore service <ArrowUpRight size={16}/></a></motion.article>}
