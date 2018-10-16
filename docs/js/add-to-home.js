window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register("./serviceWorker.js")
                .then(() => {
                    console.log("serviceWorker registed.");
                })
                .catch((error) => {
                    console.warn("serviceWorker error.", error)
                });
        }
    }
});
