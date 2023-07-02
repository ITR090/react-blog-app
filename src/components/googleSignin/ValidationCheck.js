

export const isVaildText = (name) => {
    if (name != '') {
        return name;
    }
    throw new Error("Please Provide a Vaild Name")

}

export const isVaildEmail = (email) => {
    if (email !== '') {
        const subSrting = '@gmail.com'
        if (email.includes(subSrting)) {
            return email
        }
        throw new Error("Please Provide a Vaild Email")
    }
    
    throw new Error("Please Provide an Email")
}

export const isVaildPassword = (password) => {
    if (password != '') {
        if (password.length < 6) {
            throw new Error("Password Must Be More Than 6")
        }
        return password;
    }
   
    throw new Error("Please Provide a Password")
}