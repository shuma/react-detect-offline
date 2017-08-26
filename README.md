
###React Online Offline component
Using [window.Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) Web API

###Demo
Check a simple example here: [Heroku app](...)

### Browser Support

The [web spec](https://developer.mozilla.org/en-US/docs/Online_and_offline_events) we rely on is supported by IE 9+, Chrome 14+, Firefox 41+, and Safari 5+ - that's [94% of worldwide (98% of US)](http://caniuse.com/#feat=online-status) browser traffic.

### Example Uses

- Use `Offline` to remind users they might need to connect to complete certain actions.
- Use `Online` to let readers know the page is available offline.
- Use `Online` to hide links or other content that is irrelevant when offline.