export const cepMask = (cep)=> {
  cep = cep.replace(/\D/g,"")
  cep = cep.replace(/^(\d{2})(\d)/,"$1.$2")
  cep = cep.replace(/\.(\d{3})(\d)/,".$1-$2")
  return cep
}

export const removeCepMask = (cep) =>{
  cep = cep.replace('.', '')
  cep = cep.replace('-', '')
  return cep
}