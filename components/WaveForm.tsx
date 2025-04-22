'use client'
import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styles from '../styles/waveform.module.css';

export default function Waveform() {
  const waveformTopRef = useRef<HTMLDivElement>(null);
  const waveformBottomRef = useRef<HTMLDivElement>(null);
  const wavesurferTopRef = useRef<WaveSurfer | null>(null);
  const wavesurferBottomRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformTopRef.current && waveformBottomRef.current) {
      // Initialize WaveSurfer instances
      wavesurferTopRef.current = WaveSurfer.create({
        container: waveformTopRef.current,
        waveColor: 'rgba(128, 0, 128, 0.5)',
        progressColor: 'rgba(75, 0, 130, 0.5)',
        cursorColor: 'transparent',
        barWidth: 2,
        barRadius: 3,
        height: 50,
        interact: true,
      });

      wavesurferBottomRef.current = WaveSurfer.create({
        container: waveformBottomRef.current,
        waveColor: 'rgba(128, 0, 128, 0.5)',
        progressColor: 'rgba(75, 0, 130, 0.5)',
        cursorColor: 'transparent',
        barWidth: 2,
        barRadius: 3,
        height: 50,
        interact: true,
      });

      // Load audio
      try {
        wavesurferTopRef.current.load('/music/lofi1.mp3');
        wavesurferBottomRef.current.load('/music/lofi1.mp3');
      } catch (error) {
        console.error('Error loading audio:', error);
      }

      // Cleanup on unmount
      return () => {
        try {
          if (wavesurferTopRef.current) {
            wavesurferTopRef.current.destroy();
          }
          if (wavesurferBottomRef.current) {
            wavesurferBottomRef.current.destroy();
          }
        } catch (error) {
          console.error('Error during WaveSurfer cleanup:', error);
        }
      };
    }
  }, []);

  return (
    <div className={styles.waveformContainer}>
      <div ref={waveformTopRef} className={styles.waveformTop} />
      <div ref={waveformBottomRef} className={styles.waveformBottom} />
    </div>
  );
}