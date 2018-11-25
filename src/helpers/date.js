const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    return `${hours.substr(-2)} : ${minutes.substr(-2)}`;

}

export default formatTime;