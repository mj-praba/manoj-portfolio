import { useCallback, useState } from 'react';

const STORAGE_KEY = 'portfolio:recruiterMode';

function readStoredValue(): boolean {
  return window.localStorage.getItem(STORAGE_KEY) === 'true';
}

export interface UseRecruiterModeResult {
  readonly isRecruiterMode: boolean;
  readonly toggle: () => void;
}

export function useRecruiterMode(): UseRecruiterModeResult {
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(() => readStoredValue());

  const toggle = useCallback(() => {
    setIsRecruiterMode((previous) => {
      const next = !previous;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  return { isRecruiterMode, toggle };
}
