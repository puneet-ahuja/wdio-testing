describe('This is my first describe' , ()=>{
    
    it('Browser', ()=>{
        browser.url('https://www.google.com')
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.google.com/')
    })
})