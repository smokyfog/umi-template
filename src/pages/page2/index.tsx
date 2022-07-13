import { history } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const handleClick = () => {
    history.push('/page1')
  }
  return (
    <div>
      <h1 className={styles.title}>Page O2</h1>
      <button onClick={handleClick}>跳转到页面一</button>
    </div>
  );
}
