const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")

window.addEventListener("mousemove", (e) => {
    console.log("Mouse X: " + e.clientX)
    console.log("Mouse Y: " + e.clientY)
})