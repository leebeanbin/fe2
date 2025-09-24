import React, { type ReactNode } from 'react';

export function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlightText(
  text: string,
  keywords: string[],
  className = 'kw'
): React.ReactNode[] {
  if (!text || keywords.length === 0) return [text];
  const pattern = `(${keywords.map(escapeRegExp).join('|')})`;
  const regex = new RegExp(pattern, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    const isMatch = keywords.some(k => part.toLowerCase() === k.toLowerCase());
    return isMatch ? (
      <span key={`hl-${i}`} className={className}>
        {part}
      </span>
    ) : (
      <React.Fragment key={`hl-${i}`}>{part}</React.Fragment>
    );
  });
}

export function classForViewpoint(token: string): BiasSpanClass {
  const norm = token.replace(/\s+/g, '');
  if (norm.startsWith('보수')) return 'results_right';
  if (norm.startsWith('진보')) return 'results_left';
  return 'results_center';
}
export type BiasSpanClass = 'results_right' | 'results_center' | 'results_left';

export function highlightViewpoint(text?: string): ReactNode {
  if (!text) return null;

  const token =
    '(보수적?\\s*(?:관점|시각)|중립적?\\s*(?:관점|시각)|진보적?\\s*(?:관점|시각))';
  const particle = '((?:으로|에서))?';
  const re = new RegExp(`${token}${particle}`, 'g');

  const out: ReactNode[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    const start = m.index;
    const end = start + m[0].length;
    const core = m[1];
    const tail = m[2] ?? '';

    if (lastIndex < start) out.push(text.slice(lastIndex, start));
    out.push(
      <span key={`vp-${start}`} className={classForViewpoint(core)}>
        {core}
      </span>
    );
    if (tail) out.push(tail);
    lastIndex = end;
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}
