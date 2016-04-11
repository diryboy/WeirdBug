# Weird Bug
The result from Task Runner Explorer is different.

## Steps to reproduce

1. Clone this repo
1. Open the solution file in VS, maybe you need the Node.js Tools for VS extension installed
1. Run `npm install` or right click the npm node and choose `Install Missing npm Packages`
1. Run `gulp` from cmd or hit <kbd>Ctrl</kbd> + <kbd>F5</kbd> in VS
1. Bring up Task Runner Explorer
1. Right click the `default` task from Task Runner Explorer and choose `Run`
1. Compare `out_server.js` and `out_gulp.js`

## Expected

Two output file should be identical.
