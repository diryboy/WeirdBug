# Weird Bug
The result from Task Runner Explorer is different.

## Steps to reproduce

1. Clone this repo
1. Open the solution file in VS
1. Right click the npm node and choose `Install Missing npm Packages`
1. <kbd>ctrl</kbd> + <kbd>F5</kbd>
1. Bring up Task Runner Explorer
1. Right click the `default` task from Task Runner Explorer and choose `Run`
1. Compare `out_server.js` and `out_gulp.js`

## Expected

Two output file should be identical.
