import { useEffect, useState } from 'react';

export type GeoLookupState =
  | { readonly status: 'loading' }
  | { readonly status: 'success'; readonly visitorTimezone: string; readonly overlapSummary: string }
  | { readonly status: 'error' };

interface IpapiResponse {
  readonly timezone?: string;
  readonly error?: boolean;
  readonly reason?: string;
}

function getUtcOffsetMinutes(timeZone: string, date: Date): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .formatToParts(date)
    .reduce<Record<string, string>>((acc, part) => {
      if (part.type !== 'literal') {
        acc[part.type] = part.value;
      }
      return acc;
    }, {});

  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );

  return (asUtc - date.getTime()) / 60000;
}

function describeOverlap(baseTimezone: string, visitorTimezone: string): string {
  const now = new Date();
  const diffMinutes = getUtcOffsetMinutes(baseTimezone, now) - getUtcOffsetMinutes(visitorTimezone, now);

  if (diffMinutes === 0) {
    return "You're in the same timezone as me — real-time overlap all day.";
  }

  const diffHours = Math.abs(diffMinutes) / 60;
  const direction = diffMinutes > 0 ? 'behind' : 'ahead of';
  const hoursLabel = Number.isInteger(diffHours) ? String(diffHours) : diffHours.toFixed(1);

  return `You're ${hoursLabel} hour${diffHours === 1 ? '' : 's'} ${direction} me — plenty of room for async overlap.`;
}

const GEO_LOOKUP_URL = 'https://ipapi.co/json/';
const GEO_LOOKUP_TIMEOUT_MS = 4000;

export function useTimezoneOverlap(baseTimezone: string): GeoLookupState {
  const [state, setState] = useState<GeoLookupState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), GEO_LOOKUP_TIMEOUT_MS);

    fetch(GEO_LOOKUP_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('geo lookup failed');
        }
        return response.json() as Promise<IpapiResponse>;
      })
      .then((data) => {
        if (cancelled) {
          return;
        }
        if (data.error || !data.timezone) {
          setState({ status: 'error' });
          return;
        }
        setState({
          status: 'success',
          visitorTimezone: data.timezone,
          overlapSummary: describeOverlap(baseTimezone, data.timezone),
        });
      })
      .catch(() => {
        if (!cancelled) {
          setState({ status: 'error' });
        }
      })
      .finally(() => window.clearTimeout(timeoutId));

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [baseTimezone]);

  return state;
}
