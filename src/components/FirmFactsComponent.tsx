import { FirmFactComponent } from './FirmFactComponent';
import styles from './FirmFactsComponent.module.css';

export function FirmFactsComponent() {
  return (
    <article className={styles['cards-layout']}>
      <FirmFactComponent />
      <FirmFactComponent />
      <FirmFactComponent icon={false} />
      <FirmFactComponent />
      <FirmFactComponent variant='border' />
      <FirmFactComponent variant='border' disabled />
      <FirmFactComponent variant='border' />
    </article>
  )
}