export const getNameByEmail = (savedEmail, emailFind) => {
    for (const key in savedEmail) {
        if (Object.hasOwnProperty.call(savedEmail, key)) {
            const element = savedEmail[key];

            if(element.email === emailFind) {
                return element.name
            }
        }
    }
}