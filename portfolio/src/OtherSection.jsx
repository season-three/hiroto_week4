import React, { useState } from "react";
import OtherItem from "./OtherItem";

const OtherSection = (prots) => {
  const [isPublished, togglePublished] = useState(false);

  const OtherSectionList = [
    {
      link: "https://works/business-card/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/business-card_thum.jpg",
      title: "MY名刺",
      caption: "名刺",
    },
    {
      link: "https://works/ayaya-touhou/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/ayaya_thum.jpg",
      title: "東方 射命丸文",
      caption: "イラスト",
    },
    {
      link: "https://works/illust-rs/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/rockbuke_thum.jpg",
      title: "ロマサガ2 ロックブーケ",
      caption: "イラスト",
    },
    {
      link: "https://works/illust-gbf/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/kumuyu_thum.jpg",
      title: "グラブル クムユ",
      caption: "イラスト",
    },
    {
      link: "https://works/illust-touhou/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/rockbuke_thum.jpg",
      title: "東方 アリス",
      caption: "イラスト",
    },
    {
      link: "https://works/illust-jojo/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/rockbuke_thum.jpg",
      title: "ジョジョ DIO",
      caption: "イラスト",
    },
  ];
  return (
    <section className="visual-area game-section">
      GameSection
      <div className="visual-area-inner">
        <div className="visual-category-inner"></div>
        <ul className="visual-list">
          {OtherSectionList.map((otherSectionItem) => {
            return (
              <OtherItem
                link={otherSectionItem.link}
                image={otherSectionItem.image}
                title={otherSectionItem.title}
                caption={otherSectionItem.caption}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OtherSection;
