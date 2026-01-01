# Trang Thương Hiệu

Trang web thương hiệu chuyên nghiệp được xây dựng với Next.js 14, TypeScript và Tailwind CSS.

## ✨ Tính năng

- ✅ **7 trang** với navigation header đầy đủ
- ✅ **Responsive design** - Tối ưu cho mọi thiết bị
- ✅ **Mobile menu** - Hamburger menu cho mobile
- ✅ **Dark mode support** - Tự động theo hệ thống
- ✅ **SEO tối ưu** - Metadata, Open Graph, sitemap, robots.txt
- ✅ **Footer chuyên nghiệp** - Với social links và thông tin liên hệ
- ✅ **404 page** - Trang lỗi thân thiện
- ✅ **Static export** - Có thể deploy lên bất kỳ hosting tĩnh nào
- ✅ **TypeScript** - Type safety đầy đủ
- ✅ **Animations & Transitions** - UI/UX mượt mà
- ✅ **Accessibility** - ARIA labels và semantic HTML

## 🚀 Cài đặt

```bash
npm install
```

## 💻 Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem.

## 📦 Build cho production

```bash
npm run build
```

File tĩnh sẽ được tạo trong thư mục `out/`, có thể deploy lên:
- Vercel (khuyến nghị)
- Netlify
- GitHub Pages
- Cloudflare Pages
- Bất kỳ hosting tĩnh nào

## 📄 Cấu trúc trang

1. **Trang Chủ** (`/`) - Hero section với CTA buttons
2. **Về Chúng Tôi** (`/ve-chung-toi`) - Sứ mệnh, tầm nhìn
3. **Sản Phẩm** (`/san-pham`) - Grid layout với product cards
4. **Dịch Vụ** (`/dich-vu`) - Danh sách dịch vụ với icons
5. **Dự Án** (`/du-an`) - Portfolio với gradient images
6. **Tin Tức** (`/tin-tuc`) - Blog layout với dates
7. **Liên Hệ** (`/lien-he`) - Contact form + thông tin liên hệ

## 🛠 Công nghệ sử dụng

- **Next.js 14** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Google Fonts cho typography
- **ESLint** - Code quality

## 📁 Cấu trúc thư mục

```
thuong-hieu/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout với metadata
│   ├── page.tsx           # Trang chủ
│   ├── globals.css        # Global styles
│   ├── not-found.tsx      # 404 page
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap.xml
│   └── [pages]/           # Các trang khác
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
└── lib/                    # Utilities
    └── constants.ts       # Constants và config
```

## 🎨 Customization

### Thay đổi thông tin liên hệ
Chỉnh sửa file `lib/constants.ts`:

```typescript
export const CONTACT_INFO = {
  email: "your-email@example.com",
  phone: "0123 456 789",
  // ...
}
```

### Thay đổi màu sắc
Chỉnh sửa `tailwind.config.ts` hoặc sử dụng các class Tailwind có sẵn.

### Thêm trang mới
1. Tạo folder mới trong `app/`
2. Thêm route vào `lib/constants.ts` → `NAV_ITEMS`
3. Header sẽ tự động cập nhật

## 📝 License

MIT

