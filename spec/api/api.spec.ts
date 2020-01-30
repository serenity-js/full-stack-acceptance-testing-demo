import 'jasmine';

import { actorCalled } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

describe(`API`, () => {

    it(`allows to determine if the server is up`, () =>
        actorCalled('Apisitt')
            .whoCan(
                CallAnApi.at('http://localhost:8080'),
            )
            .attemptsTo(
                // interact with the API...
            ));
});
