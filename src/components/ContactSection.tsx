import React, { useState, useMemo } from 'react';
import { Send, MessageCircle, MapPin, Clock, ShieldCheck, CheckCircle2, Copy, Check, Mail, Phone, Lock, AlertTriangle, Calendar as CalendarIcon, Ban } from 'lucide-react';
import { ProfessorProfile } from '../types/bjj';
import { IMAGES } from '../assets/images';

interface ContactSectionProps {
  profile: ProfessorProfile;
  initialInterest?: string;
}

interface TimeSlotOption {
  time: string;
  isBlocked: boolean;
  reason?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, initialInterest }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState(initialInterest || 'Personal Fight VIP (Particular)');
  const [level, setLevel] = useState('Nunca treinei (Iniciante do Zero)');

  // Date selection (default today in YYYY-MM-DD)
  const getTodayStr = () => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  };

  const [selectedDate, setSelectedDate] = useState<string>(getTodayStr);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('18:30');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email' | 'both'>('whatsapp');

  const rawPhone = profile.whatsapp.replace(/\D/g, '');

  // Calculate day of week and slot availability based on date
  const { dayOfWeek, isSunday, isSaturday, isWeekday, dayLabel, timeSlots } = useMemo(() => {
    // Parse date safely taking timezone into account
    const parts = selectedDate.split('-');
    const dateObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    const day = dateObj.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat

    const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const currentDayLabel = dayNames[day];

    const slots: TimeSlotOption[] = [];

    if (day === 0) {
      // Domingo: sem expediente normal ou apenas sob consulta prévia
      slots.push({ time: 'Sem horários regulares aos domingos', isBlocked: true, reason: 'Domingo: Folga / Tatame fechado' });
    } else if (day >= 1 && day <= 5) {
      // Segunda a Sexta: Bloqueia das 08h às 18h
      // Manhã Cedo (Disponível)
      slots.push({ time: '06:00 - 07:00', isBlocked: false });
      slots.push({ time: '07:00 - 08:00', isBlocked: false });
      
      // BLOQUEADOS: 08:00 às 18:00
      slots.push({ time: '08:00 - 09:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '09:00 - 10:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '10:00 - 11:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '11:00 - 12:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '12:00 - 13:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '13:00 - 14:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '14:00 - 15:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '15:00 - 16:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '16:00 - 17:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });
      slots.push({ time: '17:00 - 18:00', isBlocked: true, reason: 'Indisponível (Seg a Sex das 8h às 18h)' });

      // Noite (Disponível)
      slots.push({ time: '18:00 - 19:00', isBlocked: false });
      slots.push({ time: '19:00 - 20:00', isBlocked: false });
      slots.push({ time: '20:00 - 21:00', isBlocked: false });
      slots.push({ time: '21:00 - 22:00', isBlocked: false });
    } else if (day === 6) {
      // Sábado: Bloqueia das 09h às 11h
      slots.push({ time: '07:30 - 08:30', isBlocked: false });
      slots.push({ time: '08:30 - 09:00', isBlocked: false });

      // BLOQUEADOS: 09:00 às 11:00
      slots.push({ time: '09:00 - 10:00', isBlocked: true, reason: 'Indisponível (Sábado das 9h às 11h)' });
      slots.push({ time: '10:00 - 11:00', isBlocked: true, reason: 'Indisponível (Sábado das 9h às 11h)' });

      // Fim da Manhã (Disponível)
      slots.push({ time: '11:00 - 12:00', isBlocked: false });
      slots.push({ time: '12:00 - 13:00', isBlocked: false });
    }

    return {
      dayOfWeek: day,
      isSunday: day === 0,
      isSaturday: day === 6,
      isWeekday: day >= 1 && day <= 5,
      dayLabel: currentDayLabel,
      timeSlots: slots,
    };
  }, [selectedDate]);

  // Format chosen date display: DD/MM/AAAA
  const formattedSelectedDate = useMemo(() => {
    if (!selectedDate) return '';
    const parts = selectedDate.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }, [selectedDate]);

  // Automatically adjust selectedTimeSlot if current selection is blocked
  React.useEffect(() => {
    const currentIsBlocked = timeSlots.some(s => s.time === selectedTimeSlot && s.isBlocked);
    const exists = timeSlots.some(s => s.time === selectedTimeSlot);
    if (!exists || currentIsBlocked) {
      const firstAvailable = timeSlots.find(s => !s.isBlocked);
      if (firstAvailable) {
        setSelectedTimeSlot(firstAvailable.time);
      } else {
        setSelectedTimeSlot('');
      }
    }
  }, [timeSlots, selectedTimeSlot]);

  const getFormattedMessage = () => {
    return `*Novo Agendamento de Aula / Contato via Site Oficial*
- *Nome:* ${name}
- *WhatsApp:* ${phone}
- *Email:* ${email}
- *Modalidade:* ${modality}
- *Nível:* ${level}
- *Data Escolhida:* ${formattedSelectedDate} (${dayLabel})
- *Horário Escolhido:* ${selectedTimeSlot || 'A combinar'}
${message ? `- *Mensagem adicional:* ${message}` : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTimeSlot) {
      alert('Por favor, selecione um horário disponível para o dia escolhido.');
      return;
    }

    const formattedMessage = getFormattedMessage();

    if (sendMethod === 'whatsapp' || sendMethod === 'both') {
      const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    if (sendMethod === 'email' || sendMethod === 'both') {
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Agendamento de Aula - ${name} (${formattedSelectedDate} às ${selectedTimeSlot})`
      )}&body=${encodeURIComponent(formattedMessage)}`;
      const a = document.createElement('a');
      a.href = mailto;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Agendamento de Personal Fight</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-impact tracking-tight text-white uppercase">
            AGENDE SUA <span className="text-emerald-500">AULA PARTICULAR</span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            Escolha a melhor data e horário para sua aula particular presencial (no dojo ou no seu condomínio/residência) direto com o Professor Cauan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-950 border border-stone-800 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-in zoom-in-50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Solicitação Encaminhada!
                  </h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    {sendMethod === 'whatsapp' && (
                      <>
                        Os dados do agendamento foram abertos diretamente no seu aplicativo do <strong>WhatsApp</strong> com o Professor Cauan ({profile.whatsapp}).
                      </>
                    )}
                    {sendMethod === 'email' && (
                      <>
                        Os dados do agendamento foram direcionados para o e-mail oficial <strong className="text-emerald-400">{profile.email}</strong>.
                      </>
                    )}
                    {sendMethod === 'both' && (
                      <>
                        Os dados foram encaminhados tanto pelo <strong>WhatsApp</strong> quanto pelo e-mail <strong className="text-emerald-400">{profile.email}</strong>.
                      </>
                    )}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-all cursor-pointer border border-stone-700"
                  >
                    Enviar Outro Agendamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">
                      Agendar Aula Experimental
                    </h3>
                    <p className="text-xs text-stone-400">
                      Preencha abaixo para receber o contato direto do Professor Cauan.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-stone-300 font-semibold uppercase">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Eduardo"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-stone-300 font-semibold uppercase">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex: (11) 98765-4321"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-300 font-semibold uppercase">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: seuemail@empresa.com.br"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Modality Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-300 font-semibold uppercase">
                      Modalidade de Maior Interesse *
                    </label>
                    <select
                      value={modality}
                      onChange={(e) => setModality(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="Jiu-Jitsu Individual (Personal Fight VIP)">
                        🥋 Jiu-Jitsu Individual (Personal Fight VIP)
                      </option>
                      <option value="Jiu-Jitsu em Dupla ou Casal">
                        👥 Jiu-Jitsu em Dupla ou Casal
                      </option>
                      <option value="Jiu-Jitsu Kids & Juvenil">
                        🧒 Jiu-Jitsu Kids & Juvenil (Crianças e Jovens)
                      </option>
                      <option value="Jiu-Jitsu para Competição & Alto Rendimento">
                        🏆 Jiu-Jitsu para Competição & Alto Rendimento
                      </option>
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-300 font-semibold uppercase">
                      Sua Graduação / Nível *
                    </label>
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="Nunca treinei (Iniciante do Zero)">
                        Nunca treinei (Iniciante do Zero)
                      </option>
                      <option value="Faixa Branca com alguma vivência">
                        Faixa Branca com alguma vivência
                      </option>
                      <option value="Faixa Azul">Faixa Azul</option>
                      <option value="Faixa Roxa">Faixa Roxa</option>
                      <option value="Faixa Marrom">Faixa Marrom</option>
                      <option value="Faixa Preta">Faixa Preta</option>
                    </select>
                  </div>

                  {/* Calendar Date Picker & Slot Selector */}
                  <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                      <div>
                        <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                          <span>1. Escolha o Dia no Calendário</span>
                        </span>
                        <p className="text-[11px] text-stone-400 mt-0.5">
                          Selecione a data para verificar a grade de horários em tempo real.
                        </p>
                      </div>

                      <div className="text-xs font-mono px-3 py-1 rounded-md bg-stone-950 border border-stone-800 text-stone-200">
                        {formattedSelectedDate ? `${formattedSelectedDate} • ${dayLabel}` : 'Selecione uma data'}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-stone-300 font-semibold uppercase block">
                        Data do Treino *
                      </label>
                      <input
                        type="date"
                        min={getTodayStr()}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white text-sm focus:outline-none focus:border-amber-400 font-mono transition-colors cursor-pointer"
                      />
                    </div>

                    {/* Time Slots Grid */}
                    <div className="space-y-2 pt-2 border-t border-stone-800/80">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono text-stone-300 font-semibold uppercase flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>2. Escolha o Horário do Treino</span>
                        </label>
                        <span className="text-[11px] text-stone-400 font-mono">
                          {isWeekday && 'Dia de semana (Seg a Sex)'}
                          {isSaturday && 'Final de semana (Sábado)'}
                          {isSunday && 'Domingo'}
                        </span>
                      </div>

                      {isSunday ? (
                        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-center space-y-2">
                          <div className="text-amber-300 font-semibold text-xs flex items-center justify-center gap-1.5">
                            <Ban className="w-4 h-4 text-amber-400" />
                            <span>Aos domingos não há expediente regular de tatame.</span>
                          </div>
                          <p className="text-stone-400 text-xs">
                            Por favor, escolha uma data de segunda a sábado no calendário acima para visualizar os horários disponíveis.
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {timeSlots.map((slot, idx) => {
                            const isSelected = selectedTimeSlot === slot.time && !slot.isBlocked;

                            if (slot.isBlocked) {
                              return (
                                <div
                                  key={idx}
                                  title="Indisponível"
                                  className="relative p-2.5 rounded-xl border border-stone-800/70 bg-stone-950/60 opacity-60 flex flex-col items-center justify-center text-center cursor-not-allowed select-none group"
                                >
                                  <div className="flex items-center gap-1 text-[11px] font-mono text-stone-400 line-through">
                                    <Lock className="w-2.5 h-2.5 text-stone-500" />
                                    <span>{slot.time}</span>
                                  </div>
                                  <span className="text-[9px] font-mono uppercase tracking-wider font-bold text-red-400/90 mt-0.5">
                                    Indisponível
                                  </span>
                                </div>
                              );
                            }

                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedTimeSlot(slot.time)}
                                className={`p-2.5 rounded-xl border transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                                  isSelected
                                    ? 'bg-amber-500/20 border-amber-400 text-white shadow-md shadow-amber-500/10'
                                    : 'bg-stone-950/90 border-stone-800 text-stone-200 hover:border-emerald-500/50 hover:bg-stone-900'
                                }`}
                              >
                                <span className="font-mono text-xs font-bold">
                                  {slot.time}
                                </span>
                                <span className={`text-[9px] font-mono uppercase tracking-wider mt-0.5 ${
                                  isSelected ? 'text-amber-300 font-bold' : 'text-emerald-400'
                                }`}>
                                  {isSelected ? '✓ Selecionado' : 'Disponível'}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Selected time confirmation banner */}
                      {selectedTimeSlot && !timeSlots.find(s => s.time === selectedTimeSlot)?.isBlocked && (
                        <div className="mt-2 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>
                              Horário escolhido: <strong>{formattedSelectedDate} às {selectedTimeSlot}</strong>
                            </span>
                          </div>
                          <span className="text-[10px] font-mono uppercase font-bold text-emerald-400">
                            Confirmado
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-300 font-semibold uppercase">
                      Mensagem ou Objetivo Específico (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte um pouco sobre você: se tem alguma restrição física, se prefere treinar no seu condomínio, etc."
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Dispatch Preference Selector */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-mono text-stone-300 font-semibold uppercase flex items-center justify-between">
                      <span>Como deseja enviar este agendamento?</span>
                      <span className="text-[10px] text-emerald-400 font-normal">Encaminhamento Imediato</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSendMethod('whatsapp')}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          sendMethod === 'whatsapp'
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Via WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendMethod('email')}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          sendMethod === 'email'
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Via E-mail</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendMethod('both')}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          sendMethod === 'both'
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
                        }`}
                      >
                        <Send className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ambos (Os 2)</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-md bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-impact tracking-wider text-lg uppercase shadow-xl shadow-black/70 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-700/60"
                  >
                    <span>🥋</span>
                    <span>
                      {sendMethod === 'whatsapp' && 'Encaminhar via WhatsApp do Professor'}
                      {sendMethod === 'email' && 'Encaminhar para o E-mail do Professor'}
                      {sendMethod === 'both' && 'Encaminhar via WhatsApp & E-mail'}
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400 text-center font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                      WhatsApp: {profile.whatsapp}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                      E-mail: {profile.email}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Location & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-950 border border-stone-800 space-y-5">
              <div className="flex items-center gap-3.5 pb-4 border-b border-stone-800">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-600 shrink-0 shadow-md">
                  <img
                    src={IMAGES.heroKimono}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-impact text-xl text-white tracking-wider uppercase">
                    PROFESSOR {profile.name} {profile.lastName || 'SANTOS'}
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono font-semibold">
                    Faixa Preta · Resposta Rápida
                  </span>
                </div>
              </div>

              <h4 className="font-display font-bold text-lg text-white">
                Canais Diretos de Atendimento
              </h4>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${rawPhone}?text=${encodeURIComponent(
                    'Olá Professor Cauan! Gostaria de informações sobre aulas de Jiu-Jitsu.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-stone-400">WhatsApp Oficial</div>
                    <div className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">
                      {profile.whatsapp}
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/30">
                    Online
                  </span>
                </a>

                {/* Email with copy */}
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-stone-900/90 border border-stone-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-stone-800 text-amber-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-stone-400">Email Direto</div>
                      <div className="font-semibold text-sm text-white truncate">
                        {profile.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors shrink-0 cursor-pointer"
                    title="Copiar email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* CT Location Details */}
              <div className="pt-4 border-t border-stone-800/80 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">
                      Local de Atendimento:
                    </strong>
                    <span className="text-stone-300 font-medium">
                      CT indicado pelo professor
                    </span>
                    <p className="text-xs text-stone-500 mt-1">
                      (Centro de Treinamento indicado em Goiânia ou com opção a domicílio/condomínio do aluno)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">
                      Horário de Funcionamento:
                    </strong>
                    <span className="text-stone-300">
                      Segunda a Sexta: 06:00 às 22:00 <br />
                      Sábado: 07:30 às 13:00
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">
                      Infraestrutura Completa:
                    </strong>
                    <span className="text-stone-300">
                      Tatame olímpico higienizado a cada aula, vestiários com duchas quentes e estacionamento com manobrista.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
