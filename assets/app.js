(function () {
  var profile = window.PROFILE || {};
  var works = window.WORKS || [];
  var ALL = "전체";
  var active = ALL;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function isExternal(url) { return /^https?:\/\//.test(url); }

  function linkEl(label, url, cls) {
    var a = el("a", { href: url, class: cls, text: label });
    if (isExternal(url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  // 프로필
  if (profile.name) {
    document.getElementById("name").textContent = profile.name;
    document.getElementById("foot-name").textContent = profile.name;
    document.title = profile.name + " · 작업물";
  }
  document.getElementById("intro").textContent = profile.intro || "";
  var pl = document.getElementById("profile-links");
  (profile.links || []).forEach(function (l) { pl.appendChild(linkEl(l.label, l.url, "pill")); });
  document.getElementById("year").textContent = new Date().getFullYear();

  // 태그 필터
  var tags = [];
  works.forEach(function (w) {
    (w.tags || []).forEach(function (t) { if (tags.indexOf(t) < 0) tags.push(t); });
  });
  var filters = document.getElementById("filters");
  if (tags.length > 1) {
    [ALL].concat(tags).forEach(function (t) {
      var b = el("button", { type: "button", class: "chip", text: t, "aria-pressed": String(t === active) });
      b.addEventListener("click", function () { active = t; render(); });
      filters.appendChild(b);
    });
  }

  function card(w) {
    var href = w.page || w.service || w.repo || "";    var thumb = w.thumb
      ? el("img", { src: w.thumb, alt: "", loading: "lazy" })
      : el("span", { class: "mono", "aria-hidden": "true", text: (w.title || "?").trim().charAt(0) });
    var media = el("div", { class: "media" }, [thumb]);

    var meta = el("p", { class: "meta" }, [
      w.date ? el("span", { text: w.date }) : null,
      w.status ? el("span", { class: "status", text: w.status }) : null,
    ]);
    var title = el("h2", {}, [
      href ? linkEl(w.title, href, "title-link") : el("span", { text: w.title }),
    ]);
    var summary = el("p", { class: "summary", text: w.summary || "" });
    var tagList = el("ul", { class: "tags", "aria-label": "태그" },
      (w.tags || []).map(function (t) { return el("li", { text: t }); }));

    var actions = el("div", { class: "actions" }, [
      w.page ? linkEl("자세히 보기", w.page, "act primary") : null,
      w.service ? linkEl("서비스 열기 ↗", w.service, "act") : null,
      w.repo ? linkEl("저장소 ↗", w.repo, "act") : null,
    ]);

    // 포트폴리오 페이지가 있으면 카드 전체를 '자세히 보기' 링크로 만든다 (제목 링크를 카드 크기로 늘림)
    return el("li", { class: w.page ? "card has-page" : "card" }, [media, el("div", { class: "body" }, [meta, title, summary, tagList, actions])]);
  }

  function render() {
    var list = works.filter(function (w) { return active === ALL || (w.tags || []).indexOf(active) >= 0; });
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    list.forEach(function (w) { grid.appendChild(card(w)); });
    document.getElementById("empty").hidden = list.length > 0;
    document.getElementById("count").textContent = "작업물 " + list.length + "개";
    Array.prototype.forEach.call(filters.children, function (b) {
      b.setAttribute("aria-pressed", String(b.textContent === active));
    });
  }

  render();
})();
