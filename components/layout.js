import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = '1manity';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
  
  <main>{children}</main>

  )
    
}

