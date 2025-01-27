# Setup
This site was setup and tested on native Ubuntu 22.04.5 LTS.

Clone the given template with git. Then, check Ruby version with
```ruby --version
```

Might need Ruby build essentials, to be installed with
```
apt-get install ruby-full build-essential
```

When Ruby is installed, install the Ruby Gems from their directory, i.e.,
```
gem install jekyll bundler
```


Serve with
```
bundle exec jekyll serve
```

Clean with
```
bundle exec jekyll clean
```


