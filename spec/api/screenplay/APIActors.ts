import { Actor, DressingRoom } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

export class APIActors implements DressingRoom {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.at(`http://localhost:8080`),
        );
    }
}
