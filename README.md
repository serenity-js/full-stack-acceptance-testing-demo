# Serenity/JS Full-Stack Acceptance Testing Demo 

[![Build Status](https://travis-ci.com/serenity-js/serenity-js-jasmine-protractor-template.svg?branch=master)](https://travis-ci.com/serenity-js/serenity-js-jasmine-protractor-template)

Serenity/JS is a next generation acceptance testing framework. Learn more at [serenity-js.org](https://serenity-js.org)!

This repository was created using the [Serenity/JS Jasmine Protractor Template](https://github.com/serenity-js/serenity-js-jasmine-protractor-template) and contains code samples demonstrated in the [Full-Stack Acceptance Testing with Serenity/JS and the Screenplay Pattern](https://www.youtube.com/watch?v=djPMf-n93Rw) talk:

[![Full-Stack Acceptance Testing with Serenity/JS and the Screenplay Pattern](https://img.youtube.com/vi/djPMf-n93Rw/0.jpg)](https://www.youtube.com/watch?v=djPMf-n93Rw)

## Prerequisites

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 10 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 8 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)

## Usage

```
npm ci                  # installs the node modules
npm run lint            # runs the code linter
npm start               # starts the web server with a demo app
npm test                # executes the example tests and generates the report under ./target/site/serenity
```

_**Please note**: to keep things simple, this demo assumes that you start the app server using `npm start` 
before running the tests via `npm test`. 
If you'd like to automate the process of starting the server up for the tests and shutting it down after,
have a look at the [`@serenity-js/local-server`](https://serenity-js.org/modules/local-server/) module._



## Help and Support

[https://serenity-js.org/support.html](https://serenity-js.org/support.html)

## Your feedback matters!

Do you find Serenity/JS useful? Give it a star! &#9733;

Found a bug? Need a feature? Raise [an issue](https://github.com/serenity-js/serenity-js/issues?state=open)
or submit a pull request.

Have feedback? Let me know on twitter: [@JanMolak](https://twitter.com/JanMolak) 

If you'd like to chat with fellow users of Serenity/JS, join us on [Gitter Chat](https://gitter.im/serenity-js/Lobby).

And if Serenity/JS has made your life a little bit easier, please consider [sponsoring its ongoing development](https://github.com/sponsors/serenity-js) 🙇

## Friends of Serenity/JS

Serenity/JS is continuously delivered to you thanks to:
* the time and commitment of [the author](https://janmolak.com/) and [the contributors](https://github.com/serenity-js/serenity-js/graphs/contributors)
* the [amazing sponsors](https://serenity-js.org/community/sponsors.html)

## License

The Serenity/JS code base is licensed under the [Apache-2.0](LICENSE.md) license, 
while its documentation and the [Serenity/JS Handbook](https://serenity-js.org/handbook/) are licensed under the [Creative Commons BY-NC-SA 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/). [Learn more](https://serenity-js.org/license.html).

For corporate sponsorship or commercial support, please check out the [Support Guide](https://serenity-js.org/support.html).

----

_- Copyright &copy; 2016- [Jan Molak](https://janmolak.com) and the Serenity Team_

[![Analytics](https://ga-beacon.appspot.com/UA-85788349-2/serenity-js/readme.md?pixel)](https://github.com/igrigorik/ga-beacon)
