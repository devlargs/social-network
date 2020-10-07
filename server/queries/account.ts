export const account = (where: string): string => `
{
    account(where: ${where}) {
        id
        firstName
        lastName
        password
    }
}
`;

export default {};
