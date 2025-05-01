"use client";

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4">See Recruo in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our AI-powered platform transforms the technical hiring process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full w-16 h-16 gradient-bg"
                onClick={toggleVideo}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white" />
                )}
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Learn how Recruo can help you build better technical teams faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}