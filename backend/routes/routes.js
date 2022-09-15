const express = require("express");
const router = express.Router();
const User = require("../Schematics/User");
const Post = require("../Schematics/Post");
const { OAuth2Client } = require("google-auth-library");
const Event = require("../Schematics/Event");
let session = require("express-session");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);
// Create Post (update to event post)
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

router.post("/create-post", (req, res, next) => {
  // if (!session.user) {
  //   return res.status(401).send();
  // }
  const post = new Post({
    postBody: req.body.postBody,
    postUser: req.body.username,
    dateAdded: new Date(),
  }).save((err) => {
    if (err) {
      return next(err);
    }
    // res.redirect("/");
    // res.json(post);
  });
});

// Create Event
router.post("/create-event", (req, res, next) => {
  // if (!session.user) {
  //   return res.status(401).send();
  // }
  // console.log(req.body);
  const event = new Event({
    eventTitle: req.body.eventTitle,
    eventDescription: req.body.eventDescription,
    eventCreator: req.body.eventCreator,
    dateCreated: new Date(),
    emailRegistry: req.body.emailRegistry,
    eventAdmins: req.body.eventAdmins,
    eventUpdatePosts: req.body.eventUpdatePosts,
    hostEmail: req.body.hostEmail,
    publicStatus: req.body.publicStatus,
    eventDate: req.body.eventDate,
    eventTime: req.body.eventTime,
  }).save((err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
  // .then(() => {
  User.findOneAndUpdate(
    { username: req.body.hostEmail },
    {
      $inc: { numEvents: +1 },
    },
    function (err, docs) {}
  );
  // });
});

router.get("/retrieve_posts", (req, res) => {
  Event.find({ publicStatus: true }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
router.get("/retrieve_post/:id", (req, res) => {
  Event.findOne({ _id: req.headers.eventid }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
// Sign in with google and create account on site.
router.post("/log-in", async (req, res, done) => {
  // console.log(req.body);
  // console.log(req.body.firstName);
  // console.log(req.body.lastName);
  // console.log(req.body.email);
  // Token
  // console.log(req.body.token);
  // Check if user exists
  User.findOne({ username: req.body.email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      console.log("User Not Found, create the account!");
      const user = new User({
        username: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        numEvents: 0,
      }).save((err) => {
        if (err) {
          return done(err);
        }
      });
      console.log(req.body.email + " Created");
    }
    // will put this here for now, but i think theres a better place for it.
    // const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
    // res.json({ accessToken: accessToken });
    // console.log(accessToken);
    console.log(user);
    session.user = user;
  });
});

// Validate token
//oauth2.googleapis.com/tokeninfo?id_token=XYZ123

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token === null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// router.get("/getPosts", (req, res) => {
//   Post.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     }
//     res.json(result);
//   });
// });
// Wont need this, but maybe get list of admins or something
// or list of events
// router.get("/getUsers", (req, res) => {
//   User.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     }
//     res.json(result);
//   });
// });
// router.get("/", function (req, res) {
//   res.send("Hello world");
// });

https: module.exports = router;
