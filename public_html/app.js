
const de = (str) => {
    const arr = []
    for (let i = 0; i < str.length; i=i+2) {
        arr.push(`${str[i]}${str[i+1]}`)
    }
    return arr.map(el=>String.fromCharCode(parseInt(el,36))).join('')
}

let arr = location.hash.split('/')
if(arr[0] !== ''){
    console.log();
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
}