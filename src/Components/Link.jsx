import useNavigation from './hooks/use-navigation'
import classNames from 'classnames'

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();
  const HandleClick = (event) => {
    console.log(event);
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    console.log(`user navigation to:`, to);
    navigate(to)
  }

  const classes = classNames("text-blue-500")
  return (
    <a href={to} className={classes} onClick={HandleClick}>{children}</a>
  )
}

export default Link
