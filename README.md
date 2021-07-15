# DoJo Blog


## Project setup
```
npm install
```

### Run the json-server to have access to data via API endpoints
```
npx json-server --watch _data/db.json
```

### 

### compile styles after updates to _sass/sass_styles.scss (requires sass-cli)
```
sass --no-source-map _sass/sass-styles.scss:src/assets/styles.css
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```