const { User, Thought, Reaction } = require('../models');

// Aggregate function to get the number of reactions per thought
const reactionCount = async () => {
  const numberOfReactions = await Reaction.aggregate()
    .count('reactionCount');
  return numberOfReactions;
}

module.exports = {
  // get all thoughts
  async getThoughts(req,res){
    try{
      const thoughts = await Thought.find()
      res.json(thoughts)
    }catch(err){
      res.status(500).json(err);
    }
  },
  // get single thought
  async getSingleThought(req,res){
    try{
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
      .select(-__v);
      if(!thought){
        return res.status(4040).json({ message: 'no thought with that ID'})
      }
      const thoughtObj = {
        thought,
        reactionCount: await reactionCount(),
      };
      res.json(thoughtObj)
    }catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a thought
  async createThought(req,res){
    try{
      const thought = await Thought.create(req.body);
      res.json(thought);
    }catch(err){
      res.status(500).json(err);
    }
  },
  // update a thought
  async updateThought(req,res){
    try{
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought){
        res.status(404).json({ message: 'no thought with that ID'});
      }
      res.json(thought)
    }catch(err){
      res.status(500).json(err);
    }
  },
};