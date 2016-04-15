# Redux Electron Todo Example

React + Redux + Electron + Material UI + Sass + Browserify + Gulp Todo List Application example that lives in your system tray. It saves all of you data to localStorage, is resizable, frameless and can export your current todo list to PDF for safe storage.

![screenshot](http://i.imgur.com/aipE0VJ.png)

## How to get started

```
npm install -g gulp-cli electron-prebuilt
npm install
gulp serve
```

### Building

- Build the client and server bundles: `gulp build`
- Watch app/ and src/ for changes and update build/ automagically: `gulp watch`
- Lint everything (We use StandardJS, but you can modify the .eslintrc): `gulp lint`
- Open up the app: `gulp serve`. This will also live reload everything, so don't worry about that.
- Package the app for release: `gulp package`.


### Todo

- [x] App Core Functionality
- [x] Save data to localStorage
- [x] Tie appbar exit button to electron
- [x] Minimize to system tray.
- [ ] Start with OS option.
- [ ] Make sure reducers are pure functions
- [ ] Export to PDF functionality


© 2016 Troy Edwards Jr

[MIT LICENSE](https://opensource.org/licenses/MIT "MIT LICENSE")