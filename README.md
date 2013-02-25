# grunt-check-modules

[Grunt](https://github.com/cowboy/grunt) plugin for checking that all node_modules are installed and up-to-date.

## Getting Started

Install the module with:

	npm install grunt-check-modules

Then load it from your own `grunt.js` file:

```js
grunt.loadNpmTasks('grunt-check-modules');
```

### grunt 0.3 compability

If you're using grunt 0.3, install the 0.1.0 version of this task:

	npm install grunt-check-modules@0.1.0

## Documentation

This plugin provides a single task: `check-modules`. You should just add it to your default task, like this:

```js
grunt.registerTask('default', ['jshint', 'check-modules']);
```

When you run that default task afterwards, check-modules will verify that all dependencies are installed and up-to-date. If something is missing our outdated, the output will give you details.

The implementation pretty much just calls `npm ls`. If that exits with a non-zero status code, the task will fail and log the details.

## Roadmap

Currently there's nothing planned. Maybe we can come up with other useful checks that could become part of this plugin.

## Contributing

Please use the issue tracker and pull requests.

## License
Copyright (c) 2013 Jörn Zaefferer
Licensed under the MIT license.
