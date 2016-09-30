# node-where
Locate an executable on Linux or Windows using OS-specific commandline tools.  
- Unix: [which/1](https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwid2O3IvbPPAhXmL8AKHRhZBmEQFggcMAA&url=https%3A%2F%2Flinux.die.net%2Fman%2F1%2Fwhich&usg=AFQjCNFFN25Y4iMiCCbIL66_LrmxAK5P2A&sig2=BCi2k_l1F-kIrC6132g3yA&bvm=bv.134052249,bs.1,d.bGs)
- Windows: [where](http://ss64.com/nt/where.html)

## Usage
To install, execute ```npm install --save node-where``` on the command line.

### Example
```
const where = require('node-where');

function printCallback(err, result) {
    if (err) {
        console.error('err:', err, err.stack);
    }

    console.log('result:', result);
};

// prints a single node executable
where('node', printCallback);

// prints an array and multiple node executables if multiple are available
where('node', { all: true }, printCallback);
```

## Tests
Are located in the folder _./test_ and are written using [node-tap](http://www.node-tap.org/).  
To execute
- only the tests, run ```npm test --silent```
- tests and pretty coverage (with lcov inside the _./coverage_ folder), run ```npm run cover --silent```

### Example report 
```
> npm test --silent -- --cov
test/current_system.js ................................ 6/6 5s
test/simulate_windows_and_linux.js .................. 17/17
total ............................................... 23/23

  23 passing (5s)

  ok
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
 where.js |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
```

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
