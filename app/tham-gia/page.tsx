import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tham Gia",
  description: "Tham gia cùng KJC ngay hôm nay",
};

export default function ThamGia() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="w-10/12 mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tham Gia Cùng KJC</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Trở thành một phần của cộng đồng KJC và cùng nhau phát triển
          </p>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Đăng Ký Ngay</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Họ tên"
                className="w-full px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Gửi Đăng Ký
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hoặc liên hệ trực tiếp với chúng tôi
            </p>
            <a
              href="/lien-he"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Liên Hệ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

