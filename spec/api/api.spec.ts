import 'jasmine';

import { actorCalled, engage } from '@serenity-js/core';
import { APIActors } from './screenplay';

describe(`API`, () => {

    beforeEach(() => engage(new APIActors()));

    it(`provides information on the health of the server`, () =>
        actorCalled('Apisitt').attemptsTo(
            // interact with the API...
        ));
});
