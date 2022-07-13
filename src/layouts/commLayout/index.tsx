
import Header from './header/index'

interface propsTypes {
  children: any
}

export default function(props: propsTypes) {
  return (
    <>
      <Header />
      { props.children }
    </>
  );
}
