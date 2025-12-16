import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2" size={16} />
            Voltar
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2" data-testid="text-title">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-8">Última atualização: Dezembro de 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-lg text-muted-foreground">
              O DeepMed ("nós") preza pela privacidade dos seus usuários. Esta Política de Privacidade 
              descreve como suas informações são tratadas ao utilizar nosso site e ferramentas educacionais 
              (como a Calculadora de CR e Simuladores).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Coleta e Armazenamento de Dados</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Nós não coletamos seus dados pessoais em nossos servidores.</li>
              <li>
                Todas as informações inseridas na "Calculadora de CR" ou nas "Listas de Tarefas" são 
                processadas e armazenadas exclusivamente no armazenamento local (Local Storage) do seu 
                próprio dispositivo (celular ou computador). Nós não temos acesso a essas notas, senhas 
                ou informações acadêmicas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Cookies e Tecnologias Locais</h2>
            <p className="text-muted-foreground">
              Utilizamos o armazenamento local do navegador para lembrar suas preferências (como o modo 
              noturno ativado ou os dados que você salvou na calculadora) para que você não precise 
              digitá-los toda vez que entrar no site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Serviços de Terceiros</h2>
            <p className="text-muted-foreground">
              O DeepMed pode incorporar conteúdos de terceiros, como players de podcast do Spotify ou 
              vídeos do YouTube. Ao interagir com esses conteúdos, esses serviços podem coletar dados 
              de uso conforme suas próprias políticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Finalidade Educacional</h2>
            <p className="text-muted-foreground">
              Este aplicativo é uma ferramenta de suporte ao estudante de medicina. Os dados gerados 
              aqui (como simulações de notas) não têm vínculo oficial com a secretaria da Universidade 
              Salgado de Oliveira (UNIVERSO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas sobre esta política, entre em contato através da nossa{" "}
              <Link href="/contato" className="text-primary hover:underline">página de Contato</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
