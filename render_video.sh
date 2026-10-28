#!/bin/bash
set -e

# Compile video at 30fps with 4 seconds per slide and crossfade transitions
ffmpeg -y \
  -loop 1 -t 4 -i public/video_demo/slide1.png \
  -loop 1 -t 4 -i public/video_demo/slide2.png \
  -loop 1 -t 4 -i public/video_demo/slide3.png \
  -loop 1 -t 4 -i public/video_demo/slide4.png \
  -loop 1 -t 5 -i public/video_demo/slide5.png \
  -filter_complex "
    [0:v]fade=t=out:st=3.5:d=0.5:alpha=1[v0];
    [1:v]fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=3.5:d=0.5:alpha=1[v1];
    [2:v]fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=3.5:d=0.5:alpha=1[v2];
    [3:v]fade=t=in:st=0:d=0.5:alpha=1,fade=t=out:st=3.5:d=0.5:alpha=1[v3];
    [4:v]fade=t=in:st=0:d=0.5:alpha=1[v4];
    [v0][v1][v2][v3][v4]concat=n=5:v=1:a=0,format=yuv420p[v]
  " \
  -map "[v]" \
  -c:v libx264 \
  -preset fast \
  -r 30 \
  public/video_cauan_bjj.mp4

ls -lh public/video_cauan_bjj.mp4
