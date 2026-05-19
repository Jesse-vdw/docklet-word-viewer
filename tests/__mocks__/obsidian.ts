export class Notice {
	constructor(_message: string) {}
}

export class Plugin {
	app = {} as unknown;
	register() {}
	registerEvent() {}
	registerInterval() {}
	registerDomEvent() {}
	addCommand() {}
	addSettingTab() {}
	registerExtensions() {}
	registerView() {}
	loadData = async () => null;
	saveData = async (_data: unknown) => {};
}

export class ItemView {}
export class TFile {}
export class Modal {}
