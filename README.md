# A personal website

This clearly doesn't need to be publicly available and open source but it is so everybody can see the crimes against engineering I commit. I mean one of the files is literally named `shimpack.js`.

Anyway if you want to run it on your own machine (or deploy it) for some reason you can do this:

```bash
git clone https://github.com/terrygonguet/site-perso/
cd site-perso
npm install
npm run build
npm start
```

It will start a server on the port from the `PORT` environment variable, defaulting to 3000. You also can export it as a fully static site like so:

```bash
git clone https://github.com/terrygonguet/site-perso/
cd site-perso
npm install
npm run export
```

The files will be in `__sapper__/export`.
