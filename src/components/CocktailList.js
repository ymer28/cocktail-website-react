import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        No cocktails matched your search criteria.
      </h2>
    )
  }
  return (
    <section className='section'>
      <div className='cocktails-center'>
        {cocktails.map((cocktail) => {
          return (
            <Cocktail key={cocktail.id } id={cocktail.id} {...cocktail} />
          )
        })}
      </div>

    </section>
  )
}

export default CocktailList
