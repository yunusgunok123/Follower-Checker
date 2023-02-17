// let people = [];
// for(const node of document.getElementsByClassName(" _ab8y  _ab94 _ab97 _ab9f _ab9k _ab9p _abcm")) people.push(node.innerText)
// people

const followers = require("./followers.json");
const followings = require("./followings.json");

const people = [];
for (const following of followings) {
  let isFollower = false;

  for (const follower of followers) {
    if (following == follower) {
      isFollower = true;
      break;
    }
  }

  if (!isFollower) people.push(following);
}

console.log(people);
