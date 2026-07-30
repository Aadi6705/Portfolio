/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // ─── Design.md Color Palette ───────────────────────────────────────────
      colors: {
        paper:      '#F7F6F1',
        ink:        '#1E2328',
        navy:       '#16324F',
        'deep-navy':'#0E1E30',
        brass:      '#A9823C',
        slate:      '#6B7480',
        success:    '#3F7A56',
        error:      '#B0473F',
      },

      // ─── Design.md Typography — IBM Plex family ────────────────────────────
      fontFamily: {
        serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
        sans:  ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      },

      // ─── Design.md Type Scale ──────────────────────────────────────────────
      fontSize: {
        // [size, { lineHeight }]
        'display': ['48px', { lineHeight: '1.15' }],  // H1 desktop
        'h1-mob':  ['32px', { lineHeight: '1.15' }],  // H1 mobile
        'h2':      ['34px', { lineHeight: '1.15' }],  // H2 desktop
        'h2-mob':  ['26px', { lineHeight: '1.15' }],  // H2 mobile
        'h3':      ['24px', { lineHeight: '1.2'  }],  // H3 desktop
        'h3-mob':  ['20px', { lineHeight: '1.2'  }],  // H3 mobile
        'body':    ['17px', { lineHeight: '1.6'  }],  // Body desktop
        'body-mob':['16px', { lineHeight: '1.6'  }],  // Body mobile
        'small':   ['14px', { lineHeight: '1.5'  }],  // Small desktop
        'small-mob':['13px',{ lineHeight: '1.5'  }],  // Small mobile
        'caption': ['12px', { lineHeight: '1.4'  }],  // Caption
      },

      // ─── Design.md Spacing Scale (4px base) ───────────────────────────────
      // Tailwind default covers these: 2=8px, 4=16px, 6=24px, 8=32px, 12=48px, 16=64px, 24=96px
      // Adding named tokens for semantic clarity:
      spacing: {
        '2':  '8px',
        '4':  '16px',
        '6':  '24px',
        '8':  '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
      },

      // ─── Max content width ─────────────────────────────────────────────────
      maxWidth: {
        content: '1120px',
      },

      // ─── Design.md Motion ─────────────────────────────────────────────────
      transitionDuration: {
        'fast': '150ms',
        'reveal': '300ms',
      },

      // ─── Border & outline ─────────────────────────────────────────────────
      borderWidth: {
        'hairline': '1px',
      },
    },
  },
  plugins: [],
}
