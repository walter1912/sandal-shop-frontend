This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


21/9: khởi tạo dự án 
1. Xây dựng thư mục theo quy tắc 
    - assets chứa các file tĩnh được trong trang web
    - lib chứa các chỉnh sửa trong trang web: 
        + các custom hook
        + store để quản lý các state : import từ folder 'services'
        + cấu hình axios, local storage 
    - modules chứa: 
        + global-component: chứa các components được tái sử dụng ở nhiều trang.
        + golbal-styles: chứa các style được tái sử dụng nhiều.
        + mỗi module chứa:
            ~ components: chứa các component được dùng trong module
            ~ templates: chứa các trang ở trong module ; chứa file layout, error và not-found( nếu custom riêng)
    - services: 
        + chứa các thao tác với API, với phía server 
        + chứa các hàm để quản lý các state 

2. dự tính các thư viện dùng trong dự án: 
    - quản lý state: redux 
    - style: taiwind
    - thao tác với backend: axios
    ...updating
    



## các bước thực hiện 
- B1: hoàn thiện 80 - 90% UI các trang của customer 
target 5/10: 
1. hoàn thiện ui trang list-bill của customer 
    tương tự như cart nhưng có thêm tag: chờ thanh toán, đang giao, đã nhận
    đặc biệt: ở mục đã nhận => khi bấm vào bill 
    thì đến trang detail-bill tương tự như pending-bill và ở mỗi sản phẩm sẽ có thêm nút đánh giá 
    khi bấm vào thì sẽ quay lại trang sản phẩm và có phần 
    Đánh giá: 1. rate (có sẵn) 2. reiview (text + img)

2. hoàn thiện trang detail customer 
    có các chức năng: 
    2.1 update thông tin => mình đã làm r nên copy theo 
    2.2 list coupon => có sẵn CouponItem rồi, thêm Pagination nữa là đc 
IMPORTANT: PHẢI HOÀN THIỆN 80% UI CUSTOMER 

- B2: liên kết api, store giữa các trang customer 
- B2.1: tạo các services 
- B2.2: hoàn thiện logic từ trang này xong mới tới trang khác đảm bảo hoàn thiện 95%.

Một vài chức năng còn rối: 
 1. tính tổng tiền khi thanh toán 
 2. tính discount của coupon 
 3. tính phí ship
- B3: kiểm tra tất cả logic của các trang customer
- B4: tạo UI các trang admin 
- tương tự như với giao diện customer 
mở rộng: chưa có api lẫn ui
1. thêm tính năng chat khách hàng với shop 
2. thêm tính năng đăng ký bằng facebook, google 
3. thêm tính năng tạo mẫu dép cho khách hàng
4. thêm tính năng viết bài viết đánh giá cho khách hàng (cái này mình đã làm r nên copy lại là đc)
5. CHỨC NĂNG THÔNG BÁO (chưa hình dung được nó ntn => nên chắc hơi lâu)

ngày 11/10: 
target: 
1. product to bill
2. tính phí ship

 

    