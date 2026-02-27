import Link from "next/link";

const sections = [
  {
    title: "1. Introducción",
    paragraphs: [
      'AsproFunnel es un producto de Nexfy LLC, una empresa registrada en los Estados Unidos de América ("nosotros", "nuestro", "la Empresa"). Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información personal de los usuarios de nuestra plataforma, sitio web (asprofunnel.com) y servicios relacionados ("el Servicio").',
      "Al utilizar nuestro Servicio, usted acepta las prácticas descritas en esta política. Si no está de acuerdo, le pedimos que no utilice nuestros servicios.",
    ],
  },
  {
    title: "2. Información que recopilamos",
    paragraphs: [
      "Recopilamos los siguientes tipos de información:",
      "Información proporcionada directamente por usted: nombre completo, dirección de correo electrónico, número de teléfono (incluyendo número de WhatsApp), nombre de empresa o actividad comercial, país y zona horaria, e información de pago cuando aplique.",
      "Información recopilada automáticamente: dirección IP, tipo de navegador y dispositivo, páginas visitadas y tiempo de permanencia, datos de interacción con nuestros mensajes y enlaces (incluyendo clics y aperturas), e información de cookies y tecnologías similares.",
      "Información de terceros: cuando usted conecta su cuenta de WhatsApp Business a través de nuestro servicio, recibimos datos proporcionados por Meta Platforms Inc. conforme a sus APIs, incluyendo su WhatsApp Business Account ID, número de teléfono registrado, nombre de perfil de WhatsApp Business y métricas de mensajería. Esta información se recibe y procesa conforme a los términos de uso de la API de WhatsApp Business de Meta.",
    ],
  },
  {
    title: "3. Cómo usamos su información",
    paragraphs: [
      "Utilizamos la información recopilada para: proveer, operar y mantener nuestros servicios de gestión de leads y automatización; enviar y recibir mensajes a través de la API de WhatsApp Business en nombre de nuestros clientes; optimizar campañas publicitarias y segmentación de audiencias; procesar pagos y administrar cuentas; enviar comunicaciones relacionadas con el servicio, incluyendo notificaciones operativas y actualizaciones; analizar el uso de la plataforma para mejorar nuestros servicios; cumplir con obligaciones legales y regulatorias; y prevenir fraude y actividades no autorizadas.",
    ],
  },
  {
    title: "4. WhatsApp Business API y Meta",
    paragraphs: [
      "AsproFunnel opera como proveedor de tecnología utilizando la API de WhatsApp Business de Meta Platforms Inc. En este contexto:",
      "Actuamos como procesadores de datos en nombre de nuestros clientes (los representantes de ventas que utilizan nuestra plataforma). Los mensajes enviados y recibidos a través de WhatsApp están sujetos a las políticas de Meta, incluyendo la Política de Mensajería de WhatsApp Business y la Política de Comercio de WhatsApp. No vendemos, compartimos ni utilizamos el contenido de los mensajes de WhatsApp para fines distintos a la prestación del servicio contratado. Los datos de WhatsApp Business se almacenan de forma segura y se retienen únicamente durante el tiempo necesario para la prestación del servicio.",
      "Para más información sobre cómo Meta maneja los datos, consulte la Política de Privacidad de Meta en https://www.facebook.com/privacy/policy/",
    ],
  },
  {
    title: "5. Consentimiento y comunicaciones (Opt-in / Opt-out)",
    paragraphs: [
      "Nuestros clientes son responsables de obtener el consentimiento apropiado de sus contactos antes de enviarles mensajes a través de nuestra plataforma. AsproFunnel requiere contractualmente que cada cliente obtenga el opt-in de sus contactos conforme a las políticas de mensajería de WhatsApp Business y las leyes aplicables.",
      'Si usted recibe mensajes a través de nuestra plataforma y desea dejar de recibirlos, puede: responder "STOP" o "PARAR" a cualquier mensaje para ser removido inmediatamente de las comunicaciones automatizadas; contactar directamente al negocio que le envió el mensaje; o contactarnos a hello@asprofunnel.com y le ayudaremos a identificar y detener las comunicaciones.',
      "Procesamos las solicitudes de opt-out de forma inmediata. Una vez procesada su solicitud, no recibirá más mensajes automatizados a través de nuestra plataforma del negocio en cuestión.",
    ],
  },
  {
    title: "6. Datos de usuarios finales (End-Users)",
    paragraphs: [
      "Como proveedor de tecnología, procesamos dos categorías distintas de datos personales:",
      "Datos de nuestros clientes (representantes de ventas): incluyen información de cuenta, perfil de WhatsApp Business, configuración de la plataforma, historial de uso y datos de facturación. Estos datos se procesan conforme a nuestra relación contractual directa con el cliente.",
      "Datos de usuarios finales (contactos y leads de nuestros clientes): incluyen número de teléfono, nombre (cuando es proporcionado), contenido de mensajes intercambiados, e interacciones con enlaces y contenido compartido. Estos datos se procesan exclusivamente en nombre de nuestros clientes, quienes actúan como responsables del tratamiento de los datos de sus contactos. No utilizamos los datos de usuarios finales para nuestros propios fines de marketing ni los compartimos con otros clientes. Los datos de usuarios finales se retienen únicamente durante el período necesario para la prestación del servicio al cliente correspondiente.",
    ],
  },
  {
    title: "7. Compartir información con terceros",
    paragraphs: [
      "No vendemos información personal. Podemos compartir información con: proveedores de servicios que nos ayudan a operar la plataforma (hosting, procesamiento de pagos, análisis), incluyendo pero no limitado a servicios de infraestructura en la nube, procesadores de pago y herramientas de análisis; Meta Platforms Inc. según lo requerido para el funcionamiento de la API de WhatsApp Business; autoridades legales cuando sea requerido por ley, orden judicial o proceso legal; y en caso de fusión, adquisición o venta de activos, donde la información podría transferirse al nuevo propietario.",
      "Todos nuestros proveedores de servicios están obligados contractualmente a proteger su información y utilizarla únicamente para los fines especificados.",
    ],
  },
  {
    title: "8. Seguridad de los datos",
    paragraphs: [
      "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal, incluyendo: cifrado de datos en tránsito (TLS/SSL) y en reposo, controles de acceso basados en roles, monitoreo continuo de seguridad, y copias de seguridad regulares. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar seguridad absoluta.",
    ],
  },
  {
    title: "9. Retención de datos",
    paragraphs: [
      "Retenemos su información personal mientras su cuenta esté activa o según sea necesario para proveer nuestros servicios. Información de cuenta y perfil: mientras la cuenta esté activa y hasta 12 meses después de su cancelación. Datos de mensajería: hasta 90 días después del envío, salvo requerimiento legal. Datos de facturación: según lo requerido por las leyes fiscales aplicables (generalmente 5 a 7 años). Datos analíticos: de forma agregada y anonimizada, sin límite de tiempo.",
      "Usted puede solicitar la eliminación de sus datos en cualquier momento contactándonos a hello@asprofunnel.com",
    ],
  },
  {
    title: "10. Sus derechos",
    paragraphs: [
      "Dependiendo de su jurisdicción, usted puede tener derecho a: acceder a la información personal que tenemos sobre usted, solicitar la corrección de información inexacta, solicitar la eliminación de su información personal, oponerse al procesamiento de su información, solicitar la portabilidad de sus datos, y retirar su consentimiento en cualquier momento.",
      "Para ejercer cualquiera de estos derechos, contáctenos a hello@asprofunnel.com. Responderemos a su solicitud dentro de los 30 días siguientes.",
    ],
  },
  {
    title: "11. Cookies y tecnologías de seguimiento",
    paragraphs: [
      "Utilizamos cookies y tecnologías similares para: mantener su sesión activa, analizar el tráfico del sitio web, y medir la efectividad de nuestras campañas. Usted puede configurar su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad del sitio.",
    ],
  },
  {
    title: "12. Transferencias internacionales de datos",
    paragraphs: [
      "Nexfy LLC tiene sede en los Estados Unidos. Si usted se encuentra fuera de los Estados Unidos, su información puede ser transferida y procesada en los Estados Unidos u otros países donde operan nuestros proveedores de servicios. Al utilizar nuestro Servicio, usted consiente esta transferencia. Tomamos medidas para garantizar que sus datos estén protegidos conforme a estándares adecuados de privacidad.",
    ],
  },
  {
    title: "13. Privacidad de menores",
    paragraphs: [
      "Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.",
    ],
  },
  {
    title: "14. Cambios a esta política",
    paragraphs: [
      'Podemos actualizar esta Política de Privacidad periódicamente. Publicaremos cualquier cambio en esta página y actualizaremos la fecha de "Última actualización". Le recomendamos revisar esta política regularmente.',
    ],
  },
  {
    title: "15. Contacto",
    paragraphs: [
      "Si tiene preguntas o inquietudes sobre esta Política de Privacidad, contáctenos:",
    ],
    contact: "Nexfy LLC\nEmail: hello@asprofunnel.com\nSitio web: https://asprofunnel.com",
  },
];

export default function PrivacyPage() {
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
          <h1 className="text-center text-[32px] font-bold tracking-[-1px] text-[var(--text-primary)] sm:text-[42px] lg:text-[52px] lg:tracking-[-1.5px]">Política de Privacidad</h1>
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
        <span className="text-xs text-[var(--text-muted)] sm:text-[13px]">© 2026 AsproFunnel — A product of Nexfy LLC</span>
      </footer>
    </div>
  );
}
