var now = moment().format("MMM Do, YYYY, HH:mm:ss")
$("#current-time-day").text(now);
setInterval(() => {
    now = moment().format("MMM Do, YYYY, HH:mm:ss")
$("#current-time-day").text(now);
}, 1000);