import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contato() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2" size={16} />
            Voltar
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4" data-testid="text-title">Fale Conosco</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Tem alguma sugestão, encontrou um erro no conteúdo ou quer contribuir com o deepmed? 
          Estamos sempre abertos a ouvir a comunidade acadêmica.
        </p>

        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="text-primary" size={24} />
              Informação de Contato
            </CardTitle>
            <CardDescription>
              Envie um e-mail direto para nossa equipe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium mb-4" data-testid="text-email">deepmedicina@gmail.com</p>
            <a 
              href="mailto:deepmedicina@gmail.com" 
              className="inline-block"
              data-testid="link-email"
            >
              <Button className="w-full">
                <Mail className="mr-2" size={16} />
                Abrir meu E-mail
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
