import React, { useState } from "react";
import WebItem from "./WebItem";

const WebSection = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  const WebSectionList = [
    {
      link: "https://works/design/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/design_thum.jpg",
      title: "デザイン提案",
      caption: "ウェブ / 認証あり",
    },
    {
      link: "https:/https://www.takumiba.com/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/no_image.jpg",
      title: "TAKUMIBA.design_factory様 コーディング",
      caption: "ウェブ",
    },
    {
      link: "http://fujilife-co.jp/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/no_image.jpg",
      title: "不二ライフ株式会社様 CMS&amp;コーディング",
      caption: "ウェブ",
    },
    {
      link: "http://www.kojitani.co.jp/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/no_image.jpg",
      title: "小路谷写真館様 CMS&amp;コーディング",
      caption: "ウェブ",
    },
    {
      link: "https://office.biglobe.ne.jp/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/no_image.jpg",
      title: "BIGLOBE法人様 運用",
      caption: "ウェブ",
    },
    {
      link: "//www.jinzai-info.net/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/no_image.jpg",
      title: "リクルートジョブズ様 人材info 運用",
      caption: "ウェブ",
    },
    {
      link: "http://works/success-works/",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/am_thum.jpg",
      title: "株式会社サクセス様 実績",
      caption: "ウェブ",
    },
  ];
  return (
    <section className="visual-area web-section">
      WebSection
      <div className="visual-area-inner">
        <div className="visual-category-inner"></div>
        <ul className="visual-list">
          {WebSectionList.map((WebSectionItem) => {
            return (
              <WebItem
                link={WebSectionItem.link}
                image={WebSectionItem.image}
                title={WebSectionItem.title}
                caption={WebSectionItem.caption}
              />
            );
          })}
        </ul>
      </div>
      <a id="other"></a>
    </section>
  );
};

export default WebSection;
