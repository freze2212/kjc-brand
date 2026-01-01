import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tin Tức",
  description: "Cập nhật tin tức mới nhất về thương hiệu, sản phẩm và các hoạt động của chúng tôi",
};

const newsItems = [
  {
    id: 1,
    title: "Ra mắt sản phẩm mới 2024",
    date: "15/03/2024",
    excerpt: "Chúng tôi tự hào giới thiệu dòng sản phẩm mới với nhiều tính năng đột phá...",
  },
  {
    id: 2,
    title: "Hợp tác với đối tác chiến lược",
    date: "10/03/2024",
    excerpt: "Thông báo về việc hợp tác với các đối tác hàng đầu trong ngành...",
  },
  {
    id: 3,
    title: "Giải thưởng xuất sắc năm 2024",
    date: "05/03/2024",
    excerpt: "Vinh dự nhận giải thưởng về chất lượng dịch vụ và sự đổi mới...",
  },
  {
    id: 4,
    title: "Sự kiện triển lãm công nghệ",
    date: "28/02/2024",
    excerpt: "Tham gia triển lãm công nghệ lớn nhất trong năm với nhiều sản phẩm mới...",
  },
  {
    id: 5,
    title: "Cập nhật tính năng mới",
    date: "20/02/2024",
    excerpt: "Các tính năng mới được cập nhật để cải thiện trải nghiệm người dùng...",
  },
];

export default function TinTuc() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="w-10/12 mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin Tức</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Cập nhật mới nhất về thương hiệu và các hoạt động của chúng tôi
        </p>
        <div className="space-y-8 w-full">
          {newsItems.map((news) => (
            <article 
              key={news.id} 
              className="border-b border-gray-200 dark:border-gray-700 pb-8 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-2xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  {news.title}
                </h2>
                <time className="text-sm text-gray-500 whitespace-nowrap">
                  {news.date}
                </time>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {news.excerpt}
              </p>
              <a 
                href="#" 
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Đọc thêm →
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

