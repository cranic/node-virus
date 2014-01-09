#### [![Build Status](https://travis-ci.org/cranic/node-virus.png)](https://travis-ci.org/cranic/node-virus) ![Dependencies Status](https://david-dm.org/cranic/node-virus.png) [![Gittip](http://img.shields.io/gittip/cranic.png)](https://www.gittip.com/cranic)

[![NPM Status](https://nodei.co/npm/virus.png?downloads=true)](http://npmjs.org/package/virus)

## Virus

This package contains the [EICAR Signature test string](http://www.eicar.org/86-0-Intended-use.html),
it's harmless but used by most antivirus to trigger and test the alert system
by detecting this signature as a virus.

### Wikipedia

The EICAR Standard Anti-Virus Test File or EICAR test file is a computer file that
was developed by the European Institute for Computer Antivirus Research (EICAR)
and Computer Antivirus Research Organization (CARO), to test the response of
computer antivirus (AV) programs. Instead of using real malware, which could do
real damage, this test file allows people to test anti-virus software without
having to use a real computer virus.

Anti-virus programmers set the EICAR string as a verified virus, similar to
other identified signatures. A compliant virus scanner, when detecting the file,
will respond in exactly the same manner as if it found a harmful virus. Not all
virus scanners are compliant, and may not detect the file even when they are
correctly configured.

The use of the EICAR test string can be more versatile than straightforward
detection: a file containing the EICAR test string can be compressed or
archived, and then the antivirus software can be run to see whether it can
detect the test string in the compressed file.

__Font:__ [http://en.wikipedia.org/wiki/EICAR_test_file](http://en.wikipedia.org/wiki/EICAR_test_file)

### Testing

If you have an anti-virus installed in your computer, it should alert you about
EICAR Standard Signature Test as soon as you download this package.

To test if this package is working you need to have `clamav` installed, if you
don't have, fallow this steps:

```bash
sudo apt-get install clamav && sudo freshclam -v
```

After that you can run the test suit:

```bash
git clone https://github.com/cranic/node-virus ./virus
cd virus && npm install && make test
```

### License

(The MIT License)

Copyright (c) 2009-2013 Cranic Tecnologia e Informática LTDA <contato@cranic.com.br>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
