# Setup
This site is setup and tested on native Ubuntu 22.04.5 LTS. and by GitHub Actions.

Clone the given template with git. Then, check Ruby version with
```
ruby --version
```

Might need Ruby build essentials, to be installed with
```
apt-get install ruby-full build-essential
```

When Ruby is installed, install the Ruby Gems from their directory, i.e.,
```
gem install jekyll bundler
```

Build with
```
bundle exec jekyll build
```
This is crucial for building the search index.

Serve with
```
bundle exec jekyll serve
```

Clean with
```
bundle exec jekyll clean
```

# License
The template for this design is based on Beautiful Jekyll (https://github.com/daattali/beautiful-jekyll) by Dean Attali (https://deanattali.com/).
It is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions. This copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


