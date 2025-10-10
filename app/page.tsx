"use client"

import { useState, useEffect } from "react"

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // TODO: Cambiar el número de WhatsApp
  const whatsappLink = "https://wa.me/5493620000000?text=Hola%20DAMROD%20SAS%2C%20quisiera%20hacer%20una%20consulta."

  const trabajosRealizados = [
    {
      img: "https://images.pexels.com/photos/532692/pexels-photo-532692.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Instalación de Red MT Aérea",
      desc: "Proyecto de media tensión en zona urbana con postes de hormigón",
    },
    {
      img: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Subestación Transformadora",
      desc: "Montaje completo de SET con equipamiento de última generación",
    },
    {
      img: "https://images.pexels.com/photos/236060/pexels-photo-236060.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Red Subterránea BT",
      desc: "Canalización y tendido de cables subterráneos en zona residencial",
    },
    {
      img: "https://images.pexels.com/photos/170781/pexels-photo-170781.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Alumbrado Público LED",
      desc: "Modernización de red de alumbrado con tecnología LED eficiente",
    },
    {
      img: "https://images.pexels.com/photos/159298/electricity-pylon-power-lines-high-voltage-159298.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Línea de Alta Tensión",
      desc: "Construcción de línea MT con torres metálicas en zona rural",
    },
    {
      img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Instalación Industrial",
      desc: "Proyecto eléctrico completo para planta industrial",
    },
  ]

  const servicios = [
    {
      title: "Infraestructuras eléctricas MT/BT",
      desc: "Construcción y mantenimiento de redes aéreas y subterráneas de media y baja tensión",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Redes eléctricas rurales",
      desc: "Electrificación rural con soluciones adaptadas a cada zona geográfica",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Estaciones sub-transformadoras",
      desc: "Montaje e instalación de subestaciones transformadoras completas",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Alumbrado público",
      desc: "Diseño, instalación y mantenimiento de redes de alumbrado LED",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Semáforos y señalización",
      desc: "Instalación de sistemas de semaforización y señalización vial inteligente",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Red de agua",
      desc: "Instalación de redes de agua potable con materiales certificados",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Red cloacal",
      desc: "Construcción de sistemas cloacales con ingeniería sanitaria especializada",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Instalaciones domiciliarias e industriales",
      desc: "Proyectos eléctricos completos para viviendas, comercios e industrias",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
  ]

  const faqs = [
    {
      q: "¿Cuál es el plazo de ejecución de un proyecto típico?",
      a: "Los plazos varían según la complejidad y envergadura del proyecto. Un proyecto de red BT residencial puede tomar entre 2-4 semanas, mientras que proyectos de MT o subestaciones pueden extenderse de 1 a 3 meses. Realizamos una planificación detallada en cada caso.",
    },
    {
      q: "¿En qué zonas operan?",
      a: "Nuestra base de operaciones está en Resistencia, Chaco, y operamos en toda la región del NEA (Noreste Argentino), incluyendo Chaco, Corrientes, Formosa y Misiones. Evaluamos proyectos en otras provincias según su envergadura.",
    },
    {
      q: "¿Cuentan con certificaciones y habilitaciones?",
      a: "Sí, contamos con todas las habilitaciones necesarias para operar en redes de MT y BT. Nuestro personal técnico está certificado y capacitado continuamente en normativas de seguridad eléctrica y protocolos de trabajo.",
    },
    {
      q: "¿Ofrecen garantías en sus trabajos?",
      a: "Todos nuestros proyectos incluyen garantía sobre materiales y mano de obra. Además, ofrecemos servicios de mantenimiento preventivo y correctivo para asegurar la vida útil de las instalaciones.",
    },
    {
      q: "¿Qué documentación entregan al finalizar un proyecto?",
      a: "Entregamos toda la documentación técnica: planos conforme a obra, certificados de materiales, protocolos de pruebas, manuales de operación y mantenimiento, y toda la documentación requerida por los entes reguladores.",
    },
  ]

  // Autoplay del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trabajosRealizados.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [trabajosRealizados.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trabajosRealizados.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trabajosRealizados.length) % trabajosRealizados.length)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header sticky */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xl font-bold text-gray-900">DAMROD SAS</span>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#inicio" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Inicio
              </a>
              <a href="#nosotros" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Nosotros
              </a>
              <a href="#servicios" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Servicios
              </a>
              <a href="#trabajos" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Trabajos
              </a>
              <a href="#contacto" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Contacto
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
              >
                Consultar por WhatsApp
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <a
                  href="#inicio"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#nosotros"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nosotros
                </a>
                <a
                  href="#servicios"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Servicios
                </a>
                <a
                  href="#trabajos"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trabajos
                </a>
                <a
                  href="#contacto"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition text-center"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Ingeniería eléctrica MT/BT integral
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-6">
                  Soluciones completas en infraestructura eléctrica para proyectos de media y baja tensión en toda la
                  región NEA
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Más de 5 años de experiencia en el sector</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cuadrillas certificadas y equipamiento propio</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cobertura en toda la región del NEA</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contacto"
                    className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition text-center"
                  >
                    Pedir cotización
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Ingeniería eléctrica - Trabajos en altura en instalaciones de media tensión"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* KPIs de confianza */}
        <section className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">+5</div>
                <div className="text-sm md:text-base text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">+100</div>
                <div className="text-sm md:text-base text-gray-600">Proyectos ejecutados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm md:text-base text-gray-600">Provincias de cobertura</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm md:text-base text-gray-600">Personal certificado</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="nosotros" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quiénes somos</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  DAMROD SAS es una empresa que se dedica a la ejecución integral de servicios de ingeniería para la
                  construcción y mantenimiento de obras civiles y electromecánicas en instalaciones de redes de media
                  (MT) y baja tensión (BT). Nos especializamos en soluciones integrales para proyectos tanto aéreos como
                  subterráneos, que comprenden todas las fases del ciclo de vida: ingeniería de diseño, planificación
                  estratégica, ejecución en campo, puesta en servicio y programas de mantenimiento preventivo y
                  correctivo.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Nuestra historia</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Con sus orígenes a finales de 2018 en Resistencia, Chaco, nuestra empresa se estableció con el
                  propósito de ofrecer servicios de ingeniería de calidad para el sector de la energía eléctrica. Desde
                  que iniciamos nuestras operaciones en 2020, nos hemos especializado en la ejecución de obras de media
                  y baja tensión (MT/BT), tanto aéreas como subterráneas. Esta dedicación nos ha permitido evolucionar
                  constantemente, asumiendo proyectos de mayor envergadura y consolidándonos como un nuevo referente
                  para el desarrollo energético de la provincia. Nuestro crecimiento es un reflejo directo del
                  compromiso con la excelencia que mantenemos en cada uno de nuestros trabajos.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Misión</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Ofrecer soluciones de ingeniería y construcción en infraestructura eléctrica, garantizando
                      calidad, seguridad y eficiencia. Estamos comprometidos en contribuir al desarrollo energético de
                      la provincia y la región, superando las expectativas de nuestros clientes en cada proyecto.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Visión</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Ser una empresa referente en la región dentro del sector de la energía eléctrica, reconocida por
                      la excelencia técnica, innovación y el compromiso con el medio ambiente y la seguridad laboral.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/236060/pexels-photo-236060.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Equipo de trabajo DAMROD realizando instalaciones eléctricas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones integrales en ingeniería eléctrica y obras civiles para todo tipo de proyectos
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicios.map((servicio, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="text-blue-600 mb-4">{servicio.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{servicio.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{servicio.desc}</p>
                  <a
                    href="#contacto"
                    className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 transition"
                  >
                    Solicitar info →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo trabajamos</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nuestro proceso garantiza la excelencia en cada etapa del proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { num: "01", title: "Diseño", desc: "Ingeniería de detalle y planificación técnica" },
                { num: "02", title: "Planificación", desc: "Cronograma, recursos y logística" },
                { num: "03", title: "Ejecución", desc: "Construcción con estándares de calidad" },
                { num: "04", title: "Puesta en servicio", desc: "Pruebas y comisionamiento" },
                { num: "05", title: "Mantenimiento", desc: "Soporte preventivo y correctivo" },
              ].map((paso, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                    <div className="text-4xl font-bold text-blue-100 mb-2">{paso.num}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{paso.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{paso.desc}</p>
                  </div>
                  {idx < 4 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores y Seguridad */}
        <section className="py-16 md:py-24 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros valores</h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Principios que guían cada uno de nuestros proyectos
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "Profesionalismo",
                  desc: "Actuamos con rigor técnico y seriedad en cada tarea",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Compromiso",
                  desc: "Nos involucramos en todos nuestros proyectos para alcanzar los objetivos",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Seguridad",
                  desc: "Priorizamos la integridad de nuestro personal y del entorno de trabajo",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Innovación",
                  desc: "Buscamos constantemente nuevas tecnologías y métodos para optimizar",
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                },
              ].map((valor, idx) => (
                <div key={idx} className="bg-blue-800 p-6 rounded-lg">
                  <div className="text-blue-300 mb-4">{valor.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{valor.title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{valor.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Seguridad y Medio Ambiente</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Implementamos estrictos protocolos de seguridad en todas nuestras operaciones, cumpliendo con las
                normativas nacionales e internacionales. Nuestro personal está capacitado en prevención de riesgos
                laborales y utilizamos equipamiento de protección certificado.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Además, nos comprometemos con el cuidado del medio ambiente, minimizando el impacto de nuestras obras y
                gestionando responsablemente los residuos generados en cada proyecto.
              </p>
            </div>
          </div>
        </section>

        {/* Trabajos Realizados - Carrusel */}
        <section id="trabajos" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trabajos realizados</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proyectos ejecutados con excelencia técnica y compromiso
              </p>
            </div>

            <div className="relative">
              {/* Carrusel */}
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                {trabajosRealizados.map((trabajo, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      idx === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={trabajo.img || "/placeholder.svg"}
                      alt={trabajo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{trabajo.title}</h3>
                      <p className="text-sm md:text-base text-gray-200">{trabajo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controles */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition"
                aria-label="Anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition"
                aria-label="Siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-6">
                {trabajosRealizados.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Ir a slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Casos destacados */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyectos destacados</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Casos de éxito que demuestran nuestra capacidad técnica
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  img: "https://images.pexels.com/photos/532692/pexels-photo-532692.jpeg?auto=compress&cs=tinysrgb&w=800",
                  title: "Red MT Urbana - Barrio Nuevo",
                  desc: "Construcción de 5 km de red de media tensión aérea con postes de hormigón, incluyendo 12 transformadores de distribución y conexión a red existente.",
                },
                {
                  img: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
                  title: "Subestación Industrial 13.2kV",
                  desc: "Montaje completo de subestación transformadora para planta industrial, incluyendo celdas de MT, transformador 1000kVA y tableros de BT.",
                },
                {
                  img: "https://images.pexels.com/photos/170781/pexels-photo-170781.jpeg?auto=compress&cs=tinysrgb&w=800",
                  title: "Alumbrado Público LED - Avenida Principal",
                  desc: "Modernización de 3 km de alumbrado público con tecnología LED, reduciendo el consumo energético en un 60% y mejorando la iluminación.",
                },
              ].map((caso, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={caso.img || "/placeholder.svg"}
                      alt={caso.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{caso.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{caso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
              <p className="text-lg text-gray-600">Respuestas a las consultas más comunes sobre nuestros servicios</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar tu proyecto eléctrico?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contáctanos hoy y recibe una cotización personalizada sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Enviar formulario
              </a>
            </div>
          </div>
        </section>

        {/* Formulario de contacto */}
        <section id="contacto" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto a la brevedad
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Formulario */}
              <div className="md:col-span-2">
                <form method="POST" action="form.php" className="bg-white p-8 rounded-lg shadow-md">
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa / Organización
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Seleccione un asunto</option>
                      <option value="cotizacion">Solicitar cotización</option>
                      <option value="consulta-tecnica">Consulta técnica</option>
                      <option value="mantenimiento">Servicio de mantenimiento</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="politica"
                        required
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                      />
                      <span className="text-sm text-gray-600">
                        Acepto la política de privacidad y el tratamiento de mis datos personales *
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Enviar consulta
                  </button>
                </form>
              </div>

              {/* Datos de contacto */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Ubicación</div>
                        <div className="text-sm text-gray-600">Resistencia, Chaco, Argentina</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-sm text-gray-600">info@damrodsas.com.ar</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Horario</div>
                        <div className="text-sm text-gray-600">Lun - Vie: 8:00 - 17:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-center"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Consultar por WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa / Cobertura */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestra cobertura</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Con base en <strong>Resistencia, Chaco</strong>, operamos en toda la región del{" "}
                  <strong>NEA (Noreste Argentino)</strong>, brindando servicios de ingeniería eléctrica de calidad.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Chaco</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Corrientes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Formosa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Misiones</span>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/170781/pexels-photo-170781.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Vista aérea de Resistencia, Chaco - Zona de cobertura DAMROD"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xl font-bold text-white">DAMROD SAS</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ingeniería eléctrica integral para proyectos de media y baja tensión en la región NEA.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Navegación</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-blue-400 transition">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="hover:text-blue-400 transition">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-blue-400 transition">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#trabajos" className="hover:text-blue-400 transition">
                    Trabajos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-blue-400 transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicios" className="hover:text-blue-400 transition">
                    Redes MT/BT
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-blue-400 transition">
                    Subestaciones
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-blue-400 transition">
                    Alumbrado público
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-blue-400 transition">
                    Instalaciones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Resistencia, Chaco</li>
                <li className="text-gray-400">Argentina</li>
                <li>
                  <a href="mailto:info@damrodsas.com.ar" className="hover:text-blue-400 transition">
                    info@damrodsas.com.ar
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} DAMROD SAS. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-blue-400 transition">
                  Aviso legal
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  Política de privacidad
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
              DAMROD SAS se compromete a proteger la privacidad de sus clientes y cumplir con la normativa vigente en
              materia de protección de datos personales. Los datos proporcionados serán utilizados exclusivamente para
              gestionar consultas y cotizaciones.
            </p>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
