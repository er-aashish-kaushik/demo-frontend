export const setLocalStorage = (key, value) => {
    if (typeof value === 'string') {
        localStorage.setItem(key, value);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    try {
        return JSON.parse(item);
    } catch (error) {
        return item;
    }
};

export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export const clearLocalStorage = (key) => {
    localStorage.clear()
};

