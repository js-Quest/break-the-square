const {User, Thought} = require('../models');

// Aggregate function to get the number of friends
const friendCount = async () => {
  const numberOfFriends = await User.aggregate()
    .count('friendCount');
    console.log(numberOfFriends);
  return numberOfFriends;
}


module.exports = {
  // get all users
  async getUsers(req,res){
    try{
      const users = await User.find();
      res.json(users);
    }catch(err){
      res.status(500).json(err);
    }
  },
  // get single user
  async getSingleUser(req,res){
    try{
      const user = await User.findOne({_id: req.params.userId})
        .select('-__v'); //exclude the -__v field
      if (!user){
        return res.status(404).json.({message: 'no user with that ID'});
      }

      const userObj = {
        user,
        friendCount: await friendCount(),
      };

      res.json(userObj);
    }catch(err){
      res.status(500).json(err);
    }
  },
  // create user
  async createUser(req,res){
    try{
      const user = await User.create(req.body);
      res.json(user);
    }catch(err){
      console.log(err)
      return res.status(500).json(err);
    }
  },
  // Delete user
  async deleteUser(req,res){
    try{
      const user = await User.findOneAndDelete({
        _id: req.params.userId
      });
      if (!user){
        res.status(404).json({message: 'no user with that ID'});
      }
      await Thought.deleteMany({ _id: { $in: user.thoughts }});
      res.json({message: 'user and thoughts deleted'});
    }catch(err){
      res.status(500).json(err);
    }
  },
  // update user
  async updateUser(req,res){
    try{
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!user){
        res.status(404).json({message: 'no user with that ID'});
      }
      res.json(user);
    }catch(err){
      res.status(500).json(err);
    }
  },
  // add friend
  async addFriend(req,res){
    console.log('you are adding a friend');
    console.log(req.body)
    try{
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body }},
        { runValidators: true, new: true}
      );
      if (!user){
        return res.status(404).json({message: 'no friend with that ID'});
      }
      res.json(user);
    }catch(err){
      res.status(500).json(err);
    }
  },
  // remove friend
  async removeFriend(req,res){
    try{
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {$pull: { user: { userId: req.params.userId}}},
        { runValidators: true, new: true }
      );
      if (!user){
        return res.status(404).json({message: 'no friend with that ID'});
      }
      res.json(user);
    }catch(err){
      res.status(500).json(err);
    }
  }
};