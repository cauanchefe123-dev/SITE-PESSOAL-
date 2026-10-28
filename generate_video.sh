#!/bin/bash
set -e

# Dimensions: 1280x720 (HD 16:9)
W=1280
H=720

# 1. Slide 1: Hero & Apresentação
convert -size ${W}x${H} xc:'#0c0a09' \
  -fill '#052e16' -draw 'rectangle 0,0 1280,12' \
  public/images/cauan_original_foto.jpg -resize 440x620^ -gravity Center -crop 440x620+0+0 -geometry +740+50 -composite \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 26 -annotate +80+180 'PROFESSOR FAIXA PRETA • GOIÂNIA, GO' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 62 -annotate +80+260 'CAUAN SANTOS' \
  -font DejaVu-Sans-Bold -fill '#34d399' -pointsize 42 -annotate +80+320 'JIU-JITSU BRASILEIRO' \
  -font DejaVu-Sans -fill '#e7e5e4' -pointsize 24 -annotate +80+390 'Aulas Particulares VIP • Personal Fight Exclusivo' \
  -font DejaVu-Sans -fill '#a8a29e' -pointsize 20 -annotate +80+435 '+11 Anos de Trajetória  •  +60 Títulos Conquistados' \
  -font DejaVu-Sans-Bold -fill '#052e16' -draw 'roundrectangle 80,485 450,555 12,12' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 20 -annotate +115+530 'Agendar Aula Experimental' \
  public/video_demo/slide1.png

# 2. Slide 2: Vantagens do Personal Fight
convert -size ${W}x${H} xc:'#0c0a09' \
  -fill '#10b981' -draw 'rectangle 0,0 1280,8' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -gravity North -annotate +0+50 'EXCLUSIVIDADE & METODOLOGIA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 46 -gravity North -annotate +0+90 'POR QUE O PERSONAL FIGHT VIP?' \
  -font DejaVu-Sans -fill '#a8a29e' -pointsize 20 -gravity North -annotate +0+155 'Evolução até 4x mais rápida direto com a Faixa Preta' \
  -fill '#1c1917' -stroke '#292524' -strokewidth 2 -draw 'roundrectangle 80,210 420,580 18,18' \
  -fill '#1c1917' -stroke '#059669' -strokewidth 2 -draw 'roundrectangle 470,210 810,580 18,18' \
  -fill '#1c1917' -stroke '#292524' -strokewidth 2 -draw 'roundrectangle 860,210 1200,580 18,18' \
  -stroke none -fill '#10b981' -font DejaVu-Sans-Bold -pointsize 22 \
  -annotate +110+260 'ATENÇÃO 100% INDIVIDUAL' \
  -annotate +500+260 'EVOLUÇÃO ACELERADA' \
  -annotate +890+260 'HORÁRIOS FLEXÍVEIS' \
  -fill '#e7e5e4' -font DejaVu-Sans -pointsize 18 \
  -annotate +110+320 'Correção milimétrica de alavancas' \
  -annotate +110+355 'Ajuste direto no seu biótipo' \
  -annotate +110+390 'Sem risco de parceiros afoitos' \
  -annotate +110+425 'Segurança articular total' \
  -annotate +500+320 'Sparring técnico com o professor' \
  -annotate +500+355 'Didática progressiva por blocos' \
  -annotate +500+390 'Aprenda meses em semanas' \
  -annotate +500+425 'Zero perda de tempo' \
  -annotate +890+320 'Treino das 06:00 às 22:00' \
  -annotate +890+355 'CT indicado pelo professor' \
  -annotate +890+390 'No condomínio ou residência' \
  -annotate +890+425 'Para executivos e iniciantes' \
  public/video_demo/slide2.png

# 3. Slide 3: Equipe, Alunos e Valores
convert -size ${W}x${H} xc:'#0c0a09' \
  -fill '#059669' -draw 'rectangle 0,0 1280,8' \
  public/images/grupo.png -resize 620x460^ -gravity Center -crop 620x460+0+0 -geometry +60+160 -composite \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -annotate +730+180 'COMUNIDADE & FAMÍLIA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 44 -annotate +730+235 'FORMAÇÃO HUMANA' \
  -font DejaVu-Sans-Bold -fill '#34d399' -pointsize 44 -annotate +730+290 '& DISCIPLINA' \
  -font DejaVu-Sans -fill '#e7e5e4' -pointsize 20 -annotate +730+355 'Mais do que ensinar posições de luta,' \
  -font DejaVu-Sans -fill '#e7e5e4' -pointsize 20 -annotate +730+390 'formamos pessoas seguras, respeitosas' \
  -font DejaVu-Sans -fill '#e7e5e4' -pointsize 20 -annotate +730+425 'e resilientes para toda a vida.' \
  -font DejaVu-Sans -fill '#a8a29e' -pointsize 18 -annotate +730+490 '• Adultos, Duplas e Casais' \
  -font DejaVu-Sans -fill '#a8a29e' -pointsize 18 -annotate +730+530 '• Jiu-Jitsu Kids & Anti-bullying' \
  -font DejaVu-Sans -fill '#a8a29e' -pointsize 18 -annotate +730+570 '• Do zero absoluto ao avançado' \
  public/video_demo/slide3.png

# 4. Slide 4: Atleta de Alto Rendimento & Títulos
convert -size ${W}x${H} xc:'#0c0a09' \
  -fill '#f59e0b' -draw 'rectangle 0,0 1280,8' \
  public/images/show.png -resize 540x540^ -gravity Center -crop 540x540+0+0 -geometry +70+110 -composite \
  -font DejaVu-Sans-Bold -fill '#f59e0b' -pointsize 22 -annotate +660+180 'ALTA PERFORMANCE COMPROVADA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 48 -annotate +660+240 'ARM-LOCK VOADOR' \
  -font DejaVu-Sans-Bold -fill '#fbbf24' -pointsize 38 -annotate +660+295 'EM COMPETIÇÃO OFICIAL' \
  -font DejaVu-Sans -fill '#e7e5e4' -pointsize 20 -annotate +660+365 'Quem compete em alto nível mundial' \
  -font DejaVu-Sans -fill '#e7e5e4' -pointsize 20 -annotate +660+400 'ensina com autoridade prática real.' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 22 -annotate +660+470 '+60 TÍTULOS NO CIRCUITO OFICIAL' \
  -font DejaVu-Sans -fill '#a8a29e' -pointsize 18 -annotate +660+515 'Federações CBJJ / IBJJF / FJJGO' \
  public/video_demo/slide4.png

# 5. Slide 5: Agendamento & Chamada para Ação
convert -size ${W}x${H} xc:'#0c0a09' \
  -fill '#10b981' -draw 'rectangle 0,0 1280,12' \
  -font DejaVu-Sans-Bold -fill '#10b981' -pointsize 24 -gravity North -annotate +0+120 'VAGAS DISPONÍVEIS EM GOIÂNIA' \
  -font DejaVu-Sans-Bold -fill '#ffffff' -pointsize 54 -gravity North -annotate +0+170 'AGENDE SUA AULA PARTICULAR' \
  -font DejaVu-Sans -fill '#e7e5e4' -pointsize 24 -gravity North -annotate +0+250 'Dojo Privativo • CT Indicado • Condomínio ou Residência' \
  -fill '#1c1917' -stroke '#10b981' -strokewidth 2 -draw 'roundrectangle 340,320 940,480 18,18' \
  -stroke none -fill '#34d399' -font DejaVu-Sans-Bold -pointsize 24 -gravity North -annotate +0+360 'WHATSAPP OFICIAL' \
  -fill '#ffffff' -font DejaVu-Sans-Bold -pointsize 36 -gravity North -annotate +0+405 '+55 (62) 99383-8862' \
  -fill '#10b981' -font DejaVu-Sans -pointsize 20 -gravity North -annotate +0+530 'cauansantos.vercel.app' \
  -fill '#a8a29e' -font DejaVu-Sans -pointsize 18 -gravity North -annotate +0+575 'Professor Cauan Santos • Faixa Preta CBJJ / IBJJF' \
  public/video_demo/slide5.png

echo "Slides created successfully!"
