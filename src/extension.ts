import * as vscode from 'vscode';
import getRequirement from './feature/get-requirement';
import getDestination from './feature/get-destination';

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('generate-basic-app', async () => {
		const requirements = await getRequirement();
		const destination = await getDestination();
		console.log({
			requirements,
			destination
		})
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
