const Main = document.querySelector('.Main');
const MainBodyHome = document.querySelector('.MainBodyHome');
const VideoCartPlay = document.querySelector('.VideoCartPlay');
const MainBody = document.querySelector('.MainBody');
const NavBarleft = document.querySelector('.NavBarleft');
const FooterNavBar = document.querySelector('.FooterNavBar');


//NavBar
const NavBarSearchBtn = document.querySelector('.NavBarRightSearch');
const NavBarProfileBtn = document.querySelector('.NavBarRightProfile');
const NavBarMdlSearchInp = document.querySelector('.NavBarMdlSearchInp');
const SearchInp = document.querySelector('.SearchInp');
const MainBodySearch = document.querySelector('.MainBodySearch');

let SearchWhereIm;

let Videos = [
  {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/IMG-20230831-WA0000.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Express Js Pro player',
    ChannelName: 'Bro',
    VidClick: '50',
    VidUpDate: '1 Jan 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '10',
      DisLikes: '20',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'content',
    }
  },
  {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/iV/ProfilePic.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Node.js Basics',
    ChannelName: 'Coder123',
    VidClick: '150',
    VidUpDate: '15 Feb 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '8',
      DisLikes: '5',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'content',
    }
  },
  {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/iV/ProfilePic.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Web Development Journey',
    ChannelName: 'WebWizard',
    VidClick: '120',
    VidUpDate: '10 Mar 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '15',
      DisLikes: '3',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'content',
    }
  },
  {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/iV/ProfilePic.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Python Programming Tips',
    ChannelName: 'Pythonista',
    VidClick: '75',
    VidUpDate: '5 Apr 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '12',
      DisLikes: '7',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'content',
    }
  },
  {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/iV/ProfilePic.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Machine Learning Fundamentals',
    ChannelName: 'MLMaster',
    VidClick: '200',
    VidUpDate: '20 May 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '25',
      DisLikes: '2',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'content',
    }
  },
];


function VidL(Data, i) {

  let VideoCart = `
  <div class="VideoCartUpPart VideoCartUpPart${i}">
         <div class="Thumbnail" onclick="RunVidonClick(${Data,i})">
           <img src="${Data.ThumImg}" alt="">
         </div>
          
          <div class="VideoCartLower">
            <div class="VideoProfile">
            <img class="VideoProfileImg" src="${Data.ChannelProfImg}" alt="">
            </div>
            <div class="VideoTitle">
              <div class="VideoTitleUpper">
                ${Data.VidTitle}
              </div>
              <div class="VideoTitleLower">
              <div class="ChannelName">
              ${Data.ChannelName}
            </div>
            •
            <div class="Clicks">
              ${Data.VidClick} Clicks
            </div>
            •
            <div class="VideoTimeAgo">
              ${Data.VidUpDate}
            </div>
              </div>
            </div>
          </div>
          </div>
          
          <div class="VideoCartLowPart${i} VideoCartLowPart">
          </div>
        `;

  let div = document.createElement('div');
  div.innerHTML = VideoCart;
  div.classList.add("VideoCart", `VideoCart${i}`);
  if (MainBodySearch.style.display == 'flex') {
    MainBodySearch.appendChild(div);
  } else {
    MainBodyHome.appendChild(div);
  }
}


document.addEventListener('DOMContentLoaded', function VidLoader() {
  Videos.forEach(VidL)
});




let VidPlgi = '';

function RunVidonClick(i) {
  document.querySelector(`.VideoCartUpPart${i}`).style.display = "none";



  if (VidPlgi !== '') {
    document.querySelector(`.VideoCartUpPart${VidPlgi}`).style.display = "block";

    document.querySelector(`.VideoCartLowPart${VidPlgi}`).innerHTML = "";

  }

  VideoCartPlay.style.display = "block";

  VidPlgi = i;

  let Data = Videos[i];
  let VidCartPlay = `
          <div class="VidPlay">
           <video class="VidPlayVideo${i}" src="${Data.VideoCartPlay.VidUrl}" width="100%" controls></video>
          </div>
          <div class="VidDiscription">
            <div class="VidDisTitle">
              <p>${Data.VidTitle}</p>
            </div>
            <div class="VidDisActBar">
              <div class="VidDisActBarLikes">
                <iconify-icon icon="mdi:like-outline" width="25"></iconify-icon>
                <span>${Data.VideoCartPlay.VidLikes} Likes</span>
              </div>
              <div class="VidDisActBarDisLikes">
                <iconify-icon icon="mdi:dislike-outline" width="25"></iconify-icon>
                <span>${Data.VideoCartPlay.DisLikes} Dislikes</span>
              </div>
              <div class="VidDisActBarShare">
                <iconify-icon icon="mdi:share" width="30"></iconify-icon>
                <span>share</span>
  
              </div>
              <div class="VidDisActBarSave">
                <iconify-icon icon="ic:outline-book" width="30"></iconify-icon>
                <span>save</span>
              </div>
            </div>
  
            <div class="VidDisSubsribe">
              <div class="VidDisProfile">
                <img class="VideoProfileImg" src="/iV/ProfilePic.jpg" alt="">
              </div>
              <div class="VidDisChannelName">
                ${Data.ChannelName}
              </div>
              <div class="VidDisSubsribeBtn">
                <span>Subsribe</span>
              </div>
            </div>
            <div class="VidDisInfo">
              <div class="VidDisClicks">
                ${Data.VidClick}
              </div>
              <div class="VidDisUploadDate">
                ${Data.VidUpDate}
              </div>
            </div>
            <div class="VidDisContant">
             ${Data.VideoCartPlay.Discription}
            </div>
          </div>
        `;

  let VideoCart = document.querySelector(`.VideoCartLowPart${i}`);
  VideoCart.style.height = '100%';
  let div = document.createElement('div');
  div.innerHTML = VidCartPlay;
  div.classList.add("VidCartPlay");
  document.querySelector(`.VideoCartLowPart${i}`).appendChild(div);


  const targetElement = document.querySelector(`.VidPlayVideo${i}`);

  targetElement.scrollIntoView({ behavior: 'smooth' });
};


NavBarleft.addEventListener('click', function(event) {
  if (MainBodyHome.style.display = "none") {
    MainBodyHome.style.display = "block";
    VideoCartPlay.style.display = "none";
  };
});




/* FooterNavBarleft */


const FooterNavBarleftBtn = document.querySelector('.FooterNavBarleft');
const FooterNavBarMiddleBtn = document.querySelector('.FooterNavBarMiddle');
const FooterNavBarRightBtn = document.querySelector('.FooterNavBarRight');

const MainBodyKnldge = document.querySelector('.MainBodyKnldge');
const MainBodyBook = document.querySelector('.MainBodyBook');


FooterNavBarleftBtn.addEventListener('click', function() {
  if (SearchWhereIm == 'Home') {
    MainBodyHome.style.display = 'none';
    MainBodyKnldge.style.display = 'none';
    MainBodyBook.style.display = 'none';
    MainBodySearch.style.display = 'flex';
  } else {
    MainBodyHome.style.display = 'block';
    MainBodyKnldge.style.display = 'none';
    MainBodyBook.style.display = 'none';
    MainBodySearch.style.display = 'none';
  };
  FooterNavBarleftBtn.style.marginTop = '-8px';
  FooterNavBarMiddleBtn.style.marginTop = '';
  FooterNavBarRightBtn.style.marginTop = '';
});

function RToHome() {
  if (MainBodySearch.style.display !== 'none') {
    MainBodyHome.style.display = 'block';
    MainBodySearch.style.display = 'none';
    SearchWhereIm = '';
    SearchInp.value = '';
    NavBarMdlSearchInp.style.display = 'none';
  }

}
FooterNavBarleftBtn.addEventListener('dblclick', RToHome)


FooterNavBarMiddleBtn.addEventListener('click', function() {
  if (SearchWhereIm == 'Heart') {
    MainBodyHome.style.display = 'none';
    MainBodyKnldge.style.display = 'none';
    MainBodyBook.style.display = 'none';

    MainBodySearch.style.display = 'flex';
  } else {
    MainBodyHome.style.display = 'none';
    MainBodyKnldge.style.display = 'block';
    MainBodyBook.style.display = 'none';
    MainBodySearch.style.display = 'none';
  };
  FooterNavBarleftBtn.style.marginTop = '';
  FooterNavBarMiddleBtn.style.marginTop = '-7px';
  FooterNavBarRightBtn.style.marginTop = '';

  KnldgeNotification.innerHTML = '';
  NotificationVids.forEach(VidNotificationDsply);
});

FooterNavBarMiddleBtn.addEventListener('dblclick', function() {
  if (MainBodySearch.style.display !== 'none') {
    MainBodyKnldge.style.display = 'block';
    MainBodySearch.style.display = 'none';
    SearchWhereIm = '';
    SearchInp.value = '';
    NavBarMdlSearchInp.style.display = 'none';
  }

});
FooterNavBarRightBtn.addEventListener('click', function() {
  if (SearchWhereIm == 'Book') {
    MainBodyHome.style.display = 'none';
    MainBodyKnldge.style.display = 'none';
    MainBodyBook.style.display = 'none';

    MainBodySearch.style.display = 'flex';
    Reverse++;
  } else {
    MainBodyHome.style.display = 'none';
    MainBodyKnldge.style.display = 'none';
    MainBodyBook.style.display = 'block';
    MainBodySearch.style.display = 'none';
  }
  FooterNavBarleftBtn.style.marginTop = '';
  FooterNavBarMiddleBtn.style.marginTop = '';
  FooterNavBarRightBtn.style.marginTop = '-7px';
});

FooterNavBarRightBtn.addEventListener('dblclick', function() {
  if (MainBodySearch.style.display !== 'none')
  {
    MainBodyBook.style.display = 'block';
    MainBodySearch.style.display = 'none';
    SearchWhereIm = '';
    SearchInp.value = '';
    NavBarMdlSearchInp.style.display = 'none';
  }
});


//NavBar Search 



NavBarSearchBtn.addEventListener('click', SearchSytm);

let searchData;


function SearchSytm() {

  if (NavBarMdlSearchInp.style.display !== 'flex') {
    NavBarMdlSearchInp.style.display = 'flex';
  } else if (SearchInp.value !== '') {
    MainBodySearch.innerHTML = '';
    const searchText = SearchInp.value;
    const searchResults = searchVideos(searchText);

    searchData = searchResults;
    if (searchResults.length == 0) {
      let h4 = document.createElement('h4');
      h4.innerHTML = 'Search Result Not Found';
      h4.classList.add('Resulth1');
      MainBodySearch.appendChild(h4);
      MainBodySearch.style.display = 'flex';
    } else {
      SearchPage(searchResults);
    }

    if (MainBodyHome.style.display !== 'none') {
      SearchWhereIm = 'Home';
    } else if (MainBodyKnldge.style.display !== 'none') {
      SearchWhereIm = 'Heart';
    } else if (MainBodyBook.style.display !== 'none') {
      SearchWhereIm = 'Book';
    };

    MainBodyHome.style.display = 'none';
    MainBodyKnldge.style.display = 'none';
    MainBodyBook.style.display = 'none';

  } else {
    NavBarMdlSearchInp.style.display = 'none';
  }
}



//Search system

function searchVideos(inputText) {
  const results = [];
  let found = false;

  for (const video of Videos) {
    const words = SearchInp.value.toLowerCase().split(' ');

    for (const word of words) {
      if (
        video.VidTitle.toLowerCase().includes(word) ||
        video.ChannelName.toLowerCase().includes(word)
      ) {
        found = true;
        break;
      }
    }

    if (found) {
      results.push(video);
      found = false;
    }
  }

  return results;
}


function SearchPage(SearchData) {
  MainBodySearch.style.display = 'flex';
  SearchData.forEach(VidSearchDsply);
}



function VidSearchDsply(Data, i) {
  let VideoCart = `
  <div class="VideoCartUpPart VideoCartUpSearch${i}">
         <div class="Thumbnail" onclick="RunVidonClickSearch(${i})">
           <img src="${Data.ThumImg}" alt="">
         </div>
          
          <div class="VideoCartLower">
            <div class="VideoProfile">
            <img class="VideoProfileImg" src="${Data.ChannelProfImg}" alt="">
            </div>
            <div class="VideoTitle">
              <div class="VideoTitleUpper">
                ${Data.VidTitle}
              </div>
              <div class="VideoTitleLower">
              <div class="ChannelName">
              ${Data.ChannelName}
            </div>
            •
            <div class="Clicks">
              ${Data.VidClick} Clicks
            </div>
            •
            <div class="VideoTimeAgo">
              ${Data.VidUpDate}
            </div>
              </div>
            </div>
          </div>
          </div>
          
          <div class="VideoCartLowSearch${i} VideoCartLowPart">
          </div>
        `;

  let div = document.createElement('div');
  div.innerHTML = VideoCart;
  div.classList.add("VideoCart", `VideoCart${i}`);
  MainBodySearch.appendChild(div);
}




let VidPlgiSearch = '';

function RunVidonClickSearch(i) {
  if (VidPlgiSearch !== '') {
    document.querySelector(`.VideoCartUpSearch${VidPlgiSearch}`).style.display = "block";
    document.querySelector(`.VideoCartUpSearch${i}`).style.display = "none";
    document.querySelector(`.VideoCartLowSearch${VidPlgiSearch}`).innerHTML = "";
  } else {
    document.querySelector(`.VideoCartUpSearch${i}`).style.display = "none";
  }


  VideoCartPlay.style.display = "block";
  VidPlgiSearch = i;



  let Data = searchData[i];
  let VidCartPlay = `
  
          <div class="VidPlay  VidPlaySearch">
           <video class="VidPlayVideo${i}" src="${Data.VideoCartPlay.VidUrl}" width="100%" controls></video>
          </div>
          <div class="VidDiscription">
            <div class="VidDisTitle">
              <p>${Data.VidTitle}</p>
            </div>
            <div class="VidDisActBar">
              <div class="VidDisActBarLikes">
                <iconify-icon icon="mdi:like-outline" width="25"></iconify-icon>
                <span>${Data.VideoCartPlay.VidLikes} Likes</span>
              </div>
              <div class="VidDisActBarDisLikes">
                <iconify-icon icon="mdi:dislike-outline" width="25"></iconify-icon>
                <span>${Data.VideoCartPlay.DisLikes} Dislikes</span>
              </div>
              <div class="VidDisActBarShare">
                <iconify-icon icon="mdi:share" width="30"></iconify-icon>
                <span>share</span>
  
              </div>
              <div class="VidDisActBarSave">
                <iconify-icon icon="ic:outline-book" width="30"></iconify-icon>
                <span>save</span>
              </div>
            </div>
  
            <div class="VidDisSubsribe">
              <div class="VidDisProfile">
                <img class="VideoProfileImg" src="/iV/ProfilePic.jpg" alt="">
              </div>
              <div class="VidDisChannelName">
                ${Data.ChannelName}
              </div>
              <div class="VidDisSubsribeBtn">
                <span>Subsribe</span>
              </div>
            </div>
            <div class="VidDisInfo">
              <div class="VidDisClicks">
                ${Data.VidClick}
              </div>
              <div class="VidDisUploadDate">
                ${Data.VidUpDate}
              </div>
            </div>
            <div class="VidDisContant">
             ${Data.VideoCartPlay.Discription}
            </div>
          </div>
        `;

  let div = document.createElement('div');
  div.innerHTML = VidCartPlay;
  div.classList.add(`VidCartPlaySearch${i}`);
  div.style.height = '100%';

  document.querySelector(`.VideoCartLowSearch${i}`).appendChild(div);


  const targetElement = document.querySelector(`.VidPlayVideo${i}`);

  targetElement.scrollIntoView({ behavior: 'smooth' });
};


const HistoryBodyLiked = document.querySelector('.HistoryBodyLiked');

const HistoryBodyDisliked = document.querySelector('.HistoryBodyDisliked');
const HistoryBodySaved = document.querySelector('.HistoryBodySaved');

const HistoryLikedBtn = document.querySelector('.HistoryLiked');

const HistoryDislikedBtn = document.querySelector('.HistoryDisliked');

const HistorySavedBtn = document.querySelector('.HistorySaved');

HistoryLikedBtn.addEventListener('click', HistoryLiked);

HistoryDislikedBtn.addEventListener('click', HistoryDisliked);

HistorySavedBtn.addEventListener('click', HistorySaved);



function HistoryLiked() {
  HistoryBodyLiked.style.display = 'block';
  HistoryBodyDisliked.style.display = 'none';
  HistoryBodySaved.style.display = 'none';

  HistoryLikedBtn.style.marginTop = '-12px';
  HistoryDislikedBtn.style.marginTop = '';
  HistorySavedBtn.style.marginTop = '';

  HistoryLikedBtn.style.color = '#fff';
  HistoryLikedBtn.style.backgroundColor = 'black';

  HistoryDislikedBtn.style.color = '';
  HistoryDislikedBtn.style.backgroundColor = '';

  HistorySavedBtn.style.backgroundColor = '';
  HistorySavedBtn.style.color = '';
};

function HistoryDisliked() {
  HistoryBodyLiked.style.display = 'none';
  HistoryBodyDisliked.style.display = 'block';
  HistoryBodySaved.style.display = 'none';

  HistoryDislikedBtn.style.marginTop = '-12px';
  HistorySavedBtn.style.marginTop = '';
  HistoryLikedBtn.style.marginTop = '';


  HistoryLikedBtn.style.color = '';
  HistoryLikedBtn.style.backgroundColor = '';
  HistoryDislikedBtn.style.color = '#fff';
  HistoryDislikedBtn.style.backgroundColor = 'black';

  HistorySavedBtn.style.backgroundColor = '';
  HistorySavedBtn.style.color = '';

};

HistorySavedBtn.style.backgroundColor = 'black';
HistorySavedBtn.style.color = '#fff';

function HistorySaved() {
  HistoryBodyLiked.style.display = 'none';
  HistoryBodyDisliked.style.display = 'none';
  HistoryBodySaved.style.display = 'block';

  HistorySavedBtn.style.marginTop = '-12px';
  HistoryDislikedBtn.style.marginTop = '';
  HistoryLikedBtn.style.marginTop = '';

  HistoryLikedBtn.style.color = '';
  HistoryLikedBtn.style.backgroundColor = '';
  HistoryDislikedBtn.style.color = '';
  HistoryDislikedBtn.style.backgroundColor = '';

  HistorySavedBtn.style.backgroundColor = 'black';
  HistorySavedBtn.style.color = '#fff';

};

HistorySavedBtn.style.marginTop = '-12px';



const NavBarRightProfileBtn = document.querySelector('.NavBarRightProfile');

const MainProfileEdit = document.querySelector('.MainProfileEdit');



NavBarRightProfileBtn.addEventListener('click', () => {
  Main.style.display = 'none';
  MainProfileEdit.style.display = 'flex';
  FooterNavBar.style.display = 'none';
});

const NavBarProfleLeft = document.querySelector('.NavBarProfleLeft');

NavBarProfleLeft.addEventListener('click', () => {
  Main.style.display = 'block';
  MainProfileEdit.style.display = 'none';
  FooterNavBar.style.display = 'flex';

});


const KnldgeSubscribedBtn = document.querySelector('.KnldgeSubscribedBtn');

const KnldgeNotificationBtn = document.querySelector('.KnldgeNotificationBtn');

const KnldgeSubscribed = document.querySelector('.KnldgeSubscribed');

const KnldgeNotification = document.querySelector('.KnldgeNotification');



KnldgeSubscribedBtn.addEventListener('click', function() {
  KnldgeSubscribed.style.display = 'block';
  KnldgeNotification.style.display = 'none';

  KnldgeSubscribedBtn.style.marginTop = '-4px';
  KnldgeNotificationBtn.style.marginTop = '';
  KnldgeSubscribedBtn.style.backgroundColor = 'black';
  KnldgeSubscribedBtn.style.color = 'white';

  KnldgeNotificationBtn.style.backgroundColor = '#fff';
  KnldgeNotificationBtn.style.color = 'black';
  KnldgeSubscribed.value = '';
  
  SubscribedData.forEach(appendSubscribed);
});

KnldgeNotificationBtn.style.marginTop = '-4px';



/*Subscribe Notification Page*/

let NotificationVids = [
  {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/iV/ProfilePic.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Express Js Notified Video',
    ChannelName: 'Youth Bro',
    VidClick: '50',
    VidUpDate: '1 Jan 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '10',
      DisLikes: '20',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'Working on express js ',
    }
  }, {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/iV/ProfilePic.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Express Js Notified Video',
    ChannelName: 'Youth Bro',
    VidClick: '50',
    VidUpDate: '1 Jan 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '10',
      DisLikes: '20',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'Working on express js ',
    }
  }, {
    ThumImg: '/iV/Thumbnail.jpg',
    ChannelProfImg: '/iV/ProfilePic.jpg',
    ChannelProfLink: 'Url',
    VidTitle: 'Express Js Notified Video',
    ChannelName: 'Youth Bro',
    VidClick: '50',
    VidUpDate: '1 Jan 2023',
    VideoCartPlay: {
      VidUrl: '/iV/iV.mp4',
      VidLikes: '10',
      DisLikes: '20',
      ShareLink: 'url',
      AddToBook: 'url',
      Discription: 'Working on express js ',
    }
  },
];

function VidNotificationDsply(Data, i) {
  let VideoCart = `
  <div class="VideoCartUpPart VideoCartUpNotfn${i}">
    <div class="Thumbnail" onclick="RunVidonClickNotfn(${i})">
      <img src="${Data.ThumImg}" alt="">
    </div>
    <div class="VideoCartLower">
      <div class="VideoProfile">
        <img class="VideoProfileImg" src="${Data.ChannelProfImg}" alt="">
      </div>
      <div class="VideoTitle">
        <div class="VideoTitleUpper">
          ${Data.VidTitle}
        </div>
        <div class="VideoTitleLower">
          <div class="ChannelName">
            ${Data.ChannelName}
          </div>
          •
          <div class="Clicks">
            ${Data.VidClick} Clicks
          </div>
          •
          <div class="VideoTimeAgo">
            ${Data.VidUpDate}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="VideoCartLowNotfn${i} VideoCartLowPart">
  </div>
  `;

  let div = document.createElement('div');
  div.innerHTML = VideoCart;
  div.classList.add("VideoCart", `VideoCart${i}`);
  KnldgeNotification.appendChild(div);
}

let VidPlgiNotfn = '';

function RunVidonClickNotfn(i) {

  if (VidPlgiNotfn !== '') {
    document.querySelector(`.VideoCartUpNotfn${VidPlgiNotfn}`).style.display = "block";
    document.querySelector(`.VideoCartUpNotfn${i}`).style.display = "none";
    document.querySelector(`.VideoCartLowNotfn${VidPlgiNotfn}`).innerHTML = "";
  } else {
    // Uncomment this line if needed
    document.querySelector(`.VideoCartUpNotfn${i}`).style.display = "none";
  }

  // Ensure that 'VideoCartPlay' is defined in your code
  // let VideoCartPlay = document.getElementById('VideoCartPlay'); 

  // Check if 'VideoCartPlay' is defined before modifying its style
  // if (VideoCartPlay) {
  //   VideoCartPlay.style.display = "block";
  // }

  VidPlgiNotfn = i;

  let Data = NotificationVids[i];
  let VidCartPlay = `
  <div class="VidPlay  VidPlaySearch">
    <video class="VidPlayVideo${i}" src="${Data.VideoCartPlay.VidUrl}" width="100%" controls></video>
  </div>
  <div class="VidDiscription">
    <div class="VidDisTitle">
      <p>${Data.VidTitle}</p>
    </div>
    <div class="VidDisActBar">
      <div class="VidDisActBarLikes">
        <iconify-icon icon="mdi:like-outline" width="25"></iconify-icon>
        <span>${Data.VideoCartPlay.VidLikes} Likes</span>
      </div>
      <div class="VidDisActBarDisLikes">
        <iconify-icon icon="mdi:dislike-outline" width="25"></iconify-icon>
        <span>${Data.VideoCartPlay.DisLikes} Dislikes</span>
      </div>
      <div class="VidDisActBarShare">
        <iconify-icon icon="mdi:share" width="30"></iconify-icon>
        <span>share</span>
      </div>
      <div class="VidDisActBarSave">
        <iconify-icon icon="ic:outline-book" width="30"></iconify-icon>
        <span>save</span>
      </div>
    </div>
    <div class="VidDisSubsribe">
      <div class="VidDisProfile">
        <img class="VideoProfileImg" src="/iV/ProfilePic.jpg" alt="">
      </div>
      <div class="VidDisChannelName">
        ${Data.ChannelName}
      </div>
      <div class="VidDisSubsribeBtn">
        <span>Subscribe</span>
      </div>
    </div>
    <div class="VidDisInfo">
      <div class="VidDisClicks">
        ${Data.VidClick}
      </div>
      <div class="VidDisUploadDate">
        ${Data.VidUpDate}
      </div>
    </div>
    <div class="VidDisContant">
      ${Data.VideoCartPlay.Discription}
    </div>
  </div>
  `;

  let div = document.createElement('div');
  div.innerHTML = VidCartPlay;
  div.classList.add(`VidCartPlaySearch${i}`);
  div.style.height = '100%';

  document.querySelector(`.VideoCartLowNotfn${i}`).appendChild(div);
}

/* For running Video play */
KnldgeNotificationBtn.addEventListener('click', function() {
  KnldgeSubscribed.style.display = 'none';
  KnldgeNotification.style.display = 'block';
  KnldgeSubscribedBtn.style.marginTop = '';
  KnldgeNotificationBtn.style.marginTop = '-4px';

  KnldgeNotificationBtn.style.backgroundColor = 'black';
  KnldgeNotificationBtn.style.color = 'white';
  KnldgeSubscribedBtn.style.backgroundColor = '#fff';
  KnldgeSubscribedBtn.style.color = 'black';
  KnldgeNotification.innerHTML = '';
  NotificationVids.forEach(VidNotificationDsply);

});

/* Subscribed */


let SubscribedData = Array.from({ length: 15 }, (_, i) => ({
  channelIconUrl: '/iV/ProfilePic.jpg',
  channelName: `Channel ${i + 1}`,
  IsSubscribed: 'true',
}));


/*
[{
  channelIconUrl:'/iV/ProfilePic.jpg',
  channelName:'Bro Gaming',
  IsSubscribed:'true',
},{
  channelIconUrl: '/iV/ProfilePic.jpg',
  channelName: 'Bro Gaming',
  IsSubscribed: 'true',
}
]*/


function appendSubscribed(Data,i) {
  let myVariable = `
     <div class="subscription-item">
      <div class="channel-icon">
        <img src="${Data.channelIconUrl}" alt="img">
      </div>
      <div class="channel-info">
      <div class="channel-name">${Data.channelName}</div>
       </div>
      <div class="subscribe-button">Subscribed</div>
            `;

  let newDiv = document.createElement("div");
  newDiv.classList.add("subscription-list");
  newDiv.innerHTML = myVariable;
  KnldgeSubscribed.appendChild(newDiv);
}
