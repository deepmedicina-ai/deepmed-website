import { useState, useMemo } from "react";
import { Link } from "wouter";
import {
  Search, Clock, BookOpen, X, Activity, Brain,
  GraduationCap, ArrowLeft
} from "lucide-react";

// DADOS DO CURRÍCULO (Extraídos do PDF)
const curriculumData = [
  {
      period: 1,
      title: "1º Período",
      subjects: [
          { code: "M001", name: "Habilidades e Atitudes Profissionais I", chTotal: 80, chTeorica: 20, chPratica: 60, type: "Obrigatória", desc: "Introdução ao Desenvolvimento Acadêmico e Científico. Profissionalismo Médico. Seminário como método de Estudo. Habilidades de Comunicação Oral. Habilidades básicas de comunicação verbal e não-verbal, preceitos éticos, direitos humanos e valorização da vida. Avaliação e interpretação dos sinais vitais e medidas antropométricas. Primeiros socorros pré-hospitalar. Técnica de venopunção. Basic Life Support (AHA). Suporte básico de vida em bebês, crianças e adultos; uso do DEA; manobras de desengasgo." },
          { code: "M002", name: "Ações Integrais em Saúde I", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Introdução às Ações Integrais em Saúde. Organização da Atenção Primária à Saúde na Região. Diagnóstico de Saúde da Comunidade. Antropologia em Saúde. Corpo e suas Definições Culturais. Saúde, Espiritualidade e Religiosidade. Aspectos Culturais da Interação Médico-paciente. Farmacologia, Cultura e Medicalização. Práticas Populares. Relações Étnico-Raciais, História e Cultura Afro-brasileira e Indígena. Diversidade de Gênero. Prática de Campo." },
          { code: "M003", name: "Bases Moleculares dos Seres Vivos", chTotal: 80, chTeorica: 60, chPratica: 20, type: "Obrigatória", desc: "Introdução à Química da Vida. Estrutura e função de macromoléculas (aminoácidos, proteínas, carboidratos, lipídeos, ácidos nucleicos). Estrutura e Função das Enzimas. Metabolismo das biomoléculas e seu controle. Bases bioquímicas de condições patológicas. Isolamento de DNA. Biomembranas e Transporte. Citoesqueleto e Matriz Extracelular. Fluxo de Proteínas, Tráfego de Vesículas. Biofísica molecular e celular. Biossinalização. Radiobiologia e diagnósticos." },
          { code: "M004", name: "Biologia do Desenvolvimento", chTotal: 80, chTeorica: 40, chPratica: 40, type: "Obrigatória", desc: "Embriologia, Período Fetal, Placenta. Histologia (Epitelial, Pele, Conjuntivo, Sangue). Espermatogênese e ovogênese. Fertilização. Desenvolvimento Pré-Implantação (segmentação, blastocisto). Implantação. Camadas germinativas (ectoderma, mesoderma, endoderma). Organogênese e Morfogênese. Desenvolvimento do Sistema Nervoso (neurulação). Malformações Congênitas e Teratogenia. Regeneração e Reparo Tecidual." },
          { code: "M005", name: "Integração I (Musculoesquelético)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Embriogênese dos Membros. Histologia (Cartilaginoso, Ósseo, Muscular). Anatomia Humana (Esqueleto Axial e Apendicular, Crânio, Coluna, Membros). Anatomia Articular e Muscular. Fisiologia (Potencial de Ação, Sinapse Neuromuscular, Contratilidade). Metabolismo Muscular e Ósseo. Farmacologia (Bloqueadores Neuromusculares, Anticolinesterásicos)." },
          { code: "M006", name: "Formação Cidadã I", chTotal: 40, chTeorica: 40, chPratica: 0, type: "Obrigatória", desc: "Introdução à Bioética. Princípios e Fundamentos. Bioética clínica (Início e Fim da vida, Reprodução assistida). Direitos Humanos. Evolução da Medicina. Código de Ética Médica. Deontologia Médica (Conselhos, Sigilo, Responsabilidade, Omissão de Socorro, Exercício Profissional)." },
          { code: "M043", name: "Extensão I", chTotal: 100, type: "Extensão", desc: "Relações socioambientais e o processo saúde-doença. Relatório dos problemas socioambientais e aplicação de questionários na comunidade. Projeto de intervenção sobre fatores meio ambiente-indivíduo." }
      ]
  },
  {
      period: 2,
      title: "2º Período",
      subjects: [
          { code: "M007", name: "Habilidades e Atitudes Profissionais II", chTotal: 80, chTeorica: 20, chPratica: 60, type: "Obrigatória", desc: "Comunicação e Relação Médico-Paciente (verbal, não verbal, não violenta). Ciclo da Vida (Gestação ao Processo de Morte). Habilidades de Comunicação Escrita e Oral (Prontuários). Entrevista e Anamnese. Exame Físico (Inspeção, palpação, percussão, ausculta). Ectoscopia, cabeça e pescoço, linfonodos." },
          { code: "M008", name: "Ações Integrais em Saúde II", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Sistemas de Saúde e Políticas no Brasil. Princípios e Financiamento do SUS. Atenção Primária no Brasil e no Mundo. Medicina de Família. Promoção da Saúde e Empoderamento. Educação Ambiental. Planejamento, Agravos e Indicadores de Saúde. Prática de Campo." },
          { code: "M009", name: "Mecanismos de Agressão e Defesa", chTotal: 120, chTeorica: 80, chPratica: 40, type: "Obrigatória", desc: "Integração de Bacteriologia, Parasitologia, Micologia, Virologia e Imunologia. Morfologia e fisiologia dos agentes infecciosos. Mecanismos de patogenicidade e virulência. Resposta imunológica. Diagnóstico laboratorial e biossegurança." },
          { code: "M010", name: "Integração II (Sistema Tegumentar)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Embriogênese, Histologia e Anatomia da pele e anexos. Fisiologia (proteção, regulação térmica). Patologias (dermatites, infecções, neoplasias). Farmacologia e Terapêutica Dermatológica. Raciocínio clínico em dermatologia." },
          { code: "M011", name: "Integração III (Sistema Nervoso)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Embriogênese do SN (Central, Periférico, Autônomo). Neurohistologia. Neuroanatomia (Medula, Tronco, Cerebelo, Diencéfalo, Telencéfalo, Nervos). Neurofisiologia (Neurotransmissão, Sensorial, Motor, Autonômico, Superiores). Farmacologia (SNA, Anticonvulsivantes, Antidepressivos, Opioides)." },
          { code: "M012", name: "Formação Cidadã II", chTotal: 40, chTeorica: 40, chPratica: 0, type: "Obrigatória", desc: "Relações Étnico-raciais, Cultura Afro-brasileira, Africana e Povos Originários. Legislação de igualdade racial. Racismo estrutural e saúde. Diversidade de gênero. Saúde da população negra e indígena." },
          { code: "M044", name: "Extensão II", chTotal: 100, type: "Extensão", desc: "Visitas a comunidades quilombolas. Aplicação de questionários para identificação de fatores de risco. Elaboração de projeto/ação para solução de problemas locais considerando fatores sociais e culturais." }
      ]
  },
  {
      period: 3,
      title: "3º Período",
      subjects: [
          { code: "M013", name: "Habilidades e Atitudes Profissionais III", chTotal: 80, chTeorica: 20, chPratica: 60, type: "Obrigatória", desc: "Metodologia Científica. Tipos de Pesquisa. Projeto de Pesquisa (Tema, Problema, Justificativa, Objetivos). Artigo Científico. Bioética na pesquisa com seres humanos. Comunicação em Eventos Científicos." },
          { code: "M014", name: "Ações Integrais em Saúde III", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Atenção Primária com foco em promoção e prevenção. Imunizações. Envelhecimento e Saúde do Idoso. Vigilância ambiental, sanitária e epidemiológica. Doenças de notificação compulsória. Introdução à semiologia na APS." },
          { code: "M015", name: "Integração IV (Sistema Reprodutor)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Embriologia, Histologia e Anatomia dos sistemas reprodutores masculino e feminino. Fisiologia do ciclo menstrual, ato sexual, gestação, parto e puerpério. Contracepção. DSTs. Neoplasias. Hormônios sexuais." },
          { code: "M016", name: "Integração V (Sistema Urinário)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Embriologia, Histologia e Anatomia renal. Fisiologia (Filtração, Regulação da PA, Equilíbrio Ácido-Base e Hidroeletrolítico). Fisiopatologia (Nefropatias, Insuficiência, Cálculos, Infecções). Farmacologia Renal (Diuréticos)." },
          { code: "M017", name: "Formação Cidadã III", chTotal: 40, chTeorica: 40, chPratica: 0, type: "Obrigatória", desc: "Direito Ambiental e Sustentabilidade na medicina. Gestão de resíduos. Acessibilidade e Inclusão para Pessoas com Deficiência. Legislação e adaptações arquitetônicas em saúde." },
          { code: "M045", name: "Extensão III", chTotal: 100, type: "Extensão", desc: "Necessidades de pessoas com deficiência e baixa mobilidade. Mobilidade urbana e saúde. Campanhas de educação em saúde da mulher e saúde do homem." }
      ]
  },
  {
      period: 4,
      title: "4º Período",
      subjects: [
          { code: "M018", name: "Habilidades e Atitudes Profissionais IV", chTotal: 80, chTeorica: 20, chPratica: 60, type: "Obrigatória", desc: "Semiologia Médica: Método clínico centrado na pessoa. Semiologia dos sistemas Musculoesquelético, Tegumentar e Geniturinário. Raciocínio clínico, síndromes e seleção de exames complementares." },
          { code: "M019", name: "Ações Integrais em Saúde IV", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Organização da APS. Acolhimento. Consulta Clínica (SOAP, CIAP). Abordagem Familiar e Comunitária (Cuidado Domiciliar). Gestão da Clínica. Apoio Matricial e NASF. Prática de Campo." },
          { code: "M020", name: "Integração VI (Sistema Endócrino)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Embriologia, Histologia e Anatomia das glândulas (Hipófise, Tireoide, Adrenal, Pâncreas). Fisiologia hormonal integrativa. Diabetes e Curva Glicêmica. Farmacologia (Tireoide, Hipoglicemiantes)." },
          { code: "M021", name: "Integração VII (Hematopoiético)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Hematopoiese e Histologia da Medula Óssea. Fisiologia do Sangue e Coagulação. Imunologia sanguínea. Patologias (Anemias, Leucemias). Transfusão. Farmacologia e terapêutica hematológica." },
          { code: "M022", name: "Integração VIII (Sistema Digestório)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Embriologia, Histologia e Anatomia do TGI (Boca ao Ânus, Fígado, Pâncreas). Fisiologia (Motilidade, Secreção, Digestão, Absorção). Fisiopatologia. Farmacologia (Antieméticos, Procinéticos, Doenças ácido-pépticas)." },
          { code: "M023", name: "Empreendedorismo e Inovação", chTotal: 40, chTeorica: 40, type: "Obrigatória", desc: "Empreendedorismo em saúde. Planejamento estratégico. Liderança e gestão de equipes. Inovação e tecnologia. Modelos de negócios. Marketing médico e aspectos legais." },
          { code: "M046", name: "Extensão IV", chTotal: 100, type: "Extensão", desc: "Gestão e Inovação em Serviços de Saúde. Desenvolvimento de projetos para solução de problemas em instituições públicas ou privadas. Apresentação de propostas em workshop." }
      ]
  },
  {
      period: 5,
      title: "5º Período",
      subjects: [
          { code: "M024", name: "Habilidades e Atitudes Profissionais V", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Semiologia do Tórax (Cardíaco e Respiratório), Abdome e Neurológica. Sinais, sintomas e grandes síndromes. Raciocínio clínico e estudo de casos." },
          { code: "M025", name: "Ações Integrais em Saúde V", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Saúde da Criança na APS. Puericultura, Crescimento e Desenvolvimento, AIDPI." },
          { code: "M026", name: "Integração IX (Cardiovascular)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Cardiologia. Anatomia e Fisiologia cardíaca. ECG básico. Hipertensão, Insuficiência Cardíaca." },
          { code: "M027", name: "Integração X (Respiratório)", chTotal: 120, chTeorica: 60, chPratica: 60, type: "Obrigatória", desc: "Pneumologia. Mecânica ventilatória, trocas gasosas. Doenças restritivas e obstrutivas." },
          { code: "M047", name: "Extensão V", chTotal: 100, type: "Extensão", desc: "Educação em saúde para melhoria do estilo de vida. Prevenção de doenças crônicas não-transmissíveis. Ações de avaliação de risco cardiovascular na comunidade." }
      ]
  },
  {
      period: 6,
      title: "6º Período",
      subjects: [
          { code: "M028", name: "Habilidades e Atitudes Profissionais VI", chTotal: 120, chTeorica: 20, chPratica: 100, type: "Obrigatória", desc: "Técnica Cirúrgica e Anestesiologia. Paramentação, instrumentação, suturas e nós. Cuidados pré e pós-operatórios. Princípios de anestesia. Abordagem do trauma e procedimentos ambulatoriais." },
          { code: "M029", name: "Ações Integrais em Saúde VI", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Saúde da Mulher na APS. Pré-natal de baixo risco. Hipertensão e Diabetes na gestação. ISTs. Rastreamento de câncer de colo e mama. Planejamento familiar." },
          { code: "M030", name: "Saúde da Criança", chTotal: 120, chTeorica: 40, chPratica: 80, type: "Obrigatória", desc: "Pediatria Clínica. Doenças prevalentes (Respiratórias, Gastrointestinais, Exantemáticas). Emergências pediátricas (RCP, Trauma). Doenças crônicas na infância." },
          { code: "M031", name: "Saúde da Mulher", chTotal: 120, chTeorica: 40, chPratica: 80, type: "Obrigatória", desc: "Ginecologia e Obstetrícia. Patologias benignas e malignas. Ginecologia oncológica. Climatério e Menopausa. Cirurgia ginecológica. Endocrinologia ginecológica." },
          { code: "M048", name: "Extensão VI", chTotal: 100, type: "Extensão", desc: "Ações sociais com gestantes e crianças em comunidades vulneráveis, escolas ou ONGs. Atendimento primário e educação em saúde." },
          { code: "OPT", name: "Optativa I", chTotal: 40, type: "Optativa", desc: "Disciplina de livre escolha (ver lista de optativas)." }
      ]
  },
  {
      period: 7,
      title: "7º Período",
      subjects: [
          { code: "M032", name: "Habilidades e Atitudes Profissionais VII", chTotal: 120, chTeorica: 20, chPratica: 100, type: "Obrigatória", desc: "Clínica Médica I. Raciocínio clínico em síndromes: Febre de origem indeterminada, Perda de peso, Dor abdominal, Icterícia, Edema, Linfonodomegalias. Prescrição e Atestados." },
          { code: "M033", name: "Ações Integrais em Saúde VII", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Saúde do Adulto na APS. Rastreamento e manejo de DCNTs. Abordagem de sintomas comuns na atenção primária: Tosse, Dor torácica, Cefaleia, Tontura, Dispepsia." },
          { code: "M034", name: "Saúde do Adulto", chTotal: 120, chTeorica: 40, chPratica: 80, type: "Obrigatória", desc: "Clínica Médica II. Cardiologia, Pneumologia, Nefrologia e Neurologia. Grandes síndromes clínicas (Insuficiência Cardíaca, Coronariana, Renal, DPOC, Cefaleias)." },
          { code: "M035", name: "Saúde da Pessoa Idosa", chTotal: 120, chTeorica: 40, chPratica: 80, type: "Obrigatória", desc: "Geriatria. Fisiologia do envelhecimento. Avaliação Geriátrica Ampla. Grandes Síndromes Geriátricas (Quedas, Imobilidade, Incontinência, Demência). Polifarmácia." },
          { code: "M036", name: "Metodologia Científica e MBE", chTotal: 40, chTeorica: 40, type: "Obrigatória", desc: "Medicina Baseada em Evidências. Tipos de estudos. Revisão Sistemática e Metanálise. Estratégia PICO. Leitura crítica de artigos científicos." },
          { code: "M049", name: "Extensão VII", chTotal: 80, type: "Extensão", desc: "Atenção à saúde do idoso. Ações em asilos ou casas de convivência. Impacto do envelhecimento populacional." },
          { code: "OPT", name: "Optativa II", chTotal: 40, type: "Optativa", desc: "Disciplina de livre escolha." }
      ]
  },
  {
      period: 8,
      title: "8º Período",
      subjects: [
          { code: "M037", name: "Habilidades e Atitudes Profissionais VIII", chTotal: 120, chTeorica: 20, chPratica: 100, type: "Obrigatória", desc: "Urgência e Emergência. Suporte Avançado de Vida. Abordagem sistematizada do trauma (PHTLS). Emergências clínicas, pediátricas e obstétricas. Medicina Legal e Tanatologia." },
          { code: "M038", name: "Ações Integrais em Saúde VIII", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Saúde do Trabalhador. Doenças Ocupacionais (LER/DORT, Pneumoconioses, PAIR). Nexo causal. Saúde Ambiental." },
          { code: "M039", name: "Saúde Mental", chTotal: 120, chTeorica: 40, chPratica: 80, type: "Obrigatória", desc: "Psiquiatria. Psicopatologia. Transtornos Mentais (Ansiedade, Depressão, Psicoses). Psicofarmacologia. Emergências Psiquiátricas. Reforma Psiquiátrica." },
          { code: "M040", name: "Cuidados Paliativos", chTotal: 100, chTeorica: 40, chPratica: 60, type: "Obrigatória", desc: "Princípios de Paliativismo. Controle de Sintomas (Dor, Dispneia). Comunicação de más notícias. Terminalidade e Luto. Espiritualidade em saúde." },
          { code: "M041", name: "Epidemiologia e Análise de Dados", chTotal: 80, chTeorica: 40, type: "Obrigatória", desc: "Bioestatística. Tipos de variáveis. Testes de hipóteses. Análise multivariada. Interpretação de dados epidemiológicos." },
          { code: "M042", name: "Psicologia Médica", chTotal: 40, chTeorica: 20, type: "Obrigatória", desc: "Relação Médico-Paciente. Aspectos psicológicos do adoecimento. Reações à doença e morte. Burnout médico." },
          { code: "M050", name: "Extensão VIII", chTotal: 80, type: "Extensão", desc: "Saúde mental e dependência química. Ações em CAPS, clínicas de reabilitação ou grupos de apoio." }
      ]
  },
  {
      period: 9,
      title: "9º Período (Internato)",
      subjects: [
          { code: "M051", name: "Internato em Saúde da Criança I (Neonatologia)", chTotal: 240, type: "Internato", desc: "Prática intensiva. Assistência em Sala de Parto. Reanimação Neonatal. Alojamento Conjunto. UTI Neonatal. Doenças do RN. 48h na Atenção Básica." },
          { code: "M052", name: "Internato em Saúde do Adulto I (Clínica)", chTotal: 240, type: "Internato", desc: "Prática em Enfermarias de Clínica Médica. Diagnóstico e manejo de pacientes internados. Discussão de casos clínicos. 48h na Atenção Básica." },
          { code: "M053", name: "Internato em Saúde da Mulher I (Obstetrícia)", chTotal: 240, type: "Internato", desc: "Prática em Maternidade. Centro Obstétrico. Parto normal e cesárea. Puerpério. Complicações obstétricas. 48h na Atenção Básica." }
      ]
  },
  {
      period: 10,
      title: "10º Período (Internato)",
      subjects: [
          { code: "M054", name: "Internato em Urgência e Emergência Pré-hospitalar", chTotal: 240, type: "Internato", desc: "Atendimento no SAMU ou UPA. Abordagem inicial do paciente grave. Trauma, IAM, AVC, Sepse, Intoxicações no ambiente pré-hospitalar." },
          { code: "M055", name: "Internato em Urgência e Emergência Hospitalar", chTotal: 240, type: "Internato", desc: "Prática em Pronto Socorro. Sala Vermelha. Manejo de pacientes críticos. Procedimentos de emergência. Trauma grave." },
          { code: "M056", name: "Internato em Saúde da Família e Comunidade I", chTotal: 240, type: "Internato", desc: "Imersão na Estratégia de Saúde da Família (ESF). Visitas domiciliares. Grupos operativos. Gestão da clínica na APS." }
      ]
  },
  {
      period: 11,
      title: "11º Período (Internato)",
      subjects: [
          { code: "M057", name: "Internato em Saúde da Criança II (Pediatria)", chTotal: 240, type: "Internato", desc: "Prática em Enfermarias Pediátricas e Emergência. Doenças prevalentes na infância. Pneumonias, diarreias, asma." },
          { code: "M058", name: "Internato em Saúde do Adulto II (Cirurgia)", chTotal: 240, type: "Internato", desc: "Prática em Clínica Cirúrgica. Centro Cirúrgico (instrumentação e auxílio). Pré e pós-operatório. Pequenas cirurgias." },
          { code: "M059", name: "Internato em Saúde da Mulher II (Ginecologia)", chTotal: 240, type: "Internato", desc: "Ambulatório de Ginecologia e Cirurgias Ginecológicas. Patologias benignas e malignas. Rastreamento e prevenção." }
      ]
  },
  {
      period: 12,
      title: "12º Período (Internato)",
      subjects: [
          { code: "M060", name: "Internato em Saúde da Pessoa Idosa", chTotal: 120, type: "Internato", desc: "Prática em Geriatria. ILPIs, Ambulatórios. Manejo de demências, quedas e polifarmácia." },
          { code: "M061", name: "Internato em Saúde Mental", chTotal: 120, type: "Internato", desc: "Prática em CAPS e Emergências Psiquiátricas. Manejo de crises, transtornos graves e dependência química." },
          { code: "M062", name: "Internato em Saúde da Família II", chTotal: 240, type: "Internato", desc: "Consolidação da prática na Atenção Primária. Abordagem comunitária e gestão em saúde." },
          { code: "OPT", name: "Internato Optativo", chTotal: 240, type: "Internato", desc: "Estágio prático em área de livre escolha do estudante (Ex: Cardiologia, UTI, Trauma, etc)." },
          { code: "M063", name: "Trabalho de Conclusão de Curso", chTotal: 80, type: "Obrigatória", desc: "Elaboração, escrita e defesa do Trabalho de Conclusão de Curso." }
      ]
  }
];

const optativasList = [
  { name: "Libras", code: "M074" },
  { name: "Diagnóstico por Imagem", code: "M064" },
  { name: "Métodos em Cardiologia / ECG", code: "M065/66" },
  { name: "Neuroanatomia Integrada", code: "M067" },
  { name: "Farmacologia Clínica", code: "M068" },
  { name: "Habilidades Clínicas", code: "M069" },
  { name: "Suporte ao Trauma", code: "M070" },
  { name: "Homeopatia", code: "M071" },
  { name: "Telemedicina", code: "M072" },
  { name: "Medicina Legal", code: "M073" },
  { name: "Gestão de Pessoas", code: "M075" },
  { name: "Gestão de Projetos", code: "M076" },
  { name: "Informática Médica", code: "M077" },
  { name: "IA em Saúde", code: "M078" },
  { name: "Feliciência", code: "M080" },
  { name: "PICS", code: "M081" },
  { name: "Escrita Acadêmica", code: "M082" },
  { name: "Inglês Instrumental", code: "M083" },
  { name: "Marketing Médico", code: "M086" }
];

export default function MatrizCurricular() {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<any>(null);

  const filteredData = useMemo(() => {
      return curriculumData.filter(period => {
          if (selectedPeriod === 'all') return true;
          if (selectedPeriod === 'ciclo-basico') return period.period <= 4;
          if (selectedPeriod === 'ciclo-clinico') return period.period >= 5 && period.period <= 8;
          if (selectedPeriod === 'internato') return period.period >= 9;
          return period.period === parseInt(selectedPeriod);
      }).map(period => ({
          ...period,
          subjects: period.subjects.filter(sub =>
              sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              sub.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (sub.desc && sub.desc.toLowerCase().includes(searchTerm.toLowerCase()))
          )
      })).filter(period => period.subjects.length > 0);
  }, [selectedPeriod, searchTerm]);

  return (
      <div className="min-h-screen pb-10 bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
          {/* Header */}
          <header className="bg-background/80 backdrop-blur-md border-b border-border p-6 sticky top-0 z-20">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                        <Link href="/">
                            <a className="p-2 rounded-full hover:bg-muted transition-colors">
                                <ArrowLeft size={24} />
                            </a>
                        </Link>
                      <div>
                          <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
                              <GraduationCap size={32} className="text-primary" />
                              Matriz <span className="text-primary">DeepMed</span>
                          </h1>
                          <p className="text-muted-foreground text-sm mt-1">Guia interativo baseado no PPC de Medicina - UNIVERSO</p>
                      </div>
                  </div>

                  <div className="flex gap-4 text-xs font-medium text-muted-foreground">
                      <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
                          <Clock size={14} className="text-primary" /> 7.523h Totais
                      </div>
                      <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
                          <Activity size={14} className="text-primary" /> 12 Períodos
                      </div>
                  </div>
              </div>
          </header>

          {/* Controls */}
          <div className="max-w-6xl mx-auto p-6 space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                  {/* Filter Buttons */}
                  <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                      {['all', 'ciclo-basico', 'ciclo-clinico', 'internato'].map((filter) => (
                          <button
                              key={filter}
                              onClick={() => setSelectedPeriod(filter)}
                              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 border
                                  ${selectedPeriod === filter
                                      ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                                      : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                                  }`}
                          >
                              {filter === 'all' ? 'Todos' :
                               filter === 'ciclo-basico' ? 'Ciclo Básico' :
                               filter === 'ciclo-clinico' ? 'Ciclo Clínico' : 'Internato'}
                          </button>
                      ))}
                  </div>

                  {/* Search */}
                  <div className="relative w-full md:w-72">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <input
                          type="text"
                          placeholder="Buscar disciplina ou conteúdo..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-muted-foreground focus:outline-none transition-all"
                      />
                  </div>
              </div>

              {/* Content Grid */}
              <div className="space-y-8">
                  {filteredData.map((period) => (
                      <div key={period.period} className="space-y-4 animate-fadeIn">
                          <div className="flex items-center gap-4">
                              <h2 className="text-xl font-bold flex items-center gap-2">
                                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                                  {period.title}
                              </h2>
                              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {period.subjects.map((subject) => (
                                  <div
                                      key={subject.code}
                                      onClick={() => setSelectedSubject(subject)}
                                      className="group cursor-pointer bg-card hover:bg-muted border border-border hover:border-primary/50 rounded-xl p-5 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                                  >
                                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>

                                      <div className="flex justify-between items-start mb-3 relative z-10">
                                          <span className="text-xs font-mono bg-background text-primary px-2 py-1 rounded border border-primary/20">
                                              {subject.code}
                                          </span>
                                          {subject.type === 'Extensão' && <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Extensão</span>}
                                          {subject.type === 'Internato' && <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 bg-rose-400/10 px-2 py-1 rounded">Internato</span>}
                                      </div>

                                      <h3 className="font-semibold mb-2 leading-snug group-hover:text-primary transition-colors relative z-10">
                                          {subject.name}
                                      </h3>

                                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-4 relative z-10">
                                          <span className="flex items-center gap-1.5">
                                              <Clock size={14} /> {subject.chTotal}h
                                          </span>
                                          {subject.chPratica && subject.chPratica > 0 && (
                                              <span className="flex items-center gap-1.5 text-primary">
                                                  <Activity size={14} /> Prática
                                              </span>
                                          )}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}

                  {filteredData.length === 0 && (
                      <div className="text-center py-20 text-muted-foreground">
                          <BookOpen size={64} className="mx-auto mb-4 opacity-20" />
                          <p>Nenhuma disciplina encontrada.</p>
                      </div>
                  )}
              </div>

              {/* Optativas Footer */}
              <div className="mt-12 bg-card border border-border rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2 relative z-10">
                      <Brain size={24} className="text-primary" /> Disciplinas Optativas Disponíveis
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                      {optativasList.map(opt => (
                          <span key={opt.code} className="bg-background text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full text-sm border border-border hover:border-primary/50 transition-all cursor-default">
                              {opt.name}
                          </span>
                      ))}
                  </div>
              </div>
          </div>

          {/* Modal */}
          {selectedSubject && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedSubject(null)}>
                  <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative animate-scaleIn" onClick={e => e.stopPropagation()}>

                      {/* Modal Header */}
                      <div className="p-6 border-b border-border sticky top-0 bg-card/95 backdrop-blur z-10 flex justify-between items-start">
                          <div>
                              <span className="text-xs font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full">
                                  {selectedSubject.code}
                              </span>
                              <h2 className="text-2xl font-bold mt-3 leading-tight">{selectedSubject.name}</h2>
                          </div>
                          <button onClick={() => setSelectedSubject(null)} className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground">
                              <X />
                          </button>
                      </div>

                      {/* Modal Body */}
                      <div className="p-8 space-y-8">
                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-4">
                              <div className="bg-background p-4 rounded-xl border border-border text-center">
                                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">Carga Total</div>
                                  <div className="text-2xl font-bold">{selectedSubject.chTotal}h</div>
                              </div>
                              {selectedSubject.chTeorica !== undefined && (
                                  <div className="bg-background p-4 rounded-xl border border-border text-center relative overflow-hidden">
                                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                      <div className="text-[10px] text-blue-600 dark:text-blue-400 uppercase font-bold tracking-wider mb-1">Teórica</div>
                                      <div className="text-2xl font-bold">{selectedSubject.chTeorica}h</div>
                                  </div>
                              )}
                              {selectedSubject.chPratica !== undefined && (
                                  <div className="bg-background p-4 rounded-xl border border-border text-center relative overflow-hidden">
                                      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                                      <div className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1">Prática</div>
                                      <div className="text-2xl font-bold">{selectedSubject.chPratica}h</div>
                                  </div>
                              )}
                          </div>

                          {/* Ementa Section */}
                          {selectedSubject.desc && (
                              <div>
                                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                                      <BookOpen size={18} /> Ementa & Conteúdo
                                  </h3>
                                  <div className="bg-background/50 p-6 rounded-xl border border-border leading-relaxed text-sm shadow-inner">
                                      {selectedSubject.desc}
                                  </div>
                              </div>
                          )}

                          <div className="text-xs text-muted-foreground text-center pt-4 border-t border-border">
                              Fonte: Projeto Pedagógico de Curso Medicina - UNIVERSO
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
}
