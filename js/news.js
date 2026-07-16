/* GREENMART - TIN TỨC */

/* ===== tin-tuc.js ===== */
/* =========================================================
   TRANG TIN TỨC
   ========================================================= */

const SO_BAI_MOI_TRANG = 4;
let trangTinTucHienTai = 1;
let locDanhMucTinHienTai = "tat-ca";

function taoTheBaiViet(bv) {
  return `
    <article class="the-bai-viet">
      <a href="chi-tiet-tin-tuc.html?id=${bv.id}" class="khung-anh">
        <span class="nhan-danh-muc-bai-viet">${bv.danhMucTen}</span>
        <img src="${bv.hinhAnh}" alt="${bv.tieuDe}" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
      </a>
      <div class="the-bai-viet-ngay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        ${bv.ngay}
      </div>
      <a href="chi-tiet-tin-tuc.html?id=${bv.id}"><h3>${bv.tieuDe}</h3></a>
      <p>${bv.tomTat}</p>
      <a href="chi-tiet-tin-tuc.html?id=${bv.id}" class="lien-ket-xem-them">
        Đọc thêm
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </article>
  `;
}

function renderBaiVietNoiBat() {
  const noiBat = DANH_SACH_TIN_TUC.find((bv) => bv.noiBat) || DANH_SACH_TIN_TUC[0];
  document.getElementById("bai-viet-noi-bat").innerHTML = `
    <div class="khung-anh">
      <img src="${noiBat.hinhAnh}" alt="${noiBat.tieuDe}" onerror="this.src='assets/images/placeholder.svg'">
    </div>
    <div class="bai-viet-noi-bat-noi-dung">
      <span class="nhan-noi-bat">Nổi bật</span>
      <h2>${noiBat.tieuDe}</h2>
      <p>${noiBat.tomTat}</p>
      <a href="chi-tiet-tin-tuc.html?id=${noiBat.id}" class="nut nut-xanh">
        Xem bài viết
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  `;
}

function locBaiViet() {
  const tuKhoa = document.getElementById("o-tim-kiem-tin").value.trim().toLowerCase();
  let ketQua = DANH_SACH_TIN_TUC.filter((bv) => !bv.noiBat);

  if (locDanhMucTinHienTai !== "tat-ca") {
    ketQua = ketQua.filter((bv) => bv.danhMuc === locDanhMucTinHienTai);
  }
  if (tuKhoa) {
    ketQua = ketQua.filter((bv) => bv.tieuDe.toLowerCase().includes(tuKhoa));
  }
  return ketQua;
}

function renderLuoiBaiViet() {
  const ketQua = locBaiViet();
  const tongSoTrang = Math.max(1, Math.ceil(ketQua.length / SO_BAI_MOI_TRANG));
  if (trangTinTucHienTai > tongSoTrang) trangTinTucHienTai = tongSoTrang;

  const batDau = (trangTinTucHienTai - 1) * SO_BAI_MOI_TRANG;
  const ketQuaTrang = ketQua.slice(batDau, batDau + SO_BAI_MOI_TRANG);

  const luoi = document.getElementById("luoi-bai-viet");
  luoi.innerHTML =
    ketQuaTrang.length > 0
      ? ketQuaTrang.map(taoTheBaiViet).join("")
      : `<p class="trang-thai-rong">Không tìm thấy bài viết phù hợp.</p>`;

  renderPhanTrangTin(tongSoTrang);
}

function renderPhanTrangTin(tongSoTrang) {
  const vung = document.getElementById("phan-trang-tin");
  if (tongSoTrang <= 1) {
    vung.innerHTML = "";
    return;
  }
  let html = `<button data-trang="${trangTinTucHienTai - 1}" ${trangTinTucHienTai === 1 ? "disabled" : ""}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>`;
  for (let i = 1; i <= tongSoTrang; i++) {
    html += `<button data-trang="${i}" class="${i === trangTinTucHienTai ? "dang-hoat-dong" : ""}">${i}</button>`;
  }
  html += `<button data-trang="${trangTinTucHienTai + 1}" ${trangTinTucHienTai === tongSoTrang ? "disabled" : ""}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>`;
  vung.innerHTML = html;
}

function renderDanhMucSidebar() {
  document.getElementById("danh-muc-tin-list").innerHTML = DANH_MUC_TIN_TUC.map(
    (dm) => `
      <li>
        <a href="#" data-loc-sidebar="${dm.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>
          ${dm.ten}
        </a>
        <span class="so-luong">${String(dm.soLuong).padStart(2, "0")}</span>
      </li>`
  ).join("");
}

function renderBaiVietMoiNhatSidebar() {
  const moiNhat = [...DANH_SACH_TIN_TUC].filter((bv) => !bv.noiBat).slice(0, 3);
  document.getElementById("bai-viet-moi-nhat-list").innerHTML = moiNhat
    .map(
      (bv) => `
      <a href="chi-tiet-tin-tuc.html?id=${bv.id}" class="bai-viet-moi-nhat-item">
        <div class="khung-anh"><img src="${bv.hinhAnh}" alt="${bv.tieuDe}" onerror="this.src='assets/images/placeholder.svg'"></div>
        <div>
          <h4>${bv.tieuDe}</h4>
          <span>${bv.ngay}</span>
        </div>
      </a>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("luoi-bai-viet")) return;
  renderBaiVietNoiBat();
  renderDanhMucSidebar();
  renderBaiVietMoiNhatSidebar();
  renderLuoiBaiViet();

  document.getElementById("tabs-danh-muc-tin").addEventListener("click", (su_kien) => {
    const nut = su_kien.target.closest("button");
    if (!nut) return;
    document.querySelectorAll("#tabs-danh-muc-tin button").forEach((b) => b.classList.remove("dang-hoat-dong"));
    nut.classList.add("dang-hoat-dong");
    locDanhMucTinHienTai = nut.dataset.loc;
    trangTinTucHienTai = 1;
    renderLuoiBaiViet();
  });

  document.getElementById("o-tim-kiem-tin").addEventListener("input", () => {
    trangTinTucHienTai = 1;
    renderLuoiBaiViet();
  });

  document.getElementById("danh-muc-tin-list").addEventListener("click", (su_kien) => {
    const a = su_kien.target.closest("[data-loc-sidebar]");
    if (!a) return;
    su_kien.preventDefault();
    locDanhMucTinHienTai = a.dataset.locSidebar;
    trangTinTucHienTai = 1;
    document.querySelectorAll("#tabs-danh-muc-tin button").forEach((b) => b.classList.remove("dang-hoat-dong"));
    renderLuoiBaiViet();
    document.getElementById("luoi-bai-viet").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("phan-trang-tin").addEventListener("click", (su_kien) => {
    const nut = su_kien.target.closest("button");
    if (!nut || nut.disabled) return;
    trangTinTucHienTai = Number(nut.dataset.trang);
    renderLuoiBaiViet();
    window.scrollTo({ top: 300, behavior: "smooth" });
  });
});
