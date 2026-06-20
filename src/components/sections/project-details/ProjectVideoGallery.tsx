"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectVideo } from "@/lib/types";

// --- Thumbnail Sub-Component for Hover-to-Play Logic ---
const ThumbnailItem = ({
          vid,
          isActive,
          onClick
}: {
          vid: ProjectVideo;
          isActive: boolean;
          onClick: () => void;
}) => {
          const [isHovered, setIsHovered] = useState(false);
          const hoverVideoRef = useRef<HTMLVideoElement>(null);

          // Hover par video play/pause handle karne ka logic
          useEffect(() => {
                    if (isHovered && hoverVideoRef.current && !isActive) {
                              hoverVideoRef.current.play().catch(() => { });
                    } else if (hoverVideoRef.current) {
                              hoverVideoRef.current.pause();
                    }
          }, [isHovered, isActive]);

          return (
                    <Button
                              variant="ghost"
                              onClick={onClick}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              // 📱 MOBILE: Card ki overall width w-[160px] kar di gayi hai (pehle 200px thi), p-2 for tighter padding
                              // 💻 DESKTOP: w-full aur padding p-3
                              className={`group flex-shrink-0 w-[160px] md:w-full flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 p-2 md:p-3 h-auto rounded-[12px] md:rounded-[14px] justify-start cursor-pointer transition-all duration-300 border ${isActive
                                        ? "bg-surface-container border-primary-container/30 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:bg-surface-container"
                                        : "bg-transparent border-transparent hover:bg-surface-container-low"
                                        }`}
                    >
                              {/* Thumbnail Box */}
                              {/* 📱 MOBILE: Thumbnail container ki width w-full rakhi hai (card ke andar). 💻 DESKTOP: w-32 fixed. */}
                              <div className={`relative flex-shrink-0 w-full md:w-32 aspect-video rounded-[6px] md:rounded-[10px] overflow-hidden shadow-sm transition-all duration-300 ${isActive ? "ring-1 md:ring-2 ring-primary-container shadow-[0_0_8px_rgba(255,107,53,0.2)]" : ""
                                        }`}>
                                        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors z-10"></div>

                                        {/* Static Image */}
                                        <img
                                                  src={vid.thumbnail}
                                                  alt={vid.title}
                                                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered && !isActive ? 'opacity-0' : 'opacity-100'}`}
                                        />

                                        {/* Hover Video Element (Only rendered if not active) */}
                                        {!isActive && (
                                                  <video
                                                            ref={hoverVideoRef}
                                                            src={vid.url}
                                                            muted
                                                            playsInline
                                                            loop
                                                            preload="metadata"
                                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                                  />
                                        )}

                                        {/* Play Icon (Small) - Hides on hover or if active */}
                                        {!isActive && !isHovered && (
                                                  <div className="absolute inset-0 flex items-center justify-center z-20">
                                                            <div className="bg-black/60 p-1 md:p-1.5 rounded-full backdrop-blur-sm">
                                                                      <Play className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-white fill-white ml-0.5" />
                                                            </div>
                                                  </div>
                                        )}
                              </div>

                              {/* Details Box */}
                              <div className="flex flex-col flex-grow overflow-hidden text-left w-full pt-0.5 md:pt-0">
                                        {isActive && (
                                                  <span className="text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-primary-container mb-0.5 md:mb-1 leading-none">
                                                            Playing
                                                  </span>
                                        )}
                                        {/* 📱 MOBILE: Text chota kar diya hai (text-[11px]) */}
                                        <h3 className={`font-bold text-[11px] md:text-[14px] leading-snug line-clamp-2 transition-colors whitespace-normal ${isActive ? "text-on-surface" : "text-secondary group-hover:text-primary"
                                                  }`}>
                                                  {vid.title}
                                        </h3>
                                        {/* 📱 MOBILE: Muted text mazeed chota (text-[10px]) */}
                                        <p className="text-[10px] md:text-[12px] text-secondary-fixed-dim mt-0.5 md:mt-1 font-medium truncate">
                                                  Walkthrough
                                        </p>
                              </div>
                    </Button>
          );
};

// --- Main Component ---
export default function ProjectVideoGallery({ videos }: { videos: ProjectVideo[] }) {
          const [activeVideo, setActiveVideo] = useState<ProjectVideo>(videos[0]);

          // Custom Controls State
          const videoRef = useRef<HTMLVideoElement>(null);
          const containerRef = useRef<HTMLDivElement>(null);
          const [isPlaying, setIsPlaying] = useState(false);
          const [progress, setProgress] = useState(0);
          const [currentTime, setCurrentTime] = useState("0:00");
          const [duration, setDuration] = useState("0:00");
          const [volume, setVolume] = useState(1);
          const [isMuted, setIsMuted] = useState(true);

          // NEW: Controls visibility state (for mobile tap)
          const [showControls, setShowControls] = useState(false);
          const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

          // Load new video when selected
          useEffect(() => {
                    if (videoRef.current) {
                              videoRef.current.load();
                              videoRef.current.play().catch(() => setIsPlaying(false));
                    }
          }, [activeVideo]);

          // --- NEW: Handle showing/hiding controls on tap/click ---
          const handleContainerClick = () => {
                    // Desktop hover state is handled by CSS, this is mainly for mobile
                    setShowControls(true);

                    // Clear any existing timeout
                    if (controlsTimeoutRef.current) {
                              clearTimeout(controlsTimeoutRef.current);
                    }

                    // Auto-hide controls after 3 seconds if playing
                    if (isPlaying) {
                              controlsTimeoutRef.current = setTimeout(() => {
                                        setShowControls(false);
                              }, 3000);
                    }
          };

          // Video Control Handlers
          const togglePlay = (e?: React.MouseEvent) => {
                    if (e) e.stopPropagation();

                    if (videoRef.current) {
                              if (isPlaying) {
                                        videoRef.current.pause();
                                        setShowControls(true); // Keep controls visible when paused
                              } else {
                                        videoRef.current.play();
                                        handleContainerClick(); // Start auto-hide timer when played
                              }
                    }
          };

          const skipTime = (seconds: number) => {
                    if (videoRef.current) {
                              videoRef.current.currentTime += seconds;
                              handleContainerClick(); // Show controls when seeking
                    }
          };

          const toggleMute = (e: { stopPropagation: () => void }) => {
                    e.stopPropagation();
                    if (videoRef.current) {
                              videoRef.current.muted = !isMuted;
                              setIsMuted(!isMuted);
                              handleContainerClick();
                    }
          };

          const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    e.stopPropagation();
                    const val = parseFloat(e.target.value);
                    setVolume(val);
                    if (videoRef.current) {
                              videoRef.current.volume = val;
                              if (val > 0 && isMuted) toggleMute(e);
                              if (val === 0 && !isMuted) toggleMute(e);
                    }
          };

          const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    if (videoRef.current) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const pos = (e.clientX - rect.left) / rect.width;
                              videoRef.current.currentTime = pos * videoRef.current.duration;
                              handleContainerClick();
                    }
          };

          const toggleFullScreen = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (!document.fullscreenElement) {
                              containerRef.current?.requestFullscreen().catch(err => console.log(err));
                    } else {
                              document.exitFullscreen();
                    }
          };

          const formatTime = (timeInSeconds: number) => {
                    if (isNaN(timeInSeconds)) return "0:00";
                    const m = Math.floor(timeInSeconds / 60);
                    const s = Math.floor(timeInSeconds % 60);
                    return `${m}:${s < 10 ? "0" + s : s}`;
          };

          const handleTimeUpdate = () => {
                    if (videoRef.current) {
                              const current = videoRef.current.currentTime;
                              const dur = videoRef.current.duration;
                              setProgress((current / dur) * 100);
                              setCurrentTime(formatTime(current));
                    }
          };

          if (!videos || videos.length === 0) return null;

          return (
                    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] mb-10 md:mb-10">

                              <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 lg:gap-8 items-start">

                                        {/* ================= LEFT COLUMN: CUSTOM VIDEO PLAYER ================= */}
                                        <div className="flex flex-col gap-4 md:gap-6 w-full">
                                                  <div
                                                            ref={containerRef}
                                                            className="relative w-full aspect-[4/3] md:aspect-video bg-black rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-surface-variant/50 group flex items-center justify-center cursor-pointer"
                                                            onClick={handleContainerClick}
                                                            onMouseLeave={() => isPlaying && setShowControls(false)}
                                                            onMouseEnter={() => setShowControls(true)}
                                                  >
                                                            <video
                                                                      ref={videoRef}
                                                                      // YAHAN CHANGE HAI: 'object-contain' ki jagah 'object-cover' laga diya hai
                                                                      className="w-full h-full object-cover"
                                                                      autoPlay
                                                                      muted={isMuted}
                                                                      playsInline
                                                                      onPlay={() => setIsPlaying(true)}
                                                                      onPause={() => setIsPlaying(false)}
                                                                      onTimeUpdate={handleTimeUpdate}
                                                                      onLoadedMetadata={() => {
                                                                                if (videoRef.current) setDuration(formatTime(videoRef.current.duration));
                                                                      }}
                                                            >
                                                                      <source src={activeVideo.url} type="video/mp4" />
                                                            </video>

                                                            {/* Center Custom Play/Pause Button (Shadcn) */}
                                                            {/* Added: showControls condition for mobile visibility */}
                                                            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-20 transition-opacity duration-300 ${!isPlaying || showControls ? 'opacity-100' : 'opacity-0'}`}>
                                                                      <Button
                                                                                size="icon"
                                                                                onClick={togglePlay}
                                                                                className={`pointer-events-auto rounded-full w-16 h-16 md:w-20 md:h-20 bg-primary-container text-white shadow-[0_0_25px_rgba(255,107,53,0.5)] hover:bg-primary-container/90 hover:scale-110 transition-all duration-300 ${isPlaying ? 'scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100' : 'scale-100 opacity-100'
                                                                                          }`}
                                                                      >
                                                                                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                                                                      </Button>
                                                            </div>

                                                            {/* Bottom Control Bar */}
                                                            {/* YAHAN CHANGE HAI: lg:group-hover:opacity-100 desktop k liye rakha hai, aur mobile k liye 'showControls' state use ki hai */}
                                                            <div
                                                                      className={`absolute bottom-0 left-0 right-0 px-4 md:px-6 pb-4 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-3 z-20 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
                                                                                }`}
                                                                      onClick={(e) => e.stopPropagation()}
                                                            >
                                                                      {/* Progress Bar */}
                                                                      <div
                                                                                className="w-full h-1.5 md:h-2 bg-white/30 rounded-full cursor-pointer overflow-hidden relative"
                                                                                onClick={handleProgressClick}
                                                                      >
                                                                                <div
                                                                                          className="absolute top-0 left-0 h-full bg-primary-container transition-all duration-100"
                                                                                          style={{ width: `${progress}%` }}
                                                                                ></div>
                                                                      </div>

                                                                      {/* Controls Row */}
                                                                      <div className="flex items-center justify-between text-white">
                                                                                <div className="flex items-center gap-1 md:gap-2">
                                                                                          <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:text-primary-container hover:bg-white/10 rounded-full h-8 w-8 cursor-pointer">
                                                                                                    {isPlaying ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current" />}
                                                                                          </Button>
                                                                                          <Button variant="ghost" size="icon" onClick={() => skipTime(-10)} className="text-white hover:text-primary-container hover:bg-white/10 rounded-full h-8 w-8 cursor-pointer" title="Rewind 10s">
                                                                                                    <RotateCcw size={16} />
                                                                                          </Button>
                                                                                          <Button variant="ghost" size="icon" onClick={() => skipTime(10)} className="text-white hover:text-primary-container hover:bg-white/10 rounded-full h-8 w-8 cursor-pointer" title="Forward 10s">
                                                                                                    <RotateCw size={16} />
                                                                                          </Button>
                                                                                          <span className="text-[12px] md:text-[13px] font-medium font-body-md opacity-90 tracking-wide ml-2">
                                                                                                    {currentTime} / {duration}
                                                                                          </span>
                                                                                </div>

                                                                                <div className="flex items-center gap-1 md:gap-2">
                                                                                          <div className="flex items-center group/vol">
                                                                                                    <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:text-primary-container hover:bg-white/10 rounded-full h-8 w-8 cursor-pointer">
                                                                                                              {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                                                                                    </Button>
                                                                                                    <input
                                                                                                              type="range"
                                                                                                              min="0" max="1" step="0.05"
                                                                                                              value={isMuted ? 0 : volume}
                                                                                                              onChange={handleVolumeChange}
                                                                                                              className="hidden md:block w-0 opacity-0 group-hover/vol:w-16 md:group-hover/vol:w-20 group-hover/vol:opacity-100 transition-all duration-300 accent-primary-container h-1 cursor-pointer"
                                                                                                    />
                                                                                          </div>
                                                                                          <Button variant="ghost" size="icon" onClick={toggleFullScreen} className="text-white hover:text-primary-container hover:bg-white/10 rounded-full h-8 w-8 cursor-pointer">
                                                                                                    <Maximize size={16} />
                                                                                          </Button>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>

                                                  {/* Video Title Container */}
                                                  <div className="bg-surface p-5 md:p-6 rounded-[16px] md:rounded-[20px] border border-surface-container-high shadow-sm">
                                                            <h1 className="text-primary font-headline-md font-extrabold text-[20px] md:text-[26px] leading-tight text-shadow-md">
                                                                      {activeVideo.title}
                                                            </h1>
                                                            <p className="text-secondary font-body-md text-[13px] md:text-[15px] mt-2">
                                                                      Detailed walkthrough and feature demonstration.
                                                            </p>
                                                  </div>
                                        </div>

                                        {/* ================= RIGHT COLUMN: GALLERY SLIDER ================= */}
                                        {videos.length > 1 && (
                                                  // Desktop pe absolute taake height match kare, Mobile pe relative
                                                  <div className="relative h-full w-full">
                                                            {/* 📱 MOBILE: flex-row overflow-x-auto (Horizontal Scroll) */}
                                                            {/* 💻 DESKTOP: flex-col overflow-y-auto (Vertical List) */}
                                                            <div className="lg:absolute lg:inset-0 w-full h-full flex flex-row lg:flex-col gap-3 md:gap-2 overflow-x-auto lg:overflow-y-auto pb-4 lg:pr-2 custom-scrollbar border shadow-md rounded-[16px] p-3">

                                                                      <div className="hidden lg:flex items-center justify-between mb-2">
                                                                                <h2 className="text-secondary font-label-md font-extrabold uppercase tracking-widest text-[12px] md:text-[13px] px-1">
                                                                                          Playlist ({videos.length})
                                                                                </h2>
                                                                      </div>

                                                                      {videos.map((vid, index) => (
                                                                                <div key={vid.id} className="flex flex-row lg:flex-col gap-2">
                                                                                          <ThumbnailItem
                                                                                                    vid={vid}
                                                                                                    isActive={activeVideo.id === vid.id}
                                                                                                    onClick={() => setActiveVideo(vid)}
                                                                                          />
                                                                                          {/* Playlist Separator (Desktop only) */}
                                                                                          {index < videos.length - 1 && (
                                                                                                    <hr className="hidden lg:block border-surface-variant/50 w-full my-1" />
                                                                                          )}
                                                                                </div>
                                                                      ))}

                                                            </div>
                                                  </div>
                                        )}

                              </div>
                    </section>
          );
}