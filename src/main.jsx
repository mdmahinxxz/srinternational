import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cable,
  CircuitBoard,
  Globe2,
  Home,
  LockKeyhole,
  MapPin,
  MonitorUp,
  Network,
  ShieldCheck,
  Sparkles,
  Wifi,
} from 'lucide-react';
import meshNetworkingImage from './assets/mesh-networking.jpg';
import partnerCollaborationImage from './assets/partner-collaboration.jpg';
import smartHomeHero from './assets/sr-smart-home-hero.jpg';
import smartHomeImage from './assets/smart-home-ecosystem.jpg';
import workspaceSetupImage from './assets/workspace-setup.jpg';
import './styles.css';

const sizeOptions = [
  { label: 'Under 1,500 sq ft', base: 5000 },
  { label: '1,500 - 2,500 sq ft', base: 10000 },
  { label: 'Above 2,500 sq ft', base: 15000 },
];

const estimatorServices = [
  { id: 'smart', label: 'Smart Lighting & Locks', price: 15000 },
  { id: 'mesh', label: 'Full-Home Mesh Wi-Fi Network', price: 8000 },
  { id: 'workspace', label: 'Premium Workspace Wire Management', price: 4000 },
];

const serviceCards = [
  {
    icon: Home,
    title: 'Smart Home Ecosystems',
    eyebrow: 'HomeKit + Google Home ready',
    image: smartHomeImage,
    imageAlt: 'Smart home switches, automated curtains, and biometric lock in a luxury apartment',
    points: [
      'Sonoff, Tuya, and Aqara integrations tuned for premium apartments',
      'Smart lighting scenes, smart curtain automation, and biometric lock flows',
      'Reliable handover for families, household staff, and security routines',
    ],
  },
  {
    icon: Network,
    title: 'Next-Gen Mesh Networking',
    eyebrow: 'Concrete-wall coverage engineering',
    image: meshNetworkingImage,
    imageAlt: 'Structured Cat6 cabling and mesh networking hardware in a premium apartment installation',
    points: [
      'Zero dead-zone planning for duplexes, large flats, and thick Dhaka walls',
      'Cat6 structured cabling with discreet routing and clean rack discipline',
      'TP-Link Deco and Ubiquiti UniFi deployments for stable video calls and streaming',
    ],
  },
  {
    icon: MonitorUp,
    title: 'Elite Workspace Setup',
    eyebrow: 'Executive-grade desk systems',
    image: workspaceSetupImage,
    imageAlt: 'Premium dual-monitor workspace with hidden cable management and NAS storage',
    points: [
      'Premium dual-monitor mounting aligned for long work sessions',
      'Invisible wire management for polished home offices and studios',
      'M1, M2, and M3 MacBook ecosystem optimization with localized NAS cloud storage',
    ],
  },
];

function formatBDT(amount) {
  return new Intl.NumberFormat('en-BD').format(amount);
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1].label);
  const [selectedServices, setSelectedServices] = useState(['smart', 'mesh']);

  const total = useMemo(() => {
    const base = sizeOptions.find((option) => option.label === selectedSize)?.base ?? 0;
    const addOns = estimatorServices
      .filter((service) => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
    return base + addOns;
  }, [selectedServices, selectedSize]);

  const toggleService = (id) => {
    setSelectedServices((current) =>
      current.includes(id) ? current.filter((serviceId) => serviceId !== id) : [...current, id],
    );
  };

  return (
    <main className="site-shell min-h-screen overflow-hidden bg-void text-white">
      <nav className="nav-enter fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <button
            className="group flex items-center gap-3 text-left"
            onClick={() => scrollToSection('hero')}
            aria-label="Scroll to hero"
          >
            <span className="brand-pulse grid h-10 w-10 place-items-center rounded border border-neon/40 bg-neon/10 shadow-neon">
              <CircuitBoard className="h-5 w-5 text-neon" />
            </span>
            <span>
              <span className="block font-display text-sm font-bold tracking-[0.22em] text-white">
                SR INTERNATIONAL LTD.
              </span>
              <span className="text-xs text-steel">Tech & Smart Home Installation</span>
            </span>
          </button>

          <div className="hidden items-center gap-7 text-sm font-medium text-steel md:flex">
            <button className="hover:text-white" onClick={() => scrollToSection('services')}>Services</button>
            <button className="hover:text-white" onClick={() => scrollToSection('estimator')}>Estimator</button>
            <button className="hover:text-white" onClick={() => scrollToSection('partners')}>Partners</button>
            <button className="hover:text-white" onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative scroll-mt-24 px-5 pt-24 sm:px-6 lg:px-8">
        <div className="hero-aurora absolute inset-0 bg-[radial-gradient(circle_at_68%_25%,rgba(0,229,255,0.22),transparent_34%),linear-gradient(135deg,rgba(20,32,51,0.8),transparent_42%)]" />
        <div className="orbital-glow absolute left-1/2 top-24 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-neon/10 opacity-60 blur-3xl" />
        <div className="relative mx-auto grid min-h-[calc(90vh-6rem)] max-w-7xl items-center gap-10 pb-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="reveal-up mb-7 inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-ice">
              <BadgeCheck className="h-4 w-4 text-neon" />
              Headquartered in Uttara | Serving Premium Dhaka Locations
            </div>
            <h1 className="reveal-up delay-100 max-w-5xl font-display text-4xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Future-Proof Your Living Space. Seamless Automation for Premium Dhaka Homes.
            </h1>
            <p className="reveal-up delay-200 mt-6 max-w-3xl text-base leading-8 text-steel sm:text-lg">
              Professional smart home integration, next-gen mesh networking, and elite workspace setups
              engineered for Dhaka&apos;s concrete architectures by SR INTERNATIONAL LTD.
            </p>
            <div className="reveal-up delay-300 mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                className="cta-shine group inline-flex items-center justify-center gap-3 bg-neon px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-void shadow-neon transition hover:-translate-y-1 hover:bg-neon/90"
                onClick={() => scrollToSection('estimator')}
              >
                Estimate Your Setup
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <button
                className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:border-neon hover:bg-neon/10 hover:text-neon"
                onClick={() => scrollToSection('partners')}
              >
                B2B Partnership
              </button>
            </div>
          </div>

          <div className="reveal-up delay-400 relative">
            <div className="absolute inset-8 border border-neon/20 bg-neon/5 blur-2xl" />
            <div className="panel-float hero-image-frame relative border border-white/10 bg-panel/75 p-3 shadow-panel backdrop-blur">
              <div className="relative min-h-[28rem] overflow-hidden border border-white/10">
                <img
                  src={smartHomeHero}
                  alt="Luxury smart home interior with discreet automation, mesh networking, and executive workspace setup"
                  className="h-full min-h-[28rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,25,0.08),rgba(11,15,25,0.74)),linear-gradient(90deg,rgba(11,15,25,0.72),transparent_58%)]" />
                <div className="absolute left-4 top-4 border border-neon/30 bg-void/72 px-4 py-3 backdrop-blur-md">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-neon">Live Environment</p>
                  <p className="mt-1 text-xs text-ice/75">Automation, networking, and workspace systems in one premium installation path.</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  ['Uttara', 'Head Office response zone'],
                  ['Gulshan', 'Luxury apartment automation'],
                  ['Banani', 'Executive workspace setups'],
                  ['Dhanmondi', 'Mesh networking upgrades'],
                ].map(([area, detail]) => (
                  <div key={area} className="scan-card border border-white/10 bg-white/[0.04] p-4">
                    <MapPin className="mb-5 h-5 w-5 text-neon" />
                    <p className="font-display text-lg font-bold">{area}</p>
                    <p className="mt-2 text-sm leading-6 text-steel">{detail}</p>
                  </div>
                ))}
              </div>
              <div className="signal-strip mt-3 border border-neon/20 bg-neon/10 p-5">
                <p className="font-display text-2xl font-bold text-neon">72-hour site audit window</p>
                <p className="mt-2 text-sm leading-6 text-ice/75">
                  Structured consultation, signal mapping, device compatibility review, and a clean installation path before any deployment begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal max-w-3xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.26em] text-neon">Service Verticals</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-normal sm:text-5xl">
              Premium systems installed with the discipline of an engineering partner.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="service-card group border border-white/10 bg-panel/70 p-7 transition hover:-translate-y-2 hover:border-neon/60 hover:bg-panelSoft"
                >
                  <div className="-mx-2 -mt-2 mb-7 overflow-hidden border border-white/10 bg-void">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="service-image h-48 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="icon-orbit grid h-14 w-14 place-items-center border border-neon/30 bg-neon/10">
                      <Icon className="h-7 w-7 text-neon" />
                    </span>
                    <Sparkles className="h-5 w-5 text-white/20 transition group-hover:text-neon" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neon/80">{service.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">{service.title}</h3>
                  <ul className="mt-6 space-y-4 text-sm leading-6 text-steel">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="estimator" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="section-reveal">
            <p className="font-display text-sm font-bold uppercase tracking-[0.26em] text-neon">Smart Estimator</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              Price the first phase of your smart upgrade before the site visit.
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Use this guide to estimate an initial installation budget. Final pricing depends on device count,
              wall conditions, switchboard compatibility, cabling route, and preferred hardware tier.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                [LockKeyhole, 'Device compatibility verified before procurement'],
                [Wifi, 'Wi-Fi coverage planned for dense concrete layouts'],
                [Cable, 'Wire paths designed to preserve premium interiors'],
              ].map(([Icon, text]) => (
                <div key={text} className="micro-card flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 text-sm text-ice">
                  <Icon className="h-5 w-5 shrink-0 text-neon" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="estimator-panel border border-white/10 bg-panel p-5 shadow-panel sm:p-8">
            <div className="grid gap-6">
              <label className="block">
                <span className="mb-3 block text-sm font-semibold text-ice">Apartment Size</span>
                <select
                  value={selectedSize}
                  onChange={(event) => setSelectedSize(event.target.value)}
                  className="field"
                >
                  {sizeOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <div>
                <p className="mb-3 text-sm font-semibold text-ice">Select Services</p>
                <div className="grid gap-3">
                  {estimatorServices.map((service) => (
                    <label
                      key={service.id}
                      className="selector-row flex cursor-pointer items-center justify-between gap-4 border border-white/10 bg-white/[0.03] p-4 transition hover:border-neon/60"
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          aria-label={service.label}
                          checked={selectedServices.includes(service.id)}
                          onChange={() => toggleService(service.id)}
                          className="h-5 w-5 accent-neon"
                        />
                        <span className="font-medium text-white">{service.label}</span>
                      </span>
                      <span className="text-sm font-semibold text-neon">+{formatBDT(service.price)} BDT</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="price-pulse mt-8 border border-neon/30 bg-neon/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon">Estimated Investment</p>
              <p className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl">
                {formatBDT(total)} BDT
              </p>
              <p className="mt-3 text-sm leading-6 text-ice/70">
                Includes planning and installation labor estimate. Hardware selection is finalized after assessment.
              </p>
            </div>

            <form className="mt-8 grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="field" type="text" name="fullName" placeholder="Full Name" aria-label="Full Name" />
                <input className="field" type="tel" name="whatsapp" placeholder="WhatsApp Number" aria-label="WhatsApp Number" />
              </div>
              <select className="field" name="area" aria-label="Select Area" defaultValue="">
                <option value="" disabled>Select Area</option>
                <option>Uttara</option>
                <option>Gulshan</option>
                <option>Banani</option>
                <option>Dhanmondi</option>
                <option>Other</option>
              </select>
              <button className="cta-shine inline-flex items-center justify-center gap-3 bg-neon px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-void transition hover:-translate-y-1 hover:bg-neon/90">
                Lock In Your Free On-Site Assessment
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
        <div className="partner-hub mx-auto grid max-w-7xl gap-8 border border-white/10 bg-[linear-gradient(135deg,rgba(0,229,255,0.12),rgba(16,24,38,0.82)_40%,rgba(11,15,25,1))] p-6 shadow-panel sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 border border-neon/20 bg-neon/10 px-4 py-2 text-sm text-neon">
              <Building2 className="h-4 w-4" />
              B2B Partner Hub
            </div>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              Architects & Interior Designers: Let&apos;s Collaborate
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ice/75">
              You design the luxury aesthetics; we engineer the smart ecosystem. Offer your clients flawless
              smart home integrations with SR INTERNATIONAL LTD. as your dedicated technical partner. We offer
              white-label deployment and attractive project-based commissions.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="partner-image overflow-hidden border border-white/10 bg-void/50">
              <img
                src={partnerCollaborationImage}
                alt="Interior design collaboration table with smart home planning materials and technology samples"
                className="h-64 w-full object-cover sm:h-72"
                loading="lazy"
              />
            </div>
            <form className="grid content-start gap-4 border border-white/10 bg-void/45 p-5 backdrop-blur" onSubmit={(event) => event.preventDefault()}>
            <input className="field" type="text" name="firmName" placeholder="Firm Name" aria-label="Firm Name" />
            <input
              className="field"
              type="tel"
              name="contactWhatsapp"
              placeholder="Contact Person WhatsApp"
              aria-label="Contact Person WhatsApp"
            />
            <button className="cta-shine inline-flex items-center justify-center gap-3 border border-neon bg-neon px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-void transition hover:-translate-y-1 hover:bg-neon/90">
              Trigger Partnership Call
              <ArrowRight className="h-5 w-5" />
            </button>
            </form>
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 border-t border-white/10 px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-xl font-bold tracking-[0.2em]">SR INTERNATIONAL LTD.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-steel">
              Plot-23, AH Tower(2th Floor), Sec-03; Uttara PS; Dhaka-1230; Bangladesh.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-steel md:items-end">
            <div className="flex items-center gap-3">
              <Globe2 className="h-4 w-4 text-neon" />
              Serving Uttara, Gulshan, Banani, Dhanmondi, and premium Dhaka residences
            </div>
            <div className="flex gap-5">
              <a className="hover:text-neon" href="#privacy">Privacy Policy</a>
              <a className="hover:text-neon" href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
