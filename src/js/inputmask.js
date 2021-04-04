import Inputmask from 'inputmask'

const phone = document.querySelector('.phone')

Inputmask({ mask: '+7(999) 999-9999' }).mask(phone)
