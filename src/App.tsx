import { useEffect, useState } from 'react';
import {
  Brain,
  Target,
  Sprout,
  Zap,
  MessagesSquare,
  Eye,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
  Clock4,
  ArrowRight,
  MessageSquareQuote,
  ChevronDown,
  X,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   CONFIGURAÇÕES — altere aqui quando precisar
────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '5519981974344';
const DEFAULT_MESSAGE =
  'Olá Alexandre! Vi seu site e gostaria de agendar uma conversa.';

/* Para adicionar depoimentos reais no futuro,
   basta preencher este array. Exemplo:
   { text: 'Depoimento aqui...', author: 'Maria S.', context: 'Ansiedade' } */
const testimonials: { text: string; author: string; context: string }[] = [
  {
    text: 'O terapeuta Alexandre é ótimo e me recebeu muito bem. Ele faz atendimentos online e presenciais em Campinas. Fiquei muito satisfeito com as sessões de terapia. Realmente me ajudou. Pode confiar!',
    author: 'Fabiano Fogaça Varela',
    context: 'Avaliação no Google',
  },
  {
    text: 'O atendimento com o Alexandre foi ótimo. Um profissional incrível, atencioso e muito competente. Soube trabalhar as questões que eu levei aos atendimentos com maestria e com todo o acolhimento necessário! Mais do que recomendado.',
    author: 'Karina Mourad',
    context: 'Avaliação no Google',
  },
  {
    text: 'Terapeuta atencioso e dedicado. Realizei a psicoterapia online e tive bons resultados. Recomendo a todos!',
    author: 'Andrei Felipe',
    context: 'Avaliação no Google',
  },
  {
    text: 'É um ótimo terapeuta, fiz sessões de terapia online com ele. Me ajudou bastante quando precisei. Além de outros métodos, ele usa a TRG, que possibilita resultados mais rápidos para tratamentos de ansiedade, fobias, medos e depressão.',
    author: 'Symone Nadin',
    context: 'Avaliação no Google',
  },
  {
    text: 'Ótimo profissional, me ajudou bastante. Tem vários exercícios que ajudam a colocar em prática o tema a ser trabalhado. Recomendo e divulgo sempre que posso.',
    author: 'Karen Benassi',
    context: 'Avaliação no Google',
  },
  {
    text: 'Excelente profissional que me atendeu. Honesto e bem qualificado!',
    author: 'Luis H.',
    context: 'Avaliação no Google',
  },
  {
    text: 'Excelente profissional. Recomendo.',
    author: 'Renato Silva',
    context: 'Avaliação no Google',
  },
  {
    text: 'Ótimo profissional, excelência no atendimento! Recomendo.',
    author: 'Bárbara Ambiel',
    context: 'Avaliação no Google',
  },
];

const signs = [
  'Insônia',
  'Medos e tensão',
  'Preocupações excessivas',
  'Inquietação e irritabilidade',
  'Dificuldade de concentração',
  'Sintomas físicos, como aperto no peito e dores de cabeça',
];

const steps = [
  {
    title: 'Chame no WhatsApp',
    desc: 'Envie uma mensagem e receba as informações iniciais.',
  },
  {
    title: 'Agende sua primeira conversa',
    desc: 'Escolhemos juntos o melhor dia e horário para conversarmos.',
  },
  {
    title: 'Conheça a terapia',
    desc: 'Na conversa inicial, você entende como o processo funciona.',
  },
  {
    title: 'Inicie seu processo',
    desc: 'Agende as sessões e comece sua jornada de transformação.',
  },
];

const faqs = [
  {
    question: 'Como funcionam as sessões de terapia online?',
    answer:
      'As sessões são realizadas por videochamada, em plataforma segura, com duração e frequência definidas de acordo com a sua necessidade. Você pode participar de qualquer lugar do Brasil, com toda a privacidade e conforto.',
  },
  {
    question: 'A terapia online é tão eficaz quanto a presencial?',
    answer:
      'Sim. Pesquisas demonstram que o atendimento online apresenta resultados equivalentes ao presencial. Muitas pessoas, inclusive, relatam se sentir mais à vontade por estarem no próprio ambiente.',
  },
  {
    question: 'Para quem é a terapia?',
    answer:
      'Para adultos que enfrentam ansiedade, estresse, traumas, fobias, baixa autoestima e outros padrões emocionais que causam sofrimento ou estagnação. O plano terapêutico é construído sob medida para cada pessoa.',
  },
  {
    question: 'Quais abordagens você utiliza?',
    answer:
      'Utilizo a Terapia Cognitivo-Comportamental (TCC) como base, integrando ferramentas de TRG, PNL, Leitura Corporal e Coaching, conforme a necessidade de cada atendimento.',
  },
  {
    question: 'As sessões são sigilosas?',
    answer:
      'Totalmente. Todo o processo terapêutico é conduzido sob rigoroso sigilo profissional, em ambiente seguro e reservado.',
  },
  {
    question: 'Como agendo uma sessão?',
    answer:
      'É simples: clique em qualquer botão verde desta página para abrir uma conversa no WhatsApp. Enviarei os horários disponíveis e encontraremos o melhor momento para você.',
  },
];

const specialties = [
  {
    icon: Brain,
    title: 'Ansiedade e Estresse',
    desc: 'Controle de pensamentos acelerados, crises de pânico e esgotamento mental.',
  },
  {
    icon: Target,
    title: 'Traumas e Fobias',
    desc: 'Processamento de bloqueios do passado, com acolhimento e no seu ritmo.',
  },
  {
    icon: Sprout,
    title: 'Autoestima e Qualidade de Vida',
    desc: 'Clareza para tomadas de decisão e desenvolvimento da inteligência emocional.',
  },
];

const methods = [
  { icon: Brain, name: 'TCC', desc: 'Terapia Cognitivo-Comportamental' },
  { icon: Zap, name: 'TRG', desc: 'Técnica de Regeneração' },
  { icon: MessagesSquare, name: 'PNL', desc: 'Programação Neurolinguística' },
  { icon: Eye, name: 'Leitura Corporal', desc: 'Análise de expressões' },
  { icon: TrendingUp, name: 'Coaching', desc: 'Foco em objetivos e mudança' },
];

const benefits = [
  'Atendimento prático e acolhedor, sem julgamentos',
  'Plano terapêutico construído sob medida para você',
  'Técnicas fundamentadas na TCC e integradas à sua realidade',
  'Sessões 100% online — do conforto e privacidade da sua casa',
  'Rigoroso sigilo profissional em todo o processo',
  'Acompanhamento próximo, com foco em resultados concretos',
];

/* Logo oficial do WhatsApp para os botões */
function WhatsAppIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-.966-.916-1.314-.247-.348-.497-.298-.67-.298-.173 0-.372.024-.57.024-.198 0-.52.075-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Foto de perfil com fallback elegante:
   se /alexandre.jpg ainda não existir em public/, mostra as iniciais AA */
function ProfilePhoto({ alt, className }: { alt: string; className: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex items-center justify-center bg-gradient-to-br from-[#93B4F5] to-[#1E40AF]`}
      >
        <span className="text-5xl font-semibold tracking-tight text-white/90">
          AA
        </span>
      </div>
    );
  }

  return (
    <img
      src="/alexandre.jpg"
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}

export default function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  /* Balãozinho de convite: aparece após ~3,5s */
  const [showTip, setShowTip] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const openWhatsApp = (message: string = DEFAULT_MESSAGE) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans text-slate-800 antialiased">
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40AF] text-sm font-semibold text-white">
              AA
            </div>
            <div>
              <div className="leading-tight font-semibold tracking-tight text-slate-900">
                Alexandre Ambiel
              </div>
              <div className="text-xs text-slate-500">
                Terapeuta • Terapia Breve
              </div>
            </div>
          </div>
          <button
            onClick={() => openWhatsApp()}
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1FB959] active:scale-[0.98] sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </button>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="bg-gradient-to-b from-white to-[#F8F9FB] px-6 pt-32 pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1E40AF]/10 px-4 py-1.5 text-sm font-medium text-[#1E40AF]">
                <Video className="h-4 w-4" />
                Atendimento 100% online • Todo o Brasil
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20">
                <Sparkles className="h-4 w-4" />
                Conversa inicial
              </div>
            </div>

            <h1 className="text-4xl leading-[1.08] font-semibold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
              Supere a ansiedade e construa uma vida com mais{' '}
              <span className="text-[#1E40AF]">equilíbrio emocional</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Trabalho com <strong className="font-semibold text-slate-800">terapia breve</strong>:
              um atendimento prático, acolhedor e sob medida para você.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <button
                onClick={() => openWhatsApp()}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#1FB959] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Conversar no WhatsApp
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => scrollTo('ajuda')}
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Como posso te ajudar
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#1E40AF]" /> Sigilo
                profissional
              </span>
              <span className="flex items-center gap-2">
                <Video className="h-4 w-4 text-[#1E40AF]" /> Ambiente seguro
              </span>
              <span className="flex items-center gap-2">
                <Clock4 className="h-4 w-4 text-[#1E40AF]" /> Horários flexíveis
              </span>
            </div>
          </div>

          {/* FOTO PROFISSIONAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* brilho decorativo */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-[#1E40AF]/15 via-[#3B82F6]/10 to-transparent blur-2xl" />
              <div className="relative rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] p-1.5 shadow-2xl shadow-[#1E40AF]/20">
                <ProfilePhoto
                  alt="Alexandre Ambiel, terapeuta especializado em Terapia Cognitivo-Comportamental"
                  className="h-72 w-72 rounded-full border-4 border-white object-cover sm:h-80 sm:w-80 lg:h-[24rem] lg:w-[24rem]"
                />
              </div>
              {/* selo online */}
              <div className="absolute top-4 -right-2 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-lg">
                <Video className="h-4 w-4 text-[#1E40AF]" />
                <span className="text-xs font-semibold text-slate-700">
                  100% online
                </span>
              </div>
              {/* selo disponibilidade */}
              <div className="absolute bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-xl sm:-left-6">
                <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500" />
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    Agenda aberta
                  </div>
                  <div className="text-xs text-slate-500">
                    Novos atendimentos disponíveis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SINAIS — VOCÊ TEM SENTIDO? ══════════ */}
      <section className="border-y border-[#1E40AF]/10 bg-[#EEF3FB] px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-7 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Você tem sentido constantemente:
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {signs.map((sign) => (
                <li
                  key={sign}
                  className="flex items-start gap-3 rounded-xl bg-white/90 px-4 py-3.5 text-slate-700 shadow-sm"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1E40AF]" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-9 shadow-xl shadow-blue-900/5 sm:p-11">
            <h3 className="mb-4 text-2xl leading-snug font-semibold tracking-tight text-slate-900">
              Esses sinais podem indicar que está na hora de cuidar da sua
              saúde emocional.
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Sentir-se assim não é sinal de fraqueza. Com acompanhamento
              adequado, é possível compreender essas emoções e construir novas
              formas de lidar com elas.
            </p>
            <button
              onClick={() =>
                openWhatsApp(
                  'Olá Alexandre! Tenho me sentido assim e gostaria de conversar.'
                )
              }
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#1FB959] active:scale-[0.98] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quero conversar
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ COMO POSSO TE AJUDAR ══════════ */}
      <section id="ajuda" className="border-t border-slate-200 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 text-xs font-semibold tracking-[3px] text-[#1E40AF]">
              COMO POSSO TE AJUDAR
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Um atendimento focado nos padrões que causam sofrimento e
              estagnação
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Acolhimento e ferramentas práticas para você lidar com os
              desafios emocionais do dia a dia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {specialties.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-transparent bg-[#F8F9FB] p-9 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E40AF]/10 text-[#1E40AF] transition-colors group-hover:bg-[#1E40AF] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ METODOLOGIA ══════════ */}
      <section className="bg-[#F8F9FB] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-semibold tracking-[3px] text-[#1E40AF]">
              METODOLOGIA DE ATENDIMENTO
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Uma abordagem sob medida para você
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Além da TCC, integro ferramentas complementares para criar um
              plano terapêutico personalizado para a sua necessidade.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {methods.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E40AF]/10 text-[#1E40AF]">
                  <m.icon className="h-6 w-6" />
                </div>
                <div className="font-semibold text-slate-900">{m.name}</div>
                <div className="mt-1 text-xs leading-snug text-slate-500">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 text-center text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#1E40AF]" />
            Atendimentos seguros, online e sob rigoroso sigilo profissional.
          </p>
        </div>
      </section>

      {/* ══════════ BENEFÍCIOS ══════════ */}
      <section className="border-t border-slate-200 bg-white px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-start gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="mb-3 text-xs font-semibold tracking-[3px] text-[#1E40AF]">
              O QUE VOCÊ VAI ENCONTRAR
            </div>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Um espaço de transformação com estrutura e acolhimento
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Um processo terapêutico centrado em você, com foco em evolução
              real e duradoura.
            </p>
            <button
              onClick={() => openWhatsApp('Olá Alexandre! Gostaria de saber mais sobre a terapia.')}
              className="mt-8 flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#1FB959] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Iniciar conversa
            </button>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-[#F8F9FB] p-6"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#1E40AF]" />
                <div className="text-lg text-slate-700">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SOBRE MIM ══════════ */}
      <section id="sobre" className="bg-[#F8F9FB] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <ProfilePhoto
            alt="Alexandre Ambiel, terapeuta"
            className="mx-auto mb-8 h-40 w-40 rounded-full border-4 border-white object-cover shadow-xl sm:h-48 sm:w-48"
          />
          <div className="mb-3 text-xs font-semibold tracking-[3px] text-[#1E40AF]">
            SOBRE MIM
          </div>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Olá, sou Alexandre Ambiel
          </h2>

          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            <p>
              Sou terapeuta especializado em{' '}
              <strong className="font-semibold text-slate-800">
                Terapia Cognitivo-Comportamental (TCC)
              </strong>{' '}
              e desenvolvimento emocional.
            </p>
            <p>
              Meu foco é oferecer um atendimento{' '}
              <strong className="font-semibold text-slate-800">
                prático, acolhedor e fundamentado
              </strong>{' '}
              para ajudar você a superar padrões que causam sofrimento e
              estagnação.
            </p>
            <p>
              Cada pessoa é única — por isso, integro ferramentas de{' '}
              <strong className="font-semibold text-slate-800">
                TRG, PNL, Leitura Corporal e Coaching
              </strong>{' '}
              para criar um plano sob medida para a sua necessidade.
            </p>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-600">
            <ShieldCheck className="h-4 w-4 text-[#1E40AF]" />
            Terapeuta especializado em TCC • Atendimento online
          </div>
        </div>
      </section>

      {/* ══════════ COMO FUNCIONA ══════════ */}
      <section className="border-t border-slate-200 bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-semibold tracking-[3px] text-[#1E40AF]">
              COMO FUNCIONA
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Começar é simples
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Em poucos passos você já estará em acompanhamento terapêutico.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-100 bg-[#F8F9FB] p-8 transition-all hover:border-slate-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] text-lg font-semibold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-9 py-4 font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#1FB959] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Começar agora
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ DEPOIMENTOS ══════════ */}
      <section className="border-t border-slate-200 bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-semibold tracking-[3px] text-[#1E40AF]">
              DEPOIMENTOS
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              O que dizem os pacientes
            </h2>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-slate-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-medium">Avaliação 5,0 no Google</span>
            </p>
          </div>

          {testimonials.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-3xl border border-slate-100 bg-[#F8F9FB] p-8 transition-all hover:border-slate-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 leading-relaxed text-slate-600">
                    “{t.text}”
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900">{t.author}</div>
                    <div className="text-sm text-slate-500">{t.context}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-[#F8F9FB] p-12 text-center">
              <MessageSquareQuote className="mx-auto mb-4 h-10 w-10 text-slate-300" />
              <p className="text-lg text-slate-500">
                Em breve, incluirei aqui depoimentos reais de pacientes,
                compartilhados com autorização.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section id="faq" className="bg-[#F8F9FB] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-semibold tracking-[3px] text-[#1E40AF]">
              PERGUNTAS FREQUENTES
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Dúvidas comuns sobre a terapia online
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="pr-2 text-lg font-medium text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#1E40AF] transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFAQ === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="bg-[#1E40AF] px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-semibold tracking-tighter sm:text-5xl">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="mx-auto mb-10 max-w-md text-xl text-blue-100">
            Agende sua <strong className="font-semibold text-white">primeira conversa</strong> e
            descubra como a terapia pode ajudar você.
          </p>

          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-black/20 transition-all hover:bg-[#1FB959] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Agendar agora pelo WhatsApp
          </button>
          <p className="mt-6 text-sm tracking-wide text-blue-200">
            Respondo pessoalmente todas as mensagens
          </p>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-blue-800 bg-[#1E40AF] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-blue-200 sm:flex-row sm:text-left">
          <div>
            <span className="font-semibold text-white">Alexandre Ambiel</span>{' '}
            — Terapeuta especializado em TCC
          </div>
          <div>Atendimento online para todo o Brasil • (19) 98197-4344</div>
        </div>
      </footer>

      {/* ══════════ BOTÃO FLUTUANTE WHATSAPP ══════════ */}
      <div className="fixed right-5 bottom-6 z-50 flex items-center gap-3">
        {/* balãozinho de convite */}
        {showTip && (
          <button
            onClick={() => setShowTip(false)}
            className="tip-in hidden items-center gap-2 rounded-2xl rounded-br-md border border-slate-100 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-xl transition hover:bg-slate-50 sm:flex"
          >
            Oi! Posso ajudar?
            <X className="h-3.5 w-3.5 text-slate-400" />
          </button>
        )}

        <button
          onClick={() => openWhatsApp()}
          aria-label="Abrir conversa no WhatsApp"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all hover:bg-[#1FB959] active:scale-95"
        >
          {/* anel pulsante */}
          <span
            aria-hidden="true"
            className="wa-ring absolute inset-0 rounded-full bg-[#25D366]"
          />
          <WhatsAppIcon className="relative h-8 w-8" />
          {/* badge de notificação */}
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-[11px] font-bold text-white shadow-sm">
            1
          </span>
        </button>
      </div>
    </div>
  );
}
