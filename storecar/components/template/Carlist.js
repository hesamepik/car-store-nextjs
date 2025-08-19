import React from 'react'
import styles from "./Carlist.module.css"
import { useRouter } from 'next/router';
import Back from '../icons/Back';
import Card from '@/module/Card';
function Carlist({data}) {
  console.log(data,"1")
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };
  return (
<div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Carlist