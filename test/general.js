var assert = require('assert');
var exec = require('child_process').exec;
var fs = require('fs');

var virus = require(__dirname + '/../app');
describe('General testing', function(){
    describe('Structure test', function(){
        it('Should contain the EICAR signature file.', function(){
            assert.equal(virus, 'X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*');
        });
    });

    describe('virus.txt testing', function(){
        it('Should contain the EICAR signature file.', function(){
            assert.equal(fs.readFileSync(__dirname + '/../virus.txt').toString().split('\n')[0], 'X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*');
        });
    });

    describe('Detection', function(){
        it('ClamAv should detect it as beeing a virus.', function(done){
            this.timeout(20000);

            exec('clamscan -r ' + __dirname + '/../', function(err, stdout, stderr){
                if(err)
                    throw err;

                assert.ok(stdout.indexOf('Eicar-Test-Signature FOUND') !== -1);
                done();
            });
        });
    });
});
