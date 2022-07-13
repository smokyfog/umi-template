import styles from './index.less';
import { history } from 'umi';
import { useEffect, useState } from 'react';
import { Button } from 'antd';

export default function IndexPage() {
  const [testNumber, setTestNumber] = useState<number>(1);

  useEffect(() => {
    console.log('经过了');
  }, [testNumber]);

  const handleClick = () => {
    history.push('/page2');
  };
  const handleAdd = () => {
    setTestNumber(testNumber + 1);
  };
  return (
    <div>
      <h1 className={styles.title}>Page O1</h1>
      <p>{testNumber}</p>
      <button onClick={() => handleClick()}>跳转到页面二</button>
      <Button type="primary" onClick={handleAdd}>
        增加
      </Button>
    </div>
  );
}
