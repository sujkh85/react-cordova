#React Starter Kit With Cordova

### react-router-webpack-babel-redux
Simple React Starter Kit
[github source](https://github.com/sujkh85/react-router-webpack-babel-redux)

### cordova
web app framework
[cordova](http://cordova.apache.org/)


### To run
* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.

* mac need xcode install

* cordova install

```
sudo npm i cordova -g
```

* cordova add platform ios
```
cordova platform add ios --save
```

* cordova add platform android
```
cordova platform add android --save
```

* Then install the dependencies:

```
npm i
```

* Run development server:

```
npm run start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### To build the production for cordova ios
```
npm run ibuild
```

### To build the production for cordova android
```
npm run abuild
```

### show emulate ios
```
npm run iemul
```

### show emulate android
```
npm run aemul
```

cordova emulate more Information(ios and android)

(cordova)[http://cordova.apache.org/docs/en/latest/guide/cli/index.html]
