/* GREENMART - TRANG CHỦ */

/* ===== trang-chu.js ===== */
/* =========================================================
   TRANG CHỦ - render sản phẩm nổi bật & tin tức sức khỏe
   ========================================================= */

function taoTheTinTuc(bv) {
  return `
    <article class="the-tin-tuc">
      <a href="chi-tiet-tin-tuc.html?id=${bv.id}" class="khung-anh">
        <img src="${bv.hinhAnh}" alt="${bv.tieuDe}" loading="lazy"
             onerror="this.src='assets/images/placeholder.svg'">
      </a>
      <span class="nhan-eyebrow">${bv.danhMucTen}</span>
      <a href="chi-tiet-tin-tuc.html?id=${bv.id}"><h3>${bv.tieuDe}</h3></a>
      <p>${bv.tomTat}</p>
      <a href="chi-tiet-tin-tuc.html?id=${bv.id}" class="lien-ket-xem-them">
        Đọc thêm
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Sản phẩm nổi bật ---- */
  const vungSpNoiBat = document.getElementById("vung-san-pham-noi-bat");
  if (vungSpNoiBat) {
    const spNoiBat = DANH_SACH_SAN_PHAM.filter((sp) => sp.noiBat).slice(0, 4);
    vungSpNoiBat.innerHTML = spNoiBat.map(taoTheSanPham).join("");
  }

  /* ---- Tin tức sức khỏe (3 bài) ---- */
  const vungTinTuc = document.getElementById("vung-tin-tuc-preview");
  if (vungTinTuc) {
    const baiViet = ["che-do-an-xanh", "phan-biet-huu-co", "bao-quan-rau-cu"]
      .map(timTinTucTheoId)
      .filter(Boolean);
    vungTinTuc.innerHTML = baiViet.map(taoTheTinTuc).join("");
  }

});
