import type { App } from 'obsidian';

export function isAppDarkMode(app: App): boolean {
	const current = app as App & { isDarkMode?: () => boolean };
	return current.isDarkMode?.() ?? document.body.classList.contains('theme-dark');
}
