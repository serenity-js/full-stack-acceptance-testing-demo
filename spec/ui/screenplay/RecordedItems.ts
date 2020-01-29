import { Text } from '@serenity-js/protractor';
import { TodoMVCApp } from './ui/TodoMVCApp';

export const RecordedItems = () =>
    Text.ofAll(TodoMVCApp.recordedItems);
