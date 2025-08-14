import * as React from "react"

const ServicesSection = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sites rápidos, modernos e responsivos para o seu negócio.",
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos que conectam sua marca ao usuário.",
    },
    {
      title: "Soluções em Cloud",
      description: "Escalabilidade e segurança com soluções baseadas em nuvem.",
    },
    {
      title: "Consultoria em TI",
      description: "Estratégias tecnológicas para otimizar seus processos.",
    },
    {
      title: "Automação de Processos",
      description: "Ganhe produtividade com sistemas automatizados.",
    },
  ]

  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Nossos Serviços</h2>

        {/* Grid Responsiva */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
