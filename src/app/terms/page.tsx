import Link from "next/link";

const sections = [
  {
    title: "1. Aceptación de los términos",
    paragraphs: [
      'Estos Términos y Condiciones ("Términos") constituyen un acuerdo legal entre usted ("Cliente", "usted") y Aspronet Labs LLC, una empresa registrada en los Estados Unidos de América, operadora de la plataforma AsproFunnel ("nosotros", "la Empresa", "AsproFunnel"). Al acceder, registrarse o utilizar nuestros servicios, usted acepta quedar vinculado por estos Términos, así como por nuestra Política de Privacidad disponible en asprofunnel.com/privacy.',
      "Si usted está aceptando estos Términos en nombre de una organización, declara que tiene la autoridad para vincular a dicha organización. Si no está de acuerdo con estos Términos, no utilice nuestros servicios.",
    ],
  },
  {
    title: "2. Descripción del servicio",
    paragraphs: [
      "AsproFunnel es una plataforma de tecnología que proporciona a equipos de ventas distribuidos herramientas de generación y gestión de leads, incluyendo: creación y gestión de funnels de conversión optimizados; campañas publicitarias centralizadas a través de Meta Ads; agentes de inteligencia artificial para calificación y seguimiento automatizado de leads vía WhatsApp; integración con WhatsApp Business API para comunicación con leads y prospectos; integración con calendarios para agendamiento automático de reuniones; y un panel de control (dashboard) con métricas en tiempo real.",
      "El Servicio se provee en modalidad de software como servicio (SaaS) y requiere una implementación inicial personalizada.",
    ],
  },
  {
    title: "3. Requisitos de elegibilidad y registro",
    paragraphs: [
      "Para utilizar nuestros servicios, usted debe: ser mayor de 18 años; tener la capacidad legal para celebrar contratos vinculantes; proporcionar información veraz, precisa y completa durante el registro; mantener actualizada su información de cuenta; y ser responsable de mantener la confidencialidad de sus credenciales de acceso.",
      "Usted es responsable de toda la actividad que ocurra bajo su cuenta. Debe notificarnos inmediatamente en caso de uso no autorizado de su cuenta.",
    ],
  },
  {
    title: "4. WhatsApp Business API y cumplimiento de políticas de Meta",
    paragraphs: [
      "Al utilizar las funcionalidades de WhatsApp a través de AsproFunnel, usted reconoce y acepta que:",
      "AsproFunnel opera como proveedor de tecnología autorizado que facilita el acceso a la API de WhatsApp Business de Meta Platforms Inc. El uso de WhatsApp Business a través de nuestra plataforma está sujeto a los Términos de Servicio de WhatsApp Business, los Términos de la Solución de Negocios de WhatsApp, la Política de Mensajería de WhatsApp Business, y la Política de Comercio de WhatsApp.",
      "Usted se compromete a: cumplir con todas las políticas de Meta aplicables en todo momento; obtener el consentimiento (opt-in) de sus contactos antes de enviarles mensajes a través de la plataforma; respetar las solicitudes de opt-out de los usuarios de manera inmediata; no enviar mensajes que sean spam, engañosos, fraudulentos o que violen las políticas de Meta; no utilizar la plataforma para enviar contenido ilegal, amenazante, difamatorio, obsceno o que infrinja derechos de terceros; y mantener la calidad de sus mensajes conforme a los estándares de Meta.",
      "El incumplimiento de las políticas de Meta puede resultar en la suspensión o terminación de su cuenta de WhatsApp Business por parte de Meta, sin responsabilidad por parte de AsproFunnel.",
    ],
  },
  {
    title: "5. Uso de inteligencia artificial",
    paragraphs: [
      "Nuestra plataforma utiliza tecnologías de inteligencia artificial para la calificación de leads, respuestas automatizadas y seguimiento. En relación con el uso de IA:",
      "Los agentes de IA son configurados y personalizados según las instrucciones y el contenido proporcionado por el Cliente. AsproFunnel no utiliza los datos de conversaciones, mensajes ni información de leads del Cliente para entrenar, desarrollar o mejorar modelos de inteligencia artificial de propósito general, modelos de lenguaje ni tecnologías similares. El procesamiento de IA se realiza exclusivamente para proveer el servicio contratado por el Cliente. El Cliente es responsable de revisar y aprobar los flujos de conversación y las respuestas configuradas en su agente de IA antes de la activación del servicio.",
      "AsproFunnel no garantiza que las respuestas generadas por IA sean siempre precisas o apropiadas. El Cliente debe supervisar periódicamente el rendimiento de su agente de IA.",
    ],
  },
  {
    title: "6. Modelo de inversión publicitaria y pagos",
    paragraphs: [
      "El Cliente adquiere paquetes de inversión publicitaria que incluyen: saldo destinado a campañas publicitarias en Meta Ads, servicios de optimización e inteligencia artificial, y gestión de leads vía WhatsApp.",
      "El saldo publicitario adquirido no tiene fecha de vencimiento. El Cliente puede pausar y reanudar sus campañas sin perder su saldo. Los paquetes son prepagos y no reembolsables una vez que las campañas han sido activadas. El porcentaje de servicio y optimización varía según el paquete seleccionado y está claramente indicado al momento de la compra. AsproFunnel no garantiza un número específico de leads, un costo por lead determinado ni resultados de conversión específicos, ya que estos dependen de múltiples factores incluyendo el mercado, la audiencia, la calidad del producto del Cliente y las condiciones de la plataforma publicitaria.",
    ],
  },
  {
    title: "7. Implementación y onboarding",
    paragraphs: [
      "La implementación inicial del servicio incluye la configuración de funnels, agentes de IA, integraciones y campañas publicitarias. El costo de implementación se cotiza de manera independiente según la complejidad del proyecto. El proceso de implementación típicamente requiere entre 2 y 4 semanas. El Cliente se compromete a proporcionar oportunamente toda la información, contenido, accesos y aprobaciones necesarias para la implementación. Los retrasos causados por falta de respuesta o colaboración del Cliente no serán responsabilidad de AsproFunnel.",
    ],
  },
  {
    title: "8. Pool publicitario compartido",
    paragraphs: [
      "Cuando el Cliente participa en un pool publicitario compartido: el saldo del Cliente se combina con el de otros participantes para optimizar los costos publicitarios; los leads se distribuyen proporcionalmente según la participación de saldo de cada miembro; AsproFunnel administra el pool y las campañas de manera centralizada; los datos y métricas de cada participante son privados y no son compartidos con otros miembros del pool; y AsproFunnel se reserva el derecho de ajustar la distribución de leads para optimizar el rendimiento general del pool.",
    ],
  },
  {
    title: "9. Propiedad intelectual",
    paragraphs: [
      "AsproFunnel y todo su contenido, funcionalidades, tecnología y diseño son propiedad exclusiva de Aspronet Labs LLC y están protegidos por las leyes de propiedad intelectual aplicables.",
      "El Cliente retiene la propiedad sobre su contenido, marca, productos y datos de clientes. Al utilizar nuestro servicio, el Cliente nos otorga una licencia limitada, no exclusiva y revocable para utilizar su contenido y marca exclusivamente con el propósito de proveer el servicio contratado.",
      "El Cliente no puede: copiar, modificar, distribuir o crear obras derivadas de la plataforma; realizar ingeniería inversa, descompilar o desensamblar cualquier parte del servicio; sublicenciar, revender o redistribuir el acceso a la plataforma sin autorización escrita; ni utilizar la marca, nombre o logotipos de AsproFunnel sin autorización previa.",
    ],
  },
  {
    title: "10. Protección de datos y privacidad",
    paragraphs: [
      "El manejo de datos personales se rige por nuestra Política de Privacidad disponible en asprofunnel.com/privacy. Adicionalmente:",
      "El Cliente es el responsable del tratamiento de los datos personales de sus contactos y leads. AsproFunnel actúa como encargado del tratamiento, procesando dichos datos exclusivamente según las instrucciones del Cliente y para la prestación del servicio. El Cliente garantiza que ha obtenido todos los consentimientos necesarios de sus contactos para el procesamiento de sus datos a través de nuestra plataforma. El Cliente es responsable de cumplir con todas las leyes de protección de datos aplicables en su jurisdicción, incluyendo pero no limitado a GDPR, CCPA, y leyes locales de protección de datos de América Latina.",
    ],
  },
  {
    title: "11. Limitación de responsabilidad",
    paragraphs: [
      "En la máxima medida permitida por la ley aplicable:",
      "AsproFunnel no será responsable por daños indirectos, incidentales, especiales, consecuenciales o punitivos, ni por pérdida de beneficios, ingresos, datos o uso, ya sea basado en garantía, contrato, agravio o cualquier otra teoría legal. La responsabilidad total acumulada de AsproFunnel por cualquier reclamación relacionada con el servicio no excederá el monto pagado por el Cliente a AsproFunnel durante los 12 meses anteriores a la reclamación. AsproFunnel no es responsable por acciones tomadas por Meta, WhatsApp o cualquier otra plataforma de terceros, incluyendo la suspensión, restricción o terminación de cuentas. AsproFunnel no garantiza disponibilidad ininterrumpida del servicio y no será responsable por interrupciones causadas por factores fuera de su control razonable.",
    ],
  },
  {
    title: "12. Suspensión y terminación",
    paragraphs: [
      "AsproFunnel puede suspender o terminar el acceso del Cliente al servicio si: el Cliente incumple estos Términos o las políticas de Meta; el Cliente utiliza el servicio para actividades ilegales o fraudulentas; el Cliente no realiza los pagos correspondientes; o Meta suspende o termina la cuenta de WhatsApp Business del Cliente.",
      "El Cliente puede cancelar su cuenta en cualquier momento notificando a hello@asprofunnel.com. En caso de cancelación: el saldo publicitario no utilizado y no comprometido en campañas activas podrá ser reembolsado a discreción de AsproFunnel; los datos del Cliente serán retenidos conforme a nuestra Política de Privacidad; y el acceso a la plataforma cesará al momento de la cancelación efectiva.",
    ],
  },
  {
    title: "13. Indemnización",
    paragraphs: [
      "El Cliente acepta defender, indemnizar y mantener indemne a Aspronet Labs LLC, sus directores, empleados y agentes de cualquier reclamación, daño, pérdida, responsabilidad y gasto (incluyendo honorarios legales razonables) que surjan de: el uso del servicio por parte del Cliente; el incumplimiento de estos Términos por parte del Cliente; la violación de derechos de terceros por parte del Cliente; el contenido, productos o servicios del Cliente; y el incumplimiento de las políticas de Meta por parte del Cliente.",
    ],
  },
  {
    title: "14. Modificaciones",
    paragraphs: [
      "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Notificaremos los cambios materiales con al menos 30 días de anticipación a través del correo electrónico registrado o mediante aviso en la plataforma. El uso continuado del servicio después de la fecha de entrada en vigor de los cambios constituye su aceptación de los Términos modificados.",
    ],
  },
  {
    title: "15. Ley aplicable y jurisdicción",
    paragraphs: [
      "Estos Términos se regirán e interpretarán de conformidad con las leyes de los Estados Unidos de América y del estado en que Aspronet Labs LLC esté registrada, sin dar efecto a los principios de conflicto de leyes. Cualquier disputa que surja en relación con estos Términos se resolverá mediante arbitraje vinculante administrado de conformidad con las reglas de la American Arbitration Association, antes de recurrir a tribunales judiciales.",
    ],
  },
  {
    title: "16. Disposiciones generales",
    paragraphs: [
      "Si alguna disposición de estos Términos se considera inválida o inaplicable, las disposiciones restantes continuarán en pleno vigor y efecto. La falta de ejercicio de cualquier derecho o disposición de estos Términos no constituirá una renuncia a dicho derecho. Estos Términos, junto con la Política de Privacidad, constituyen el acuerdo completo entre usted y AsproFunnel con respecto al servicio. Ninguna renuncia a cualquier término será considerada como una renuncia adicional o continuada de dicho término o de cualquier otro término.",
    ],
  },
  {
    title: "17. Contacto",
    paragraphs: [
      "Para preguntas sobre estos Términos y Condiciones, contáctenos:",
    ],
    contact: "Aspronet Labs LLC\nEmail: hello@asprofunnel.com\nSitio web: https://asprofunnel.com",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-white)] text-[var(--text-primary)]">
      {/* Navbar */}
      <nav className="flex w-full items-center justify-between px-4 py-4 bg-[var(--bg-white)] sm:px-8 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-asprofunnel.svg" alt="AsproFunnel" className="h-8 w-auto" />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/#producto" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Producto</Link>
          <Link href="/#pricing" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Pricing</Link>
          <Link href="/#faq" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">FAQ</Link>
        </div>
        <Link href="/#cta" className="hidden rounded-[10px] bg-[var(--bg-dark)] px-5 py-2 text-sm font-medium text-[var(--text-white)] lg:block">Agendar Discovery Call</Link>
      </nav>

      {/* Header */}
      <section className="relative flex w-full flex-col items-center overflow-hidden bg-[var(--bg-white)] h-[300px] sm:h-[360px]">
        <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4">
          <span className="text-sm font-medium tracking-[1.5px] text-[var(--text-secondary)]">Legal</span>
          <h1 className="text-center text-[32px] font-bold tracking-[-1px] text-[var(--text-primary)] sm:text-[42px] lg:text-[52px] lg:tracking-[-1.5px]">Términos y Condiciones</h1>
          <p className="text-base text-[var(--text-secondary)]">Última actualización: 1 de febrero de 2026</p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px w-full bg-[var(--border-default)]" />

      {/* Content */}
      <section className="flex w-full justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
        <div className="flex w-full max-w-[720px] flex-col gap-12">
          {sections.map((s) => (
            <div key={s.title} className="flex flex-col gap-5">
              <h2 className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-[1.7] text-[var(--text-secondary)]">{p}</p>
              ))}
              {s.contact && (
                <p className="whitespace-pre-line text-base font-medium leading-[1.7] text-[var(--text-primary)]">{s.contact}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex w-full flex-col items-center gap-6 border-t border-[var(--border-light)] bg-[var(--bg-light)] px-4 py-8 sm:px-8 lg:flex-row lg:justify-between lg:px-20 lg:py-10">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-asprofunnel.svg" alt="AsproFunnel" className="h-6 w-auto opacity-50" />
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] sm:text-[13px]">Términos y Condiciones</Link>
          <Link href="/privacy" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] sm:text-[13px]">Política de Privacidad</Link>
          <a href="mailto:hello@asprofunnel.com" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] sm:text-[13px]">Contacto</a>
        </div>
        <span className="text-xs text-[var(--text-muted)] sm:text-[13px]">© 2026 AsproFunnel — A product of Aspronet Labs LLC</span>
      </footer>
    </div>
  );
}
