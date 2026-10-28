#!/bin/bash
set -e

# Normalizing all slides to exactly 1280x720 RGB24
for i in 1 2 3 4 5; do
  convert public/video_demo/slide$i.png -background '#0c0a09' -extent 1280x720 +repage -depth 8 public/video_demo/frame$i.jpg
done

# Render video with 4s per frame (total 20s)
ffmpeg -y \
  -framerate 1/4 -i public/video_demo/frame%d.jpg \
  -c:v libx264 \
  -r 30 \
  -pix_fmt yuv420p \
  public/video_cauan_bjj.mp4

ls -lh public/video_cauan_bjj.mp4
