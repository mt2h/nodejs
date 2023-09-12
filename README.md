# NODE

## Install 

```bash
sudo snap install node --classic --channel 12/stable
node -v
npm -v
```

## Initialize a Project

```bash
npm init
```

![Initialize a Project](./img/1.png)

```bash
npm install validator@10.8.0
npm uninstall validator
npm install chalk@2.4.1

node app.js

sudo npm install nodemon@1.18.5 -g
nodemon app.js
```

## Arguments

Use yargs

```bash
npm i yargs@12.0.2
node app.js --help
node app.js --version
node app.js add --title="Shopping lit"
```

## requests and web servers

```bash
npm i request@2.88.0
npm i express@4.16.4
npm i hbs@4.0.1
```

## Debugging

Add debugger in the code

![Debugging](./img/2.png)

Execute inspect

![Debugging](./img/3.png)

Open Chrome on chrome://inspect/

![Debugging](./img/4.png)

Press inspect

![Debugging](./img/5.png)

Press play buttom

![Debugging](./img/5.png)

Console

![Debugging](./img/6.png)
![Debugging](./img/7.png)

## Call Stack: Callback Queue and Event Loop

Example 1:

![Call Stack](./img/8.png)
![Call Stack](./img/9.png)
![Call Stack](./img/10.png)

Example 2:

![Call Stack](./img/11.png)
![Call Stack](./img/12.png)
![Call Stack](./img/13.png)
![Call Stack](./img/14.png)
![Call Stack](./img/15.png)
![Call Stack](./img/16.png)

Example 3:

![Call Stack](./img/17.png)
![Call Stack](./img/18.png)
![Call Stack](./img/19.png)
![Call Stack](./img/20.png)
![Call Stack](./img/21.png)
![Call Stack](./img/22.png)
![Call Stack](./img/23.png)
![Call Stack](./img/24.png)
![Call Stack](./img/25.png)
![Call Stack](./img/26.png)
![Call Stack](./img/27.png)
![Call Stack](./img/28.png)
![Call Stack](./img/29.png)