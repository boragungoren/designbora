import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type }) => {
  return <button className={styles[type]}>{type}</button>
}
