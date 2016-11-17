document.querySelector('#signin #weibo_login').addEventListener('click', function() {
  console.log('weibo login');
  // let uri = 'http://www.chenhf.com/mindynode/auth.html';
  // window.location = `https://api.weibo.com/oauth2/authorize?client_id=2977966833&redirect_uri=${uri}`;
  WB2.login(function(data) {
    console.log(data)
  })
});

document.querySelector('#signin #qq_login').addEventListener('click', function() {
  console.log('qq login');  
  let opts = {
    appId: '100387802',
    redirectURI: 'http://a.qingting.fm/user/redirect.html'
  };
  QC.Login().showPopup(opts);
})