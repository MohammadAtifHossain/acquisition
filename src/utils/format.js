export const formatValidationsError = () => {
    if (!error || !error.issues) return 'Validations failed';

    if (Array.isArray(!error.issues)) return error.issues.map(i => i.message).join(', ');

    return JSON.stringify(error);
}