var ctx = document.getElementById("Demo").getContext('2d');
console.log(ctx);
var Demo = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["12/10", "12/11", "12/12", "12/21", "12/30", "1/1"],
        datasets: [{
                label: "体重",
                data: [56, 54, 53, 45],
                borderColor: "rgb(255, 0, 0)",
        }]
    },
    options: {
        responsive: true,
    }
});
