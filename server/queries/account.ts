export const account = (email: string): string => `
{
    account(where: {emailAddress: "${email}"}) {
        id
        firstName
        lastName
        password
    }
}
`;

export default {};
