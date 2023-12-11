# A personal website

This clearly doesn't need to be publicly available and open source but it is so everybody can see the crimes against engineering I commit.

Anyway if you want to run it on your own machine (or deploy it) for some reason you can do this:

```bash
git clone https://github.com/terrygonguet/site-perso/
cd site-perso
npm install
npm run build
npm start
```

It will start a server on the port from the `PORT` environment variable, defaulting to 5173. It builds a fully static website, the files will be in the `./build` folder.
