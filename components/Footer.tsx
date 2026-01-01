"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { SHORT_LINKS } from "@/lib/config";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const partners = [
    {
      id: "rr88",
      image: "/footer/RR88-link.webp",
      name: "RR88",
      urlMobile: SHORT_LINKS.rr88_mb,
      urlDesktop: SHORT_LINKS.rr88_pc,
    },
    {
      id: "xx88",
      image: "/footer/XX88-link.webp",
      name: "XX88",
      urlMobile: SHORT_LINKS.xx88_mb,
      urlDesktop: SHORT_LINKS.xx88_pc,
    },
    {
      id: "mm88",
      image: "/footer/MM88-link.webp",
      name: "MM88",
      urlMobile: SHORT_LINKS.mm88_mb,
      urlDesktop: SHORT_LINKS.mm88_pc,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Header Title */}
        <div className={styles.headerTitle}>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleFirstLine}>THÀNH VIÊN LIÊN MINH</span>{" "}
            <span className={styles.titleBreak}>QUỐC TẾ KJC</span>
          </h1>

          {/* 2 ảnh trang trí cho Mobile - hiển thị trong headerTitle */}
          {/* <Image
            src="/footer/backgrond-footer-mb.webp"
            alt="Footer Left"
            width={200}
            height={200}
            className={styles.footerLeftImageMobile}
          />
          <Image
            src="/footer/backgrond-footer-mb.webp"
            alt="Footer Right"
            width={200}
            height={200}
            className={styles.footerRightImageMobile}
          /> */}
        </div>

        {/* Alliance Cards */}
        <div className={styles.allianceCardsWrapper}>
          {/* 2 ảnh trang trí cho Desktop - hiển thị trong allianceCardsWrapper */}
          {/* <Image
            src="/footer/background-footer.webp"
            alt="Footer Left"
            width={300}
            height={300}
            className={styles.footerLeftImageDesktop}
          />
          <Image
            src="/footer/background-footer.webp"
            alt="Footer Right"
            width={300}
            height={300}
            className={styles.footerRightImageDesktop}
          /> */}
          <div className={styles.allianceCards}>
            {partners.map((partner) => (
              <div key={partner.id} className={styles.allianceCard}>
                <a
                  href={isMobile ? partner.urlMobile : partner.urlDesktop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardContent}
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className={styles.cardImage}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className={styles.mainContentSection}>
          <div className={styles.contentLeft}>
            <Image
              src="/footer/img-collaborate.webp"
              alt="Collaboration"
              width={400}
              height={300}
              className={styles.collaborateImage}
            />
          </div>
          <div className={styles.contentCenter}>
            <Image
              src="/footer/logo-kjc-juventus.webp"
              alt="KJC Juventus Logo"
              width={200}
              height={200}
              className={styles.logoImage}
            />
            <Image 
              src="/footer/title-kjc.webp" 
              alt="KJC Title" 
              width={300}
              height={100}
              className={styles.titleImage} 
            />
          </div>
          <div className={styles.contentRight}>
            <Image
              src="/footer/content-footer.webp"
              alt="KJC Content"
              width={400}
              height={300}
              className={styles.contentRightImage}
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            COPYRIGHT © 2025 KJC ALL RIGHTS RESERVED
          </div>
          <div className={styles.socialSection}>
            <span className={styles.followText}>THEO DÕI CHÚNG TÔI:</span>
            <div className={styles.socialIcons}>
              <a
                href={SHORT_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/icon-tele.png" alt="Telegram" width={40} height={40} />
              </a>
              <a
                href={SHORT_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/icon-fb.png" alt="Facebook" width={40} height={40} />
              </a>
              <a
                href={SHORT_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/icon-tiktok.png" alt="Tiktok" width={40} height={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
