class Customer {
    #cpf
    constructor(name, cpf, address){
        this.name = name
        this.address = address
        this.phones = []
        this.#cpf = cpf

        Object.defineProperty(this, 'customerDetails', {
            get: function(){                
                let phoneDetails = ''
                this.phones.forEach(function(phone){
                    phoneDetails += phone.phoneDetails + '\n'
                })

                return 'Nome: ' + this.name +
                this.address.addressDetails +
                '\n' + phoneDetails
            }
        })
    }

    #customerDetailsUpper(customerDetailsUpper){
        return customerDetailsUpper.toUpperCase()
    }

    showCustomerDetailsUpper(){
        let phoneDetailsUpper = ''
        this.phones.forEach(phone => {
            phoneDetailsUpper += this.#customerDetailsUpper(phone.phoneDetails) + '\n'
        })

        return 'Nome: ' + this.#customerDetailsUpper(this.name) +
        this.#customerDetailsUpper(this.address.addressDetails) +
        '\n' + this.#customerDetailsUpper(this.phones.phoneDetails)    
    }

    #customerDetailsLower(customerDetailsLower){
        return customerDetailsLower.toLowerCase()
    }

    showCustomerDetailsLower(){
        let phoneDetailsLower = ''
        this.phones.forEach(phone => {
            phoneDetailsLower += this.#customerDetailsLower(phone.phoneDetails) + '\n'
        })

        return 'Nome: ' + this.#customerDetailsLower(this.name) +
        this.#customerDetailsLower(this.address.addressDetails) +
        '\n' + this.#customerDetailsLower(this.phones.phoneDetails)    
    }

    get getCpf (){
        return this.#cpf
    }

}

class Phone {
    constructor(areaCode, number){
        this.areaCode = areaCode
        this.number = number

        Object.defineProperty(this, 'phoneDetails', {
            get: function(){
                return 'DDD: ' + this.areaCode + ' Número: ' + this.number
            }
        })
    }

    #phoneDetailsUpper(phoneDetailsUpper){
        return phoneDetailsUpper.toUpperCase()
    }

    showPhoneDetailsUpper(){
        return 'DDD: ' + this.#phoneDetailsUpper(this.areaCode) + 'Número: ' + this.#phoneDetailsUpper(this.number)
    }

    #phoneDetailsLower(phoneDetailsLower){
        return phoneDetailsLower.toLowerCase()
    }

    showPhoneDetailsLower(){
        return 'DDD: ' + this.#phoneDetailsLower(this.areaCode) + 'Número: ' + this.#phoneDetailsLower(this.number)
    }
}

class Address {
    constructor(state, city, street, number) {
        this.state = state
        this.city = city
        this.street = street
        this.number = number

        Object.defineProperty(this, 'addressDetails', {
            get: function(){
                return '\nEstado: ' + this.state +
                ' Cidade: ' + this.city +
                ' Rua: ' + this.street + 
                ' Número: ' + this.number
            }
        })
    }

    #addressDetailsUpper(addressDetailsUpper){
        return addressDetailsUpper.toUpperCase()
    }

    showAddressDetailsUpper(){
        return 'Estado: ' + this.#addressDetailsUpper(this.state) +
        'Cidade: ' + this.#addressDetailsUpper(this.city) +
        'Rua: ' + this.#addressDetailsUpper(this.street) + 
        'Número: ' + this.#addressDetailsUpper(this.number)
    }

    #addressDetailsLower(addressDetailsLower){
        return addressDetailsLower.toLowerCase()
    }

    showAddressDetailsLower(){
        return 'Estado: ' + this.#addressDetailsLower(this.state) +
        'Cidade: ' + this.#addressDetailsLower(this.city) +
        'Rua: ' + this.#addressDetailsLower(this.street) + 
        'Número: ' + this.#addressDetailsLower(this.number)
    }
}

class Company {
    #cnpj
    constructor(corporateName, tradeName, cnpj, address){
        this.address = address
        this.tradeName = tradeName
        this.corporateName = corporateName
        this.#cnpj = cnpj
        this.customers = []
        this.phones = []

        Object.defineProperty(this, 'companyDetails', {
            get: function(){
                let phoneDetails = ''
                this.phones.forEach(function(phone){
                    phoneDetails += phone.phoneDetails + '\n'
                })

                let customerDetails = ''
                this.customers.forEach(function(customer){
                    customerDetails += customer.customerDetails + '\n'
                })
                
                return 'Razão social: ' + this.corporateName +
                '\nNome Fantasia: ' + this.tradeName +
                '\n' + phoneDetails +
                '--------------\n' + customerDetails 
            }
        })
    }

    #companyDetailsUpper(companyDetailsUpper){
        return companyDetailsUpper.toUpperCase()
    }

    showCompanyDetailsUpper(){
        let phoneDetailsUpper = ''
        this.phones.forEach(function(phone){
            phoneDetailsUpper += this.#companyDetailsUpper(phone.phoneDetails) + '\n'
        }, this) 
    
        let customerDetailsUpper = ''
        this.customers.forEach(function(customer){
            customerDetailsUpper += this.#companyDetailsUpper(customer.customerDetails) + '\n'
        }, this)
    
        return 'Razão social: ' + this.#companyDetailsUpper(this.corporateName) +
        '\nNome Fantasia: ' + this.#companyDetailsUpper(this.tradeName) +
        this.#companyDetailsUpper(this.address.addressDetails) +
        '\n' + phoneDetailsUpper + 
        '--------------\n' + customerDetailsUpper;
    }

    #companyDetailsLower(companyDetailsLower){
        return companyDetailsLower.toLowerCase()
    }

    showCompanyDetailsLower(){
        let phoneDetailsLower = ''
        this.phones.forEach(function(phone){
            phoneDetailsLower += this.#companyDetailsLower(phone.phoneDetails) + '\n'
        }, this)
    
        let customerDetailsLower = ''
        this.customers.forEach(function(customer){
            customerDetailsLower += this.#companyDetailsLower(customer.customerDetails) + '\n'
        }, this)
    
        return 'Razão social: ' + this.#companyDetailsLower(this.corporateName) +
        '\nNome Fantasia: ' + this.#companyDetailsLower(this.tradeName) +
        this.#companyDetailsLower(this.address.addressDetails) +
        '\n' + phoneDetailsLower + 
        '--------------\n' + customerDetailsLower;
    }   
}

export { Customer, Phone, Address, Company };