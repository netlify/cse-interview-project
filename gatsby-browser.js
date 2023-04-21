import React from 'react'
import Layout from './src/layout'
import moment from 'moment'
import _ from 'lodash'


export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}