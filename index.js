const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const host_name = process.argv[2];

const main = async () => {
  const getIP = async () => {
    const { stdout, stderr } = await exec('wsl hostname -I');
    if (stderr) throw stderr
    return stdout
  }
  const wsl_ip = (await getIP()).split('\n')[0];
  const hosts = path.join('C:\\Windows\\System32\\drivers\\etc\\hosts');
  const localString = `\n${wsl_ip} ${host_name}`;
  const hosts_text = fs.appendFileSync(hosts, localString, 'utf-8');
}
main()
