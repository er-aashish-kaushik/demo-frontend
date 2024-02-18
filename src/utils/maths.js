export const calCulatePercentage = (numerator, denominator) => {
    let percentage = (numerator / denominator) * 100;
    if (isNaN(percentage) || percentage === Infinity) { percentage = 0 }
    const formattedPercentage = percentage.toFixed(2);
    return formattedPercentage
}
