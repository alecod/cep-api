import React from 'react'
import { useState, useRef } from 'react'

// services
import { getCepFromApi } from '../services/getCepFromApi'
import { cepMask, removeCepMask } from '../services/cepMask'

 
export const CepList = () => {
  const [cep, setCep] = useState()
  const inputCep = useRef()

  const getCep = () => {
    const currentCepValue = removeCepMask(inputCep.current.value)
    getCepFromApi(currentCepValue).then((response)=> setCep(response.data))
    inputCep.current.value = ''
  }

  const inputTypeSetMask = (currentInputEvent) =>{
    const currentInputValue = currentInputEvent.target.value
    const currentInputValueMasked = cepMask(currentInputValue)
    currentInputEvent.target.value = currentInputValueMasked
  }

  return (  
    <div className='container'>
        <div className='searchBox'>
          <form className='searchForm'>
              <input type="text" className='searchInput' ref={inputCep} placeholder="Digite o CEP" onInput={inputTypeSetMask}/>
              <button type="button" onClick={getCep} >Consultar CEP</button>
          </form>
        </div>
        <div className='searchResult'>
          <p><strong>Rua: </strong>{cep && cep.logradouro}</p>
          <p><strong>Bairro: </strong>{cep && cep.bairro}</p>
          <p><strong>Cidade: </strong>{cep && cep.localidade}</p>
          <p><strong>Estado: </strong>{cep && cep.uf}</p>
          <p><strong>CEP: </strong>{cep && cep.cep}</p>
          <p><strong>DDD: </strong>{cep && cep.ddd}</p>
        </div>
    </div>
  )
} 
