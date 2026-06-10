import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services, projects, process } from "../data/content.js";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  
  console.log("Current language test:", t("hero.badge"));

  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <motion.div
            className="pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t("hero.title")} <span>{t("hero.highlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link className="btn primary" to="/contact">
              {t("buttons.startProject")}
            </Link>

            <Link className="btn ghost" to="/services">
              {t("buttons.exploreServices")}
            </Link>
          </motion.div>

          <div className="stats">
            <div>
              <b>25+</b>
              <span>{t("stats.projects")}</span>
            </div>
            <div>
              <b>10+</b>
              <span>{t("stats.services")}</span>
            </div>
            <div>
              <b>24/7</b>
              <span>{t("stats.support")}</span>
            </div>
            <div>
              <b>{t("stats.global")}</b>
              <span>{t("stats.vision")}</span>
            </div>
          </div>
        </div>

        <motion.div
          className="hero-board"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["AI", "Cloud", "Apps", "Security", "UX/UI", "SEO"].map((x) => (
            <motion.div className="tech-tile" whileHover={{ scale: 1.06 }} key={x}>
              <strong>{x}</strong>
              <span>{t("common.tclService")}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="container section">
        <SectionTitle
          eyebrow={t("homeServices.eyebrow")}
          title={t("homeServices.title")}
          text={t("homeServices.text")}
        />

        <div className="service-grid">
          {services.slice(0, 8).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="container section split">
        <div>
          <SectionTitle
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            text={t("why.text")}
          />

          <ul className="check-list">
            {t("why.points", { returnObjects: true }).map((x) => (
              <li key={x}>
                <CheckCircle2 size={20} />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel">
          <h3>{t("process.title")}</h3>

          {process.map((p, i) => (
            <div className="process" key={p}>
              <span>0{i + 1}</span>
              <p>{t(`process.items.${i}`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionTitle
          eyebrow={t("caseStudies.eyebrow")}
          title={t("caseStudies.title")}
          text={t("caseStudies.text")}
        />

        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="project-card" key={p.title}>
              <span>{t(`projects.${i}.type`)}</span>
              <h3>{t(`projects.${i}.title`)}</h3>
              <p>{t(`projects.${i}.desc`)}</p>
              <ArrowRight />
            </article>
          ))}
        </div>
      </section>

      <section className="container cta">
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.text")}</p>

        <Link className="btn primary" to="/contact">
          {t("cta.button")}
        </Link>
      </section>
    </main>
  );
}