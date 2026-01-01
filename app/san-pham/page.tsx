import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sản Phẩm",
  description: "Khám phá các sản phẩm chất lượng cao của chúng tôi, được thiết kế để đáp ứng mọi nhu cầu của bạn",
};

export default function SanPham() {
  const products = [
    { id: 1, name: "Sản Phẩm Premium", description: "Giải pháp cao cấp với đầy đủ tính năng" },
    { id: 2, name: "Sản Phẩm Standard", description: "Lựa chọn phù hợp cho nhu cầu cơ bản" },
    { id: 3, name: "Sản Phẩm Enterprise", description: "Giải pháp doanh nghiệp toàn diện" },
    { id: 4, name: "Sản Phẩm Custom", description: "Tùy chỉnh theo yêu cầu riêng" },
    { id: 5, name: "Sản Phẩm Starter", description: "Bắt đầu với gói cơ bản" },
    { id: 6, name: "Sản Phẩm Pro", description: "Dành cho chuyên gia và doanh nghiệp" },
  ];

  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="w-10/12 mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sản Phẩm</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Khám phá bộ sưu tập sản phẩm đa dạng của chúng tôi
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="border rounded-lg p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {product.description}
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Tìm hiểu thêm →
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

