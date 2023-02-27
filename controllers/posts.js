const { Post } = require('../models')

async function create(req, res){
  try{
    req.body.profileId = req.user.profile.id
    const post = await Post.create(req.body)
    res.status(200).json(post)
  }catch(error){
    console.log(error)
    res.status(500).json({err: error})
  }
}

async function update(req, res){
  try {
    let post = await Post.findByPk(req.params.id)
    post.title = req.body.title
    post.text = req.body.text
    post.save()
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({err: error})
  }
}

async function deletePost(req, res){
  try {
    const postRemoved = await Post.destroy(
      {where: {id: req.params.id}}
    )
    res.status(200).json(postRemoved)
  } catch (error) {
    console.log(error)
    res.status(500).json({err: error})
  }
}

module.exports = {
  create,
  delete: deletePost,
  update
}