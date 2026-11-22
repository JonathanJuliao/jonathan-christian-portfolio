import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DownloadCv from "../components/DownloadCv";
import ProjectCard from "../components/ProjectCard";
import {
  certifications,
  education,
  experience,
  featuredIds,
  marquee,
  profile,
  projects,
  services,
  skills,
} from "../data";

const certYears = certifications.reduce((groups, item) => {
  const year = item.date.slice(-4);
  const group = groups.find((entry) => entry.year === year);
  if (group) group.items.push(item);
  else groups.push({ year, items: [item] });
  return groups;
}, []);

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Count({ to, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / 1100);
          const eased = 1 - (1 - progress) ** 3;
          setValue(Math.round(to * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Home() {
  const featured = featuredIds.map((id) => projects.find((project) => project.id === id));
  const loop = [...marquee, ...marquee];

  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-a" aria-hidden="true" />
        <div className="orb orb-b" aria-hidden="true" />
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <motion.p className="eyebrow" variants={fade} initial="hidden" animate="show" custom={0.05}>
              <i className="pulse" />
              {profile.availability} · {profile.location}
            </motion.p>
            <motion.p className="kicker" variants={fade} initial="hidden" animate="show" custom={0.12}>
              &lt; Olá, eu sou /&gt;
            </motion.p>
            <motion.h1 variants={fade} initial="hidden" animate="show" custom={0.18}>
              {profile.first}
              <span>{profile.last}</span>
            </motion.h1>
            <motion.p className="role-line" variants={fade} initial="hidden" animate="show" custom={0.28}>
              Tech Lead <em>/</em> Full Stack Developer
            </motion.p>
            <motion.p className="lede" variants={fade} initial="hidden" animate="show" custom={0.36}>
              Sou CTO na Índice Digital. Há mais de cinco anos tiro o produto do código e coloco no ar,
              em PHP, Laravel, React, Vue, Node.js e React Native, até a operação usar no dia a dia. Tenho
              22 anos.
            </motion.p>
            <motion.div className="hero-actions" variants={fade} initial="hidden" animate="show" custom={0.46}>
              <Link className="btn btn-lime" to="/projetos">
                Ver projetos
              </Link>
              <DownloadCv className="btn btn-ghost">Baixar currículo</DownloadCv>
            </motion.div>
            <motion.div className="socials" variants={fade} initial="hidden" animate="show" custom={0.54}>
              <span>Onde me encontrar</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>E-mail</a>
            </motion.div>
          </div>

          <motion.aside
            className="terminal"
            aria-label="Resumo técnico"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="orbit" aria-hidden="true">
              <span />
            </div>
            <div className="terminal-window">
              <header>
                <i />
                <i />
                <i />
                <span>jonathan.js</span>
              </header>
              <pre>
                <code>
                  <span className="c-dim">01</span> <span className="c-key">const</span> jonathan = {"{"}
                  {"\n"}
                  <span className="c-dim">02</span>   role: <span className="c-str">"Tech Lead"</span>,
                  {"\n"}
                  <span className="c-dim">03</span>   stack: [<span className="c-str">"PHP"</span>, <span className="c-str">"Laravel"</span>, <span className="c-str">"Node.js"</span>,{"\n"}
                  <span className="c-dim">04</span>     <span className="c-str">"React"</span>, <span className="c-str">"Vue.js"</span>, <span className="c-str">"TypeScript"</span>,{"\n"}
                  <span className="c-dim">05</span>     <span className="c-str">"Python"</span>, <span className="c-str">"React Native"</span>],
                  {"\n"}
                  <span className="c-dim">06</span>   now: <span className="c-str">"Índice Digital"</span>,
                  {"\n"}
                  <span className="c-dim">07</span>   db: [<span className="c-str">"MySQL"</span>, <span className="c-str">"Oracle"</span>, <span className="c-str">"MongoDB"</span>,{"\n"}
                  <span className="c-dim">08</span>     <span className="c-str">"Firebase"</span>, <span className="c-str">"Supabase"</span>],
                  {"\n"}
                  <span className="c-dim">09</span>   base: <span className="c-str">"Betim, MG"</span>,
                  {"\n"}
                  <span className="c-dim">10</span>   ship: <span className="c-str">"Docker · Git · CI/CD"</span>,
                  {"\n"}
                  <span className="c-dim">11</span> {"}"};<span className="caret" />
                </code>
              </pre>
            </div>
          </motion.aside>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>

      <section className="section tight">
        <div className="wrap stats">
          <article>
            <strong>
              <Count to={5} suffix="+" />
            </strong>
            <span>anos de experiência</span>
          </article>
          <article>
            <strong>
              <Count to={8} />
            </strong>
            <span>produtos em produção</span>
          </article>
          <article>
            <strong>
              <Count to={7} />
            </strong>
            <span>anos de formação contínua</span>
          </article>
          <article>
            <strong>
              <Count to={certifications.length} />
            </strong>
            <span>certificações</span>
          </article>
        </div>
      </section>

      <section className="section" id="sobre">
        <div className="wrap about-grid">
          <div className="portrait">
            <div className="portrait-ring" aria-hidden="true" />
            <figure className="portrait-card">
              <img src="/jonathan.jpg" alt="Jonathan Christian" />
              <figcaption>CTO · Tech Lead · Full Stack</figcaption>
            </figure>
          </div>
          <div>
            <p className="section-kicker">
              <span>01</span> Sobre
            </p>
            <h2>O código é o meio. O produto rodando é o resultado.</h2>
            <p className="prose">
              Sou Jonathan Christian. Atuo como CTO na Índice Digital e como diretor de tecnologia na
              Heaven Sender. Coordeno os projetos do esboço à entrega, e sigo no suporte e na melhoria
              contínua depois que o produto entra no ar. No dia a dia, lidero o time, decido o que entra
              na sprint e mantenho a mão na massa em PHP, Laravel, Node.js, Python e React Native. Também
              desenho APIs REST, arquitetura de dados, Docker, Git, CI/CD e integrações com LLMs.
            </p>
            <ul className="checks">
              <li>CTO na Índice Digital desde setembro de 2025.</li>
              <li>Diretor de tecnologia na Heaven Sender, no CRM de vendas da operação.</li>
              <li>Na Distribuidora GAMA, saí de trainee e cheguei a Tech Lead.</li>
              <li>Bacharel em Ciência da Computação pela Estácio.</li>
            </ul>
            <Link className="btn btn-ghost" to="/#trajetoria">
              Ver trajetória
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="atuacao">
        <div className="wrap">
          <div className="section-head">
            <p className="section-kicker">
              <span>02</span> Atuação
            </p>
            <h2>O que eu coloco de pé.</h2>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <span>{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                {service.points && (
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <div className="section-head">
            <p className="section-kicker">
              <span>03</span> Skills
            </p>
            <h2>Tecnologias com as quais eu entrego.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((group, index) => (
              <motion.article
                className={group.title === "IA" ? "skill-card is-dense" : "skill-card"}
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <header>
                  <span>{group.index}</span>
                  <h3>{group.title}</h3>
                </header>
                {group.level && <p className="skill-level">{group.level}</p>}
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projetos-destaque">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <p className="section-kicker">
                <span>04</span> Projetos
              </p>
              <h2>Alguns produtos que estão no ar.</h2>
            </div>
            <Link className="btn btn-ghost" to="/projetos">
              Ver todos os projetos
            </Link>
          </div>
          <div className="project-grid">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="trajetoria">
        <div className="wrap">
          <div className="section-head">
            <p className="section-kicker">
              <span>05</span> Trajetória
            </p>
            <h2>De aprendiz a CTO, sem pular a entrega.</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="job" key={job.company}>
                <div className="job-when">
                  <strong>{job.period}</strong>
                  <span>{job.place}</span>
                </div>
                <div className="job-rail" aria-hidden="true">
                  <span />
                </div>
                <div className="job-body">
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <p>{job.text}</p>
                  {job.roles && (
                    <ul className="role-list">
                      {job.roles.map((role) => (
                        <li key={role.title}>
                          <div>
                            <strong>{role.title}</strong>
                            {role.note ? <p>{role.note}</p> : null}
                          </div>
                          <span>{role.period}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="formacao">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <p className="section-kicker">
                <span>06</span> Formação
              </p>
              <h2>Estudo contínuo, do técnico ao bacharelado.</h2>
            </div>
            <p className="count-pill">
              {education.length} formações · {certifications.length} cursos
            </p>
          </div>

          <div className="edu-row">
            {education.map((item) => (
              <article className="edu-card" key={item.school}>
                <p>{item.school}</p>
                <h3>{item.course}</h3>
                <span>{item.period}</span>
              </article>
            ))}
          </div>

          <div className="cert-board">
            {certYears.map((group) => (
              <div className="cert-year" key={group.year}>
                <p className="cert-year-label">{group.year}</p>
                <div className="cert-grid">
                  {group.items.map((item) => (
                    <a
                      className="cert-link"
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="cert-meta">
                        <em>{item.issuer}</em>
                        <time>{item.date}</time>
                      </span>
                      <strong>{item.title}</strong>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
