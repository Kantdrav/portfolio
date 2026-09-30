import { useState } from 'react'
import { ArrowUpRight, Check, Download, Github, Linkedin, Mail, Menu, MoveUpRight, Send, X } from 'lucide-react'
import { certifications, education, profile, projects, skillGroups, timeline } from './data'
import './App.css'

function SectionLabel({ index, children }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const downloadResume = () => {
    const resume = `${profile.name}\n${profile.role}\n\n${profile.intro}\n\n${profile.email}\n${profile.github}\n${profile.linkedin}`
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([resume], { type: 'text/plain' }))
    link.download = 'Ravi-Kant-Resume.txt'
    link.click()
    URL.revokeObjectURL(link.href)
  }

  const submitContact = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`${form.get('message')}\n\nReply to: ${form.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return <div className="site-shell">
    <header className="topbar"><a className="wordmark" href="#top" aria-label="Ravi Kant home">RK<span>.</span></a><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{['about', 'work', 'experience', 'contact'].map((item) => <a href={`#${item}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav><a className="header-contact" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a><button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></header>
    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy"><p className="eyebrow reveal">{profile.availability} <span className="status-dot" /></p><h1 className="reveal delay-one">Engineering the <em>invisible</em> systems.</h1><p className="hero-intro reveal delay-two">{profile.intro} I&apos;m Ravi Kant, an engineering student who likes the hard parts: clean APIs, capable models, and hardware that responds when it matters.</p><div className="hero-actions reveal delay-three"><a className="button button-primary" href="#work">View projects <ArrowUpRight size={16} /></a><button className="button button-ghost" type="button" onClick={downloadResume}>Download resume <Download size={16} /></button></div><div className="social-row reveal delay-three"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><span className="scroll-note">Scroll to explore <span>↓</span></span></div></div><div className="hero-visual" aria-label="Abstract technical network graphic" role="img"><div className="visual-grid" /><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-node node-core"><span>RK</span></div><div className="visual-node node-top">AI</div><div className="visual-node node-right">API</div><div className="visual-node node-bottom">I/O</div><div className="connector connector-one" /><div className="connector connector-two" /><div className="connector connector-three" /><span className="visual-caption">SYSTEMS / 01</span></div></section>
      <section id="about" className="about section-wrap split-section"><SectionLabel index="01">About me</SectionLabel><div className="about-content"><h2>Curious about how things work. Serious about making them <em>work well.</em></h2><div className="about-grid"><p>I work across layers: from a sensor reading on an ESP32 to a backend service that turns it into a useful decision. That range keeps me grounded in the details and honest about the trade-offs.</p><div className="about-facts"><div><span>Based in</span><strong>{profile.location}</strong></div><div><span>Focus</span><strong>Systems with purpose</strong></div></div></div></div></section>
      <section className="skills section-wrap"><div className="skills-heading"><SectionLabel index="02">Toolkit</SectionLabel><p>A practical stack for building, shipping, and understanding the whole system.</p></div><div className="skill-list">{skillGroups.map((group) => <div className="skill-group" key={group.label}><span>{group.label}</span><div>{group.items.map((skill) => <b key={skill}>{skill}</b>)}</div></div>)}</div></section>
      <section id="work" className="work section-wrap"><div className="work-heading"><SectionLabel index="03">Selected work</SectionLabel><a href={profile.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a></div><div className="project-list">{projects.map((project) => <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}><div className="project-index">{project.number}</div><div className="project-main"><p className="project-kicker">{project.kicker}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul>{project.achievements.map((achievement) => <li key={achievement}><Check size={14} />{achievement}</li>)}</ul><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={19} /></a>{project.demo && <a href={project.demo} aria-label={`View ${project.title} demo`}><MoveUpRight size={19} /></a>}</div></article>)}</div></section>
      <section id="experience" className="experience section-wrap split-section"><SectionLabel index="04">Experience / milestones</SectionLabel><div className="timeline">{timeline.map((item) => <div className="timeline-item" key={item.title}><span className="timeline-year">{item.year}</span><div><p>{item.type}</p><h3>{item.title}</h3><span>{item.detail}</span></div></div>)}</div></section>
      <section className="credentials section-wrap"><div className="credential-column"><SectionLabel index="05">Education</SectionLabel>{education.map((item) => <div className="credential-item" key={item.degree}><span className="credential-mark">+</span><div><h3>{item.degree}</h3><p>{item.school}</p><span>{item.meta}</span></div></div>)}</div><div className="credential-column"><SectionLabel index="06">Certifications</SectionLabel>{certifications.map((item) => <div className="credential-item" key={item.name}><span className="credential-mark">↗</span><div><h3>{item.name}</h3><span>{item.issuer}</span></div></div>)}</div></section>
      <section id="contact" className="contact section-wrap"><div className="contact-intro"><SectionLabel index="07">Get in touch</SectionLabel><h2>Have a problem worth <em>solving?</em></h2><p>I&apos;m always interested in thoughtful products, challenging systems, and people who care about the details.</p><a className="email-link" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a></div><form className="contact-form" onSubmit={submitContact}><label htmlFor="name">Your name<input id="name" name="name" required placeholder="Jane Doe" /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" required placeholder="jane@company.com" /></label><label htmlFor="message">What&apos;s on your mind?<textarea id="message" name="message" required rows="4" placeholder="Tell me a little about the project..." /></label><button className="button button-primary" type="submit">{sent ? 'Opening your email client' : 'Send message'} <Send size={16} /></button></form></section>
    </main>
    <footer className="footer section-wrap"><a className="wordmark" href="#top">RK<span>.</span></a><span>© {new Date().getFullYear()} Ravi Kant</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </div>
}

export default App
