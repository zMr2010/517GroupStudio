var posts=["2024/06/30/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Index","link":"https://blog.anheyu.com/","descr":"第一任团长","siteshot":"https://cdn.luogu.com.cn/upload/usericon/558099.png","color":"vip","tag":"始皇"},{"name":"wsq127","link":"https://blog.anheyu.com/","descr":"第二任团长，谥号荣","siteshot":"https://cdn.luogu.com.cn/upload/usericon/743352.png","color":"vip","tag":"二世"},{"name":"jdt1010","link":"https://blog.anheyu.com/","descr":"第三任团长，谥号昭","siteshot":"https://cdn.luogu.com.cn/upload/usericon/736652.png","color":"vip","tag":"三世"},{"name":"sxr1023","link":"https://blog.anheyu.com/","descr":"第四任团长，谥号夸","siteshot":"https://cdn.luogu.com.cn/upload/usericon/743352.png","color":"vip","tag":"四世"},{"name":"Xwty","link":"https://blog.anheyu.com/","descr":"第五任团长，谥号桓","siteshot":"https://cdn.luogu.com.cn/upload/usericon/736652.png","color":"vip","tag":"五世"},{"name":"yeyanpro","link":"https://blog.anheyu.com/","descr":"第任六团长，在任","siteshot":"https://cdn.luogu.com.cn/upload/usericon/743352.png","color":"vip","tag":"六世"}];
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