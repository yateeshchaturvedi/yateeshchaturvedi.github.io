import SkipToContent from "../components/SkipToContent";
import Navbar from "../components/Navbar";
import ClientEffects from "../components/ClientEffects";
import HeroSection from "../sections/HeroSection";
import TickerSection from "../sections/TickerSection";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import EducationSection from "../sections/EducationSection";
import CertificationsSection from "../sections/CertificationsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import {
  site,
  navItems,
  tickerItems,
  experiences,
  hardSkills,
  softSkills,
  workflow,
  education,
  certifications,
} from "../data/portfolio";

export default function Home() {
  return (
    <>
      <SkipToContent />
      <ClientEffects />

      <canvas id="constellation" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="mesh mesh-a" aria-hidden="true" />
      <div className="mesh mesh-b" aria-hidden="true" />

      <Navbar name={site.name} items={navItems} />

      <main id="main-content" tabIndex="-1">
        <HeroSection site={site} />
        <TickerSection items={tickerItems} />
        <ExperienceSection experiences={experiences} />
        <SkillsSection hardSkills={hardSkills} softSkills={softSkills} workflow={workflow} />
        <EducationSection education={education} />
        <CertificationsSection certifications={certifications} />
        <AboutSection site={site} />
        <ContactSection site={site} />
      </main>

      <FooterSection site={site} />
    </>
  );
}
