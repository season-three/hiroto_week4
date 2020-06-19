import React, { useState } from "react";
import GameItem from "./GameItem";

const GameSection = (props) => {
  const [isPublished, togglePublished] = useState(false);
  const gameSectionList = [
    {
      link: "https://works/bokures3_game/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/bkrs3_thum.jpg",
      title: "ぼくのレストラン3 & 3DX",
      caption: "アプリ",
    },
    {
      link: "https://works/game_event_ui/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/social_thum.jpg",
      title: "ソーシャルゲーム 画面",
      caption: "アプリ",
    },
    {
      link: "https://works/game_effect/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/effect_thum.jpg",
      title: "ゲームエフェクト",
      caption: "ゲーム",
    },
  ];

  return (
    <section className="visual-area game-section">
      <div className="visual-area-inner">
        <div className="visual-category-inner">
          <h3 className="visual-category">GAME / APPLI</h3>
        </div>
        <ul className="visual-list">
          {gameSectionList.map((gameSectionItem) => {
            return (
              <GameItem
                link={gameSectionItem.link}
                image={gameSectionItem.image}
                title={gameSectionItem.title}
                caption={gameSectionItem.caption}
              />
            );
          })}
        </ul>
      </div>
      <a id="web"></a>
    </section>
  );
};

export default GameSection;
