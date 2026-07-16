/* GREENMART - DANH MỤC SẢN PHẨM */

/* ===== san-pham.js ===== */
/* =========================================================
   TRANG DANH MỤC SẢN PHẨM
   Lọc - Sắp xếp - Phân trang, chạy hoàn toàn phía client
   trên dữ liệu mẫu js/du-lieu-san-pham.js
   ========================================================= */

const SO_SP_MOI_TRANG = 8;

const TEN_DANH_MUC = {
  "rau-cu": "Rau củ sạch",
  "trai-cay": "Trái cây tươi",
  "thit-ca": "Thịt và cá",
  "trung-sua": "Trứng và sữa",
  "huu-co": "Thực phẩm hữu cơ",
  "ngu-coc": "Ngũ cốc & hạt"
};

let trangHienTai = 1;

function layThamSoUrl(ten) {
  const params = new URLSearchParams(window.location.search);
  return params.get(ten);
}

function locVaSapXepSanPham() {
  const oTim = document.getElementById("o-tim-kiem-sp");
  let ketQua = [...DANH_SACH_SAN_PHAM];

  // Tìm kiếm theo từ khóa (nếu có trên URL hoặc ô tìm kiếm)
  const tuKhoa = (oTim && oTim.value.trim().toLowerCase()) || "";
  if (tuKhoa) {
    ketQua = ketQua.filter((sp) => sp.ten.toLowerCase().includes(tuKhoa));
  }

  // Lọc theo danh mục đã chọn (checkbox)
  const danhMucChon = [...document.querySelectorAll("#loc-danh-muc input:checked")].map(
    (cb) => cb.value
  );
  if (danhMucChon.length > 0) {
    ketQua = ketQua.filter((sp) => danhMucChon.includes(sp.danhMuc));
  }

  // Lọc theo giá tối đa
  const giaToiDa = Number(document.getElementById("loc-gia").value);
  if (giaToiDa < 1000000) {
    ketQua = ketQua.filter((sp) => sp.gia <= giaToiDa);
  }

  // Lọc theo nguồn gốc
  const nguonGocChon = document.querySelector("#loc-nguon-goc input:checked");
  if (nguonGocChon) {
    ketQua = ketQua.filter((sp) => sp.nguonGoc === nguonGocChon.value);
  }

  // Lọc hữu cơ
  if (document.getElementById("loc-huu-co").checked) {
    ketQua = ketQua.filter((sp) => sp.huuCo);
  }

  // Lọc còn hàng
  if (document.getElementById("loc-con-hang").checked) {
    ketQua = ketQua.filter((sp) => sp.conHang);
  }

  // Lọc đánh giá tối thiểu
  const saoToiThieu = Number(
    document.getElementById("loc-danh-gia").dataset.giaTri || 0
  );
  if (saoToiThieu > 0) {
    ketQua = ketQua.filter((sp) => sp.danhGia >= saoToiThieu);
  }

  // Sắp xếp
  const kieuSapXep = document.getElementById("o-sap-xep").value;
  if (kieuSapXep === "gia-tang") ketQua.sort((a, b) => a.gia - b.gia);
  if (kieuSapXep === "gia-giam") ketQua.sort((a, b) => b.gia - a.gia);
  if (kieuSapXep === "danh-gia") ketQua.sort((a, b) => b.danhGia - a.danhGia);

  return ketQua;
}

function renderTrangSanPham() {
  const ketQua = locVaSapXepSanPham();
  const tongSo = ketQua.length;
  const tongSoTrang = Math.max(1, Math.ceil(tongSo / SO_SP_MOI_TRANG));
  if (trangHienTai > tongSoTrang) trangHienTai = tongSoTrang;

  const batDau = (trangHienTai - 1) * SO_SP_MOI_TRANG;
  const ketQuaTrang = ketQua.slice(batDau, batDau + SO_SP_MOI_TRANG);

  const luoi = document.getElementById("luoi-san-pham");
  const trangThaiRong = document.getElementById("trang-thai-rong");

  luoi.innerHTML = ketQuaTrang.map(taoTheSanPham).join("");
  trangThaiRong.style.display = tongSo === 0 ? "block" : "none";

  document.getElementById("dem-ket-qua").textContent = `${tongSo} sản phẩm được tìm thấy`;

  renderPhanTrang(tongSoTrang);
}

function renderPhanTrang(tongSoTrang) {
  const vung = document.getElementById("phan-trang");
  if (tongSoTrang <= 1) {
    vung.innerHTML = "";
    return;
  }

  let html = `<button data-trang="${trangHienTai - 1}" ${trangHienTai === 1 ? "disabled" : ""} aria-label="Trang trước">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
  </button>`;

  for (let i = 1; i <= tongSoTrang; i++) {
    if (i === 1 || i === tongSoTrang || Math.abs(i - trangHienTai) <= 1) {
      html += `<button data-trang="${i}" class="${i === trangHienTai ? "dang-hoat-dong" : ""}">${i}</button>`;
    } else if (Math.abs(i - trangHienTai) === 2) {
      html += `<span class="ba-cham">…</span>`;
    }
  }

  html += `<button data-trang="${trangHienTai + 1}" ${trangHienTai === tongSoTrang ? "disabled" : ""} aria-label="Trang sau">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  </button>`;

  vung.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("luoi-san-pham")) return;
  // Áp dụng danh mục từ URL (?danh-muc=rau-cu) khi vào trang từ trang chủ
  const danhMucUrl = layThamSoUrl("danh-muc");
  if (danhMucUrl) {
    const cb = document.querySelector(`#loc-danh-muc input[value="${danhMucUrl}"]`);
    if (cb) cb.checked = true;
    const tenDanhMuc = TEN_DANH_MUC[danhMucUrl];
    if (tenDanhMuc) document.getElementById("tieu-de-danh-muc").textContent = tenDanhMuc;
  }

  // Áp dụng từ khóa tìm kiếm từ URL (?tim=...)
  const tuKhoaUrl = layThamSoUrl("tim");
  if (tuKhoaUrl) {
    document.getElementById("o-tim-kiem-sp").value = tuKhoaUrl;
    document.getElementById("tieu-de-danh-muc").textContent = `Kết quả cho "${tuKhoaUrl}"`;
  }

  renderTrangSanPham();

  // Lắng nghe thay đổi mọi bộ lọc
  document
    .querySelectorAll(
      "#loc-danh-muc input, #loc-nguon-goc input, #loc-huu-co, #loc-con-hang, #o-sap-xep"
    )
    .forEach((el) => {
      el.addEventListener("change", () => {
        trangHienTai = 1;
        renderTrangSanPham();
      });
    });

  // Ô tìm kiếm - lọc theo thời gian thực (gõ tới đâu lọc tới đó)
  const oTim = document.getElementById("o-tim-kiem-sp");
  if (oTim) {
    oTim.addEventListener("input", () => {
      trangHienTai = 1;
      renderTrangSanPham();
    });
  }

  // Thanh trượt khoảng giá
  const ocGia = document.getElementById("loc-gia");
  ocGia.addEventListener("input", () => {
    const giaTri = Number(ocGia.value);
    document.getElementById("nhan-gia-toi-da").textContent =
      giaTri >= 1000000 ? "1.000.000đ+" : dinhDangTien(giaTri);
    trangHienTai = 1;
    renderTrangSanPham();
  });

  // Bộ lọc đánh giá sao (bấm vào sao thứ mấy sẽ lọc từ đó trở lên)
  const vungSao = document.getElementById("loc-danh-gia");
  const sao = vungSao.querySelectorAll("svg");
  sao.forEach((s, chiSo) => {
    s.style.cursor = "pointer";
    s.addEventListener("click", () => {
      const giaTriMoi = chiSo + 1 === Number(vungSao.dataset.giaTri) ? 0 : chiSo + 1;
      vungSao.dataset.giaTri = giaTriMoi;
      sao.forEach((s2, i2) => {
        s2.style.opacity = i2 < giaTriMoi ? "1" : "0.35";
      });
      trangHienTai = 1;
      renderTrangSanPham();
    });
  });

  // Nút xóa tất cả bộ lọc
  document.getElementById("nut-xoa-loc").addEventListener("click", () => {
    document.querySelectorAll("#loc-danh-muc input").forEach((cb) => (cb.checked = false));
    document.querySelectorAll("#loc-nguon-goc input").forEach((r) => (r.checked = false));
    document.getElementById("loc-huu-co").checked = false;
    document.getElementById("loc-con-hang").checked = false;
    document.getElementById("loc-gia").value = 1000000;
    document.getElementById("nhan-gia-toi-da").textContent = "1.000.000đ+";
    vungSao.dataset.giaTri = 0;
    sao.forEach((s2) => (s2.style.opacity = "1"));
    if (oTim) oTim.value = "";
    document.getElementById("tieu-de-danh-muc").textContent = "Sản phẩm sạch";
    trangHienTai = 1;
    renderTrangSanPham();
  });

  // Bấm số trang
  document.getElementById("phan-trang").addEventListener("click", (su_kien) => {
    const nut = su_kien.target.closest("button");
    if (!nut || nut.disabled) return;
    trangHienTai = Number(nut.dataset.trang);
    renderTrangSanPham();
    window.scrollTo({ top: 260, behavior: "smooth" });
  });

  // Mở/đóng bộ lọc trên di động
  const nutMoLoc = document.getElementById("nut-mo-loc");
  const khoiLocWrap = document.getElementById("khoi-loc-wrap");
  if (nutMoLoc) {
    nutMoLoc.addEventListener("click", () => khoiLocWrap.classList.toggle("mo"));
  }
});
