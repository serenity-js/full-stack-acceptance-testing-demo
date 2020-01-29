import { Actor, DressingRoom } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { CallAnApi } from '@serenity-js/rest';
import { protractor } from 'protractor';

export class UIActors implements DressingRoom {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.at('http://localhost:8080'),
            BrowseTheWeb.using(protractor.browser),
        );
    }
}
