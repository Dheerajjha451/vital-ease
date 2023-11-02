export const registerNewUser = async (formData) => {
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const finalData = response.json();
        return finalData;
    } catch (e) {
        console.log('error', e)
    }
};