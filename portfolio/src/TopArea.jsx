import React, { useState } from "react";
import Visual from "./Visual";

const TopArea = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <div className="top-area">
      <div className="top-border-anim01"></div>
      <div className="top-border-anim02"></div>
      <div className="top-svg">
        <h1>
          <svg
            className="svg-pc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 461.4 89.7"
            enable-background="new 0 0 461.4 89.7"
          >
            <style type="text/css"></style> <title>YUGO KONISHI</title>
            <desc>自己紹介 - Web &amp; Graphic Designer</desc>
            {/* <path class="st0" d="M0-12.3h483.6v127h-483.6v-127z"></path>
            <path class="st1" d=""></path> */}
          </svg>
        </h1>
        <h1>
          <svg
            className="svg-mobile"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 461.4 89.7"
            enable-background="new 0 0 461.4 89.7"
          >
            <style type="text/css"></style>
            <title>YUGO KONISHI</title>
            <desc>自己紹介 - Web &amp; Graphic Designer</desc>
            {/* <path class="st0" d="M0-12.3h461.4v127h-461.4v-127z"></path>
            <path class="st1" d=""></path> */}
          </svg>
        </h1>
      </div>
      <div className="top-about">
        <p>
          今まで主にゲームのUI,Web,グラフィック,アニメーション等の経験をしてきました。
          {/* <br className="pc-line"> */}
          {/* 上記の知見を生かして、ポートフォリオとブログ兼用で情報発信していく予定です。 */}
          {/* </br>
          <br className="pc-line"> */}
          {/* イラスト等もこちらに随時アップしていきます。 */}
          {/* </br>
          <br className="pc-line"> */}
          {/* お気軽にTwitterのフォローもどうぞ。フォロバさせていただきます。 */}
          {/* </br> */}
        </p>
      </div>
    </div>
  );
};

export default TopArea;
