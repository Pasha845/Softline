document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".map__link").forEach(function(t) {
      t.addEventListener("click",function(t) {
          const e=t.currentTarget.dataset.path;
          
          document.querySelectorAll(".map__content").forEach(function(t) {
              t.classList.remove("map__content-active")}),
          
          document.querySelector(`[data-target="${e}"]`).classList.add("map__content-active")
      })
  })
})