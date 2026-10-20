import React from 'react';
import { Shield, Award, HeartHandshake, Zap, CheckCircle2, ChevronRight, BookOpen, Target, Users } from 'lucide-react';
import { ProfessorProfile } from '../types/bjj';
import { IMAGES } from '../assets/images';

interface AboutSectionProps {
  profile: ProfessorProfile;
  onOpenCurriculum: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onOpenCurriculum }) => {
  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-red-500" />,
      title: 'Alavanca sobre Força Bruta',
      desc: 'O princípio fundamental da arte suave: posicionamento milimétrico e distribuição de peso superam qualquer força física ou tamanho corporal.',
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      title: 'Segurança & Zero Lesões',
      desc: 'Prática 100% monitorada com o código sagrado do tapout (bater). Você treina intensamente e volta inteiro e revigorado para o trabalho no dia seguinte.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-sky-500" />,
      title: 'Ambiente Respeitoso & Fraterno',
      desc: 'O ego fica do lado de fora do tatame. Homens, mulheres, iniciantes e atletas treinam com respeito mútuo, apoio e camaradagem.',
    },
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      title: 'Controle Mental sob Pressão',
      desc: 'Aprender a manter a respiração calma numa situação desfavorável de luta reprograma seu cérebro para resolver desafios no trabalho e na vida.',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-20 top-1/2 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-900 font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Metodologia &amp; Filosofia de Treino</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-impact tracking-tight text-white uppercase">
            QUEM É O PROFESSOR <span className="text-emerald-600">{profile.name}</span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg leading-relaxed font-light">
            Mais do que ensinar posições de luta, formamos pessoas seguras, disciplinadas e capazes de lidar com qualquer desafio dentro e fora do tatame.
          </p>
        </div>

        {/* Story & Biography Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-stone-300 text-base leading-relaxed">
              <p>
                Com mais de <strong className="text-white font-semibold">11 anos de trajetória no Jiu-Jitsu</strong>, minha história com a modalidade começou em um <strong className="text-emerald-400 font-semibold">projeto social comunitário</strong>, onde tive meu primeiro contato com o esporte e encontrei no Jiu-Jitsu uma verdadeira oportunidade de transformação e crescimento.
              </p>
              <p>
                Ao longo desses anos, vivi diferentes fases dentro da modalidade, passando por treinamentos intensos, competições, desafios, conquistas e muito aprendizado. O Jiu-Jitsu contribuiu diretamente para minha <strong className="text-white font-semibold">disciplina, responsabilidade, resiliência e desenvolvimento pessoal</strong>.
              </p>
              <p>
                Hoje, além de continuar minha trajetória como atleta e professor, quero utilizar toda a experiência que adquiri como uma alavanca para os próximos anos. Quero <strong className="text-emerald-400 font-semibold">transmitir conhecimento, compartilhar experiências e ajudar outras pessoas a evoluírem</strong>, evitando erros que cometi, enxergando novas possibilidades e mostrando que é possível construir sua própria história através da arte suave.
              </p>
              <p className="text-stone-200 font-medium">
                Mais do que ensinar técnicas, quero contribuir para formar pessoas, abrir caminhos e deixar um legado que possa continuar sendo construído por aqueles que vierem depois de mim.
              </p>
            </div>

            {/* Badges of Recognition - Clean & Professional Styling */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 text-xs text-stone-200 font-medium tracking-wide shadow-sm transition-colors">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>Origem em Projeto Social Comunitário</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 text-xs text-stone-200 font-medium tracking-wide shadow-sm transition-colors">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>+11 Anos de Disciplina &amp; Resiliência</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 text-xs text-stone-200 font-medium tracking-wide shadow-sm transition-colors">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Formação Humana &amp; Legado</span>
              </div>
            </div>
          </div>

          {/* Training Environment & Visual Showcase Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 shadow-xl relative overflow-hidden space-y-5">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-stone-800 bg-stone-900 shadow-inner">
                <img
                  src={IMAGES.equipeGrupo}
                  alt="Equipe e alunos do Professor Cauan Santos reunidos no tatame"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-impact text-base sm:text-lg text-white uppercase tracking-wider drop-shadow-md">
                    FAMÍLIA &amp; EQUIPE NO TATAME
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-white font-mono text-[10px] uppercase font-bold tracking-wider shadow">
                    Legado Vivo
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 font-impact text-lg">
                    <Target className="w-4 h-4" />
                    <span>PRECISÃO BIOMECÂNICA</span>
                  </div>
                  <p className="text-stone-400 text-xs mt-1.5 leading-relaxed">
                    Ajustes milimétricos adaptados à anatomia, mobilidade e objetivos de cada praticante.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 font-impact text-lg">
                    <Users className="w-4 h-4" />
                    <span>CULTURA DE RESPEITO</span>
                  </div>
                  <p className="text-stone-400 text-xs mt-1.5 leading-relaxed">
                    Tatame seguro e sem espaço para ego, onde a evolução mútua é o valor primordial.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-800 text-xs text-stone-300 italic text-center font-serif leading-relaxed">
                &ldquo;O Jiu-Jitsu é a arte de controlar o adversário através da física e da calma, vencendo sem desgaste desnecessário e formando caráter para a vida.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-xl bg-stone-950/70 border border-stone-800/80 hover:border-emerald-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-impact text-xl text-white mb-2 group-hover:text-emerald-400 transition-colors uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
