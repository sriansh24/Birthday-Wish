// ─── Birthday Person Config ────────────────────────────────
import BirthdayPerson from '../assets/img/disha-1.jpeg';

export const BIRTHDAY_PERSON = {
  name: 'Adyasha Satapathy',
  subtitle: 'A night written in the stars',
  
  imageUrl: BirthdayPerson,
}

// ─── Scrapbook Memories ────────────────────────────────────
export const MEMORIES = [
  { emoji: '🌙', text: 'Midnight chats & laughter' },
  { emoji: '✨', text: 'Every sparkle is you'      },
  { emoji: '🎂', text: 'Sweeter every year'        },
  { emoji: '💫', text: 'Dreams turning to stars'   },
  { emoji: '🌸', text: 'Bloom in your own time'    },
  { emoji: '🎁', text: 'You are the gift'          },
]

// ─── Cake Candles ──────────────────────────────────────────
export const CANDLES = [
  { x: 80,  color: '#ff6b9d', flame: '#ff9dbb' },
  { x: 120, color: '#a78bfa', flame: '#c4b5fd' },
  { x: 160, color: '#00d4ff', flame: '#7dd3fc' },
  { x: 200, color: '#ffd700', flame: '#fde68a' },
  { x: 240, color: '#4ade80', flame: '#bbf7d0' },
]

// ─── Confetti Colors ───────────────────────────────────────
export const CONFETTI_COLORS = ['#00d4ff', '#ff6b9d', '#ffd700', '#a78bfa', '#4ade80', '#fb923c']

// ─── App Phases ────────────────────────────────────────────
export const PHASES = {
  INTRO:   'intro',
  CAKE:    'cake',
  BLOWING: 'blowing',
  GIFT:    'gift',
}
