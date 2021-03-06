# insomnia-wsl-integrator
## What is this script?
Nowadays I am working with WSL2 and I am running some APIs on it. Everytime when the Windows reboots IP adress of WSL2 is changing. I've tried to set Static IP adress for WSL but I couldn't do it 😥. So, every morning I've changed the IP adress in my API Client, which is Insomnia. I created this script to solve this annoying problem.

## How does it work?
Simply it adds a new line to hosts file like this: "WSL_IP your_host_name".
After that add your host name to your API Client environment variable, problem is gone!

## Usage
Usage:
```bash
npm start "your_host_name"
```
Run this command with admin privileges (because normal users can't edit hosts file) and pass host name as argument. 
