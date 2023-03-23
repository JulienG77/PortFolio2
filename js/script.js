
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

    function mail(form) {
        var name = form.name.value;
        var comment = form.comment.value;
        var warning = ""
        var str = "mailto:judv86@gmail.com?subject=Hello&body=";
        if (name.length > 0) {
            str += "Hi my name is " + name + ", ";
        } else {
            warning += "Name is required"
        }
        if (comment.length > 0) {
            str += "%0D%0A" + comment + "."
        }

        if (warning.length > 0) {
            alert(warning)
        } else {
            str += "%0D%0ARegards,%0D%0A" + name;
            document.getElementById('send').href = str;
        }
    }

