Heroku buildpack: PhantomJS
=======================

This is a [Heroku buildpack](http://devcenter.heroku.com/articles/buildpacks) of PhantomJS(http://phantomjs.org).

Usage
-----

Example usage:

```shell
$ heroku create --stack cedar --buildpack https://github.com/RamiroPinol/heroku-buildpack-phantomjs-2.5-beta.git

# or if your app is already created:
$ heroku buildpacks:add https://github.com/RamiroPinol/heroku-buildpack-phantomjs-2.5-beta

$ git push heroku master
```
