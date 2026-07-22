import { WordViewerDomainError } from '../../domain/WordViewerDomainError.ts';

export function parseXml(xml: string, label: string): XMLDocument {
	const parsed = new DOMParser().parseFromString(xml, 'application/xml');
	if (parsed.getElementsByTagName('parsererror')[0]) {
		throw new WordViewerDomainError('INVALID_PACKAGE', `Could not parse ${label}.`);
	}
	return parsed;
}

export function decodeUtf8(bytes: Uint8Array): string {
	return new TextDecoder().decode(bytes);
}

export function attr(element: Element | null | undefined, localName: string): string | null {
	return (
		element?.getAttribute(`w:${localName}`) ??
		element?.getAttribute(`r:${localName}`) ??
		element?.getAttribute(localName) ??
		null
	);
}

export function first(element: Element | null | undefined, localName: string): Element | null {
	return desc(element, localName)[0] ?? null;
}

export function child(element: Element | null | undefined, localName: string): Element | null {
	return children(element, localName)[0] ?? null;
}

export function desc(element: Element | null | undefined, localName: string): Element[] {
	if (!element) {
		return [];
	}
	const matches: Element[] = [];
	const visit = (current: Element): void => {
		for (const node of children(current)) {
			if (node.localName === localName) {
				matches.push(node);
			}
			visit(node);
		}
	};
	visit(element);
	return matches;
}

export function children(element: Element | null | undefined, localName?: string): Element[] {
	if (!element) {
		return [];
	}
	const elements = Array.from(element.childNodes).filter((node): node is Element => node.nodeType === 1);
	return localName ? elements.filter((node) => node.localName === localName) : elements;
}
