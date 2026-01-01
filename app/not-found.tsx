import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="w-10/12 mx-auto px-4 py-32">
        <div className="w-full text-center">
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Trang không tìm thấy</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Về Trang Chủ
          </Link>
        </div>
      </div>
    </main>
  );
}

