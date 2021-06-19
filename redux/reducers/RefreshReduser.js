export const RefreshReduser = (updateStause = false, action) => {
    switch (action.type) {
        case 'Refresh_Page':
            return !updateStause
        default:
            return updateStause
    }
}