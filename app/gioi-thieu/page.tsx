import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import ScrollableContainer from "@/components/ScrollableContainer";

// Tách các section thành các component nhỏ cho chuyên nghiệp và dễ bảo trì hơn
function BannerSection() {
  return (
    <div className="w-full relative">
      {/* Desktop Banner */}
      <Image
        src="/banner.webp"
        alt="Banner"
        width={1920}
        height={600}
        className="hidden md:block w-full h-auto object-cover"
        priority
      />
      
      {/* Mobile Banner */}
      <Image
        src="/banner-mb.webp"
        alt="Banner Mobile"
        width={768}
        height={600}
        className="md:hidden w-full h-auto object-cover"
        priority
      />
      
      {/* Ảnh text-banner căn giữa, cách lề dưới 20px, overlay trên banner */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center w-full px-4">
        <div className="relative flex flex-col items-center w-full max-w-[411px] md:max-w-none">
          {/* Desktop text-banner */}
          <div className="relative flex flex-col items-center w-full max-w-[411px] md:max-w-none">
  {/* Layer blur bằng kích thước ảnh */}
              <div className="absolute flex justify-center md:w-[1092px] md:h-[220px] w-[100%] h-auto backdrop-blur-[0.1px] bg-[rgb(0_0_0_/_16%)]"></div>

              {/* Desktop text-banner */}
              <Image
                src="/text-banner.webp"
                alt="Text Banner"
                width={1092}
                height={220}
                className="hidden md:block h-auto object-contain relative z-10 max-w-full"
              />
            </div>

          {/* Mobile text-banner - responsive scale */}
          <Image
            src="/text-banner-mb.webp"
            alt="Text Banner Mobile"
            width={411}
            height={232}
            className="md:hidden w-full h-auto object-contain z-0"
            style={{ 
              aspectRatio: '411/232'
            }}
          />
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="w-full md:w-10/12 mx-auto py-8 md:py-16 px-4 md:px-0">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-20">
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start items-center">
          <div className="w-full max-w-[320px] md:max-w-[696px] aspect-[696/996] relative flex items-center">
            <Image
              src="/juven-player.webp"
              alt="Juven Player"
              width={696}
              height={996}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col items-center md:items-start gap-4">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-12">
            <Image
              src="/juve-history.webp"
              alt="Juve History"
              width={410}
              height={100}
              className="w-[65vw] max-w-[260px] md:w-[410px] h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-[847px] relative">
            {/* Hiển thị ảnh history-info.webp cho desktop, history-info-mb.webp cho mobile */}
            <Image
              src="/history-info.webp"
              alt="History Info"
              width={847}
              height={831}
              className="hidden md:block w-full h-auto object-contain"
              style={{ aspectRatio: '847/831' }}
            />
            <Image
              src="/history-info-mb.webp"
              alt="History Info Mobile"
              width={402}
              height={900}
              className="md:hidden w-full h-auto object-contain"
              style={{ aspectRatio: '402/900' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  return (
    <section className="w-full md:w-10/12 mx-auto py-8 px-4 md:px-0">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-20">
        <div className="col-span-12 md:col-span-6 flex flex-col items-center md:items-start space-y-4 max-w-full md:max-w-[632px]">
          <Image
            src="/kjc-juven.webp"
            alt="KJC Juven"
            width={370}
            height={100}
            className="w-[55vw] max-w-[220px] md:w-[370px] h-auto object-contain"
          />
          <p
            style={{
              fontWeight: 700,
              lineHeight: "122%",
              letterSpacing: "-0.03em",
              verticalAlign: "middle",
              textTransform: "uppercase",
              fontFamily: "inherit",
            }}
            className="font-bold uppercase text-[clamp(28px,6vw,48px)] text-center md:text-left"
          >
            Hợp Tác Chiến Lược, Đẳng Cấp Toàn Cầu.
          </p>
          <p
            style={{
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "-0.03em",
              color: "rgba(87, 87, 87, 1)",
              verticalAlign: "middle",
              fontFamily: "inherit",
            }}
            className="text-[clamp(14px,3.5vw,16px)] text-center md:text-left"
          >
            Sự kết hợp giữa bản sắc thể thao đỉnh cao và bề dày thành tích của Juventus cùng uy tín thương hiệu của Liên minh KJC hứa hẹn sẽ tạo nên một cột mốc quan trọng, lan tỏa niềm đam mê bóng đá và thúc đẩy sự phát triển bền vững của cộng đồng giải trí – thể thao toàn cầu. Hãy cùng chờ đón những dấu ấn nổi bật và những khoảnh khắc đáng nhớ từ mối quan hệ hợp tác đầy tiềm năng này.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-start items-start">
          <Image
            src="/collab.webp"
            alt="Collaboration"
            width={840}
            height={516}
            className="w-full max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function AchievementSection() {
  return (
    <section
      className="w-full py-8 md:py-16"
      style={{
        backgroundImage: "url('/bg-section-3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full md:w-10/12 mx-auto px-4 md:px-0">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-0">
          <div className="flex items-center justify-center w-[21vw] max-w-[85px] md:w-[105px] md:max-w-none aspect-square flex-shrink-0">
            <Image
              src="/c1.webp"
              alt="Juventus Logo"
              width={105}
              height={105}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span
              style={{
                fontWeight: 600,
                lineHeight: "120%",
                color: "#FF861D",
                letterSpacing: "-0.03em",
                fontFamily: "inherit",
                textTransform: "uppercase",
              }}
              className="mb-0.5 text-[clamp(12px,3vw,18px)]"
            >
              THÀNH TÍCH ĐỘI BÓNG
            </span>
            <span
              style={{
                fontWeight: 800,
                lineHeight: "120%",
                color: "#101010",
                fontFamily: "inherit",
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
              }}
              className="text-[clamp(24px,6vw,48px)]"
            >
              JUVENTUS FC
            </span>
          </div>
        </div>
        <div className="w-full mx-auto mt-6 md:mt-8">
          <ScrollableContainer>
            {[
              {
                src: "/scudetto.webp",
                alt: "Scudetto",
                label: "SCUDETTO",
              },
              {
                src: "/2-c1.webp",
                alt: "European Champions Cup / Champions League",
                label: "EUROPEAN CHAMPIONS CUP / UEFA CHAMPIONS LEAGUE",
              },
              {
                src: "/coppa.webp",
                alt: "Coppa Italia",
                label: "COPPA ITALIA",
              },
              {
                src: "/intercontinental-cup.webp",
                alt: "Intercontinental Cup",
                label: "INTERCONTINENTAL CUP",
              },
              {
                src: "/uefa-cup.webp",
                alt: "UEFA Cup",
                label: "UEFA CUP",
              },
              {
                src: "/2cup-inter.webp",
                alt: "Intercontinental Cup",
                label: "INTERCONTINENTAL CUP",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[70vw] max-w-[330px] md:min-w-[330px] w-[70vw] md:w-[330px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={330}
                  height={330}
                  className="w-full h-auto object-contain aspect-square"
                />
                <span className="mt-2 text-[clamp(12px,3vw,18px)] font-semibold uppercase text-center tracking-tight px-2">
                  {item.label}
                </span>
              </div>
            ))}
          </ScrollableContainer>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="w-full py-8 md:py-16 px-4 md:px-0">
      <div className="flex flex-col items-center max-w-[1200px] mx-auto">
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            lineHeight: "122%",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#000",
          }}
          className="text-[clamp(28px,6vw,48px)] text-center"
        >
          Sự kiện nổi bật
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mt-8 md:mt-12 w-full">
          {[
            {
              src: "/events-1.webp",
              alt: "Sự kiện 1",
            },
            {
              src: "/events-2.webp",
              alt: "Sự kiện 2",
            },
            {
              src: "/events-3.webp",
              alt: "Sự kiện 3",
            },
          ].map((item, idx) => (
            <div key={idx} className="w-full max-w-[553px] aspect-[553/756]">
              <Image
                src={item.src}
                alt={item.alt}
                width={553}
                height={756}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description: "Tìm hiểu về KJC, sứ mệnh, tầm nhìn và đội ngũ chuyên nghiệp",
};

export default function GioiThieu() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <BannerSection />
      <IntroSection />
      <StrategySection />
      <AchievementSection />
      <EventsSection />
    </main>
  );
}
