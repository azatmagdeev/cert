
const de = (str) => {
    const arr = []
    for (let i = 0; i < str.length; i=i+2) {
        arr.push(`${str[i]}${str[i+1]}`)
    }
    return arr.map(el=>String.fromCharCode(parseInt(el,36))).join('')
}

let arr = location.hash.split('/')
let cert_num = []
for (let i = 0; i < arr[3].length; i=i+4)cert_num.push(`${arr[3][i]}${arr[3][i+1]}${arr[3][i+2]}${arr[3][i+3]}`)
cert_num = cert_num.join(' ')
document.getElementById('cert_num').textContent = cert_num
let [fio,bdate,passp] = de(arr[4]).split(',')
fio = fio.split(' ').map(w => w.split('').map((l,i)=>i === 0 ? l.toUpperCase() : '*').join('')).join(' ')
document.getElementById('fio').textContent = fio
bdate = bdate.split('-').reverse().join('.')
document.getElementById('bdate').textContent = bdate
let [ps,pn] = passp.split(' ')
passp = `${ps[0]}${ps[1]}** ***${pn[3]}${pn[4]}${pn[5]}`
document.getElementById('passp').textContent = passp


/*(() => {
    var t = {
    709: () => {
    !function () {
    "use strict";
    window.APP_HELPERS = {
    getCovidAppConfig: function () {
    return fetch("/covid-web/config.json", {
    method: "GET",
    credentials: "include"
}).then((function (t) {
    return t.json()
}))
}
}
}()
}
}, e = {};

    function a(n) {
    var r = e[n];
    if (void 0 !== r) return r.exports;
    var i = e[n] = {exports: {}};
    return t[n](i, i.exports, a), i.exports
}

    a.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return a.d(e, {a: e}), e
}, a.d = (t, e) => {
    for (var n in e) a.o(e, n) && !a.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
}, a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
    "use strict";
    a(709), window.APP = {
    lang: "ru",
    toogleLang: function () {
    this.lang = "en" === this.lang ? "ru" : "en";
    var t = new URLSearchParams(window.location.search);
    t.set("lang", this.lang), window.history.replaceState(null, null, "?" + t.toString()), this.init()
},
    getValue: function (t, e) {
    return "ru" === this.lang ? t ? t[e] : this[e] : t ? t["en" + e] || t[e] : this["en" + e] || this[e]
},
    setContainerImage: function (t) {
    var e = "", a = this;
    switch (t.type) {
    case"TEMPORARY_CERT":
    "OK" === t.status ? (e = "", a.certStatusName = "Действителен", a.encertStatusName = "Valid") : "CANCELED" === t.status ? (e = "invalid", a.certStatusName = "Аннулирован", a.encertStatusName = "Cancelled") : "EXPIRED" === t.status ? (e = "invalid", a.certStatusName = "Срок истёк " + t.expiredAt, a.encertStatusName = "Expired " + t.expiredAt) : "404" === t.status ? (e = "invalid", a.certStatusName = "Не найден", a.encertStatusName = "Not found") : (e = "invalid", a.certStatusName = "Не действителен", a.encertStatusName = "Invalid");
    break;
    case"VACCINE_CERT":
    "1" === t.status ? (e = "", a.certStatusName = "Действителен", a.encertStatusName = "Valid") : "404" === t.status ? (e = "invalid", a.certStatusName = "Не найден", a.encertStatusName = "Not found") : (e = "invalid", a.certStatusName = "Не действителен", a.encertStatusName = "Invalid");
    break;
    case"COVID_TEST":
    "404" === t.status ? (e = "invalid", a.certStatusName = "Не найден", a.encertStatusName = "Not found") : "0" !== t.status && "3" !== t.status && "1" !== t.expired ? (t.status && "отрицательный" !== t.status.toLocaleLowerCase() ? (e = "invalid", a.encertStatusName = "Positive") : (e = "", a.encertStatusName = "Negative"), a.certStatusName = t.status) : "3" === t.status || "1" === t.expired ? (e = "invalid", a.certStatusName = "Срок истёк " + t.expiredAt, a.encertStatusName = "Expired " + t.expiredAt) : (e = "invalid", a.certStatusName = "Не действителен", a.encertStatusName = "Invalid");
    break;
    case"ILLNESS_FACT":
    "1" === t.status ? (e = "", a.certStatusName = "Переболел", a.encertStatusName = "Recovered") : "3" === t.status && t.expiredAt ? (e = "invalid", a.certStatusName = "Срок истёк " + t.expiredAt, a.encertStatusName = "Expired " + t.expiredAt) : "404" === t.status ? (e = "invalid", a.certStatusName = "Не найдено", a.encertStatusName = "Not found") : (e = "invalid", a.certStatusName = "Не действителен", a.encertStatusName = "Invalid");
    break;
    default:
    e = "invalid", a.certStatusName = "Не найден", a.encertStatusName = "Not found"
}
    if (t.isBeforeValidFrom && (e = "invalid", a.certStatusName = "Не действителен", a.encertStatusName = "Invalid"), "404" !== t.status && "3" !== t.status && "EXPIRED" !== t.status && "1" !== t.expired && a.isShowQRCode) {
    e = "hide";
    var n = document.createElement("img"), r = document.querySelector(".qr-container");
    r.innerHTML = "", n.setAttribute("src", "data:image/jpeg;charset=utf-8;base64, " + t.qr), r.appendChild(n), r.classList.remove("hide");
    var i = document.querySelector(".qr-number");
    i.classList.remove("hide"), i.innerHTML = "№ " + t.unrzFull.replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4"), document.querySelector(".button.close").classList.toggle("hide");
    const s = document.querySelector(".button.download");
    s.classList.remove("hide"), s.innerHTML = "ru" === a.lang ? "Версия для печати" : "Print version", s.setAttribute("href", t.pdfUrl)
}
    return e
},
    filterAttrs: function (t, e, a) {
    return t.attrs.filter((function (t) {
    return -1 !== e.indexOf(t.type) && (t.value || a && t.envalue)
}))
},
    completeDates: function (t, e) {
    for (var a = [], n = t.some((t => "Дата результата" === t.title)), r = t.some((t => "Действует до" === t.title)), i = 3 == +e.status || "CANCELED" === e.status || "EXPIRED" === e.status || e.isBeforeValidFrom, s = "1" === e.expired, l = 0; l < t.length; l++) {
    var o = t[l];
    "Дата взятия анализа" === o.title && n || "Действует до" === o.title && (i || s) || a.push(t[l])
}
    return r || !e.expiredAt || i || a.push({
    type: "date",
    title: "Действует до",
    entitle: "Valid until",
    envalue: e.expiredAt,
    value: e.expiredAt,
    order: 1
}), e.isBeforeValidFrom && e.validFrom && a.push({
    type: "date",
    title: "Действует c",
    entitle: "Valid from",
    envalue: e.validFrom,
    value: e.validFrom,
    order: 1
}), a
},
    showDates: function (t, e) {
    var a = document.querySelector(".person-data-dates");
    a.innerHTML = "";
    var n = this;
    if (t && t.length) for (var r = 0; r < t.length; r++) a.innerHTML += n.datesHtmlSnippet(n.getValue(t[r], "title"), n.getValue(t[r], "value")); else a.classList.add("hide")
},
    datesHtmlSnippet: (t, e) => `\n                <div class="mb-4 person-data-wrap align-items-center">\n                  <div class="person-date mr-12">\n                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                      <path d="M12.0625 7.1875C12.4077 7.1875 12.6875 6.90768 12.6875 6.5625C12.6875 6.21732 12.4077 5.9375 12.0625 5.9375C11.7173 5.9375 11.4375 6.21732 11.4375 6.5625C11.4375 6.90768 11.7173 7.1875 12.0625 7.1875Z" fill="#66727F"/>\n                      <path d="M13.5 1.25H12.6875V0.625C12.6875 0.279813 12.4077 0 12.0625 0C11.7173 0 11.4375 0.279813 11.4375 0.625V1.25H8.59375V0.625C8.59375 0.279813 8.31394 0 7.96875 0C7.62356 0 7.34375 0.279813 7.34375 0.625V1.25H4.53125V0.625C4.53125 0.279813 4.25144 0 3.90625 0C3.56106 0 3.28125 0.279813 3.28125 0.625V1.25H2.5C1.1215 1.25 0 2.3715 0 3.75V13.5C0 14.8785 1.1215 16 2.5 16H7.28125C7.62644 16 7.90625 15.7202 7.90625 15.375C7.90625 15.0298 7.62644 14.75 7.28125 14.75H2.5C1.81075 14.75 1.25 14.1892 1.25 13.5V3.75C1.25 3.06075 1.81075 2.5 2.5 2.5H3.28125V3.125C3.28125 3.47019 3.56106 3.75 3.90625 3.75C4.25144 3.75 4.53125 3.47019 4.53125 3.125V2.5H7.34375V3.125C7.34375 3.47019 7.62356 3.75 7.96875 3.75C8.31394 3.75 8.59375 3.47019 8.59375 3.125V2.5H11.4375V3.125C11.4375 3.47019 11.7173 3.75 12.0625 3.75C12.4077 3.75 12.6875 3.47019 12.6875 3.125V2.5H13.5C14.1892 2.5 14.75 3.06075 14.75 3.75V7.3125C14.75 7.65769 15.0298 7.9375 15.375 7.9375C15.7202 7.9375 16 7.65769 16 7.3125V3.75C16 2.3715 14.8785 1.25 13.5 1.25Z" fill="#66727F"/>\n                      <path d="M12.2188 8.4375C10.1337 8.4375 8.4375 10.1337 8.4375 12.2188C8.4375 14.3038 10.1337 16 12.2188 16C14.3038 16 16 14.3038 16 12.2188C16 10.1337 14.3038 8.4375 12.2188 8.4375ZM12.2188 14.75C10.823 14.75 9.6875 13.6145 9.6875 12.2188C9.6875 10.823 10.823 9.6875 12.2188 9.6875C13.6145 9.6875 14.75 10.823 14.75 12.2188C14.75 13.6145 13.6145 14.75 12.2188 14.75Z" fill="#66727F"/>\n                      <path d="M13.125 11.5938H12.8438V10.9375C12.8438 10.5923 12.5639 10.3125 12.2188 10.3125C11.8736 10.3125 11.5938 10.5923 11.5938 10.9375V12.2188C11.5938 12.5639 11.8736 12.8438 12.2188 12.8438H13.125C13.4702 12.8438 13.75 12.5639 13.75 12.2188C13.75 11.8736 13.4702 11.5938 13.125 11.5938Z" fill="#66727F"/>\n                      <path d="M9.34375 7.1875C9.68893 7.1875 9.96875 6.90768 9.96875 6.5625C9.96875 6.21732 9.68893 5.9375 9.34375 5.9375C8.99857 5.9375 8.71875 6.21732 8.71875 6.5625C8.71875 6.90768 8.99857 7.1875 9.34375 7.1875Z" fill="#66727F"/>\n                      <path d="M6.625 9.90625C6.97018 9.90625 7.25 9.62643 7.25 9.28125C7.25 8.93607 6.97018 8.65625 6.625 8.65625C6.27982 8.65625 6 8.93607 6 9.28125C6 9.62643 6.27982 9.90625 6.625 9.90625Z" fill="#66727F"/>\n                      <path d="M3.90625 7.1875C4.25143 7.1875 4.53125 6.90768 4.53125 6.5625C4.53125 6.21732 4.25143 5.9375 3.90625 5.9375C3.56107 5.9375 3.28125 6.21732 3.28125 6.5625C3.28125 6.90768 3.56107 7.1875 3.90625 7.1875Z" fill="#66727F"/>\n                      <path d="M3.90625 9.90625C4.25143 9.90625 4.53125 9.62643 4.53125 9.28125C4.53125 8.93607 4.25143 8.65625 3.90625 8.65625C3.56107 8.65625 3.28125 8.93607 3.28125 9.28125C3.28125 9.62643 3.56107 9.90625 3.90625 9.90625Z" fill="#66727F"/>\n                      <path d="M3.90625 12.625C4.25143 12.625 4.53125 12.3452 4.53125 12C4.53125 11.6548 4.25143 11.375 3.90625 11.375C3.56107 11.375 3.28125 11.6548 3.28125 12C3.28125 12.3452 3.56107 12.625 3.90625 12.625Z" fill="#66727F"/>\n                      <path d="M6.625 12.625C6.97018 12.625 7.25 12.3452 7.25 12C7.25 11.6548 6.97018 11.375 6.625 11.375C6.27982 11.375 6 11.6548 6 12C6 12.3452 6.27982 12.625 6.625 12.625Z" fill="#66727F"/>\n                      <path d="M6.625 7.1875C6.97018 7.1875 7.25 6.90768 7.25 6.5625C7.25 6.21732 6.97018 5.9375 6.625 5.9375C6.27982 5.9375 6 6.21732 6 6.5625C6 6.90768 6.27982 7.1875 6.625 7.1875Z" fill="#66727F"/>\n                    </svg>\n                 </div>\n                  <div class="small-text gray mr-4">${t}: </div>\n                  <div class="small-text gray">${e}</div>\n                </div>\n            `,
    showAttrs: function (t) {
    var e = document.querySelector(".person-data-attrs");
    e.innerHTML = "";
    var a = this;
    if (t && t.length) for (var n = 0; n < t.length; n++) {
    var r = "mb-4 person-data-wrap attr-wrap", i = "small-text mb-4 mr-4 attr-title", s = "attrValue";
    "enPassport" === t[n].type && "ru" === a.lang && (r = "mb-4 person-data-wrap attr-wrap hide"), "fio" === t[n].type ? (i = "small-text mb-4 mr-4 attr-title hide", s = "attrValue title-h6 bold text-center") : s = "attrValue small-text gray", e.innerHTML += `<div class="${r}"><div class="${i}">${a.getValue(t[n], "title")}: </div><div class="${s}">${a.getValue(t[n], "value")}</div></div>`
} else e.classList.add("hide")
},
    getParam: function (t) {
    var e = window.location.search;
    return new URLSearchParams(e).get(t)
},
    fadeOutEffect(t) {
    const e = setInterval((() => {
    t && !t.style.opacity && (t.style.opacity = "1"), t && parseFloat(t.style.opacity) > 0 ? t.style.opacity = parseFloat(t.style.opacity) - .5 + "" : t && (clearInterval(e), t.parentNode.removeChild(t))
}), 10)
},
    init: function () {
    document.body.classList.add("loading");
    var t = this, e = window.location.pathname.split("/").filter((t => !!t)).pop(),
    a = window.location.pathname.includes("/status/"), n = t.config.covidCertUrl + "cert/status/",
    r = (a ? n : t.config.covidCertCheckUrl) + e, i = this.getParam("lang");
    this.lang = i || "ru";
    var s = this.getParam("ck");
    if (this.isShowQRCode = "true" === this.getParam("qr"), i || s) {
    var l = i ? `lang=${i}` : "";
    l && s ? l += `&ck=${s}` : s && (l += `ck=${s}`), r += `?${l}`
}
    var o = e.startsWith("4");

    function u(e) {
    var a = e;
    t.cert = a, document.body.classList.remove("loading"), t.fadeOutEffect(document.getElementById("start-app-loader"));
    var n = document.querySelector(".unrz"), r = document.querySelector(".num-symbol");
    if (a.attrs) {
    var i = t.completeDates(t.filterAttrs(a, ["date"]), a);
    t.showDates(i), t.showAttrs(t.filterAttrs(a, ["passport", "enPassport", "birthDate", "fio"], "en" === t.lang))
}
    var s = t.setContainerImage(a);
    s && document.querySelector(".status-container").classList.add(s), a.unrzFull ? n.innerHTML = a.unrzFull.replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4") : (n.classList.add("hide"), r.classList.add("hide")), t.setAdditionalInfo(a), t.setText(a)
}

    t.cert ? u(t.cert) : fetch(r, {method: "GET", credentials: "include"}).then((function (t) {
    return t.json()
})).then((function (e) {
    e && e.items && e.items.length ? u(e.items[0]) : u(t.emptyState(o))
}), (function () {
    document.body.classList.remove("loading"), u(t.emptyState(o))
}))
},
    getConfig: function () {
    return window.APP_HELPERS.getCovidAppConfig().then(function (t) {
    return this.config = t, !0
}.bind(this))
},
    emptyState: function (t) {
    return t ? {
    title: "Временный сертификат о вакцинации COVID-19",
    entitle: "COVID-19 temporary vaccination certificate",
    invalid: "Не найден",
    eninvalid: "Not found",
    attrs: []
} : {
    title: "Сертификат COVID-19",
    entitle: "Certificate of COVID-19",
    invalid: "Не найден",
    eninvalid: "Not found",
    attrs: []
}
},
    setText: function (t) {
    var e = document.querySelector(".lang-image");
    if (document.querySelector(".main-title").innerHTML = this.getValue(t, "title"), document.querySelector(".button").innerHTML = "ru" === this.lang ? "Закрыть" : "Close", document.querySelector(".lang").innerHTML = "ru" === this.lang ? "RUS" : "ENG", e.classList.remove("ru", "en"), e.classList.toggle(this.lang), t.unrzFull && t.unrzFull.startsWith("4") && document.querySelector(".translate-button") && document.querySelector(".translate-button").classList.toggle("hide"), t.invalid) {
    var a = document.querySelector(".not-found");
    a.classList.remove("hide"), a.innerHTML = this.getValue(t, "invalid")
} else {
    var n = document.querySelector(".cert-name");
    n.classList.remove("hide"), n.innerHTML = this.getValue("", "certStatusName")
}
},
    setAdditionalInfo: function (t) {
    var e = document.querySelector(".additional-info");
    if ("1" !== t.expired || "COVID_TEST" !== t.type) e && e.remove(); else {
    var a = "ru" === this.lang ? "Результат" : "Result",
    n = "отрицательный" === (t.status + "").toLowerCase(),
    r = "ru" === this.lang ? n ? "отрицательный" : "положительный" : n ? "negative" : "positive";
    e.innerHTML = a + ": " + r
}
}
}, APP.getConfig().then((function () {
    APP.init()
}))
})()
})();*/