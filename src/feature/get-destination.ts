import * as vscode from 'vscode';

export default async function (): Promise<string>{
    const workspaceFolders = vscode.workspace.workspaceFolders;
    const options: vscode.OpenDialogOptions = {
        canSelectMany: false,
        openLabel: 'Select',
        canSelectFiles: false,
        canSelectFolders: true,
        defaultUri: workspaceFolders && workspaceFolders[0].uri,
        title: 'Please select an folder to fetch source code!'
    };
    let folderUrl = await vscode.window.showOpenDialog(options);
    if(folderUrl && folderUrl[0]) {
        return folderUrl[0].fsPath;
    }
    return '';
}