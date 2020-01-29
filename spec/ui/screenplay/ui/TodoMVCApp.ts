import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class TodoMVCApp {
    static newTodoField =
        Target.the('new todo field').located(by.css('.new-todo'));

    static recordedItems =
        Target.all('recorded items').located(by.css('.todo-list .todo'));
}
