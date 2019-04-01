# Trellight

## Requirements

- Ruby 2.5.3+
- Node 10.15.3+

## Installation

```
git clone git@github.com:suruja/trellight.git
cd trellight
bundle install
bundle exec rails db:setup
gem install foreman
cp Procfile.dev.example Procfile.dev
```

You may modify the file `Procfile.dev` to match your system needs.

### Usage

```
foreman start -f Procfile.dev
```

### Test

#### Server-side

```
bundle exec rails test
```

#### Client-side

```
yarn test
```
