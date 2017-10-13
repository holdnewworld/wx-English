/**
 * Created by Administrator on 2017/6/2.
 */
let baseDomain = 'http://supin.lanzhangxiu.cn'
let serviceUrl = {
  register: baseDomain + '/api/public/register',
  login: baseDomain + '/api/public/login',
  getGradeLists: baseDomain + '/api/public/getGradeLists',
  getMechanismLists: baseDomain + '/api/public/getMechanismLists',
  findUserPassword: baseDomain + '/api/public/findUserPassword',
  sendMobileCode: baseDomain + '/api/public/sendMobileCode',
  uploadPhotos: baseDomain + '/api/public/uploadPhotos',
  encyclopediaIndex: baseDomain + '/api/encyclopedia/encyclopediaIndex',
  encyclopediaDetail: baseDomain + '/api/encyclopedia/encyclopediaDetail',
  encyclopediaListsByCategory: baseDomain + '/api/encyclopedia/encyclopediaListsByCategory',
  weekRecommendByHuiben: baseDomain + '/api/vivid/weekRecommendByHuiben',
  huibenListsByCategory: baseDomain + '/api/vivid/huibenListsByCategory',
  huibenCategoryLists: baseDomain + '/api/vivid/huibenCategoryLists',
  huibenDetail: baseDomain + '/api/vivid/huibenDetail',
  cikaCategoryLists: baseDomain + '/api/vivid/cikaCategoryLists',
  cikaLists: baseDomain + '/api/vivid/cikaLists',
  huibenListsByCategoryZhuti: baseDomain + '/api/vivid/huibenListsByCategoryZhuti',
  subjectenglishCategoryLists: baseDomain + '/api/subjectenglish/subjectenglishCategoryLists',
  subjectenglishGradeLists: baseDomain + '/api/subjectenglish/subjectenglishGradeLists',
  subjectenglishLists: baseDomain + '/api/subjectenglish/subjectenglishLists',
  subjectenglishDetail: baseDomain + '/api/subjectenglish/subjectenglishDetail',
  subjectenglishDetailByTing: baseDomain + '/api/subjectenglish/subjectenglishDetailByTing',
  subjectenglishDetailByBei: baseDomain + '/api/subjectenglish/subjectenglishDetailByBei',
  subjectenglishDetailByShuo: baseDomain + '/api/subjectenglish/subjectenglishDetailByShuo',
  subjectenglishDetailByDu: baseDomain + '/api/subjectenglish/subjectenglishDetailByDu',
  supinTrans: baseDomain + '/api/supin/supinTrans',
  baiduSpeech: baseDomain + '/api/supin/baiduSpeech',
  baiduTransapiByZhToEn: baseDomain + '/api/supin/baiduTransapiByZhToEn',
  baiduTransapiByEnToZh: baseDomain + '/api/supin/baiduTransapiByEnToZh',
  userCollegeHandle: baseDomain + '/api/vivid/userCollegeHandle',
  userCollegeLists: baseDomain + '/api/user/userCollegeLists',
  getGonggaoLists: baseDomain + '/api/index/getGonggaoLists'
}
module.exports = serviceUrl
