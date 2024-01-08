export const getQueryParamsAndMergeNew = (params: Partial<Record<string, string | undefined>>) => {
    const searchParams = new URLSearchParams(window.location.search)

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
            searchParams.set(key, value)
        } else {
            searchParams.delete(key)
        }
    })

    return '?' + searchParams.toString()
}

export const addQueryParams = (params: Record<string, string | undefined>) => {
    const updatedQueryString = getQueryParamsAndMergeNew(params)
    window.history.pushState('', '', updatedQueryString)
}
