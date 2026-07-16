/* GREENMART - CHI TIẾT TIN TỨC */

/* ===== chi-tiet-tin-tuc.js ===== */
/* =========================================================
   TRANG CHI TIẾT TIN TỨC
   ========================================================= */

function layIdBaiVietTuUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || DANH_SACH_TIN_TUC[0].id;
}

function renderChiTietBaiViet() {
  if (!document.getElementById("bai-viet-chi-tiet")) return;
  const id = layIdBaiVietTuUrl();
  const bv = timTinTucTheoId(id) || DANH_SACH_TIN_TUC[0];

  document.title = bv.tieuDe + " - GreenMart";
  document.getElementById("duong-dan-ten-bai-viet").textContent = bv.tieuDe;

  document.getElementById("bai-viet-chi-tiet").innerHTML = `
    <article class="bai-viet-noi-dung-chinh">
      <span class="nhan-eyebrow">${bv.danhMucTen}</span>
      <h1>${bv.tieuDe}</h1>
      <div class="thong-tin-meta-bai-viet">
        <span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          ${bv.ngay}
        </span>
        <span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>
          Đội ngũ GreenMart
        </span>
      </div>

      <div class="khung-anh anh-bia-bai-viet">
        <img src="${bv.hinhAnh}" alt="${bv.tieuDe}" onerror="this.src='assets/images/placeholder.svg'">
      </div>

      <div class="noi-dung-bai-viet">
        <p>${bv.tomTat}</p>
        <p>GreenMart luôn đặt sức khỏe của khách hàng lên hàng đầu trong mọi hoạt động, từ khâu chọn lọc nguyên liệu, kiểm định chất lượng cho đến khi sản phẩm đến tay người tiêu dùng. Chúng tôi tin rằng một chế độ dinh dưỡng lành mạnh bắt đầu từ những nguyên liệu sạch và minh bạch về nguồn gốc.</p>
        <h2>Những điều cần lưu ý</h2>
        <p>Để đạt được hiệu quả tốt nhất, bạn nên kết hợp chế độ ăn uống lành mạnh với việc lựa chọn thực phẩm tươi, theo mùa và có nguồn gốc rõ ràng. Hãy ưu tiên các sản phẩm đạt chứng nhận VietGAP hoặc hữu cơ để đảm bảo an toàn cho cả gia đình.</p>
        <p>Hy vọng những chia sẻ trên sẽ giúp ích cho bạn trong hành trình chăm sóc sức khỏe của bản thân và gia đình. Đừng quên ghé thăm GreenMart mỗi ngày để cập nhật thêm nhiều mẹo hay và ưu đãi hấp dẫn khác!</p>
      </div>

      <div class="chia-se-bai-viet">
        <span>Chia sẻ bài viết:</span>
        <a href="#" class="nut-icon" aria-label="Chia sẻ Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
        <a href="#" class="nut-icon" aria-label="Sao chép liên kết"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/></svg></a>
      </div>
    </article>

    <aside>
      <div class="khoi-sidebar-tin">
        <h3>Danh mục tin tức</h3>
        <ul class="danh-muc-tin-list">
          ${DANH_MUC_TIN_TUC.map(
            (dm) => `<li><a href="tin-tuc.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>${dm.ten}</a><span class="so-luong">${String(dm.soLuong).padStart(2, "0")}</span></li>`
          ).join("")}
        </ul>
      </div>

      <div class="khoi-sidebar-tin dang-ky">
        <h3>Đăng ký nhận tin</h3>
        <p>Nhận những mẹo chăm sóc sức khỏe mới nhất mỗi tuần.</p>
        <form class="form-ban-tin" style="display:block">
          <input type="email" placeholder="Email của bạn" required>
          <button type="submit" class="nut nut-cam nut-rong" style="height:46px">Đăng ký ngay</button>
        </form>
      </div>
    </aside>
  `;

  // Bài viết liên quan: cùng danh mục, khác bài hiện tại
  const lienQuan = DANH_SACH_TIN_TUC.filter(
    (b) => b.danhMuc === bv.danhMuc && b.id !== bv.id
  ).slice(0, 4);
  const vungLienQuan = document.getElementById("vung-bai-viet-lien-quan");
  vungLienQuan.innerHTML =
    lienQuan.length > 0
      ? lienQuan.map(taoTheBaiViet).join("")
      : `<p class="trang-thai-rong">Chưa có bài viết liên quan khác.</p>`;
}

document.addEventListener("DOMContentLoaded", renderChiTietBaiViet);
