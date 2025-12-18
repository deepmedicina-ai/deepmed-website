import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

import {
  Headphones,
  BookOpen,
  FileText,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Play,
  ArrowRight,
  Moon,
  Sun,
  Youtube,
  Check,
  User,
  Activity,
  Award,
  GraduationCap,
  Smartphone,
  Share,
  MoreVertical,
  Zap,
  Maximize2,
  HardDrive,
} from "lucide-react";
import heroImage from "@assets/generated_images/abstract_medical_sound_wave_with_digital_tech_aesthetic_optimized.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center">
              <img
                src="/logo-deepmed.png"
                alt="deepmed"
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Funcionalidades
            </a>
            <Link href="/portal-aluno" className="text-sm font-medium hover:text-primary transition-colors">
              Portal do Aluno
            </Link>
            <a
              href="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Episódios
            </a>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              Ouvir Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl"
          >
            <a
              href="#about"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#features"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <Link 
              href="/portal-aluno"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portal do Aluno
            </Link>
            <a
              href="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Episódios
            </a>
            <a
              href="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
              className="w-full py-3 rounded-xl bg-primary text-center font-bold text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Ouvir Agora
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Nova temporada disponível
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-tight">
              Medicina de forma <span className="text-primary">simples</span> e{" "}
              <span className="text-primary">objetiva</span>.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              A plataforma definitiva para estudantes de medicina que buscam
              otimizar seus estudos com conteúdos de alta qualidade e fácil
              absorção.
            </p>

            <div className="mb-8 w-full max-w-lg rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/show/6D8TyR1ly2YbaTmQWKHJwv?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
              >
                <Play fill="currentColor" size={20} />
                Ouvir no Spotify
              </a>
              <a
                href="https://youtube.com/playlist?list=PLqTPT03W8PfgjOxwm4kKm94lQMoKWNGLI&si=eQBHBdKegD1zwjJK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/80 transition-all"
              >
                <Youtube size={20} />
                Ver no YouTube
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border border-border text-foreground font-bold text-lg hover:bg-secondary/50 transition-all"
              >
                Saiba Mais
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[600px]">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
              <img
                src={heroImage}
                alt="Medical Sound Wave Visualization"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
                style={{ objectPosition: "center" }}
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <Headphones size={20} />
                  </div>
                  <span className="font-bold text-sm">Alta Qualidade</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Áudio cristalino e conteúdo revisado por especialistas.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-10 -right-6 bg-card p-4 rounded-2xl shadow-xl border border-border max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-primary">5K+</span>
                </div>
                <p className="text-xs font-medium text-muted-foreground">
                  Streams mensais
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-border/50">
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-2">
                5K+
              </h3>
              <p className="text-muted-foreground font-medium">
                Streams Totais
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-2">
                475+
              </h3>
              <p className="text-muted-foreground font-medium">
                Ouvintes Únicos
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-2">
                100%
              </h3>
              <p className="text-muted-foreground font-medium">
                Conteúdo Gratuito
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-2">
                15-20
              </h3>
              <p className="text-muted-foreground font-medium">
                Minutos por Episódio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Sobre o deepmed
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                O primeiro ecossistema educacional médico do Brasil construído a partir do conteúdo real das suas aulas
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                O deepmed é o primeiro ecossistema educacional brasileiro focado
                em transformar o aprendizado de medicina através de conteúdo
                programático específico, alinhado ao currículo das faculdades de
                medicina.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nossa missão é democratizar o conhecimento médico através de um
                ecossistema educacional inovador que transforma conteúdo de aula
                em experiências de aprendizado engajadoras e acessíveis.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Único podcast brasileiro ancorado em conteúdo curricular específico de faculdade",
                  "Criado por profissional com 20+ anos de experiência hospitalar combinada com vivência como estudante ativo",
                  "Dupla perspectiva que conecta teoria acadêmica com prática profissional real do dia a dia",
                  "Ecossistema completo: podcasts, guias de estudo, infográficos e questões comentadas estilo ENADE",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1 min-w-5 min-h-5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              {/* Creator Card */}
              <div className="bg-card border border-border rounded-xl p-6 flex gap-4 items-start shadow-sm">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Fábio Silveira</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fisioterapeuta com mais de 20 anos de experiência hospitalar
                    e estudante de medicina na UNIVERSO. Combina vivência
                    prática com conhecimento acadêmico para criar conteúdo
                    educacional único e aplicável.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <FeatureDetailCard
                icon={<Award className="w-8 h-8 text-primary" />}
                title="Foco no ENADE"
                description="Conteúdo alinhado com o currículo e exigências da prova nacional"
              />
              <FeatureDetailCard
                icon={<Activity className="w-8 h-8 text-primary" />}
                title="Abordagem Multimodal"
                description="Aprenda do seu jeito: ouvindo podcasts, lendo guias ou visualizando infográficos"
              />
              <FeatureDetailCard
                icon={<BookOpen className="w-8 h-8 text-primary" />}
                title="Base Científica"
                description="Todo conteúdo revisado e fundamentado em evidências atuais da medicina"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Tudo o que você precisa
            </h2>
            <p className="text-muted-foreground text-lg">
              Uma plataforma completa para complementar sua formação médica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Headphones className="w-10 h-10 text-primary" />}
              title="Podcasts Exclusivos"
              description="Episódios curtos e diretos ao ponto sobre as principais patologias e condutas médicas."
              link="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
            />
            <FeatureCard
              icon={<BookOpen className="w-10 h-10 text-primary" />}
              title="Guias de Estudo"
              description="Materiais em PDF que acompanham cada episódio para você revisar e fixar o conteúdo."
              link="https://drive.google.com/drive/folders/1VIhK9ciLWJ-FpL54mYdotKoJHBdfA74x?usp=sharing"
            />
            <FeatureCard
              icon={<FileText className="w-10 h-10 text-primary" />}
              title="Infográficos"
              description="Resumos visuais de alta qualidade para consultas rápidas no dia a dia."
              link="https://drive.google.com/drive/folders/1YhQbzt0bCNph7dO5iiC5IdWTMuLVthI8?usp=sharing"
            />
            <FeatureCard
              icon={<GraduationCap className="w-10 h-10 text-primary" />}
              title="Portal do Aluno"
              description="Acesso à matriz curricular, calculadoras e ferramentas acadêmicas do curso de Medicina."
              internalLink="/portal-aluno"
            />
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <iframe
                  width="100%"
                  style={{ aspectRatio: "16/9" }}
                  src="https://www.youtube.com/embed/videoseries?si=D_t8_GHUehZdLp4J&list=PLqTPT03W8PfgjOxwm4kKm94lQMoKWNGLI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                Conteúdo Visual
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                Assista no YouTube
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Conteúdo visual completo para complementar seu aprendizado, com
                aulas dinâmicas e explicações detalhadas.
              </p>
              <a
                href="https://youtube.com/playlist?list=PLqTPT03W8PfgjOxwm4kKm94lQMoKWNGLI&si=eQBHBdKegD1zwjJK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF0000] text-white font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-[#FF0000]/20"
              >
                <Youtube fill="currentColor" size={20} />
                Inscrever-se no Canal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PWA Install Section */}
      <section className="py-20 px-6 bg-muted/30" id="instalar-app">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
              Acesso Rápido
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Instale nosso App no celular
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sem precisar baixar nada na loja. Adicione o atalho direto na sua tela inicial!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* iPhone */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">iPhone (iOS)</h3>
                  <p className="text-sm text-muted-foreground">Use o navegador Safari</p>
                </div>
              </div>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">1</span>
                  <span className="text-muted-foreground">Acesse o site pelo <strong className="text-foreground">Safari</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">2</span>
                  <span className="text-muted-foreground">Toque no ícone <Share className="inline w-4 h-4 text-primary" /> <strong className="text-foreground">Compartilhar</strong> na barra inferior</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">3</span>
                  <span className="text-muted-foreground">Role e toque em <strong className="text-foreground">"Adicionar à Tela de Início"</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">4</span>
                  <span className="text-muted-foreground">Confirme tocando em <strong className="text-foreground">"Adicionar"</strong></span>
                </li>
              </ol>
            </div>

            {/* Android */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Android</h3>
                  <p className="text-sm text-muted-foreground">Use o navegador Chrome</p>
                </div>
              </div>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">1</span>
                  <span className="text-muted-foreground">Acesse o site pelo <strong className="text-foreground">Chrome</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">2</span>
                  <span className="text-muted-foreground">Toque no ícone <MoreVertical className="inline w-4 h-4 text-primary" /> <strong className="text-foreground">Menu</strong> (3 pontinhos)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">3</span>
                  <span className="text-muted-foreground">Selecione <strong className="text-foreground">"Adicionar à tela inicial"</strong> ou <strong className="text-foreground">"Instalar"</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">4</span>
                  <span className="text-muted-foreground">Confirme tocando em <strong className="text-foreground">"Instalar"</strong></span>
                </li>
              </ol>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-bold">Acesso Rápido</h4>
                <p className="text-sm text-muted-foreground">Entre com apenas um toque</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Maximize2 className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-bold">Tela Cheia</h4>
                <p className="text-sm text-muted-foreground">Navegue sem distrações</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HardDrive className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-bold">Sem Ocupar Espaço</h4>
                <p className="text-sm text-muted-foreground">Não consome memória do celular</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -skew-y-3 transform origin-left scale-110" />
        <div className="container mx-auto relative z-10">
          <div className="bg-background border border-border rounded-3xl p-8 md:p-16 text-center shadow-2xl max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Comece a aprender agora
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Junte-se a centenas de estudantes que já estão transformando sua
              forma de estudar medicina.
            </p>
            <a
              href="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-primary/30"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Ouvir no Spotify
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center">
              <img src="/logo-deepmed.png" alt="deepmed" className="h-6 md:h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/termos-uso" className="hover:text-primary transition-colors" data-testid="link-termos">
              Termos de Uso
            </Link>
            <Link href="/politica-privacidade" className="hover:text-primary transition-colors" data-testid="link-privacidade">
              Privacidade
            </Link>
            <Link href="/contato" className="hover:text-primary transition-colors" data-testid="link-contato">
              Contato
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/_deepmed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com/playlist?list=PLqTPT03W8PfgjOxwm4kKm94lQMoKWNGLI&si=eQBHBdKegD1zwjJK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://open.spotify.com/show/6D8TyR1ly2YbaTmQWKHJwv?si=b5c8478c08794867"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Headphones size={20} />
            </a>
          </div>
        </div>
        <div className="container mx-auto text-center mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} deepmed. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  link,
  internalLink,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  internalLink?: string;
}) {
  const CardContent = (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
    >
      <div className="mb-6 bg-primary/10 w-fit p-4 rounded-xl">{icon}</div>
      <h3 className="text-2xl font-bold font-heading mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-grow">
        {description}
      </p>
      {(link || internalLink) && (
        <div className="mt-6 flex items-center text-primary font-bold text-sm">
          Acessar <ArrowRight size={16} className="ml-2" />
        </div>
      )}
    </motion.div>
  );

  if (internalLink) {
    return (
      <Link href={internalLink} className="block h-full" data-testid={`link-${internalLink.replace('/', '')}`}>
        {CardContent}
      </Link>
    );
  }

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        data-testid={`link-external-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

function FeatureDetailCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
      <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold font-heading mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}