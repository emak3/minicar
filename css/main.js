class RadioButtonEffect {
  constructor(radioBtnGroups) {
    this.previousRadioBtn = null;

    radioBtnGroups.forEach((group) => {
      const radioBtn = gsap.utils.selector(group)("input[type='radio']")[0];
      const nodes = this.getNodes(radioBtn);

      radioBtn.addEventListener("change", () => {
        if (this.previousRadioBtn && this.previousRadioBtn !== radioBtn) {
          this.changeEffect(this.getNodes(this.previousRadioBtn), false);
        }

        this.changeEffect(nodes, true);
        this.previousRadioBtn = radioBtn;
      });
    });
  }

  getNodes(radioBtn) {
    const container = radioBtn.closest(".radio-btn-group");
    return gsap.utils.selector(container)("rect");
  }

  changeEffect(nodes, isChecked) {
    gsap.to(nodes, {
      duration: 0.4,
      ease: "steps(10)",
      x: isChecked ? "100%" : "-100%",
      stagger: 0.01,
      overwrite: true
    });

    gsap.fromTo(
      nodes,
      {
        fill: "#5dc975"
      },
      {
        fill: "#76fa93",
        duration: 0.1,
        ease: "bounce.out",
        repeat: -1
      }
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const radioBtnGroups = document.querySelectorAll(".radio-btn-group");
  new RadioButtonEffect(radioBtnGroups);
});
