var express = require('express');
var router = express.Router();

var organizations = [{name:'Walton Band',
  members: ['Scott', 'Robert', 'Gary', 'Gregg', 'Tim', 'Michael', 'Nikki', 'Mitzi']},
  {name:'DigitalCrafts', members:['Zach','Nicolas','Jennifer','Mikayla','Scott','Michael','Alyson','Valerie']},
  {name:'BSA',members:['Zach','Nicolas','Jennifer','Mikayla','Michael','Alyson','Valerie','Eddie']},
  {name:'GSA',members:['Zach','Nicolas','Jennifer','Mikayla','Michael','Alyson','Valerie','Eddie']},
  {name:'Anderson Family', members: ['Scott', 'Nancy', 'Jonathan', 'Sofia', 'Charlie', 'Alexander Beta Fin', 'Gryndle']}];


/* GET home page. */
router.get('/', function(req, res, next) {
  fname = req.query.fname;
  var memberships = findMemberships(organizations, fname);
  console.log (memberships);
  res.render('memberships', {memberships});
});

router.post('/', function(req, res, next) {
  fname = req.body.fname;
  var memberships = findMemberships(organizations, fname);
  res.render('memberships', {memberships});
});

function findMemberships (organizations, fname) {
  // console.log("In findMemberships....")
  // console.log(organizations, fname);
  // organizations is an array of objects each object contains an array of members...
  // Step 1....feed each organization into the filter via map
  // Step 2....search each organization's members using filter
  // Step 3....push the organization name to an array (matching member name)
  // Step 4....return the array of organization names
  var memberships = [];  // the array to be returned

  organizations.map(function(organization){      // Step 1
    var matches = [];
    // console.log("In organizations.map....")
    // console.log(organization);
    matches = organization.members.filter(function(member){  // Step 2
        if(member == fname){
          return(true);
        } else {
          return (false);
        };
      });
    if (matches.length > 0) {
      memberships.push(organization.name);  // Step 3
    };
    return(organization.name);  // for testing
  });

  return(memberships);  // Step 4

};  // function findMemberships

module.exports = router;
