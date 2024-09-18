import * as vscode from 'vscode';
import { MENU_APP, QUESTION_TYPE } from '../constants/AppConstant';

export default async function (): Promise<Record<string, string>> {
    let selected: Record<string, string> = {};
    let key = 'app';
    const firstQuestion: vscode.QuickPickItem[] = MENU_APP.map((item) => {
        return {
            label: item.title,
            description: item.description,
        };
    });
    let result = await vscode.window.showQuickPick(firstQuestion);
    if (!result) {
        return selected;
    }
    let item = MENU_APP.find((item) => item.title === result?.label);
    selected[key] = item?.value || '';
    if (item?.questions) {
        for (let i = 0; i < item.questions.length; i++) {
            let question = item.questions[i];
            let type = question.type;
            switch (type) {
                case QUESTION_TYPE.INPUT: {
                    let result = await vscode.window.showInputBox({
                        prompt: question.title,
                        placeHolder: question.description
                    });
                    if (result) {
                        selected[question.key] = result;
                    }
                    break;
                }
                case QUESTION_TYPE.SELECT: {
                    let options: vscode.QuickPickItem[] = question?.options?.map((item) => {
                        return {
                            label: item.title,
                            description: item.description
                        };
                    }) || [];
                    let result = await vscode.window.showQuickPick(options, {
                        title: question?.title || 'Please select!'
                    });
                    let itemResult = question.options?.find((item) => item.title === result?.label);
                    if (itemResult) {
                        selected[question.key] = itemResult.value || '';
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    return selected;
}