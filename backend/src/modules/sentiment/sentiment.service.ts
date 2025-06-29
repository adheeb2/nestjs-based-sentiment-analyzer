import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as path from 'path';
import * as util from 'util';
import * as fs from 'fs';

const execPromise = util.promisify(exec);

@Injectable()
export class SentimentService {
  async analyze(text: string): Promise<any> {
    const pythonPath = path.join(__dirname, '../../../../venv/bin/python');

    const scriptPath = path.join(__dirname, '../../../../app/main.py');

    // console.log('CWD:', process.cwd());
    console.log('scriptPAth: ', scriptPath);
    console.log('Resolved script path:', scriptPath);
    console.log('Script exists?', fs.existsSync(scriptPath));

    const command = `${pythonPath} ${JSON.stringify(scriptPath)} ${JSON.stringify(text)}`;
    console.log('Running command:', command);

    try {
      const { stdout, stderr } = await execPromise(command);
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
      return JSON.parse(stdout);
    } catch (error) {
      console.error('Execution error:', error);
      return {
        error: 'Python analysis failed',
        details: error.message,
      };
    }
  }
}
