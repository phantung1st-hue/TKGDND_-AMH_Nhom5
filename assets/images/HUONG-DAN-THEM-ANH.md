# Hướng dẫn thêm hình ảnh cho website GreenMart

Toàn bộ code đã được viết sẵn với đường dẫn ảnh cụ thể bên dưới.
Bạn chỉ cần **thêm đúng file ảnh, đúng tên, đúng thư mục** là ảnh sẽ
tự động hiển thị trên website (không cần sửa code).

Nếu chưa kịp thêm ảnh, website vẫn chạy bình thường vì đã có
ảnh giữ chỗ mặc định (`assets/images/placeholder.svg`).

---

## 1. assets/images/logo/
| Tên file | Mô tả | Kích thước gợi ý |
|---|---|---|
| favicon.png | Icon hiển thị trên tab trình duyệt | 64x64px |

## 2. assets/images/banner/
| Tên file | Dùng ở trang | Kích thước gợi ý |
|---|---|---|
| banner-trang-chu.jpg | Ảnh nền hero trang chủ | 1600x900px |
| banner-khuyen-mai.jpg | Băng rôn ưu đãi 30% trang chủ | 1200x600px |
| banner-dang-nhap.jpg | Ảnh nền cột trái trang đăng nhập | 1000x1200px |
| banner-dang-ky.jpg | Ảnh nền cột trái trang đăng ký | 1000x1200px |
| cua-hang-lien-he.jpg | Ảnh cửa hàng trong trang liên hệ | 600x450px |
| ~~ban-do-cua-hang.jpg~~ | (Đã thay bằng Google Maps nhúng trực tiếp - iframe trong lien-he.html) | - |

## 3. assets/images/danh-muc/ (ảnh tròn danh mục ở trang chủ)
| Tên file | Danh mục |
|---|---|
| rau-cu-sach.jpg | Rau củ sạch |
| trai-cay-tuoi.jpg | Trái cây tươi |
| thit-va-ca.jpg | Thịt và cá |
| trung-va-sua.jpg | Trứng và sữa |
| thuc-pham-huu-co.jpg | Thực phẩm hữu cơ |
| ngu-coc-hat.jpg | Ngũ cốc & hạt |

> Kích thước gợi ý: 300x300px (ảnh vuông, sẽ được bo tròn tự động).

## 4. assets/images/san-pham/ (ảnh sản phẩm - dùng ở trang chủ, danh mục, chi tiết)
Kích thước gợi ý: 800x800px (ảnh vuông 1:1).

ca-chua-huu-co.jpg, ca-chua-huu-co-2.jpg, ca-chua-huu-co-3.jpg (ảnh phụ),
rau-cai-xanh.jpg, bo-sap-tay-nguyen.jpg, cam-sanh-huu-co.jpg,
thit-heo-sach.jpg, ca-hoi-na-uy.jpg, trung-ga-tha-vuon.jpg,
sua-tuoi-thanh-trung.jpg, rau-muong-huu-co.jpg, nho-mau-don.jpg,
cai-kale-huu-co.jpg, ca-rot-baby.jpg, ot-chuong-hon-hop.jpg,
ca-chua-bi.jpg, chuoi-laba.jpg, mat-ong-hoa-nhan.jpg, rau-cai-ngot.jpg,
ngu-coc-hat.jpg

> Muốn thêm sản phẩm mới? Mở file `js/du-lieu-san-pham.js`, sao chép
> 1 khối sản phẩm có sẵn, đổi thông tin và đặt tên ảnh tương ứng.

## 5. assets/images/tin-tuc/ (ảnh bài viết)
Kích thước gợi ý: 900x600px (tỉ lệ 3:2).

banner-tin-tuc.jpg (ảnh nổi bật), loi-ich-bo-sap.jpg, bao-quan-rau-cu.jpg,
salad-uc-ga.jpg, nuoc-ep-xanh.jpg, che-do-an-xanh.jpg, phan-biet-huu-co.jpg,
rau-kale.jpg, nam-organic.jpg, trai-cay-theo-mua.jpg

> Muốn thêm bài viết mới? Mở file `js/du-lieu-tin-tuc.js` và làm tương tự.

## 6. assets/images/avatar/ (ảnh đại diện khách hàng - trang đăng ký)
| Tên file |
|---|
| khach-hang-1.jpg |
| khach-hang-2.jpg |

Kích thước gợi ý: 100x100px (ảnh vuông).

---

## Mẹo
- Nên nén ảnh trước khi thêm vào (dùng tinypng.com hoặc squoosh.app)
  để website tải nhanh hơn.
- Định dạng `.jpg` cho ảnh chụp, `.png` cho ảnh có nền trong suốt (logo).
- Giữ nguyên tên file (không dấu, chữ thường, gạch nối) để không phải sửa code.
