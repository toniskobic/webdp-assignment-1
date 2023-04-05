window.addEventListener("load", function () {
  const menuIcon = this.document.querySelector(".menu-link");
  const navigation = this.document.querySelector("nav");

  this.window.addEventListener("resize", function () {
    if (window.innerWidth >= 992 && navigation.classList.contains("navigation--show")) {
      navigation.classList.remove("navigation--show");
    }
  });

  menuIcon.addEventListener("click", function () {
    if (!navigation.classList.contains("navigation--show")) {
      navigation.classList.add("navigation--show");
    } else {
      navigation.classList.remove("navigation--show");
    }
  });
});
