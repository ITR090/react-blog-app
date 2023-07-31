

export const isVaildText = (text,input) => {
    if (text.trim() !== '') {
        return text;
    }
    throw new Error(`Please Provide a Vaild ${input}`)

}

export const isVaildEmail = (email) => {
    if (email.trim() !== '') {
        const subSrting = '@gmail.com'
        if (email.includes(subSrting)) {
            return email
        }
        throw new Error("Please Provide a Vaild Email")
    }
    
    throw new Error("Please Provide an Email")
}

export const isVaildPassword = (password) => {
    if (password.trim() != '') {
        if (password.length < 6) {
            throw new Error("Password Must Be More Than 6")
        }
        return password;
    }
   
    throw new Error("Please Provide a Password")
}