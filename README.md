# How to run the app
1. from root folder go to homepage folder, install node module, then start the server:
```console
cd homepage
```

```console
npm install
```

```console
npm start
```
2. back to root folder then do the same step with account page:
```console
cd account
```

```console
npm install
```

```console
npm start
```

#Explanation
On the root folder, there is two react project as microfrontend, one is the account feature, one is the homepage feature.
The homepage feature have two component (Header and Footer) that being exposed to account microfrontend via webpack so if you navigate to account feature you can see the same Header and Footer from the homepage.
