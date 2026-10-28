#!/bin/bash
set -e

# Generate clean centered slides 1280x720 RGB
# Slide 1: Hero
convert -size 1280x720 xc:'#09090b' \
  -fill '#047857' -draw 'rectangle 0,0 1280,10' \
  \( public/images/cauan_original_foto.jpg -resize 440x620^ -gravity Center -crop 440x620+0+0 \) -geometry +760+50 -composite \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -annotate +80+160 'PROFESSOR FAIXA PRETA • GOIÂNIA, GO' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 54 -annotate +80+230 'CAUAN SANTOS' \
  -font DejaVu-Sans-Bold -fill '#34d399' -pointsize 36 -annotate +80+280 'JIU-JITSU BRASILEIRO' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 22 -annotate +80+355 'Aulas Particulares VIP • Personal Fight Exclusivo' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 18 -annotate +80+395 '+11 Anos de Trajetória • +60 Títulos Conquistados' \
  -font DejaVu-Sans-Bold -fill '#065f46' -draw 'roundrectangle 80,445 420,515 12,12' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 18 -annotate +105+488 'Agendar Aula Experimental' \
  public/video_demo/slide_01.png

# Slide 2: Vantagens
convert -size 1280x720 xc:'#09090b' \
  -fill '#10b981' -draw 'rectangle 0,0 1280,10' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -gravity North -annotate +0+45 'EXCLUSIVIDADE & METODOLOGIA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 44 -gravity North -annotate +0+85 'VANTAGENS DO PERSONAL FIGHT' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 18 -gravity North -annotate +0+145 'Evolução até 4x mais rápida com atendimento VIP no seu ritmo' \
  -fill '#18181b' -stroke '#27272a' -strokewidth 2 -draw 'roundrectangle 70,200 420,580 18,18' \
  -fill '#18181b' -stroke '#059669' -strokewidth 2 -draw 'roundrectangle 465,200 815,580 18,18' \
  -fill '#18181b' -stroke '#27272a' -strokewidth 2 -draw 'roundrectangle 860,200 1210,580 18,18' \
  -stroke none -fill '#10b981' -font DejaVu-Sans-Bold -pointsize 20 \
  -annotate +95+250 '100% INDIVIDUAL' \
  -annotate +490+250 'EVOLUÇÃO SEGURA' \
  -annotate +885+250 'HORÁRIOS FLEXÍVEIS' \
  -fill '#e4e4e7' -font DejaVu-Sans -pointsize 16 \
  -annotate +95+310 'Correção de pegadas e alavancas' \
  -annotate +95+345 'Treino ajustado ao seu biótipo' \
  -annotate +95+380 'Privacidade total sem distração' \
  -annotate +95+415 'Segurança articular sem lesões' \
  -annotate +490+310 'Sparring com o próprio professor' \
  -annotate +490+345 'Didática progressiva por blocos' \
  -annotate +490+380 'Evolua meses em poucas semanas' \
  -annotate +490+415 'Foco absoluto no seu objetivo' \
  -annotate +885+310 'Treinos das 06:00 às 22:00' \
  -annotate +885+345 'No CT indicado pelo professor' \
  -annotate +885+380 'No seu condomínio ou residência' \
  -annotate +885+415 'Ideal para executivos e do zero' \
  public/video_demo/slide_02.png

# Slide 3: Equipe
convert -size 1280x720 xc:'#09090b' \
  -fill '#059669' -draw 'rectangle 0,0 1280,10' \
  \( public/images/grupo.png -resize 640x460^ -gravity Center -crop 640x460+0+0 \) -geometry +50+130 -composite \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 20 -annotate +740+160 'COMUNIDADE, RESPEITO & LEGADO' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 42 -annotate +740+215 'FAMÍLIA NO TATAME' \
  -font DejaVu-Sans-Bold -fill '#34d399' -pointsize 36 -annotate +740+265 '& FORMAÇÃO HUMANA' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 18 -annotate +740+330 'Mais do que ensinar posições de luta,' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 18 -annotate +740+360 'formamos pessoas seguras, respeitosas' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 18 -annotate +740+390 'e preparadas para vencer na vida.' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 17 -annotate +740+455 '✔ Turmas Kids: Disciplina & Anti-bullying' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 17 -annotate +740+495 '✔ Aulas em Dupla, Casal e Amigos' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 17 -annotate +740+535 '✔ Tatame acolhedor e sem ego' \
  public/video_demo/slide_03.png

# Slide 4: Arm-lock voador
convert -size 1280x720 xc:'#09090b' \
  -fill '#f59e0b' -draw 'rectangle 0,0 1280,10' \
  \( public/images/show.png -resize 540x540^ -gravity Center -crop 540x540+0+0 \) -geometry +60+90 -composite \
  -font DejaVu-Sans-Bold -fill '#f59e0b' -pointsize 20 -annotate +650+150 'ALTA PERFORMANCE COMPROVADA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 44 -annotate +650+210 'ARM-LOCK VOADOR' \
  -font DejaVu-Sans-Bold -fill '#fbbf24' -pointsize 34 -annotate +650+255 'EM CAMPEONATO OFICIAL' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 18 -annotate +650+320 'Quem compete e sobe em pódios mundiais' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 18 -annotate +650+350 'ensina com autoridade técnica real.' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 20 -annotate +650+415 '+60 TÍTULOS OFICIAIS' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 17 -annotate +650+455 'Circuitos CBJJ / IBJJF / Federação Goiana' \
  -font DejaVu-Sans -fill '#a1a1aa' -pointsize 17 -annotate +650+495 'Camp de Competição e Mentoria de Córner' \
  public/video_demo/slide_04.png

# Slide 5: CTA Final
convert -size 1280x720 xc:'#09090b' \
  -fill '#10b981' -draw 'rectangle 0,0 1280,10' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -gravity North -annotate +0+90 'VAGAS ABERTAS EM GOIÂNIA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 48 -gravity North -annotate +0+135 'AGENDE SUA AULA PARTICULAR' \
  -font DejaVu-Sans -fill '#e4e4e7' -pointsize 20 -gravity North -annotate +0+205 'CT Indicado • Dojo Privativo • Condomínio ou Residência' \
  -fill '#18181b' -stroke '#10b981' -strokewidth 2 -draw 'roundrectangle 340,270 940,450 20,20' \
  -stroke none -fill '#34d399' -font DejaVu-Sans-Bold -pointsize 20 -gravity North -annotate +0+305 'WHATSAPP OFICIAL' \
  -fill '#ffffff' -font DejaVu-Sans-Bold -pointsize 34 -gravity North -annotate +0+345 '+55 (62) 99383-8862' \
  -fill '#10b981' -font DejaVu-Sans -pointsize 18 -gravity North -annotate +0+400 'Clique para iniciar no Jiu-Jitsu' \
  -fill '#ffffff' -font DejaVu-Sans-Bold -pointsize 24 -gravity North -annotate +0+510 'cauansantos.vercel.app' \
  -fill '#a1a1aa' -font DejaVu-Sans -pointsize 17 -gravity North -annotate +0+555 'Professor Cauan Santos • Faixa Preta CBJJ / IBJJF' \
  public/video_demo/slide_05.png

ffmpeg -y \
  -framerate 1/4 -i public/video_demo/slide_%02d.png \
  -c:v libx264 -pix_fmt yuv420p -r 30 \
  public/video_cauan_bjj.mp4

ls -lh public/video_cauan_bjj.mp4
