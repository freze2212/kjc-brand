"use client";

import Header from "@/components/Header";
import React, { useState } from "react";

// --- Constants & Data ---
const statsBoxes = [
  {
    title: "01 / Lịch sử",
    img: "/history.webp",
    imgOpacity: "opacity-60",
    titleColor: "rgba(93,98,116,1)",
    bgClass: "bg-white",
    textColor: "rgba(0,39,91,1)",
    desc: "Được hình thành và phát triển qua nhiều năm hoạt động, chúng tôi không ngừng mở rộng quy mô, hoàn thiện sản phẩm và nâng cao chất lượng dịch vụ. Quá trình vận hành bền vững là minh chứng cho sự ổn định và uy tín lâu dài.",
  },
  {
    title: "02 / Đường truyền",
    img: "/connection.webp",
    imgOpacity: "opacity-60",
    titleColor: "rgba(93,98,116,1)",
    bgClass: "bg-white",
    textColor: "rgba(0,39,91,1)",
    desc: "Hệ thống hạ tầng được đầu tư bài bản, tối ưu hiệu năng và băng thông, đảm bảo trải nghiệm mượt mà, ổn định và không gián đoạn cho người dùng trên mọi thiết bị.",
  },
  {
    title: "03 / Bảo mật",
    img: "/security.webp",
    imgOpacity: "opacity-100",
    titleColor: "#fff",
    bgClass: "bg-[#FF8300]",
    textColor: "#fff",
    desc: "An toàn thông tin luôn được đặt lên hàng đầu. Ứng dụng các tiêu chuẩn bảo mật tiên tiến, dữ liệu người dùng và giao dịch được bảo vệ nghiêm ngặt, mang lại sự an tâm tuyệt đối khi sử dụng.",
  },
  {
    title: "04 / Kết quả",
    img: "/target.webp",
    imgOpacity: "opacity-60",
    titleColor: "rgba(93,98,116,1)",
    bgClass: "bg-white",
    textColor: "rgba(0,39,91,1)",
    desc: "Mọi kết quả vận hành được xử lý minh bạch, chính xác và cập nhật theo thời gian thực, đảm bảo tính công bằng và độ tin cậy cho toàn bộ hệ thống.",
  },
  {
    title: "05 / Hỗ trợ",
    img: "/support.webp",
    imgOpacity: "opacity-60",
    titleColor: "rgba(93,98,116,1)",
    bgClass: "bg-white",
    textColor: "rgba(0,39,91,1)",
    desc: "Được hình thành và phát triển qua nhiều năm hoạt động, chúng tôi không ngừng mở rộng quy mô, hoàn thiện sản phẩm và nâng cao chất lượng dịch vụ. Quá trình vận hành bền vững là minh chứng cho sự ổn định và uy tín lâu dài.",
  },
  {
    title: "06 / Tư duy",
    img: "/thinking.webp",
    imgOpacity: "opacity-60",
    titleColor: "rgba(93,98,116,1)",
    bgClass: "bg-white",
    textColor: "rgba(0,39,91,1)",
    desc: "Luôn đổi mới và lấy người dùng làm trung tâm, chúng tôi liên tục cải tiến sản phẩm, cập nhật xu hướng công nghệ và tối ưu trải nghiệm để đáp ứng nhu cầu thực tế.",
  },
];

const factStats = [
  {
    icon: "/icon-customer.webp",
    value: "92%",
    label: "KHÁCH HÀNG HÀI LÒNG",
    orange: false,
  },
  {
    icon: "/icon-money.webp",
    value: "10 TRIỆU USD",
    label: "GIAO DỊCH MỖI NGÀY",
    orange: true,
  },
  {
    icon: "/icon-star.webp",
    value: "20 TRIỆU",
    label: "NGƯỜI DÙNG HÀNG THÁNG",
    orange: true,
  },
  {
    icon: "/icon-trophy.webp",
    value: "#18/100",
    label: "ỨNG DỤNG GIẢI TRÍ TRÊN THẾ GIỚI",
    orange: false,
  },
];

const SELECTED_BG = "#FF8300";
const SELECTED_TEXT = "#fff";
const SELECTED_TITLE = "#fff";

// --- Reusable Components ---

function ResponsiveHero() {
  return (
    <section
      className="w-full mx-auto px-4"
      style={{
        backgroundImage: "url('/banner-dichvu.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="
          flex flex-col md:flex-row
          w-full py-2 md:py-12
          relative
        "
        style={{
          backgroundImage: undefined,
        }}
      >
        {/* Right: hero circle graphic, stays right on PC, moves up on mobile */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-[250px] h-[250px] xs:w-[240px] xs:h-[240px] sm:w-[320px] sm:h-[320px] md:w-[625px] md:h-[566px]">
            {/* Main circle */}
            <img
              src="/circle-kjc.webp"
              alt="Circle KJC"
              className="w-full h-full object-contain"
            />
            {/* MM88 */}
            <img
              src="/mm88.webp"
              alt="MM88"
              className="absolute left-[-10px] sm:left-[-20px] top-[10px] sm:top-[26px] w-[50px] xs:w-[60px] sm:w-[131px] h-[56px] xs:h-[70px] sm:h-[150px] object-contain"
            />
            {/* XX88 */}
            <img
              src="/xx88.webp"
              alt="XX88"
              className="absolute right-[-10px] sm:right-[-19px] top-[16px] sm:top-[54px] w-[50px] xs:w-[60px] sm:w-[131px] h-[56px] xs:h-[70px] sm:h-[150px] object-contain"
            />
            {/* RR88 */}
            <img
              src="/rr88.webp"
              alt="RR88"
              className="absolute left-[46%] xs:left-[40%] bottom-[-9px] sm:bottom-[-17px] w-[50px] xs:w-[60px] sm:w-[131px] h-[56px] xs:h-[70px] sm:h-[150px] object-contain"
              style={{
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
        {/* Left: Logo, Heading, Desc, Stats - center on mobile only, PC as normal */}
        <div className="flex-1 flex items-center justify-center order-2 md:order-1">
          <div
            className="
              flex flex-col
              gap-4
              justify-between
              h-full
              max-w-[619px]
              py-6 md:py-12
              items-start md:items-start
              w-full
            "
            style={{
              width: "100%",
            }}
          >
            {/* Logo */}
            <img
              src="/logo.webp"
              alt="KJC x Juventus Logo"
              className="block"
              style={{
                width: "169px",
                height: "62px",
                objectFit: "contain",
                marginLeft: "0",
                marginRight: "0",
              }}
            />
            {/* Heading */}
            <h2
              className="uppercase font-bold"
              style={{
                fontSize: "28px",
                lineHeight: "140%",
                letterSpacing: "-0.03em",
                color: "rgba(0,39,91,1)",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              Kết nối sức mạnh,
              <br />
              <span
                className="uppercase"
                style={{
                  color: "rgba(0,39,91,1)",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "140%",
                  letterSpacing: "-0.03em",
                }}
              >
                Dẫn đầu hệ sinh thái giải trí
              </span>
            </h2>
            {/* Description */}
            <p
              className="block"
              style={{
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "122%",
                letterSpacing: "-0.03em",
                color: "rgba(0,39,91,1)",
                margin: 0,
                textAlign: "left",
                maxWidth: "440px",
              }}
            >
              KJC đóng vai trò là đơn vị điều phối và bảo chứng chất lượng,
              kết nối các thương hiệu trong liên minh theo cùng một tiêu chuẩn vận hành
            </p>
            {/* Stats images */}
            <div className="flex flex-row gap-2 xs:gap-4 mt-2 w-full justify-between md:justify-start">
              <img
                src="/40-web.webp"
                alt="40 Trang Web"
                className="w-[32vw] max-w-[110px] xs:max-w-[130px] sm:max-w-[150px] md:max-w-[193px] h-auto aspect-[193/213]"
                style={{
                  objectFit: "contain",
                }}
              />
              <img
                src="/8-country.webp"
                alt="08 Quốc Gia"
                className="w-[32vw] max-w-[110px] xs:max-w-[130px] sm:max-w-[150px] md:max-w-[193px] h-auto aspect-[193/213]"
                style={{
                  objectFit: "contain",
                }}
              />
              <img
                src="/20-language.webp"
                alt="20 Ngôn Ngữ"
                className="w-[32vw] max-w-[110px] xs:max-w-[130px] sm:max-w-[150px] md:max-w-[193px] h-auto aspect-[193/213]"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          section[style] {
            background-image: url('/bg-banner-mb.webp') !important;
          }
          /* Center everything in left content on mobile */
          section > div > div:nth-child(2) > div {
            align-items: center !important;
          }
          section > div > div:nth-child(2) h2,
          section > div > div:nth-child(2) p {
            text-align: center !important;
          }
          /* Logo size mobile: 169x62 */
          section > div > div:nth-child(2) img[alt="KJC x Juventus Logo"] {
            width: 169px !important;
            height: 62px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            display: block !important;
          }
          /* Heading size on mobile: 24px */
          section > div > div:nth-child(2) h2,
          section > div > div:nth-child(2) h2 span {
            font-size: 24px !important;
          }
          /* Description size on mobile: 14px */
          section > div > div:nth-child(2) p {
            font-size: 14px !important;
          }
          /* 3 ảnh stats: 130x143 (width x height) */
          section > div > div:nth-child(2) div > img[alt="40 Trang Web"],
          section > div > div:nth-child(2) div > img[alt="08 Quốc Gia"],
          section > div > div:nth-child(2) div > img[alt="20 Ngôn Ngữ"] {
            width: 130px !important;
            height: 143px !important;
          }
          /* Center stats images row on mobile */
          section > div > div:nth-child(2) div.flex-row {
            justify-content: center !important;
            gap: 12px !important;
          }
        }
        @media (min-width: 768px) {
          section[style] {
            background-image: url('/banner-dichvu.webp') !important;
          }
        }
      `}</style>
    </section>
  );
}

function PartnersSection() {
  return (
    <section>
      <div className="w-full flex flex-col items-center pt-4 md:pt-12 bg-white gap-4 p-4 md:p-0">
        <div className="text-[#F8951D] text-base md:text-[20px] font-medium tracking-widest mb-2 text-center">
          CÁC ĐỐI TÁC CỦA KJC
        </div>
        <div className="text-[22px] md:text-[44px] font-bold text-[#172D51] text-center leading-tight mb-2">
          SẢN PHẨM SÁNG TẠO, THƯƠNG HIỆU UY TÍN
        </div>
        <div className="text-[16px] md:text-[20px] text-[#172D51] text-center font-medium max-w-2xl mx-auto">
          KJC đóng vai trò là đơn vị điều phối và bảo chứng chất lượng, kết
          nối các thương hiệu trong liên minh theo cùng một tiêu chuẩn vận hành
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-8 md:gap-12 mt-2 flex-wrap">
          <img
            src="/xx88-active.webp"
            alt="XX88 Active"
            className="w-[166px] h-[166px] md:w-[204px] md:h-[204px] object-contain rounded-full shadow-lg border-4 border-[rgba(56,174,255,0.18)] bg-white"
          />
          <img
            src="/rr88-active.webp"
            alt="RR88 Active"
            className="w-[70px] h-[70px] md:w-[88px] md:h-[88px] object-contain rounded-full shadow-lg border-4 border-[rgba(56,174,255,0.09)] bg-white"
          />
          <img
            src="/mm88-active.webp"
            alt="MM88 Active"
            className="w-[70px] h-[70px] md:w-[88px] md:h-[88px] object-contain rounded-full shadow-lg border-4 border-[rgba(251,92,114,0.14)] bg-white"
          />
        </div>
      </div>
      <div className="w-10/12 flex flex-col md:flex-row overflow-hidden mt-10 mx-auto gap-6">
        {/* Left */}
        <div className="w-full md:w-5/12 flex flex-col justify-center p-0 md:p-8 gap-2">
          <div className="flex flex-col items-center md:items-start gap-3 mb-2">
            <span className="flex items-center justify-center md:justify-start w-[239px] md:w-[239px] h-[56px] tracking-wide">
              <img
                src="/xx88-kjc.webp"
                alt="KJC"
                className="h-full w-auto inline ml-1"
              />
            </span>
          </div>
          <div className="font-bold text-[#172D51] text-[20px] md:text-[40px] leading-tight mb-2 text-center md:text-left">
            ỔN ĐỊNH &amp; TIN CẬY
          </div>
          <div className="text-[#172D51] text-[14px] md:text-[18px] font-normal mb-4 max-w-md text-justify">
            XX88 là thương hiệu nổi bật với hệ thống vận hành ổn định, chính
            sách rõ ràng và trải nghiệm thân thiện. Phù hợp với người dùng ưu
            tiên an toàn, lâu dài, dễ sử dụng.
          </div>
          <ul className="flex flex-col gap-3 mb-6">
            <li className="flex items-start gap-2">
              <img
                src="/v-icon.webp"
                alt="check"
                className="mt-1 w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
              />
              <span className="text-[#172D51] text-[15px] md:text-[17px]">
                Nền tảng ổn định
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/v-icon.webp"
                alt="check"
                className="mt-1 w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
              />
              <span className="text-[#172D51] text-[15px] md:text-[17px]">
                Chính sách minh bạch
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/v-icon.webp"
                alt="check"
                className="mt-1 w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
              />
              <span className="text-[#172D51] text-[15px] md:text-[17px]">
                Hỗ trợ người dùng nhanh chóng
              </span>
            </li>
          </ul>
          <div className="w-full flex justify-center md:justify-start">
            {/* Button with correct link: mobile -> 53333.com, desktop -> xx88a1.com */}
            <a
              href="https://53333.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-max bg-[#FF8300] text-white font-semibold px-6 py-3 rounded-full text-[16px] hover:bg-[#e97300] transition-all shadow-md flex items-center justify-center md:hidden"
            >
              Trải nghiệm XX88 ngay
            </a>
            <a
              href="https://xx88a1.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-max bg-[#FF8300] text-white font-semibold px-6 py-3 rounded-full text-[16px] hover:bg-[#e97300] transition-all shadow-md flex items-center justify-center hidden md:flex"
            >
              Trải nghiệm XX88 ngay
            </a>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-7/12 flex items-center justify-center md:justify-end bg-transparent p-0 md:p-4">
          <img
            src="/xx88-banner.webp"
            alt="XX88 Banner"
            className="w-full max-w-[340px] md:max-w-[921px] object-contain"
          />
        </div>
      </div>
      <div
        className="relative mt-[-10px] md:mt-[-40px]"
        style={{ zIndex: 0 }}
      >
        <img
          src="/bg-section-xx88.webp"
          alt="Background XX88"
          className="w-full max-h-[80px] md:max-h-[120px] object-cover"
          style={{ zIndex: 0, position: "relative", overflow: "hidden" }}
        />
      </div>
    </section>
  );
}

// Responsive LineImg: use different image & height on mobile
function LineImg({ alt = "Line KJC" }: { alt?: string }) {
  return (
    <div>
      {/* Mobile: show line-kjc-mb.webp, height 58px. Desktop: show line-kjc.webp */}
      <img
        src="/line-kjc-mb.webp"
        alt={alt}
        className="block w-full h-auto object-contain md:hidden"
      />
      <img
        src="/line-kjc.webp"
        alt={alt}
        className="hidden md:block w-full h-[72px] object-contain"
      />
    </div>
  );
}

function FactStatsGrid() {
  type StatItem = typeof factStats[0];
  const imgMap: Record<string, string> = {
    "KHÁCH HÀNG HÀI LÒNG": "/user.webp",
    "GIAO DỊCH MỖI NGÀY": "/usd.webp",
    "NGƯỜI DÙNG HÀNG THÁNG": "/star.webp",
    "ỨNG DỤNG GIẢI TRÍ TRÊN THẾ GIỚI": "/app.webp",
  };
  const labelMap: Record<string, string> = {
    "KHÁCH HÀNG HÀI LÒNG": "Khách hàng hài lòng",
    "GIAO DỊCH MỖI NGÀY": "Giao dịch mỗi ngày",
    "NGƯỜI DÙNG HÀNG THÁNG": "Người dùng hàng tháng",
    "ỨNG DỤNG GIẢI TRÍ TRÊN THẾ GIỚI": "Ứng dụng giải trí",
  };
  return (
    <section>
      <div className="relative w-full pt-6 pb-16 overflow-hidden">
        {/* Decor background left/right */}
        <img
          src="/bg-section4.webp"
          alt="BG Section Left"
          className="hidden md:block absolute left-0 bottom-0 w-[120px] md:w-[210px] h-auto pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />
        <img
          src="/bg-section4.webp"
          alt="BG Section Right"
          className="hidden md:block absolute right-0 bottom-0 w-[120px] md:w-[210px] h-auto pointer-events-none select-none"
          style={{ transform: "scaleX(-1)", zIndex: 0 }}
        />
        {/* Titles */}
        <div className="flex flex-col items-center z-10 relative">
          <div className="text-xs md:text-[20px] font-400 text-[#FDB55E] uppercase tracking-widest mb-4 md:mb-6 mt-0 md:mt-8">
            NHỮNG CON SỐ BIẾT NÓI
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-center text-[#172D51] leading-snug mb-10">
            7 NĂM KIẾN TẠO NIỀM TIN CÙNG
            <br />
            HÀNG TRIỆU KHÁCH HÀNG
          </h2>
        </div>
        {/* Facts grid */}
        <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-2 gap-x-4 gap-y-4 px-2 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:px-0">
          {factStats.map((stat, idx) => (
            <div
              className="flex items-center gap-2 p-2 md:gap-4 md:p-0 w-full"
              key={stat.label + idx}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-[54px] h-[54px] md:w-[144px] md:h-[144px] rounded-full border-2 border-[#FDB55E] bg-white shadow">
                <img
                  src={imgMap[stat.label] || ""}
                  alt={labelMap[stat.label]}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start md:items-start">
                <span
                  className="mb-1 uppercase text-[14px] md:text-[47px] font-bold"
                  style={{
                    color: "rgba(255,106,0,1)",
                    fontWeight: 700,
                    lineHeight: "122%",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="uppercase text-[11px] md:text-[23px] font-bold"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    lineHeight: "122%",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    textAlign: "left",
                    verticalAlign: "middle",
                    color: "rgba(0,39,91,1)",
                  }}
                >
                  {labelMap[stat.label]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectableStats({
  boxes,
  selectedBox,
  setSelectedBox,
}: {
  boxes: typeof statsBoxes;
  selectedBox: number;
  setSelectedBox: (idx: number) => void;
}) {
  return (
    <section>
      <div className="w-full flex flex-col items-center my-4 md:my-10 p-2 md:p-0">
        <div className="text-xs md:text-[20px] font-400 text-[#FDB55E] uppercase tracking-widest mb-2 md:mb-6">
          NHỮNG CON SỐ BIẾT NÓI
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-center text-[#172D51] leading-snug mb-8 px-5 md:px-0">
          7 NĂM KIẾN TẠO NIỀM TIN CÙNG
          <br />
          HÀNG TRIỆU KHÁCH HÀNG
        </h2>
      </div>
      {/* Mobile: chỉ hiện 1 box và có thanh slide */}
      <div className="w-11/12 md:w-10/12 mx-auto mb-14">
        {/* Desktop: grid 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {boxes.map((box, idx) => {
            const isSelected = selectedBox === idx;
            let customBG = box.bgClass;
            let borderColor = isSelected ? "border-[#FF8300]" : "border-transparent";
            let ring = "";
            let _titleColor = box.titleColor;
            let _textColor = box.textColor;
            let _imgOpacity = box.imgOpacity;

            if (isSelected) {
              customBG = "bg-[#FF8300]";
              _titleColor = SELECTED_TITLE;
              _textColor = SELECTED_TEXT;
              _imgOpacity = "opacity-100";
            } else if (idx === 2) {
              customBG = "bg-white";
              _titleColor = "rgba(93,98,116,1)";
              _textColor = "rgba(0,39,91,1)";
              _imgOpacity = "opacity-60";
            }

            return (
              <div
                key={idx}
                className={`rounded-lg shadow flex flex-col justify-between p-5 sm:p-6 min-h-[178px] w-full ${customBG} ${borderColor} ${ring} border-2 transition-all`}
                style={{
                  width: "100%",
                  maxWidth: 442,
                  height: "auto",
                  minHeight: 240,
                  boxShadow: isSelected
                    ? "0 0 0 4px #FFD599, 0 1px 4px 0 rgba(0,0,0,0.08)"
                    : undefined,
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
                tabIndex={0}
                onClick={() => setSelectedBox(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedBox(idx);
                }}
              >
                <div className="flex flex-row items-start w-full">
                  <img
                    src={box.img}
                    alt=""
                    className={`w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] mr-4 self-start ${_imgOpacity}`}
                  />
                  <div className="flex flex-col flex-1 items-end text-right">
                    <div
                      style={{
                        fontFamily: "Lora, serif",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "28px",
                        letterSpacing: "0%",
                        color: _titleColor,
                        width: "fit-content",
                        textAlign: "right",
                        transition: "color 0.12s",
                      }}
                      className="mb-2 sm:text-[22px] md:text-[24px]"
                    >
                      {box.title}
                    </div>
                  </div>
                </div>
                <div
                  className="mt-4 text-left"
                  style={{
                    color: _textColor,
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    fontFamily: "inherit",
                    transition: "color 0.12s",
                  }}
                >
                  {box.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: chỉ hiển thị 1 box, có slider dots */}
        <div className="block md:hidden">
          {(() => {
            const box = boxes[selectedBox];
            let customBG = box.bgClass;
            let _titleColor = box.titleColor;
            let _textColor = box.textColor;
            let _imgOpacity = box.imgOpacity;

            // Bắt buộc luôn active trên mobile
            customBG = "bg-[#FF8300]";
            _titleColor = SELECTED_TITLE;
            _textColor = SELECTED_TEXT;
            _imgOpacity = "opacity-100";

            return (
              <div
                className={`rounded-lg shadow flex flex-col justify-between p-5 sm:p-6 min-h-[178px] w-full ${customBG} border-[#FF8300] border-2 transition-all`}
                style={{
                  width: "100%",
                  maxWidth: 442,
                  height: "auto",
                  minHeight: 240,
                  boxShadow: "0 0 0 4px #FFD599, 0 1px 4px 0 rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
                tabIndex={0}
              >
                <div className="flex flex-row items-start w-full">
                  <img
                    src={box.img}
                    alt=""
                    className={`w-[60px] h-[60px] mr-4 self-start ${_imgOpacity}`}
                  />
                  <div className="flex flex-col flex-1 items-end text-right">
                    <div
                      style={{
                        fontFamily: "Lora, serif",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "28px",
                        letterSpacing: "0%",
                        color: _titleColor,
                        width: "fit-content",
                        textAlign: "right",
                        transition: "color 0.12s",
                      }}
                      className="mb-2 text-[18px]"
                    >
                      {box.title}
                    </div>
                  </div>
                </div>
                <div
                  className="mt-4 text-left"
                  style={{
                    color: _textColor,
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    fontFamily: "inherit",
                    transition: "color 0.12s",
                  }}
                >
                  {box.desc}
                </div>
              </div>
            );
          })()}

          {/* Slider dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {boxes.map((_, idx) => (
              <button
                type="button"
                key={idx}
                className={`h-2 w-2 rounded-full transition-all duration-150 ${
                  selectedBox === idx ? "bg-[#FF8300] w-4" : "bg-gray-300"
                }`}
                style={{
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                aria-label={`Đổi box ${idx + 1}`}
                onClick={() => setSelectedBox(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Main Page ---

export default function DichVu() {
  const [selectedBox, setSelectedBox] = useState<number>(2);

  return (
    <main className="min-h-screen w-full">
      <Header />
      <ResponsiveHero />
      <LineImg />
      <PartnersSection />
      <LineImg />
      <FactStatsGrid />
      <LineImg alt="Line kjc" />
      <SelectableStats
        boxes={statsBoxes}
        selectedBox={selectedBox}
        setSelectedBox={setSelectedBox}
      />
      <LineImg />
    </main>
  );
}
