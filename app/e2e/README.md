This project is a fork of https://github.com/webdriverio/cucumber-boilerplate.  

I am modifying the original project to sound more like a user manual way of describing how things work and thus how they should be tested.
The idea is to be able to produce "Dummies" style instructions on how to use an app and be able to automate that style of writing.

### Writing your user manual

Using [Gherkin syntax](http://docs.behat.org/en/latest/guides/1.gherkin.html#gherkin-syntax)
means that you write down what's supposed to happen in a real language. 
The files for your user manual have the file ending `.feature` and can be organised into chapters by putting the .feature files into a folder.
You will already find some of the user manual for the shopping site in that directory. They should give you an idea of the style of writing I'm going for. Just create a new file and write your first
part of the instruction guide.

__logging-in.feature__
```gherkin
Feature: Getting secure access to the site
    As with all e-commerce sites you're going to need to know who people are at some point so you can post their purchases to them.
    This app lets you login with your user name and password combo, with Facebook and with google.

    Scenario Outline: Using your mobile phone to do a user name and password login on the train.
        * Open the url ""
        * Type "<user-name>" into "User Name"
        * Type "<password>" into "Password"
        * Click the button "Login"

    @phil
        Examples:
            | user-name     | password  |
            | test.user     | password1 |

```

When you run the instructions above you will see a browser open up and execute the above steps.  Thus proving the shopping app is doing what its meant to.
And in a language everyone can understand.  If it doesn't return a green status then we need to either fix or build something.

Please go read about the [Cucumber Boilerplate Project](https://github.com/webdriverio/cucumber-boilerplate) to get all the details.
