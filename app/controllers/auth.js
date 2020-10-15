var express = require("express"),
  router = express.Router(),
  db = require("../models"),
  jwtSecret = require("../db/config").jwtSecret;

module.exports = function(app) {
  app.use("/auth", router);
};

router.get("/me", function(req, res) {
  db.User.findOne({
    where: {
      id: req.user.id
    }
  }).then(function(objU) {
    if (objU.isActive) {
     const queryString = `select p.name, p.id from (
      select p.name as name, p.id as id
      from mercury.auth_permission p
      join mercury.auth_user_user_permissions up on up.permission_id = p.id
      where up.user_id = ${objU.id}
      union
      select p.name as name, p.id as id
      from mercury.auth_permission p
      join mercury.auth_group_permissions gp on gp.permission_id = p.id
      join mercury.auth_user_groups ug on ug.group_id = gp.group_id
      where ug.user_id = ${objU.id}) as p group by p.id;`;
      db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT })
      .then(
        function(permissions){
          const isCorp = objU.NamedUser ? true : false;
          const corporateAccount = objU.NamedUser;
          const userComplete = Object.assign(
            { isCorp, corporateAccount },
            req.session.user,
            req.user,
            {permissions}
          );
          res.send(userComplete);
        }
      );      
    } else {
      req.session.reset();
      return res.send({ status: "logout" });
    }
  });
});

router.get("/user-group", function(req, res) {
  db.User.findOne({
    where: {
      id: req.user.id
    },
    include: [
      {
        model: db.Group
      },
      {
        model: db.UserProfile
      }
    ]
  }).then(function(user) {
    res.send(user);
  });
});

router.post("/login", function(req, res) {
  var body = req.body;

  db.User.findOne({
    where: {
      username: req.body.username
    },
    include: [
      {
        model: db.CorporateAccount,
        as: "NamedUser"
      },
      {
        model: db.Agent,
        limit: 1,
        attributes: ["id"],
        include: [
          {
            model: db.Networks,
            attributes: ["id"],
            through: {
              model: db.NetworkAgent,
              attributes: ["preference_level"]
            }
          }
        ]
      },
      {
        model: db.Group
      },
      {
        model: db.AuthPermission
      }
    ]
  }).then(function(user) {
    if (user == null) {
      return res.send("Username or password incorrect");
    } else {
      db.User.validate(body.username, body.password).then(function(validated) {
        const isCorp = user.NamedUser ? true : false;
        isAgent = false;
        isUser = true;
        agent_id = user.Agents && user.Agents.length ? user.Agents[0].id : 0;
        if (agent_id > 0) {
          isAgent = true;
          isUser = false;
        }
        req.session.user = {
          id: user.id,
          username: req.body.username,
          username: req.body.username,
          agentId: agent_id,
          isAgent,
          isUser,
          isCorp
        };

        if (validated) {
          db.User.update(
            { isActive: true },
            {
              where: { id: user.id }
            }
          );
          res.send({
            token: jwt.sign(
              {
                id: user.id,
                username: req.body.username,
                is_superuser: user.isSuperuser,
                userGroup: user.Groups,
                userPermission: user.AuthPermissions,
                agentId:
                  user.Agents && user.Agents.length ? user.Agents[0].id : 0,
                network:
                  user.Agents && user.Agents.length
                    ? user.Agents[0].Networks[0]
                    : 0
              },
              jwtSecret
            ),
            user: {
              id: user.id,
              username: req.body.username,
              is_superuser: user.isSuperuser,
              userGroup: user.Groups,
              userPermission: user.AuthPermissions,
              agentId:
                user.Agents && user.Agents.length ? user.Agents[0].id : 0,
              network:
                user.Agents && user.Agents.length ? user.Agents[0].Networks : 0
            }
          });
        } else {
          return res.send("Username or password incorrect");
          //return res.status(401).end('Username or password incorrect');
        }
      });
    }
  });
});

router.get("/logout", function(req, res) {
  req.session.reset();
  res.redirect('/#/login');
});

router.get("/user-group", function(req, res) {
  db.User.findOne({
    where: {
      id: req.user.id
    },
    include: [
      {
        model: db.Group
      },
      {
        model: db.UserProfile
      }
    ]
  }).then(function(user) {
    res.send(user);
  });
});

function authenticate(req, res, next) {
  var body = req.body;

  if (!body.username || !body.password) {
    return res.status(400).end("Must provide username or password");
  } else {
    db.User.validate(body.username, body.password).then(function(validated) {
      if (validated) {
        next();
      } else {
        return res.status(401).end("Username or password incorrect");
      }
    });
  }
  // next();
}
