export type USerType = {
    UserAccountId: number
    FirstName: string
    LastName: string
    EmailAddress: string
    Password: string
    DateOfBirth: string
}
export type FormUSerType = {
    UserAccountId?: number
    FirstName: string
    LastName: string
    EmailAddress: string
    Password: string
    DateOfBirth: string
    loading?: boolean
}

export type dropdownUser = {
    label: string
    value: number
}