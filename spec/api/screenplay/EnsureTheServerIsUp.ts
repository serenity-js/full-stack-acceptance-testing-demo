import { Ensure, equals, isGreaterThan, property } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { GetRequest, LastResponse, Send } from '@serenity-js/rest';

export const EnsureTheServerIsUp = () =>
    Task.where(`#actor ensures that the server is up`,
        Send.a(GetRequest.to('/healthcheck')),
        Ensure.that(LastResponse.status(), equals(200)),
        Ensure.that(LastResponse.body(), property('uptime', isGreaterThan(0))),
    );
