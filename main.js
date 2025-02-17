// Thay đổi nội dung búc thư ở đây
var letterContent =" Nay là cũng bước sang tuổi 18 rồi đấy thì cũng chúc cho ỉn có một tuổi mới tươi đẹp, ngày càng xinhhh xắn hơn, học hành tiến bộ và gặp nhiều điều may mắn hạnh phúc trong cuộc sống. Năm nay là cuối cấp cho nên là kì thi sắp tới đây hãy cố gắng đỗ vào trường mình mong muốn nhaaaa. Dù thế nào cũng luôn có anh phía sau hihi, anh yêu emmm Nguyễn Thị Duyên💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})