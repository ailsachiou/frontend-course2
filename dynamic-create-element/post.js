export const post = () => {
    // content底
    const mainContainer = document.getElementById("main-container");
    const div = document.createElement("div");

    const days = (dayContent, postDivInput) => {
        // 每日行程
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day-block");
        postDivInput.appendChild(dayDiv);

        // 左上日期
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        const dateText = document.createTextNode(dayContent.date);
        dateDiv.appendChild(dateText);
        dayDiv.appendChild(dateDiv);

        // 中間第幾天
        const dayNumDiv = document.createElement("div");
        dayNumDiv.classList.add("day-number");
        const dayNumText = document.createTextNode(dayContent.day_number);
        dayNumDiv.appendChild(dayNumText);
        dayDiv.appendChild(dayNumDiv);

        // 地點
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("location");
        const locationText = document.createTextNode(dayContent.location);
        locationDiv.appendChild(locationText);
        dayDiv.appendChild(locationDiv);
    };

    const dayarr1 = [
        {
            date: "1/1",
            day_number: "Day 1",
            location: "SHINJUKU",
        },
        {
            date: "1/2",
            day_number: "Day 2",
            location: "YOKOHAMA",
        },
        {
            date: "1/3",
            day_number: "Day 3",
            location: "DISNEY LAND",
        },
    ];

    const dayarr2 = [
        {
            date: "1/4",
            day_number: "Day 4",
            location: "YOYOJI PARK",
        },
        {
            date: "1/5",
            day_number: "Day 5",
            location: "UENO/ASAKUSA",
        },
        {
            date: "1/6",
            day_number: "Day 6",
            location: "NARITA AIRPORT",
        },
    ];

    //content外包層
    const postDiv1 = document.createElement("div");
    postDiv1.classList.add("whole-wrap");
    mainContainer.appendChild(postDiv1);

    //content外包層
    const postDiv2 = document.createElement("div");
    postDiv2.classList.add("whole-wrap");
    mainContainer.appendChild(postDiv2);

    dayarr1.forEach((value) => {
        days(value, postDiv1);
    });
    dayarr2.forEach((value) => {
        days(value, postDiv2);
    });
};

export default post;
