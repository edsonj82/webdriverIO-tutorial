describe('Interacting with elemtns', function (params) {
    it('Get text for element',() => {
        browser.url('/')
        let text = $("#page-footer").getText()
        console.log(text)
    })
})