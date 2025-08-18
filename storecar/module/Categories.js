import React from 'react'
import styles from "./Categories.module.css"
import Link from 'next/link';
import Sedan from '@/components/icons/Sedan';
import Suv from '@/components/icons/Suv';
import Sport from '@/components/icons/Sport';
import Hatchback from '@/components/icons/Hatchback';
function Categories() {
    return (
        <div className={styles.container}>
          <Link href="/categories/sedan">
            <div>
              <p>Sedan</p>
              <Sedan />
            </div>
          </Link>
          <Link href="/categories/suv">
            <div>
              <p>SUV</p>
              <Suv />
            </div>
          </Link>
          <Link href="/categories/hatchback">
            <div>
              <p>Hatchback</p>
              <Hatchback />
            </div>
          </Link>
          <Link href="/categories/sport">
            <div>
              <p>Sport cars</p>
              <Sport />
            </div>
          </Link>
        </div>
      );
    }
    

export default Categories