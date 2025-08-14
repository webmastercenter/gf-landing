import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(null)

  const faqs = [
    {
      question: "Quais serviços vocês oferecem?",
      answer:
        "Trabalhamos com desenvolvimento web, aplicativos mobile, soluções em nuvem, consultoria em TI e automação de processos.",
    },
    {
      question: "Vocês atendem empresas de qualquer porte?",
      answer:
        "Sim! Atuamos desde pequenas empresas até grandes corporações, adaptando nossas soluções conforme a necessidade do cliente.",
    },
    {
      question: "Qual é o prazo médio de entrega dos projetos?",
      answer:
        "O prazo depende do escopo do projeto, mas sempre prezamos por agilidade sem abrir mão da qualidade.",
    },
    {
      question: "Como posso solicitar um orçamento?",
      answer:
        "Você pode entrar em contato através do nosso formulário no site ou diretamente pelo e-mail/WhatsApp disponíveis na seção de contato.",
    },
  ]

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl text-white font-bold text-center mb-10">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-50 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={22} />
                ) : (
                  <ChevronDown size={22} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}