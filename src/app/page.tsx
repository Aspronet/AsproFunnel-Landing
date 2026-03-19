"use client";

import { useState } from "react";
import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import RotatingText from "@/components/RotatingText";
import LeadForm from "@/components/LeadForm";

/* ───────── Data ───────── */

const steps = [
  { num: "01", title: "Adquiere su paquete de saldo", desc: "Elige el paquete de inversión publicitaria que mejor se ajuste a sus objetivos. Pago único, sin suscripción." },
  { num: "02", title: "Elige su funnel", desc: "Selecciona el funnel que quiere usar como fuente de leads. Ya está optimizado y listo para activar." },
  { num: "03", title: "Conecta su WhatsApp", desc: "Escanea un QR y listo. Su agente de IA se activa en minutos, sin configuraciones técnicas." },
  { num: "04", title: "Conecta su Google Calendar", desc: "Vincula su calendario para que las reuniones se agenden automáticamente sin conflictos." },
  { num: "05", title: "Activa el sistema", desc: "Con un click, el sistema empieza a generar leads calificados 24/7. Tu representante solo cierra." },
];

const poolRows = [
  { user: "Representante 1", saldo: "$225", pct: "10.5%", leads: "11 leads" },
  { user: "Representante 2", saldo: "$390", pct: "18.2%", leads: "18 leads" },
  { user: "Representante 3", saldo: "$100", pct: "4.7%", leads: "5 leads" },
  { user: "Representante 4", saldo: "$600", pct: "28.0%", leads: "28 leads" },
  { user: "Representante 5", saldo: "$820", pct: "38.6%", leads: "39 leads" },
];

const pricingPlans = [
  { name: "Básico", price: "$300", tag: "Para primeras campañas", features: ["Publicidad + IA incluida", "25% servicio y optimización", "Leads vía WhatsApp", "Ideal para empezar"], highlighted: false },
  { name: "Estándar", price: "$500", tag: "El más elegido por representantes", features: ["Publicidad + IA incluida", "20% servicio y optimización", "Leads vía WhatsApp", "Mejor costo por lead"], highlighted: true, badge: "Popular" },
  { name: "Avanzado", price: "$750", tag: "Mayor alcance e impacto", features: ["Publicidad + IA incluida", "17.5% servicio y optimización", "Leads vía WhatsApp", "Mayor alcance por dólar"], highlighted: false },
  { name: "Premium", price: "$1,250", tag: "Máxima inversión, menor fee", features: ["Publicidad + IA incluida", "15% servicio y optimización", "Leads vía WhatsApp", "Mejor rendimiento por dólar"], highlighted: false },
];

const setupFeatures = [
  { icon: "design_services", title: "Funnel de conversión a medida", desc: "Diseñado para tu producto, tu audiencia y tu mercado específico" },
  { icon: "ads_click", title: "Estrategia publicitaria centralizada", desc: "Meta Ads optimizado por IA con segmentación que mejora cada día" },
  { icon: "bar_chart", title: "CRM con visibilidad total", desc: "Leads, saldos, participación del pool y métricas en tiempo real" },
  { icon: "smart_toy", title: "Agente de IA personalizado", desc: "Entrenado con tu producto. Califica, responde y agenda reuniones 24/7 vía WhatsApp." },
  { icon: "smartphone", title: "WhatsApp + Calendar integrado", desc: "Cada lead llega directo al WhatsApp del representante con seguimiento automático." },
  { icon: "rocket_launch", title: "Onboarding supervisado", desc: "2-4 semanas de implementación con testing antes de lanzar" },
];

const comparisonRows = [
  { aspect: "Funnels", bad: "Cada representante improvisa", good: "Un funnel probado para todos" },
  { aspect: "Publicidad", bad: "Cada uno gasta sin estrategia", good: "Una estrategia IA optimizada" },
  { aspect: "Marca", bad: "Mensajes inconsistentes", good: "Marca unificada y profesional" },
  { aspect: "Presupuesto", bad: "Alto desperdicio, cero datos", good: "Economías de escala + analytics" },
  { aspect: "Soporte", bad: "Tú resuelves caso por caso", good: "El sistema resuelve automáticamente" },
];

const faqItems = [
  { q: "¿Qué pasa cuando un representante agota su saldo?", a: "Su participación en el pool baja a 0% y deja de recibir leads. Puede recargar en cualquier momento. Tú no necesitas intervenir—el sistema lo gestiona automáticamente." },
  { q: "¿Un representante puede pausar?", a: "Sí. Pausa sin perder saldo. Al reactivarse, entra al pool al inicio del día siguiente. Todo es self-service para tu equipo." },
  { q: "¿Garantizan un costo por lead específico?", a: "No prometemos métricas específicas porque cada mercado es diferente. Lo que sí garantizamos es la infraestructura: funnels optimizados, IA que califica 24/7, y un sistema que mejora con cada ciclo de datos." },
  { q: "¿Qué necesito para implementar AsproFunnel?", a: "Un equipo de ventas con al menos 100 representantes activos, compromiso de onboardear un grupo inicial, y disposición a invertir en el setup. Lo evaluamos juntos en la discovery call." },
  { q: "¿El agente de IA se adapta a mi producto?", a: "Se entrena específicamente con la información de tu empresa, producto y objeciones comunes durante el setup. Todos los representantes usan el mismo agente—garantizando consistencia de marca y mensaje." },
  { q: "¿Cuál es el modelo de costos recurrentes?", a: "Cero. El setup se paga una vez. Después, tus representantes compran saldo publicitario cuando quieren. Sin suscripciones, sin fees mensuales, sin compromisos recurrentes para ti ni para ellos." },
];

const techPills = ["Constructor de Funnels", "CRM Propio", "WhatsApp Integrado", "Sistema de Pool", "Agentes de IA"];

/* ───────── Components ───────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border-default)] last:border-b-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-4 py-4 text-left sm:px-6 sm:py-5">
        <span className="text-sm font-medium text-[var(--text-primary)] pr-4 sm:text-[15px]">{q}</span>
        <svg className={`h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform sm:h-[18px] sm:w-[18px] ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <p className="px-4 pb-4 text-sm leading-[1.6] text-[var(--text-secondary)] sm:px-6 sm:pb-5">{a}</p>
      )}
    </div>
  );
}

function MobileNav({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <>
      <button onClick={onToggle} className="flex flex-col gap-1.5 lg:hidden" aria-label="Menu">
        <span className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-b border-[var(--border-default)] bg-[var(--bg-white)] px-6 py-6 lg:hidden">
          <a href="#producto" onClick={onToggle} className="text-base font-medium text-[var(--text-secondary)]">Producto</a>
          <a href="#pricing" onClick={onToggle} className="text-base font-medium text-[var(--text-secondary)]">Pricing</a>
          <a href="#faq" onClick={onToggle} className="text-base font-medium text-[var(--text-secondary)]">FAQ</a>
          <a href="#cta" onClick={onToggle} className="mt-2 rounded-[10px] bg-[var(--bg-dark)] px-5 py-3 text-center text-sm font-medium text-[var(--text-white)]">Agendar Discovery Call</a>
        </div>
      )}
    </>
  );
}

/* ───────── Page ───────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-white)] text-[var(--text-primary)]">

      {/* ─── Navbar ─── */}
      <nav className="relative flex w-full items-center justify-between px-4 py-4 bg-[var(--bg-white)] sm:px-8 lg:px-20">
        <div className="flex items-center gap-2">
          <img src="/asprofunnellogo.png" alt="AsproFunnel" className="h-8 w-auto" />
        </div>
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#producto" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Producto</a>
          <a href="#pricing" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">FAQ</a>
        </div>
        <a href="#cta" className="hidden rounded-[10px] bg-[var(--bg-dark)] px-5 py-2 text-sm font-medium text-[var(--text-white)] lg:block">Agendar Discovery Call</a>
        <MobileNav open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative flex w-full flex-col items-center overflow-hidden bg-[var(--bg-white)] min-h-[600px] sm:min-h-[900px]">
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="pointer-events-none absolute left-1/2 top-[100px] h-[400px] w-[600px] -translate-x-1/2 rounded-full sm:h-[600px] sm:w-[800px]" style={{ background: "radial-gradient(ellipse at center, rgba(79,70,229,0.04), transparent)" }} />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 pt-20 pb-16 sm:gap-8 sm:px-6 sm:pt-40 sm:pb-28">
          {/* Badge */}
          <div className="flex items-center gap-1.5 rounded-full border border-[var(--accent-green-border)] bg-[var(--accent-green-bg)] px-3 py-1.5">
            <span className="text-xs font-medium text-[var(--accent-green)] sm:text-[13px]">✦ La infraestructura de crecimiento para equipos de ventas</span>
          </div>

          {/* Animated Heading */}
          <div className="flex flex-col items-center gap-0">
            <BlurText
              text="Predecibilidad en cada lead."
              className="max-w-[1000px] justify-center text-center text-[32px] font-bold leading-[1.08] tracking-[-1px] text-[var(--text-primary)] sm:text-[48px] md:text-[60px] lg:text-[72px] lg:tracking-[-2px]"
              delay={50}
              animateBy="words"
              direction="bottom"
            />
            <GradientText
              colors={["#4F46E5", "#7C3AED", "#2563EB", "#4F46E5"]}
              animationSpeed={6}
              className="text-center text-[32px] font-bold leading-[1.08] tracking-[-1px] sm:text-[48px] md:text-[60px] lg:text-[72px] lg:tracking-[-2px]"
            >
              Crecimiento en cada ciclo.
            </GradientText>
          </div>

          {/* Subtitle */}
          <p className="max-w-[580px] text-center text-base leading-[1.6] text-[var(--text-secondary)] sm:text-lg">
            El sistema que convierte tu organización en una máquina de prospección. Funnels, publicidad y automatización con IA — llave en mano para cientos de representantes de ventas.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center gap-3 px-2 sm:w-auto sm:flex-row sm:px-0">
            <a href="#cta" className="w-full rounded-[10px] bg-[var(--bg-dark)] px-8 py-3.5 text-center text-base font-medium text-[var(--text-white)] sm:w-auto">Agendar Discovery Call →</a>
            <a href="#producto" className="w-full rounded-[10px] border border-[var(--border-default)] bg-transparent px-8 py-3.5 text-center text-base font-medium text-[var(--text-primary)] sm:w-auto">▶ Ver cómo funciona</a>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--text-muted)] sm:gap-6 sm:text-[13px]">
            <span>✓ +10 años en la industria</span>
            <span className="hidden sm:inline">·</span>
            <span>✓ Tecnología 100% propia</span>
            <span className="hidden sm:inline">·</span>
            <span>✓ +50M leads generados</span>
          </div>
        </div>
      </section>

      {/* ─── Problem / Solution ─── */}
      <section id="producto" className="relative flex w-full flex-col items-center overflow-hidden bg-[var(--bg-white)]">
        <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="relative z-10 flex w-full flex-col items-center gap-8 px-4 py-16 sm:gap-12 sm:px-8 lg:px-20 lg:py-24">
          <div className="flex items-center rounded-full border border-[var(--dark-badge-border)] bg-[var(--dark-badge-bg)] px-3.5 py-1.5">
            <span className="text-xs font-medium text-[var(--dark-badge-text)] sm:text-[13px]">El problema sistémico</span>
          </div>
          <div className="flex flex-col items-center">
            <BlurText
              text="Tu organización depende de esfuerzo manual para crecer."
              className="max-w-[700px] justify-center text-center text-[28px] font-bold leading-[1.1] tracking-[-0.8px] text-[var(--text-primary)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]"
              delay={40}
              animateBy="words"
              direction="bottom"
            />
            <h2 className="max-w-[700px] text-center text-[28px] font-bold leading-[1.1] tracking-[-0.8px] text-[var(--text-muted)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Y eso no escala...</h2>
          </div>
          <div className="flex w-full max-w-[1080px] flex-col gap-4 sm:gap-6 lg:flex-row">
            {/* Sin AsproFunnel */}
            <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-light)] p-6 sm:gap-5 sm:p-8">
              <h3 className="text-base font-bold text-[var(--text-primary)] sm:text-lg">Sin sistema de leads</h3>
              {[
                "Representantes agotan sus contactos en 90 días",
                "Prospección manual = alta rotación del equipo",
                "Cero infraestructura digital de captación",
                "Cada líder reinventa la rueda sin resultados",
                "Imposible medir, predecir o escalar",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="text-sm text-[var(--error-red)]">✖</span>
                  <span className="text-sm leading-[1.5] text-[var(--text-secondary)] sm:text-[15px]">{t}</span>
                </div>
              ))}
            </div>
            {/* Con AsproFunnel */}
            <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-[var(--card-dark-border)] bg-[var(--bg-dark)] p-6 sm:gap-5 sm:p-8">
              <h3 className="text-base font-bold text-[var(--text-white)] sm:text-lg">Con AsproFunnel ✦</h3>
              {[
                "Flujo constante de leads nuevos cada día",
                "Un funnel profesional para toda la org",
                "Campañas centralizadas optimizadas por IA",
                "Métricas claras: costo por lead, conversión, ROI",
                "El líder implementa una vez, escala para siempre",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="text-sm font-bold text-[var(--check-green)]">✓</span>
                  <span className="text-sm leading-[1.5] text-[#E5E5E5] sm:text-[15px]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="flex w-full flex-col items-center gap-8 px-4 py-16 sm:gap-12 sm:px-8 lg:px-20 lg:py-24">
        <h2 className="text-center text-[28px] font-bold tracking-[-0.8px] text-[var(--text-primary)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Un sistema que se opera solo</h2>
        <p className="text-center text-base text-[var(--text-secondary)] sm:text-[17px]">
          Tú lo implementas una vez. Tu equipo solo lo usa.{" "}
          <RotatingText
            texts={["Así de simple.", "Sin complicaciones.", "Sin fricción.", "Sin dependencias."]}
            mainClassName="inline-flex overflow-hidden h-[1.3em] text-[var(--accent-green)]"
            staggerFrom="first"
            staggerDuration={0.025}
            rotationInterval={2500}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />
        </p>
        <div className="grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-3 rounded-2xl border border-[var(--border-default)] p-6 sm:gap-4 sm:p-7">
              <span className="text-4xl font-bold tracking-[-1px] text-[#E5E5E5] sm:text-5xl">{s.num}</span>
              <h3 className="text-base font-bold leading-[1.3] text-[var(--text-primary)] sm:text-[17px]">{s.title}</h3>
              <p className="text-sm leading-[1.5] text-[var(--text-secondary)] sm:text-[15px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Pool Publicitario ─── */}
      <section className="flex w-full flex-col items-center gap-8 bg-[var(--bg-light)] px-4 py-16 sm:gap-12 sm:px-8 lg:px-20 lg:py-24">
        <div className="flex flex-col items-center">
          <h2 className="max-w-[700px] text-center text-[28px] font-bold leading-[1.1] tracking-[-0.8px] text-[var(--text-primary)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Economías de escala reales.</h2>
          <h2 className="max-w-[700px] text-center text-[28px] font-bold leading-[1.1] tracking-[-0.8px] text-[var(--text-muted)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Publicidad que funciona en equipo.</h2>
        </div>
        <p className="max-w-[640px] text-center text-base leading-[1.6] text-[var(--text-secondary)] sm:text-[17px]">
          Cada representante aporta saldo a un pool compartido. Más participantes = menor costo por lead = mejores resultados para todos. Tú no gestionas presupuestos individuales.
        </p>
        {/* Table */}
        <div className="w-full max-w-[900px] overflow-x-auto rounded-2xl border border-[var(--border-default)] bg-[var(--bg-white)]">
          <div className="min-w-[500px]">
            <div className="flex bg-[var(--bg-light)] px-4 py-3 border-b border-[var(--border-default)] sm:px-6 sm:py-3.5">
              {["Representante", "Saldo", "% Participación", "Leads"].map((h) => (
                <span key={h} className="flex-1 text-xs font-semibold tracking-[0.3px] text-[var(--text-secondary)] sm:text-[13px]">{h}</span>
              ))}
            </div>
            {poolRows.map((r, i) => (
              <div key={r.user} className={`flex px-4 py-2.5 sm:px-6 sm:py-3 ${i < poolRows.length - 1 ? "border-b border-[var(--border-light)]" : ""}`}>
                <span className="flex-1 text-xs text-[var(--text-primary)] sm:text-sm">{r.user}</span>
                <span className="flex-1 text-xs font-medium text-[var(--text-primary)] sm:text-sm">{r.saldo}</span>
                <span className="flex-1 text-xs text-[var(--text-secondary)] sm:text-sm">{r.pct}</span>
                <span className="flex-1 text-xs text-[var(--text-primary)] sm:text-sm">{r.leads}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {["Saldo sin vencimiento", "Recarga cuando quieras", "Pausa sin perder saldo"].map((p) => (
            <div key={p} className="flex items-center gap-1.5 rounded-full bg-[var(--accent-green-bg)] px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="text-xs font-bold text-[var(--accent-green)]">✓</span>
              <span className="text-xs font-medium text-[var(--accent-green)] sm:text-[13px]">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="flex w-full flex-col items-center gap-8 px-4 py-16 sm:gap-12 sm:px-8 lg:px-20 lg:py-24">
        <div className="flex items-center gap-1.5 rounded-full border border-[var(--accent-green-border)] bg-[var(--accent-green-bg)] px-3.5 py-1.5">
          <span className="text-xs font-medium text-[var(--accent-green)] sm:text-[13px]">✦ Modelo de monetización</span>
        </div>
        <h2 className="max-w-[1000px] text-center text-[28px] font-bold tracking-[-0.8px] text-[var(--text-primary)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Tu equipo invierte. Tú no gestionas nada.</h2>
        <p className="max-w-[640px] text-center text-base leading-[1.6] text-[var(--text-secondary)] sm:text-[17px]">
          Cada representante elige su paquete de inversión publicitaria. Todo incluido: publicidad, IA, optimización y soporte. Pago único, sin suscripción.
        </p>
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-5 rounded-2xl p-6 sm:gap-6 sm:p-8 ${
                plan.highlighted
                  ? "border border-[var(--card-dark-border)] bg-[var(--bg-dark)]"
                  : "border border-[var(--border-default)]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <h3 className={`text-base font-bold sm:text-lg ${plan.highlighted ? "text-[var(--text-white)]" : "text-[var(--text-primary)]"}`}>{plan.name}</h3>
                {plan.badge && (
                  <span className="rounded-full bg-[#15803D] px-2.5 py-1 text-xs font-semibold text-white">{plan.badge}</span>
                )}
              </div>
              <div className="flex items-end gap-1.5">
                <span className={`text-[36px] font-black tracking-[-1px] sm:text-[42px] ${plan.highlighted ? "text-[var(--text-white)]" : "text-[var(--text-primary)]"}`}>{plan.price}</span>
                <span className={`text-sm sm:text-base ${plan.highlighted ? "text-[var(--text-muted)]" : "text-[var(--text-secondary)]"}`}>USD</span>
              </div>
              <p className={`text-sm leading-[1.5] ${plan.highlighted ? "text-[var(--text-muted)]" : "text-[var(--text-secondary)]"}`}>{plan.tag}</p>
              <div className={`h-px w-full ${plan.highlighted ? "bg-[var(--card-dark-border)]" : "bg-[var(--border-default)]"}`} />
              <div className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <span className="text-[13px] font-bold text-[var(--check-green)]">✓</span>
                    <span className={`text-sm leading-[1.4] ${plan.highlighted ? "text-[#E5E5E5]" : "text-[var(--text-secondary)]"}`}>{f}</span>
                  </div>
                ))}
              </div>
              {plan.highlighted ? (
                <button className="w-full rounded-[10px] bg-[var(--bg-white)] py-3 text-sm font-medium text-[var(--text-primary)]">Ver detalle</button>
              ) : (
                <button className="w-full rounded-[10px] border border-[var(--border-default)] py-3 text-sm font-medium text-[var(--text-primary)]">Ver detalle</button>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--text-muted)] sm:text-sm">✓ Pago único, sin suscripciones  ·  ✓ Todo incluido: publicidad + IA + gestión  ·  ✓ A mayor paquete, mayor rendimiento</p>
      </section>

      {/* ─── Setup Líderes ─── */}
      <section className="flex w-full flex-col items-center gap-8 px-4 py-16 sm:gap-12 sm:px-8 lg:px-20 lg:py-24">
        <h2 className="text-center text-[28px] font-bold tracking-[-0.8px] text-[var(--text-primary)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Implementación llave en mano</h2>
        <p className="text-center text-base text-[var(--text-secondary)] sm:text-[17px]">Nosotros construimos todo el sistema. Tu organización solo lo activa.</p>
        <div className="grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {setupFeatures.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 rounded-2xl border border-[var(--border-default)] p-6 sm:p-7">
              <span className="material-symbols-outlined text-[20px] text-[var(--text-primary)]">{f.icon}</span>
              <h3 className="text-base font-semibold leading-[1.3] text-[var(--text-primary)]">{f.title}</h3>
              <p className="text-sm leading-[1.5] text-[var(--text-secondary)]">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full max-w-[1080px] items-center justify-center rounded-xl bg-[var(--bg-light)] px-4 py-4 sm:px-7 sm:py-5">
          <p className="text-center text-xs font-medium text-[var(--text-secondary)] sm:text-sm">Setup desde $7,500 USD  ·  Organizaciones con equipos de ventas de +100 representantes  ·  Agenda una call para evaluar tu caso</p>
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section className="flex w-full flex-col items-center gap-8 bg-[var(--bg-light)] px-4 py-16 sm:gap-12 sm:px-8 lg:px-20 lg:py-24">
        <h2 className="text-center text-[28px] font-bold tracking-[-0.8px] text-[var(--text-primary)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">¿Por qué un sistema centralizado?</h2>
        <p className="text-center text-base text-[var(--text-secondary)] sm:text-[17px]">La diferencia entre esfuerzo individual vs. tener infraestructura de crecimiento</p>
        <div className="w-full max-w-[1000px] overflow-x-auto rounded-2xl border border-[var(--border-default)] bg-[var(--bg-white)]">
          <div className="min-w-[600px]">
            <div className="flex border-b border-[var(--border-default)] bg-[var(--bg-light)] px-4 py-3 sm:px-6 sm:py-3.5">
              <span className="flex-1 text-xs font-semibold tracking-[0.3px] text-[var(--text-secondary)] sm:text-[13px]">Aspecto</span>
              <span className="flex-1 text-xs font-semibold tracking-[0.3px] text-[var(--text-secondary)] sm:text-[13px]">Esfuerzo individual ❌</span>
              <span className="flex-1 text-xs font-semibold tracking-[0.3px] text-[var(--text-secondary)] sm:text-[13px]">AsproFunnel ✅</span>
            </div>
            {comparisonRows.map((r, i) => (
              <div key={r.aspect} className={`flex px-4 py-3 sm:px-6 sm:py-3.5 ${i < comparisonRows.length - 1 ? "border-b border-[var(--border-light)]" : ""}`}>
                <span className="flex-1 text-xs font-medium leading-[1.4] text-[var(--text-primary)] sm:text-sm">{r.aspect}</span>
                <span className="flex-1 text-xs leading-[1.4] text-[var(--text-secondary)] sm:text-sm">{r.bad}</span>
                <span className="flex-1 text-xs leading-[1.4] text-[var(--accent-green)] sm:text-sm">{r.good}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Propia ─── */}
      <section className="flex w-full flex-col items-center gap-6 px-4 py-12 sm:gap-8 sm:px-8 lg:px-20 lg:py-20">
        <h3 className="text-center text-lg font-bold tracking-[-0.5px] text-[var(--text-primary)] sm:text-[22px]">Sin dependencias. Sin terceros. Todo nuestro.</h3>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {techPills.map((p) => (
            <div key={p} className="rounded-full border border-[var(--border-default)] bg-[var(--bg-light)] px-4 py-1.5 sm:px-5 sm:py-2">
              <span className="text-xs font-medium text-[var(--text-primary)] sm:text-sm">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="flex w-full flex-col items-center gap-8 px-4 py-16 sm:gap-12 sm:px-8 lg:px-20 lg:py-24">
        <h2 className="text-center text-[28px] font-bold tracking-[-0.8px] text-[var(--text-primary)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Preguntas frecuentes</h2>
        <div className="w-full max-w-[680px] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-white)]">
          {faqItems.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* ─── CTA Final ─── */}
      <section id="cta" className="flex w-full flex-col items-center gap-6 bg-[var(--bg-dark)] px-4 py-16 sm:gap-8 sm:px-8 lg:px-20 lg:py-24">
        <div className="flex flex-col items-center">
          <h2 className="max-w-[700px] text-center text-[28px] font-bold leading-[1.1] tracking-[-0.8px] text-[var(--text-white)] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]">Deja de improvisar.</h2>
          <GradientText
            colors={["#818CF8", "#A78BFA", "#6366F1", "#818CF8"]}
            animationSpeed={5}
            className="text-center text-[28px] font-bold leading-[1.1] tracking-[-0.8px] sm:text-[36px] lg:text-[44px] lg:tracking-[-1.3px]"
          >
            Construye un sistema de crecimiento real.
          </GradientText>
        </div>
        <p className="max-w-[540px] text-center text-base leading-[1.6] text-[var(--text-secondary)] sm:text-[17px]">
          Analizamos tu equipo de ventas, tu mercado y te mostramos exactamente cómo funcionaría AsproFunnel para ti.
        </p>
        <LeadForm />
        <p className="text-center text-xs text-[var(--cta-text)] sm:text-[13px]">Sin compromiso. Solo una conversación estratégica con nuestro equipo.</p>
      </section>

      {/* ─── Footer ─── */}
      <footer className="flex w-full flex-col items-center gap-6 border-t border-[var(--border-light)] bg-[var(--bg-light)] px-4 py-8 sm:px-8 lg:flex-row lg:justify-between lg:px-20 lg:py-10">
        <div className="flex items-center gap-2">
          <img src="/asprofunnellogo.png" alt="AsproFunnel" className="h-6 w-auto opacity-50" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="/terms" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] sm:text-[13px]">Términos y Condiciones</a>
          <a href="/privacy" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] sm:text-[13px]">Política de Privacidad</a>
          <a href="mailto:hello@asprofunnel.com" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] sm:text-[13px]">Contacto</a>
        </div>
        <span className="text-xs text-[var(--text-muted)] sm:text-[13px]">© 2026 AsproFunnel — A product of Nexfy LLC</span>
      </footer>
    </div>
  );
}
