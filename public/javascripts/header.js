(function(){
    const header = document.querySelector(".header");
    header.innerHTML = `<h1 class="header__logo">
            <img src="https://static-page.kakao.com/static/pc/mainLogo.png?cbbbd3f1a3ca7834cb8fc1adf0115a6c" class="header__logo--img">
        </h1>
        <div class="header__sidemenu">
            <div class="header__sidemenu__search-box">
                <input type="text" name="search-input" id="search-input">
                <div class="header__sidemenu__search-box--search-button">
                    <img src="https://static-page.kakao.com/static/pc/btn_search.png?a8ce9e4eba0250e52d4570c605f79f9a" alt="검색 버튼" class="header__sidemenu__search-box--button--icon">
                </div>
            </div>
            <a>캐시충전</a>
            <a>로그인</a>
        </div>`
})();
