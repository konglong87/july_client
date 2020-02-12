const baseAPI = 'https://api.july.yejiefeng.com/api/v1/'

module.exports = {
  baseAPI, // 根接口
  labelAPI: baseAPI + "label/", // 标签接口
  topicAPI: baseAPI + "topic/", // 话题接口
  holeAPI: baseAPI + "hole/", // 树洞接口
  userAPI: baseAPI + "user/", // 用户接口
  followingAPI: baseAPI + "following/", // 关注接口
  commentAPI: baseAPI + "comment/", // 评论接口
  starAPI: baseAPI + "star/" // 收藏接口
}