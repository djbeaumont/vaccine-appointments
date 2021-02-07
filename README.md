# vaccine-appointments

## Development

Install node for your mac:

```bash
brew install nvm
nvm install 12
nvm alias 12 default
nvm use
```

Install dependencies:
```bash
npm i
```

Create the database:
```bash
sqlite3 db.sqlite < db.sql
```

Run the server in development mode:
```bash
npm run dev
```

## Deploying to heroku

Add the git remote (assumes ownership of 'vax-confirmation'):
```bash
heroku git:remote -a vax-confirmation
```

Push local master to heroku and watch it build:
```bash
git push heroku master
```
