import { Task } from '@serenity-js/core';
import { Enter, Press } from '@serenity-js/protractor';
import { protractor } from 'protractor';
import { TodoMVCApp } from './ui/TodoMVCApp';

export const AddAnItemCalled = (name: string) =>
    Task.where(`#actor adds an item called "${ name }"`,
        Enter.theValue(name).into(TodoMVCApp.newTodoField),
        Press.the(protractor.Key.ENTER).in(TodoMVCApp.newTodoField),
    );
