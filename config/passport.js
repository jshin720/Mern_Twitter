const Jwtstrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model('users');
const keys = require('./keys');

const option = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
option.secretOrKey = keys.secretOrkey;

module.exports = passport => {
  passport.use(new Jwtstrategy(options, (jwt_payload, done) => {
    console.log(jwt_payload);
    done();
  }))
}