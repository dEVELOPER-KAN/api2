const passport=require("passport")
const LocalAPIKeyStrategy=require('passport-httpapikey');
let strategy = new LocalAPIKeyStrategy(function(apikey, done) {
    // User.findOne({ apikey: apikey }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }
    //   return done(null, user, { scope: 'all' });
    // });
    if(apikey=="12345")
    return done(null, 'test');
    else
    return done("Unauthorized Access");
   
});
passport.use(strategy);