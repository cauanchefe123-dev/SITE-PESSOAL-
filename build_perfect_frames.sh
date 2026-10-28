#!/bin/bash
set -e

# Frame 1: Hero
convert -size 1280x720 xc:'#09090b' \
  -fill '#047857' -draw 'rectangle 0,0 1280,10' \
  \( public/images/cauan_original_foto.jpg -resize 'x640' -gravity center -crop '460x640+0+0' \) -geometry +740+40 -composite \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 24 -annotate +70+160 'PROFESSOR FAIXA PRETA • GOIÂNIA, GO' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 58 -annotate +70+235 'CAUAN SANTOS' \
  -font DejaVu-Sans-Bold -fill '#34d399' -pointsize 38 -annotate +70+290 'JIU-JITSU BRASILEIRO' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 24 -annotate +70+365 'Aulas Particulares VIP • Personal Fight Exclusivo' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 20 -annotate +70+410 '+11 Anos de Trajetória • +60 Títulos Conquistados' \
  -font DejaVu-Sans-Bold -fill '#065f46' -draw 'roundrectangle 70,465 420,535 12,12' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 20 -annotate +100+510 'Agendar Aula Experimental' \
  public/video_demo/frame_01.png

# Frame 2: Vantagens
convert -size 1280x720 xc:'#09090b' \
  -fill '#10b981' -draw 'rectangle 0,0 1280,10' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 24 -gravity North -annotate +0+50 'EXCLUSIVIDADE & METODOLOGIA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 48 -gravity North -annotate +0+95 'VANTAGENS DO PERSONAL FIGHT' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 20 -gravity North -annotate +0+160 'Evolução até 4x mais rápida com atendimento VIP no seu ritmo' \
  -fill '#18181b' -stroke '#27272a' -strokewidth 2 -draw 'roundrectangle 70,220 420,580 18,18' \
  -fill '#18181b' -stroke '#059669' -strokewidth 2 -draw 'roundrectangle 465,220 815,580 18,18' \
  -fill '#18181b' -stroke '#27272a' -strokewidth 2 -draw 'roundrectangle 860,220 1210,580 18,18' \
  -stroke none -fill '#10b981' -font DejaVu-Sans-Bold -pointsize 20 \
  -annotate +95+265 '100% INDIVIDUAL' \
  -annotate +490+265 'EVOLUÇÃO SEGURA' \
  -annotate +885+265 'HORÁRIOS FLEXÍVEIS' \
  -fill '#e4e4e7' -font DejaVu-Sans -pointsize 17 \
  -annotate +95+325 'Correção de pegadas e alavancas' \
  -annotate +95+360 'Treino ajustado ao seu biótipo' \
  -annotate +95+395 'Privacidade total sem distração' \
  -annotate +95+430 'Segurança articular sem lesões' \
  -annotate +490+325 'Sparring com o próprio professor' \
  -annotate +490+360 'Didática progressiva por blocos' \
  -annotate +490+395 'Evolua meses em poucas semanas' \
  -annotate +490+430 'Foco absoluto no seu objetivo' \
  -annotate +885+325 'Treinos das 06:00 às 22:00' \
  -annotate +885+360 'No CT indicado pelo professor' \
  -annotate +885+395 'No seu condomínio ou residência' \
  -annotate +885+430 'Ideal para executivos e do zero' \
  public/video_demo/frame_02.png

# Frame 3: Equipe
convert -size 1280x720 xc:'#09090b' \
  -fill '#059669' -draw 'rectangle 0,0 1280,10' \
  \( public/images/grupo.png -resize '580x440^' -gravity center -crop '580x440+0+0' \) -geometry +60+140 -composite \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -annotate +690+170 'COMUNIDADE, RESPEITO & LEGADO' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 44 -annotate +690+225 'FAMÍLIA NO TATAME' \
  -font DejaVu-Sans-Bold -fill '#34d399' -pointsize 38 -annotate +690+280 '& FORMAÇÃO HUMANA' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 20 -annotate +690+350 'Mais do que ensinar posições de luta,' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 20 -annotate +690+385 'formamos pessoas seguras, respeitosas' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 20 -annotate +690+420 'e preparadas para vencer na vida.' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 18 -annotate +690+485 '✔ Turmas Kids: Disciplina & Anti-bullying' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 18 -annotate +690+525 '✔ Aulas em Dupla, Casal e Amigos' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 18 -annotate +690+565 '✔ Tatame acolhedor e sem ego' \
  public/video_demo/frame_03.png

# Frame 4: Arm-lock voador
convert -size 1280x720 xc:'#09090b' \
  -fill '#f59e0b' -draw 'rectangle 0,0 1280,10' \
  \( public/images/show.png -resize '520x520^' -gravity center -crop '520x520+0+0' \) -geometry +70+100 -composite \
  -font DejaVu-Sans-Bold -fill '#f59e0b' -pointsize 22 -annotate +650+170 'ALTA PERFORMANCE COMPROVADA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 46 -annotate +650+230 'ARM-LOCK VOADOR' \
  -font DejaVu-Sans-Bold -fill '#fbbf24' -pointsize 36 -annotate +650+280 'EM CAMPEONATO OFICIAL' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 20 -annotate +650+350 'Quem compete e sobe em pódios mundiais' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 20 -annotate +650+385 'ensina com autoridade técnica real.' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -annotate +650+455 '+60 TÍTULOS OFICIAIS' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 18 -annotate +650+495 'Circuitos CBJJ / IBJJF / Federação Goiana' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 18 -annotate +650+535 'Camp de Competição e Mentoria de Córner' \
  public/video_demo/frame_04.png

# Frame 5: CTA Final
convert -size 1280x720 xc:'#09090b' \
  -fill '#10b981' -draw 'rectangle 0,0 1280,10' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 24 -gravity North -annotate +0+100 'VAGAS ABERTAS EM GOIÂNIA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 52 -gravity North -annotate +0+150 'AGENDE SUA AULA PARTICULAR' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 22 -gravity North -annotate +0+225 'CT Indicado • Dojo Privativo • Condomínio ou Residência' \
  -fill '#18181b' -stroke '#10b981' -strokewidth 2 -draw 'roundrectangle 320,290 960,470 20,20' \
  -stroke none -fill '#34d399' -font DejaVu-Sans-Bold -pointsize 22 -gravity North -annotate +0+325 'WHATSAPP OFICIAL' \
  -fill '#ffffff' -font DejaVu-Sans-Bold -pointsize 36 -gravity North -annotate +0+370 '+55 (62) 99383-8862' \
  -fill '#10b981' -font DejaVu-Sans -pointsize 20 -gravity North -annotate +0+425 'Clique para iniciar no Jiu-Jitsu' \
  -fill '#ffffff' -font DejaVu-Sans-Bold -pointsize 26 -gravity North -annotate +0+530 'cauansantos.vercel.app' \
  -fill '#a1a1aa' -font DejaVu-Sans -pointsize 18 -gravity North -annotate +0+575 'Professor Cauan Santos • Faixa Preta CBJJ / IBJJF' \
  public/video_demo/frame_05.png

echo "Frames generated successfully!"
