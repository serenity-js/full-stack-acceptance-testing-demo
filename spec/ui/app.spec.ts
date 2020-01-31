import 'jasmine';

import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { CallAnApi } from '@serenity-js/rest';
import { protractor } from 'protractor';
import { EnsureTheServerIsUp } from '../api/screenplay';
import { AddAnItemCalled, OpenTheApp, RecordedItems } from './screenplay';

describe(`TodoMVC app`, () => {

    it(`helps us learn Serenity/JS`, () =>
        actorCalled('Jasmine')
            .whoCan(
                BrowseTheWeb.using(protractor.browser),
                CallAnApi.at('http://localhost:8080'),
            )
            .attemptsTo(
                EnsureTheServerIsUp(),
                OpenTheApp(),
                AddAnItemCalled(`Learn Serenity/JS`),
                AddAnItemCalled(`Love Testing!`),
                Ensure.that(RecordedItems(), equals([
                    `Learn Serenity/JS`,
                    `Love Testing!`,
                ])),
            ));
});
