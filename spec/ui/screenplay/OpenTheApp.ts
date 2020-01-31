import { Ensure, startsWith } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Navigate, Website } from '@serenity-js/protractor';

export const OpenTheApp = () =>
    Task.where(`#actor opens the app`,
        Navigate.to(`http://localhost:8080`),
        Ensure.that(Website.title(), startsWith('Vue.js')),
    );
