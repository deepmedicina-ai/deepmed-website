import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2" size={16} />
            Voltar
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8" data-testid="text-title">Termos de Uso</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e utilizar o DeepMed (deepmed.net.br), você concorda com estes termos de serviço. 
              Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Uso Educacional (Aviso Importante)</h2>
            <p className="text-muted-foreground mb-4">
              O conteúdo deste site (simuladores, artigos, podcasts, calculadoras) tem caráter 
              exclusivamente educacional e informativo para estudantes de medicina.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-destructive font-medium">
                As informações aqui contidas NÃO constituem aconselhamento médico, diagnóstico ou tratamento. 
                Em caso de emergência médica real, procure um serviço de saúde ou médico qualificado.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              O conteúdo original, design, logotipos e códigos do DeepMed são de propriedade de 
              Fábio Silveira e estão protegidos pelas leis de direitos autorais. O uso não autorizado 
              de qualquer material pode violar leis de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Isenção de Responsabilidade</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Precisão:</strong> Embora nos esforcemos para manter o conteúdo 
                atualizado (baseado em bibliografias médicas reconhecidas), a medicina está em constante evolução. 
                Não garantimos que todas as informações estejam 100% livres de erros.
              </li>
              <li>
                <strong className="text-foreground">Calculadora Acadêmica:</strong> A calculadora de CR é uma ferramenta 
                estimativa para auxílio no planejamento do aluno. O cálculo oficial e final é de responsabilidade 
                exclusiva da secretaria da universidade.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Modificações</h2>
            <p className="text-muted-foreground">
              O DeepMed pode revisar estes termos de serviço a qualquer momento, sem aviso prévio. 
              Ao usar este site, você concorda em ficar vinculado à versão atual desses termos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
