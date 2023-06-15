window.addEventListener("load", () => {
  fetch("export.csv")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      const lines = String(data).split("\n");
      const ul = document.createElement("ul");
      lines.shift();
      lines.forEach((element) => {
        const result = element.split(",");
        if (result.length === 1) {
          return;
        }

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = result[0];
        a.href = result[1];
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
      });
      const container = document.getElementById("students");
      container.appendChild(ul);
    });
});
