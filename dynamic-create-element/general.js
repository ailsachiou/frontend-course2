const general = () => {
    // header底色+標題
    const header = document.getElementById("header");
    const text = document.createTextNode("解封首波-東京6日 長榮來回");
    header.appendChild(text);

    //header外包層
    const topWrap = document.querySelector("#wrap-header");
    header.appendChild(topWrap);

    // 左邊block
    const leftBlockDiv = document.createElement("div");
    leftBlockDiv.classList.add("leftBlock");
    topWrap.appendChild(leftBlockDiv);

    // 右邊block
    const rightBlockDiv = document.createElement("div");
    rightBlockDiv.classList.add("rightBlock");
    topWrap.appendChild(rightBlockDiv);

    // header圖片
    const headerImg = document.createElement("img");
    headerImg.src = "./IMG_6492.JPG";
    const headerDiv = document.createElement("div");
    headerImg.classList.add("headerImg");
    headerDiv.appendChild(headerImg);
    leftBlockDiv.appendChild(headerDiv);

    //header文字
    const textNodeArray = (textContent) => {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("headerContent");
        const contentText = document.createTextNode(textContent);
        contentDiv.appendChild(contentText);
        rightBlockDiv.appendChild(contentDiv);
    };

    const array = [
        "參加人數：2",
        "日期：1/1~1/6",
        "航空公司：長榮航空",
        "住宿：新宿格拉斯麗",
        "機+酒：45,000",
    ];
    array.forEach((value) => {
        textNodeArray(value);
    });
};
export default general;
