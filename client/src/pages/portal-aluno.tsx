import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Home,
  Dna,
  GraduationCap,
  Calculator,
  FileText,
  Briefcase,
  Menu,
  X,
  ArrowLeft,
  Search,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Section = "home" | "matriz" | "academic" | "calculator" | "financial" | "services";

export default function PortalAluno() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const menuItems = [
    { id: "home" as Section, label: "Início", icon: <Home size={20} /> },
    { id: "matriz" as Section, label: "Matriz Curricular", icon: <Dna size={20} /> },
    { id: "academic" as Section, label: "Vida Acadêmica", icon: <GraduationCap size={20} /> },
    { id: "calculator" as Section, label: "Calculadoras", icon: <Calculator size={20} /> },
    { id: "financial" as Section, label: "Contratos", icon: <FileText size={20} /> },
    { id: "services" as Section, label: "Serviços", icon: <Briefcase size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border">
        {/* Logo */}
        <div className="p-6 border-b border-border flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo-deepmed.png"
              alt="deepmed"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  data-testid={`button-nav-${item.id}`}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                    activeSection === item.id
                      ? "bg-primary/15 border-l-4 border-primary text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-foreground border-l-4 border-transparent"
                  }`}
                >
                  <span className={activeSection === item.id ? "text-primary" : ""}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="bg-secondary rounded-lg p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              UN
            </div>
            <div>
              <p className="text-xs font-semibold">UNIVERSO</p>
              <p className="text-[10px] text-muted-foreground">PPC Medicina</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-card border-b border-border p-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-deepmed.png"
              alt="deepmed"
              className="h-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="absolute inset-0 bg-background z-50 md:hidden flex flex-col pt-16 backdrop-blur-sm"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-foreground text-2xl p-2"
              data-testid="button-close-mobile-menu"
            >
              <X />
            </button>
            <nav className="flex flex-col px-6 pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-4 border-b border-border text-left flex items-center gap-3 ${
                    activeSection === item.id ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                  data-testid={`button-mobile-nav-${item.id}`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}

        {/* Top Bar */}
        <div className="bg-card border-b border-border px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back-home">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <h2 className="text-xl font-bold border-l-4 border-primary pl-3">
              {menuItems.find((item) => item.id === activeSection)?.label || "Bem-vindo"}
            </h2>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-96">
              <Input
                type="text"
                placeholder="Pesquisar..."
                className="pl-10"
                data-testid="input-search"
              />
              <Search className="absolute left-3 top-3 text-muted-foreground" size={16} />
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="hidden md:flex p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {activeSection === "home" && <HomeSection />}
          {activeSection === "matriz" && <MatrizSection />}
          {activeSection === "academic" && <AcademicSection />}
          {activeSection === "calculator" && <CalculatorSection />}
          {activeSection === "financial" && <FinancialSection />}
          {activeSection === "services" && <ServicesSection />}
        </div>
      </main>
    </div>
  );
}

function HomeSection() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Hero Banner */}
      <Card className="bg-card border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
        <CardContent className="p-8 relative z-10">
          <Badge className="mb-3 bg-primary text-primary-foreground">ATUALIZADO 2025.2</Badge>
          <h1 className="text-3xl font-bold mb-2">Portal do Aluno de Medicina</h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-xl">
            Acesso completo à matriz curricular, regulamentos e ferramentas acadêmicas baseadas no
            novo Projeto Pedagógico.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/matriz-curricular">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold" data-testid="button-view-matriz">
                <Dna size={16} className="mr-2" />
                Ver Matriz Curricular
              </Button>
            </Link>
            <Button variant="outline" data-testid="button-view-calculators">
              Calculadoras
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuickAccessCard
          icon={<Dna className="w-8 h-8 text-primary" />}
          title="Matriz Curricular"
          description="Consulte todas as disciplinas do curso de Medicina"
          badge="12 Semestres"
        />
        <QuickAccessCard
          icon={<Calculator className="w-8 h-8 text-primary" />}
          title="Calculadoras"
          description="Ferramentas para cálculo de média e análise acadêmica"
          badge="5 Ferramentas"
        />
        <QuickAccessCard
          icon={<FileText className="w-8 h-8 text-primary" />}
          title="Regulamentos"
          description="Acesso aos documentos e normas acadêmicas"
          badge="Atualizado"
        />
        <QuickAccessCard
          icon={<GraduationCap className="w-8 h-8 text-primary" />}
          title="Vida Acadêmica"
          description="Informações sobre estágios, internato e TCC"
          badge="Essencial"
        />
        <QuickAccessCard
          icon={<Briefcase className="w-8 h-8 text-primary" />}
          title="Serviços"
          description="Biblioteca, secretaria e outros serviços"
          badge="Disponível"
        />
        <QuickAccessCard
          icon={<FileText className="w-8 h-8 text-primary" />}
          title="Contratos"
          description="Consulte contratos e informações financeiras"
          badge="Importante"
        />
      </div>
    </div>
  );
}

function MatrizSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Matriz Curricular - Medicina UNIVERSO</CardTitle>
          <CardDescription>Projeto Pedagógico do Curso (PPC) - 2025.2</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Para visualizar a matriz curricular completa, acesse a página dedicada:
          </p>
          <Link href="/matriz-curricular">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" data-testid="button-go-to-matriz">
              <Dna size={16} className="mr-2" />
              Acessar Matriz Curricular Completa
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function AcademicSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Vida Acadêmica</CardTitle>
          <CardDescription>Informações sobre estágios, internato e atividades complementares</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="font-semibold mb-2">Estágios Obrigatórios</h3>
            <p className="text-sm text-muted-foreground">
              Os estágios obrigatórios são realizados a partir do 9º período, incluindo áreas como
              clínica médica, cirurgia, pediatria e ginecologia/obstetrícia.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="font-semibold mb-2">Internato Médico</h3>
            <p className="text-sm text-muted-foreground">
              O internato ocorre nos dois últimos anos do curso, com rodízios em diferentes
              especialidades médicas.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="font-semibold mb-2">Trabalho de Conclusão de Curso (TCC)</h3>
            <p className="text-sm text-muted-foreground">
              O TCC deve ser desenvolvido ao longo do curso, com orientação de professores
              especializados.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function CalculatorSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Calculadora de Média
            </CardTitle>
            <CardDescription>Calcule sua média acadêmica</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ferramenta para calcular média ponderada das disciplinas.
            </p>
            <Button variant="outline" className="w-full" data-testid="button-calc-media">Acessar Calculadora</Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Análise de Desempenho
            </CardTitle>
            <CardDescription>Acompanhe seu progresso</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Visualize seu desempenho ao longo dos semestres.
            </p>
            <Button variant="outline" className="w-full" data-testid="button-calc-performance">Acessar Análise</Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

function FinancialSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Contratos e Informações Financeiras</CardTitle>
          <CardDescription>Documentos e informações sobre mensalidades e contratos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="font-semibold mb-2">Contrato de Prestação de Serviços Educacionais</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Acesse o contrato de matrícula e prestação de serviços.
            </p>
            <Button variant="outline" size="sm" data-testid="button-view-contract">Ver Contrato</Button>
          </div>
          <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
            <h3 className="font-semibold mb-2">Informações sobre Mensalidades</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Consulte valores, datas de vencimento e formas de pagamento.
            </p>
            <Button variant="outline" size="sm" data-testid="button-view-tuition">Consultar</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ServicesSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle>Biblioteca</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Acesso ao acervo digital e físico da biblioteca universitária.
            </p>
            <Button variant="outline" className="w-full" data-testid="button-library">Acessar Biblioteca</Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle>Secretaria Acadêmica</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Solicitação de documentos, histórico escolar e outros serviços.
            </p>
            <Button variant="outline" className="w-full" data-testid="button-secretary">Contatar Secretaria</Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle>Suporte Técnico</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ajuda com sistemas acadêmicos e plataformas online.
            </p>
            <Button variant="outline" className="w-full" data-testid="button-support">Obter Suporte</Button>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle>Ouvidoria</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Canal para sugestões, reclamações e elogios.
            </p>
            <Button variant="outline" className="w-full" data-testid="button-ombudsman">Falar com Ouvidoria</Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

function QuickAccessCard({
  icon,
  title,
  description,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}) {
  return (
    <Card className="hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">{icon}</div>
          <Badge variant="secondary" className="text-xs">{badge}</Badge>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
