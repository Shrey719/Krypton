if (localStorage.getItem("/settings" == null)) {
    localStorage.setItem("/settings",
        '[]'
    )
}
// Sets defaults
if (localStorage.getItem("/settings/searchEngine") == null) {
    localStorage.setItem("/settings/searchEngine", "https://search.brave.com/search?q=") // brave default search engine grrr
}