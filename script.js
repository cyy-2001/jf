document.addEventListener("DOMContentLoaded", function () {
    const members = document.querySelectorAll(".member");

    members.forEach(member => {
        member.addEventListener("click", function () {
            const memberId = this.getAttribute("data-id");
            window.location.href = memberId + ".html";
        });
    });
});