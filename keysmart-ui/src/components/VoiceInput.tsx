import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'fractal-motion';
import { useVoiceToText } from '../hooks/useVoiceToText';

interface VoiceInputProps {
  onTextChange?: (text: string) => void;
  placeholder?: string;
  maxLength?: number;
  className?: string;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({
  onTextChange,
  placeholder = 'Parlez pour dicter votre texte...',
  maxLength = 4000,
  className = '',
}) => {
  const [text, setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = 0;
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const recordingIntervalRef = useRef<number | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Check if speech recognition is supported
  const isSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;

  // Check if microphone is supported
  const isMicrophoneSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;

  // Request microphone permission
  const requestMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setHasPermission(true);
    } catch (err) {
      setHasPermission(false);
    }
  }, []);

  // Request microphone permission
  const requestMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setHasPermission(true);
    } catch (err) {
      setHasPermission(false);
    }
  }, []);

  // Request microphone permission
  const requestMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setHasPermission(true);
    } catch (err) {
      setHasPermission(false);
    }
  }, []);

  // Request microphone permission
  const requestMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserContent({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      setHasPermission(true);
    } catch (err) {
      setHasPermission(false);
    }
  }, []);

  // Request microphone permission
  const requestMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserContent({ audio: true });
      setHasPermission(true);
    } catch (err) {
      setHasPermission(false);
    }
  }, []);

  // Request microphone permission
  const requestMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserContent({ audio: true });
      setHasPermission(true);
    } catch: 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    }
  }, []);

  // Request microphone permission
  const requestMicrophonePermission = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserContent({ audio: true }}
    </script>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
