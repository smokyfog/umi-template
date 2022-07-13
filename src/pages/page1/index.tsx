import styles from './index.less';
import { history } from 'umi';

export default function IndexPage() {
  const handleClick = () => {
    history.push('/page2');
  };
  return (
    <div>
      <h1 className={styles.title}>Page O1</h1>
      <button onClick={() => handleClick()}>跳转到页面二</button>
    </div>
  );
}
