import { Task } from '@serenity-js/core';
import { ExecuteScript } from '@serenity-js/protractor';

/**
 * Hello there! If you have found this task it means that you've probably
 * tried to add more UI tests and noticed that the TodoMVC app stores its
 * state in the browser?
 *
 * What you can do to clear the application state between the tests is to
 * add an afterEach hook to app.spec.ts:
 *
 * afterEach(() =>
 *     actorInTheSpotlight().attemptsTo(
 *       ClearLocalStorage(),
 *     ));
 *
 * Have fun with Serenity/JS :-)
 */
export const ClearLocalStorage = () =>
    Task.where(`#actor clears local storage`,
        ExecuteScript.sync('window.localStorage.clear()'),
    );
