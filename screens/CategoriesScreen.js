import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} />
  )
}

export default CategoriesScreen