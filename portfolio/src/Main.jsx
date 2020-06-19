import React, { useState } from "react";
import GameSection from "./GameSection";
import WebSection from "./WebSection";
import OtherSection from "./OtherSection";

const Footer = (props) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <main>
      <div className="content">
        <div className="contents-inner">
          <article className="works">
            <header className="contents-title">
              <h2>Works in Hamamathu</h2>
            </header>
            <section className="contents-description  delay-02 slideInUp">
              <p>
                お越しいただきありがとうございます。こちらでは制作実績の一部を掲載しています。認証が必要、画像がない作品の実績をご覧になりたい場合はDMかコンタクトフォームまでお問い合わせください。
              </p>
            </section>
            <GameSection />
            <WebSection />
            <OtherSection />
          </article>
        </div>
      </div>
    </main>
  );
};

export default Footer;
