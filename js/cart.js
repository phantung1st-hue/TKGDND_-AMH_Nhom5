/* GREENMART - GIỎ HÀNG */

/* ===== gio-hang.js ===== */
/* =========================================================
   TRANG GIỎ HÀNG
   ========================================================= */

let maGiamGiaDaApDung = 0;

const MA_GIAM_GIA_HOP_LE = {
  GREEN10: 0.1,
  GREEN20: 0.2
};

function renderTrangGioHang() {
  if (!document.getElementById("vung-noi-dung-gio-hang")) return;
  const gioHang = docGioHang();
  const vung = document.getElementById("vung-noi-dung-gio-hang");

  if (gioHang.length === 0) {
    vung.innerHTML = `
      <div class="gio-hang-rong">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <h2>Giỏ hàng của bạn đang trống</h2>
        <p>Hãy khám phá các sản phẩm tươi sạch của GreenMart và thêm vào giỏ hàng nhé.</p>
        <a href="san-pham.html" class="nut nut-cam">Bắt đầu mua sắm</a>
      </div>
    `;
    return;
  }

  const tamTinh = tinhTamTinhGioHang();
  const phiGiaoHang = tamTinh >= MUC_MIEN_PHI_SHIP ? 0 : PHI_GIAO_HANG_MAC_DINH;
  const soTienGiam = Math.round(tamTinh * maGiamGiaDaApDung);
  const tongThanhToan = tamTinh + phiGiaoHang - soTienGiam;
  const conThieu = Math.max(0, MUC_MIEN_PHI_SHIP - tamTinh);
  const phanTramTienTrinh = Math.min(100, (tamTinh / MUC_MIEN_PHI_SHIP) * 100);

  const dongSanPhamHtml = gioHang
    .map((dong) => {
      const sp = timSanPhamTheoId(dong.id);
      if (!sp) return "";
      const giaTheoQuyCach = layGiaTheoTrongLuong(sp, dong.trongLuong);
      const thanhTien = giaTheoQuyCach * dong.soLuong;
      return `
        <div class="dong-san-pham-gio" data-id="${dong.id}" data-trong-luong="${dong.trongLuong || ""}">
          <div class="khung-anh">
            <img src="${sp.hinhAnh}" alt="${sp.ten}" onerror="this.src='assets/images/placeholder.svg'">
          </div>
          <div class="dong-san-pham-gio-info">
            <h3>${sp.ten}</h3>
            <div class="don-vi">Đơn vị: ${dong.trongLuong || sp.donVi}</div>
            <div class="gia-hien-tai">${dinhDangTien(giaTheoQuyCach)}</div>
          </div>
          <div class="buoc-so-luong">
            <button type="button" class="nut-giam-gio">−</button>
            <input type="text" value="${dong.soLuong}" readonly>
            <button type="button" class="nut-tang-gio">+</button>
          </div>
          <div class="dong-san-pham-gio-thanh-tien">${dinhDangTien(thanhTien)}</div>
          <button class="nut-xoa-sp" aria-label="Xóa sản phẩm ${sp.ten}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
          </button>
        </div>
      `;
    })
    .join("");

  vung.innerHTML = `
    <div class="thanh-mien-phi-ship">
      <div class="thanh-mien-phi-ship-hang">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="7" width="15" height="11" rx="1"/><path d="M16 10h3.5L23 14v4h-7"/><circle cx="6" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>
        ${
          conThieu > 0
            ? `<span>Bạn còn thiếu <strong>${dinhDangTien(conThieu)}</strong> để được miễn phí giao hàng.</span>`
            : `<span><strong>Chúc mừng!</strong> Đơn hàng của bạn được miễn phí giao hàng.</span>`
        }
      </div>
      <div class="thanh-tien-trinh"><div class="thanh-tien-trinh-fill" style="width:${phanTramTienTrinh}%"></div></div>
    </div>

    <div class="bo-cuc-gio-hang">
      <div>
        <div class="danh-sach-gio-hang">${dongSanPhamHtml}</div>
        <a href="san-pham.html" class="tiep-tuc-mua-hang">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Tiếp tục mua hàng
        </a>
      </div>

      <div class="khoi-tong-cong">
        <h2>Tổng cộng</h2>
        <div class="dong-tong-cong"><span>Tạm tính</span><span>${dinhDangTien(tamTinh)}</span></div>
        <div class="dong-tong-cong"><span>Phí giao hàng</span><span>${phiGiaoHang === 0 ? "Miễn phí" : dinhDangTien(phiGiaoHang)}</span></div>
        ${
          soTienGiam > 0
            ? `<div class="dong-tong-cong giam-gia"><span>Mã giảm giá</span><span>-${dinhDangTien(soTienGiam)}</span></div>`
            : ""
        }

        <div class="hang-ma-giam-gia">
          <input type="text" class="o-nhap" id="o-ma-giam-gia" placeholder="Nhập mã ưu đãi">
          <button class="nut nut-vien nut-nho" id="nut-ap-dung-ma">Áp dụng</button>
        </div>

        <hr>

        <div class="dong-tong-thanh-toan">
          <span>Tổng thanh toán</span>
          <span class="gia-hien-tai">${dinhDangTien(tongThanhToan)}</span>
        </div>
        <div class="ghi-chu-vat">(Đã bao gồm VAT nếu có)</div>

        <a href="thanh-toan.html" class="nut nut-cam nut-rong">
          Tiến hành thanh toán
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>

        <div class="bao-mat-thanh-toan">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
          Thanh toán an toàn & Bảo mật
        </div>
      </div>
    </div>
  `;

  ganSuKienGioHang();
}

function ganSuKienGioHang() {
  document.querySelectorAll(".dong-san-pham-gio").forEach((dong) => {
    const id = dong.dataset.id;
    const trongLuong = dong.dataset.trongLuong || null;
    const oSoLuong = dong.querySelector("input");

    dong.querySelector(".nut-giam-gio").addEventListener("click", () => {
      const moi = Number(oSoLuong.value) - 1;
      capNhatSoLuongGio(id, trongLuong, moi);
      renderTrangGioHang();
    });

    dong.querySelector(".nut-tang-gio").addEventListener("click", () => {
      const moi = Number(oSoLuong.value) + 1;
      capNhatSoLuongGio(id, trongLuong, moi);
      renderTrangGioHang();
    });

    dong.querySelector(".nut-xoa-sp").addEventListener("click", () => {
      xoaKhoiGioHang(id, trongLuong);
      hienThiToast("Đã xóa sản phẩm khỏi giỏ hàng");
      renderTrangGioHang();
    });
  });

  const nutApDung = document.getElementById("nut-ap-dung-ma");
  if (nutApDung) {
    nutApDung.addEventListener("click", () => {
      const ma = document.getElementById("o-ma-giam-gia").value.trim().toUpperCase();
      if (MA_GIAM_GIA_HOP_LE[ma]) {
        maGiamGiaDaApDung = MA_GIAM_GIA_HOP_LE[ma];
        hienThiToast(`Áp dụng mã "${ma}" thành công!`);
      } else {
        hienThiToast("Mã giảm giá không hợp lệ hoặc đã hết hạn");
        maGiamGiaDaApDung = 0;
      }
      renderTrangGioHang();
    });
  }
}

document.addEventListener("DOMContentLoaded", renderTrangGioHang);
