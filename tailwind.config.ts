import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				// Custom Colors from old project
				'primary-content': 'var(--color-primary-content)',
				dark: '#000000',
				light: '#F7F7F8',
				'gray-custom': '#9CA3AF',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: ['var(--font-inter)', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Liberation Sans"', 'sans-serif'],
				serif: ['var(--font-inter)', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Liberation Sans"', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionTimingFunction: {
				'soft-out': 'cubic-bezier(0.32, 0.72, 0, 1)',
			},
			animation: {
				'gradient': 'gradient 8s linear infinite',
				'color-shift': 'colorShift 25s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'marquee': 'marquee 25s linear infinite',
				'marquee-slow': 'marquee 35s linear infinite',
				'marquee-extra-slow': 'marquee 60s linear infinite',
				'marquee-ultra-slow': 'marquee 80s linear infinite',
				'marquee-fast': 'marquee 20s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
			},
			keyframes: {
				gradient: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					},
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'colorShift': {
					'0%, 100%': { filter: 'hue-rotate(0deg)' },
					'50%': { filter: 'hue-rotate(180deg)' }
				},
				'marquee': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)', filter: 'brightness(1.2) blur(1px)' },
					'50%': { opacity: '0.7', transform: 'scale(0.9)', filter: 'brightness(1) blur(0px)' }
				}
			},
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
