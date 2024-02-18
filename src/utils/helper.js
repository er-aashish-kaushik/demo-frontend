export const convertRating = (str) => {
    const difficultyRatings = { easy: 1, medium: 3, hard: 5 };
    const starRating = difficultyRatings[str] || 5;
    return starRating
}