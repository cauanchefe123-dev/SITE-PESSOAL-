import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Check, Clock, Calendar, Zap, CheckCircle2 } from 'lucide-react';

interface PlanSimulatorProps {
  onSelectPlan: (planDetails: {
    objective: string;
    level: string;
    format: string;
    frequency: string;
  }) => void;
}

export const PlanSimulator: React.FC<PlanSimulatorProps> = ({ onSelectPlan }) => {
  const [objective, setObjective] = useState<'emagrecimento' | 'hipertrofia' | 'postura' | 'taf'>('emagrecimento');
  const [level, setLevel] = useState<'iniciante' | 'intermediario' | 'avancado'>('iniciante');
  const [format, setFormat] = useState<'presencial' | 'online' | 'grupo'>('presencial');
  const [frequency, setFrequency] = useState<number>(3);

  const getRecommendation = () => {
    let title = '';
    let description = '';
    let timeline = '';
    let highlight = '';

    if (objective === 'emagrecimento') {
      title = format === 'presencial'
        ? 'Programa Emagrecimento Acelerado & Tonificação (Presencial)'
        : format === 'online'
        ? 'Consultoria Online de Definição & Queima Calórica'
        : 'Circuito Funcional & Corrida em Grupo';
      description = `Foco em treinos intervalados de alta intensidade (HIIT funcional), musculação com pausas ativas e controle metabólico contínuo.`;
      timeline = 'Resultados visíveis entre 3 a 5 semanas';
      highlight = 'Perda média saudável de 3 a 6 kg no primeiro ciclo de 60 dias';
    } else if (objective === 'hipertrofia') {
      title = format === 'presencial'
        ? 'Protocolo Hipertrofia Máxima & Força 1-a-1'
        : format === 'online'
        ? 'Consultoria de Ganho de Massa & Sobrecarga Progressiva'
        : 'Treino de Força & Calistenia em Grupo';
      description = `Foco em tensão mecânica, seleção biomecânica ideal para a sua estrutura óssea e progressão milimétrica de cargas sem lesões.`;
      timeline = 'Ganho expressivo de densidade muscular em 6 a 8 semanas';
      highlight = 'Aumento de força e volume sem sobrecarga em articulações';
    } else if (objective === 'postura') {
      title = 'Programa Coluna Blindada & Fortalecimento de Core';
      description = `Reabilitação funcional com liberação de pontos de tensão, ativação de glúteos e estabilização lombar profunda.`;
      timeline = 'Alívio perceptível de dores nas primeiras 2 semanas';
      highlight = 'Postura alinhada e fim do cansaço crônico ao trabalhar sentado';
    } else {
      title = 'Preparatório Especial para TAF & Provas de Corrida';
      description = `Simulação real das provas (barra fixa, flexões, abdominal e corrida de 12 minutos) com periodização cronometrada.`;
      timeline = 'Evolução de índices a cada 15 dias com testes práticos';
      highlight = 'Aprovação com folga e redução segura no tempo de corrida';
    }

    return { title, description, timeline, highlight };
  };

  const rec = getRecommendation();

  const handleApply = () => {
    const objLabel =
      objective === 'emagrecimento'
        ? 'Emagrecimento & Definição'
        : objective === 'hipertrofia'
        ? 'Hipertrofia & Ganho de Massa'
        : objective === 'postura'
        ? 'Saúde Postural & Alívio de Dores'
        : 'Preparação para TAF / Corrida';

    const lvlLabel =
      level === 'iniciante'
        ? 'Iniciante / Sedentário'
        : level === 'intermediario'
        ? 'Intermediário'
        : 'Avançado';

    const fmtLabel =
      format === 'presencial'
        ? 'Personal Presencial 1-a-1'
        : format === 'online'
        ? 'Consultoria Online no App'
        : 'Treino Funcional em Grupo';

    onSelectPlan({
      objective: objLabel,
      level: lvlLabel,
      format: fmtLabel,
      frequency: `${frequency}x por semana`,
    });

    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="simulador" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Interativo</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-3 text-balance">
            Descubra Seu Plano de Treino Ideal
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Selecione suas metas e preferências para que o Professor Cauan monte a estrutura exata para o seu perfil e rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-stone-900/90 p-5 sm:p-7 md:p-8 space-y-6 shadow-xs">
            {/* Step 1: Objetivo */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2.5">
                1. Qual é o seu objetivo principal?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { id: 'emagrecimento', label: 'Emagrecer & Definir', desc: 'Perder gordura sem flacidez' },
                  { id: 'hipertrofia', label: 'Ganhar Massa Muscular', desc: 'Hipertrofia e densidade' },
                  { id: 'postura', label: 'Coluna & Sem Dores', desc: 'Fortalecer core e postura' },
                  { id: 'taf', label: 'Passar no TAF / Corrida', desc: 'Desempenho cronometrado' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setObjective(item.id as any)}
                    className={`p-3.5 min-h-[50px] text-xs rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-center active:scale-[0.99] ${
                      objective === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-stone-950 dark:text-stone-50 font-bold shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 font-normal">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Nível Atual */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2.5">
                2. Como está seu nível de atividade física hoje?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'iniciante', label: 'Iniciante / Parado' },
                  { id: 'intermediario', label: 'Já Treino Regular' },
                  { id: 'avancado', label: 'Avançado' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLevel(item.id as any)}
                    className={`p-3 min-h-[46px] text-xs font-medium rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center active:scale-[0.99] ${
                      level === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-stone-950 dark:text-stone-50 font-bold shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Formato */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2.5">
                3. Qual formato você prefere?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'presencial', label: 'Presencial 1-a-1' },
                  { id: 'online', label: 'Online no App' },
                  { id: 'grupo', label: 'Grupo / Funcional' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormat(item.id as any)}
                    className={`p-3 min-h-[46px] text-xs font-medium rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center active:scale-[0.99] ${
                      format === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-stone-950 dark:text-stone-50 font-bold shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Frequência */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  4. Quantos dias na semana você quer treinar?
                </label>
                <span className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400">
                  {frequency}x por semana
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[2, 3, 4, 5].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setFrequency(d)}
                    className={`py-3 min-h-[46px] text-xs font-semibold rounded-xl border transition-all cursor-pointer flex items-center justify-center active:scale-[0.98] ${
                      frequency === d
                        ? 'border-amber-500 bg-amber-500 text-stone-950 font-bold shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {d} Dias
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Dynamic Recommendation Card */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-amber-500/30 bg-white dark:bg-stone-900 p-5 sm:p-7 md:p-8 space-y-6 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Recomendação Personalizada</span>
              </span>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                Prof. Cauan
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50 mb-2 leading-snug">
                {rec.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {rec.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-stone-100 dark:border-stone-800 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">Linha do Tempo:</div>
                  <div className="text-stone-500 dark:text-stone-400">{rec.timeline}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">Resultado Esperado:</div>
                  <div className="text-stone-500 dark:text-stone-400">{rec.highlight}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
              <button
                type="button"
                onClick={handleApply}
                className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-stone-900 dark:bg-stone-100 py-3.5 px-4 text-xs sm:text-sm font-bold text-stone-50 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 active:scale-[0.98] transition-all shadow-xs cursor-pointer"
              >
                <span>Quero Este Plano — Falar com o Professor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-center text-stone-500 dark:text-stone-400 mt-2">
                Avaliação física inicial inclusa sem compromisso
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
