let blogs = []

let month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    image = URL.createObjectURL(image.files[0])

    let blog = {
        title,
        content,
        image,
        postedAt: new Date()
    }

    blogs.push(blog)
    renderBlogs()
}

function renderBlogs() {
    let containerBlogs = document.getElementById("contents")

    containerBlogs.innerHTML = ""

    for (let i = 0; i < blogs.length; i++) {
        containerBlogs.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${getFullTime(blogs[i].postedAt)} | Ichsan Emrald Alamsyah
                </div>
                <p>
                    ${blogs[i].content}
                </p>
                <div style="text-align: right;">
                    <span style="font-size: 15px; color: grey;">${getDistanceTime(blogs[i].postedAt)}</span>
                </div>
            </div>
        </div>
        `
    }
}

function getFullTime(time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hour = time.getHours()
    let minute = time.getMinutes()

    return `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`
}

function getDistanceTime(time) {
    // waktu posting = 08.30 => time
    // waktu aktual = 08.35 => new Date()
    // sudah berapa lama?
    // waktu aktual - waktu posting

    let distance = new Date() - new Date(time)

    let miliseconds = 1000
    let secondInMinutes = 60
    let minuteInHour = 60
    let secondInHour = secondInMinutes * minuteInHour // 3600
    let hourInDay = 23

    let dayDistance = distance / (miliseconds * secondInHour * hourInDay)

    if (dayDistance >= 1) {
        const dayDate = Math.floor(dayDistance) + ' day ago'
        return dayDate
    } else {
        let hourDistance = Math.floor(distance / (miliseconds * secondInHour))
        if (hourDistance > 0) {
            return hourDistance + ' hour ago'
        } else {
            let minuteDistance = Math.floor(distance / (miliseconds * secondInMinutes))
            return minuteDistance + ' minute ago'
        }
    }

}

setInterval(function () {
    renderBlogs()
}, 2000)

