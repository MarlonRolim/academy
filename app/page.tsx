'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { CardContent, Card } from '@/components/ui/card'
import {
  BookOpen,
  Video,
  MessageCircle,
  Users,
  ChevronRight,
  ChevronLeft,
  Check,
} from 'lucide-react'

const InteractiveDemo = () => {
  const [step, setStep] = useState(0)
  const controls = useAnimation()

  const steps = [
    {
      title: 'Escolha um Curso',
      content: 'Explore nossa vasta biblioteca de cursos em diversas áreas.',
    },
    {
      title: 'Assista às Aulas',
      content:
        'Acesse vídeo-aulas de alta qualidade a qualquer hora, em qualquer lugar.',
    },
    {
      title: 'Interaja com Professores',
      content: 'Tire dúvidas e participe de discussões em tempo real.',
    },
    {
      title: 'Pratique e Avalie',
      content:
        'Teste seus conhecimentos com exercícios interativos e receba feedback instantâneo.',
    },
  ]

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
  }, [step, controls])

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-lg shadow-lg text-white">
      <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={controls}>
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          {steps[step].title}
        </h3>
        <p className="mb-4 text-sm md:text-base">{steps[step].content}</p>
      </motion.div>
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          onClick={() =>
            setStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
          }
          className="text-white border-white hover:bg-white hover:text-purple-600 text-sm md:text-base"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
          }
          className="text-white border-white hover:bg-white hover:text-purple-600 text-sm md:text-base"
        >
          Próximo <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const increment = Math.min((progress / duration) * target, target)
      setCount(Math.floor(increment))
      if (progress < duration) {
        requestAnimationFrame(animateCount)
      }
    }
    requestAnimationFrame(animateCount)
  }, [target, duration])

  return <span className="font-bold text-2xl md:text-4xl">{count}+</span>
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Estudante',
      content:
        'EduConnect transformou minha experiência de aprendizado. Agora posso estudar no meu próprio ritmo e interagir com professores incríveis!',
    },
    {
      name: 'João Santos',
      role: 'Professor',
      content:
        'Como educador, o EduConnect me permite alcançar alunos de todo o mundo e compartilhar meu conhecimento de forma eficaz.',
    },
    {
      name: 'Ana Oliveira',
      role: 'Profissional em Transição de Carreira',
      content:
        'Graças ao EduConnect, consegui adquirir novas habilidades e fazer uma transição de carreira bem-sucedida.',
    },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-800/80">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            EduConnect
          </span>
        </Link>
        <nav className="ml-auto items-center space-x-4 hidden md:flex">
          <Link
            className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            href="#features"
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            href="#how-it-works"
          >
            Como Funciona
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            href="#pricing"
          >
            Preços
          </Link>
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900"
          >
            Login
          </Button>
          <Button className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
            Cadastre-se
          </Button>
        </nav>
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-2 px-4">
          <Link
            className="block py-2 text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400"
            href="#features"
          >
            Recursos
          </Link>
          <Link
            className="block py-2 text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400"
            href="#how-it-works"
          >
            Como Funciona
          </Link>
          <Link
            className="block py-2 text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400"
            href="#pricing"
          >
            Preços
          </Link>
          <Button
            variant="outline"
            className="w-full mt-2 text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900"
          >
            Login
          </Button>
          <Button className="w-full mt-2 bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
            Cadastre-se
          </Button>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <motion.div
            className="container mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mb-4">
              Revolucione Sua Educação
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 text-sm md:text-base lg:text-lg dark:text-gray-300 mb-8">
              Conectando professores apaixonados a alunos ávidos por
              conhecimento. Descubra um novo mundo de aprendizado interativo e
              personalizado.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-full md:w-auto bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                Comece Sua Jornada
              </Button>
              <Button
                variant="outline"
                className="w-full md:w-auto mt-2 md:mt-0 text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Conheça Nossos Cursos
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Experimente o Futuro da Educação
            </motion.h2>
            <InteractiveDemo />
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Recursos Inovadores
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <CardContent className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <Video className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4 relative z-10" />
                    <h3 className="text-lg md:text-xl font-bold mb-2 relative z-10">
                      Video-aulas Interativas
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 relative z-10">
                      Assista a aulas envolventes com recursos interativos que
                      mantêm você engajado e aprendendo ativamente.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <CardContent className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <MessageCircle className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4 relative z-10" />
                    <h3 className="text-lg md:text-xl font-bold mb-2 relative z-10">
                      Mentoria Personalizada
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 relative z-10">
                      Conecte-se com mentores especializados que guiarão seu
                      aprendizado e desenvolvimento profissional.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <CardContent className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <Users className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4 relative z-10" />
                    <h3 className="text-lg md:text-xl font-bold mb-2 relative z-10">
                      Comunidade de Aprendizado
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 relative z-10">
                      Participe de uma comunidade vibrante de alunos e
                      educadores, compartilhando conhecimentos e experiências.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-purple-100 dark:bg-purple-900">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Impacto Real
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <AnimatedCounter target={100000} />
                <p className="text-base md:text-lg mt-2">Alunos Ativos</p>
              </div>
              <div>
                <AnimatedCounter target={5000} />
                <p className="text-base md:text-lg mt-2">Cursos Disponíveis</p>
              </div>
              <div>
                <AnimatedCounter target={98} />
                <p className="text-base md:text-lg mt-2">% de Satisfação</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              O Que Dizem Nossos Alunos
            </motion.h2>
            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
              >
                <p className="text-base md:text-lg mb-4">
                  {testimonials[currentTestimonial].content}
                </p>
                <p className="font-bold">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].role}
                </p>
              </motion.div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial
                        ? 'bg-purple-600'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Planos Flexíveis para Todos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                      Plano Básico
                    </h3>
                    <p className="text-3xl md:text-4xl font-bold mb-4">
                      Grátis
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Acesso a cursos gratuitos
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Fórum da comunidade
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Recursos básicos de aprendizado
                        </span>
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                      Começar Agora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-purple-600 dark:border-purple-400">
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                      Plano Pro
                    </h3>
                    <p className="text-3xl md:text-4xl font-bold mb-4">
                      R$49/mês
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Acesso ilimitado a todos os cursos
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Mentoria personalizada
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Certificados de conclusão
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Recursos avançados de aprendizado
                        </span>
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                      Assinar Agora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                      Plano Professor
                    </h3>
                    <p className="text-3xl md:text-4xl font-bold mb-4">
                      R$99/mês
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Crie e venda cursos ilimitados
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Ferramentas de análise avançadas
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Suporte prioritário
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm md:text-base">
                          Integração com ferramentas externas
                        </span>
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                      Comece a Ensinar
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600"
        >
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white mb-4 md:mb-6">
              Comece Sua Jornada de Aprendizado Hoje
            </h2>
            <p className="mx-auto max-w-[700px] text-white text-base md:text-lg mb-6 md:mb-8">
              Junte-se a milhares de alunos que estão transformando suas vidas
              através da educação online.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-base md:text-lg px-6 py-3">
              Inscreva-se Gratuitamente
            </Button>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Perguntas Frequentes
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Como funciona o EduConnect?
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  O EduConnect é uma plataforma online que conecta alunos a
                  professores qualificados. Você pode escolher cursos, assistir
                  a vídeo-aulas, participar de sessões ao vivo e interagir com
                  instrutores e outros alunos.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Posso cancelar minha assinatura a qualquer momento?
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Sim, você pode cancelar sua assinatura a qualquer momento. Não
                  há contratos de longo prazo ou taxas de cancelamento.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Os certificados são reconhecidos?
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Nossos certificados são reconhecidos por muitas empresas e
                  instituições. No entanto, recomendamos verificar com seu
                  empregador ou instituição educacional específica para
                  confirmar a aceitação.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Como posso me tornar um instrutor no EduConnect?
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Para se tornar um instrutor, você precisa se inscrever em
                  nosso programa de instrutores, passar por um processo de
                  revisão e criar seu primeiro curso. Oferecemos suporte e
                  recursos para ajudá-lo a começar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 EduConnect. Transformando vidas através da educação.
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                href="#"
              >
                Sobre Nós
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                href="#"
              >
                Termos de Serviço
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                href="#"
              >
                Privacidade
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
