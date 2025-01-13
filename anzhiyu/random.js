var posts=["posts/4fceb4dd.html","posts/4a17b156.html","posts/6e84c24f.html","posts/ba2a88a8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"然晨赫","link":"https://blog.x1aoq1u.cn/","avatar":"https://bu.dusays.com/2024/12/18/67625e453c442.png","descr":"言念君子，温其如玉","siteshot":"https://bu.dusays.com/2025/01/13/6784ad1dd12f3.webp","color":"vip","tag":"博主"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebc5158dc.jpg"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情"},{"name":"别亦难","link":"https://lazyingman.cn","avatar":"https://bu.dusays.com/2023/06/23/64959cf745a4d.png","descr":"准时不定期更新","siteshot":"https://bu.dusays.com/2023/06/28/649c105e00a4f.png"},{"name":"琅環书生","descr":"无远弗届，皆有可能","link":"https://www.zlog.us.kg","avatar":"https://images.zlog.us.kg/hexo/琅環书生头像.webp","siteshot":"https://images.zlog.us.kg/hexo/琅環书生站点.webp"},{"name":"Pupper","link":"https://pupper.cn","avatar":"https://img.pupper.cn/img/202307151348675.png","descr":"记录学习、生活中的点点滴滴~","siteshot":"https://img.pupper.cn/img/202307181549343.png"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp"},{"name":"小旦","link":"https://satera.cn","avatar":"https://satera.cn/img/logo.png","descr":"SNTube Studio","siteshot":"https://bu.dusays.com/2023/09/16/65052aa7c13c9.png"},{"name":"GanSer","link":"https://www.gan1ser.top/","avatar":"https://pic.gan1ser.top/avatar/17.webp/avatar","descr":"紫箫吟断，素笺恨切","siteshot":"https://pic.imgdb.cn/item/642e735fa682492fccc516df.png"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640","descr":"分享网络安全与科技生活","siteshot":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640"},{"name":"一粒微尘","link":"https://blog.667408.xyz","avatar":"https://blog.667408.xyz/favicon.ico","descr":"撷光以望，纳星于瞳"},{"name":"上发条的树","link":"https://www.wuxx.top/","avatar":"https://www.wuxx.top/images/portrait.png","descr":"不会骑行的程序员不是一个好的摄影师！"},{"name":"东方月初","link":"https://hexo.200038.xyz/","avatar":"https://serv.200038.xyz/2024/09/19/040857.webp","descr":"东方月初，涂山红红"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };