'use babel';

import Runner from '../lib/atom-script/runner';

describe('', () => {
  it('Runner object is of type Runner', () => {
      let runner = new Runner();
      expect(runner instanceof Runner).toBeTruthy();
  });
});

describe('', () => {
  it('Runner object has command of echo', () => {
      let runner = new Runner();
      runner.run('echo', ['hello', 'world']);
      parameters = runner.getRunParameters();
      expect(parameters.command).toBe('echo');
  });
});

describe('', () => {
  it('Runner object has command args count of 2', () => {
      let runner = new Runner();
      runner.run('echo', ['hello', 'world']);
      parameters = runner.getRunParameters();
      expect(parameters.args.length).toBe(2);
  });
});

describe('', () => {
  it('Runner object has working dir of ~', () => {
      let runner = new Runner();
      runner.run('echo', ['hello', 'world'], '~');
      parameters = runner.getRunParameters();
      expect(parameters.workingDirectory).toBe('~');
  });
});

describe('', () => {
  it('Runner object has a callback for stdout', () => {
      let runner = new Runner();
      runner.onDidWriteToStdout( (result) => {
        expect(result.message).toBe('hello world\n');
      });
      runner.run('echo', ['hello', 'world'], '~');
  });
});

describe('', () => {
  it('Runner object has a callback for stdout with no working dir', () => {
      let runner = new Runner();
      runner.onDidWriteToStdout( (result) => {
        expect(result.message).toBe('hello world\n');
      });
      runner.run('echo', ['hello', 'world']);
  });
});

describe('', () => {
  it('Runner object has a callback with pwd', () => {
      let runner = new Runner();

      let printResults = false;

      runner.onDidWriteToStdout( (result) => {
        if(printResults) {
          console.log("result stdout: " + JSON.stringify(result));
        };
        expect(result.message).not.toBeNull();
      });

      runner.onDidWriteToStderr( (result) => {
        if(printResults) {
          console.log("result stderr: " + JSON.stringify(result));
        };
      });

      runner.onDidExit( (result) => {
        if(printResult) {
          console.log("result exit: " + JSON.stringify(result));
        };
      });

      runner.onDidNotRun( (result) => {
        if(printResult) {
          console.log("result didnotrun: " + JSON.stringify(result));
        };
      });

      runner.run('env', []);
  });
});
