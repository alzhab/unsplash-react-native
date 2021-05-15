#After start

- android local properties
  - in android folder create file local.properties and write
    `sdk.dir = /Users/macbook/Library/Android/sdk`
- run command **`npm run clear`**

#Config
####Colors
in app.config.json

```
colors: {
  PRIMARY: IColor
  BG: IColor
  TEXT: IColor
  BORDER: IColor
  OTHER: IColor
}

```

####Navigation
in app.config.json

```
navigation: IRoute[]
```

after write routes just run command

```
npm run gen:navigation
```
this command will automatically generate navigations and modules
