import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X
} from 'lucide-react';
import { useState } from 'react';
import profileImage from './Assets/profile.jpg';
import { portfolio } from './content';

const SectionLabel = ({ children }) => (
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-clay">
    {children}
  </p>
);

const SectionHeader = ({ label, title, text }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <SectionLabel>{label}</SectionLabel>
    <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
    {text && <p className="mt-4 text-muted">{text}</p>}
  </div>
);

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-ivory/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-xl text-ink">
          {portfolio.name}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {portfolio.nav.map((item) => (
            <a key={item} className="nav-link" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="icon-button md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-ink/10 bg-ivory px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {portfolio.nav.map((item) => (
              <a
                key={item}
                className="rounded-full px-3 py-2 text-sm text-ink transition hover:bg-linen"
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section-padding pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-sm text-muted shadow-sm">
            <Sparkles size={16} className="text-clay" />
            {portfolio.role}
          </div>
          <h1 className="max-w-3xl font-display text-5xl leading-tight text-ink md:text-7xl">
            Hi, I am {portfolio.name}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {portfolio.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="primary-button" href="#projects">
              View Work <ArrowUpRight size={18} />
            </a>
            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="animate-float md:justify-self-end">
          <div className="profile-frame">
            <img
              src={profileImage}
              alt={`${portfolio.name} portrait`}
              className="profile-image"
            />
            <div className="profile-location">
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={17} className="text-moss" />
                {portfolio.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>{portfolio.about.heading}</SectionLabel>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Thoughtful work, clean details, and a friendly process.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-muted">{portfolio.about.body}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {portfolio.about.stats.map((stat) => (
              <div className="soft-card text-center" key={stat.label}>
                <p className="font-display text-4xl text-ink">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="Tools I Use"
          title="A practical toolkit for technical design and visualization."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {portfolio.skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-padding bg-ivory">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader label="Experience" title="Technical design, client support, and production detail." />
        <div className="space-y-5">
          {portfolio.experience.map((job) => (
            <article className="timeline-card" key={`${job.title}-${job.company}`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linen text-clay">
                <BriefcaseBusiness size={21} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-ink">{job.title}</h3>
                  <span className="shrink-0 text-sm font-medium text-moss sm:ml-6 sm:text-right">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-clay">
                  {job.company}
                </p>
                {job.details ? (
                  <ul className="mt-4 space-y-2 text-muted">
                    {job.details.map((detail) => (
                      <li className="experience-detail" key={detail}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 leading-7 text-muted">{job.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="Projects"
          title="Selected technical drawings and joinery works."
          text="Selected renderings, production details, and technical drawing packages showcasing recent work completed"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted">{project.description}</p>
                <a
                  className="project-link"
                  href={project.pdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Drawing Set <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding bg-ink text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-clay">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl">Let us build something clear and memorable.</h2>
          <p className="mt-5 max-w-xl leading-8 text-ivory/75">
            Open to freelance projects, collaborations, and creative opportunities. Let&apos;s create something exceptional together.
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap gap-3">
            <a className="contact-link" href={`mailto:${portfolio.email}`}>
              <Mail size={19} />
              {portfolio.email}
            </a>
            {portfolio.phoneNumbers.map((phone) => (
              <a className="contact-link" href={`tel:${phone}`} key={phone}>
                <Phone size={19} />
                {phone}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {portfolio.socials.map((social) => (
              <a className="social-link" href={social.href} key={social.label}>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-ink px-5 pb-8 text-center text-sm text-ivory/55">
        Copyright {new Date().getFullYear()} {portfolio.name}. All rights reserved.
      </footer>
    </>
  );
}
