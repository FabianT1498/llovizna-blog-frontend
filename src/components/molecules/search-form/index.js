/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import SearchIcon from '@material-ui/icons/Search'
import Input from '_components/atoms/input'
import Button from '_components/atoms/button'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

export const SearchFormTheme = {
  DEFAULT: 'default',
}

const SearchForm = (props: Props): React.Element<*> => {
  const { children, theme, className } = props

  const classProps: string = classnames(styles.search, styles[theme], className)

  return (
    <form className={classProps}>
      <Input theme="rounded" />
      <Button size="small" theme="rounded">
        <SearchIcon fontSize="small" />
      </Button>
    </form>
  )
}

SearchForm.defaultProps = {
  theme: SearchFormTheme.DEFAULT,
  className: '',
  children: '',
}

export default SearchForm
