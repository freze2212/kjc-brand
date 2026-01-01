import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description: "Tìm hiểu về thương hiệu của chúng tôi, sứ mệnh, tầm nhìn và đội ngũ chuyên nghiệp",
};

export default function VeChungToi() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="w-10/12 mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Về Chúng Tôi</h1>
          
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Chúng tôi là một thương hiệu chuyên nghiệp với nhiều năm kinh nghiệm trong ngành, 
              luôn cam kết mang đến những giải pháp tốt nhất cho khách hàng.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Sứ mệnh của chúng tôi là mang đến những sản phẩm và dịch vụ chất lượng cao, 
              đáp ứng mọi nhu cầu của khách hàng với sự tận tâm và chuyên nghiệp.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Sứ Mệnh</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Mang đến những giải pháp tối ưu và dịch vụ chất lượng cao, 
                góp phần phát triển bền vững cho khách hàng và cộng đồng.
              </p>
            </div>
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Tầm Nhìn</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Trở thành thương hiệu hàng đầu trong lĩnh vực, được khách hàng 
                tin tưởng và đối tác đánh giá cao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

