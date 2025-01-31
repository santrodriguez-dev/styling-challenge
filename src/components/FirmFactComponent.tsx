import styled from 'styled-components';
import styles from './FirmFactsComponent.module.css';
import { ButtonComponent } from './ButtonComponent';

type Variants = 'border' | 'default';

export function FirmFactComponent({ variant = 'default', disabled, icon }: { variant?: Variants, disabled?: boolean, icon?: boolean }) {

  const CardFact = styled.div<{ variant: Variants, top?: boolean }>`
  &:hover {
    ${variant === 'default' ? 'background-color: var(--green-color);' : 'border: 15px solid var(--green-color);'}
  }
    align-items: ${({ variant }) => variant === 'border' ? 'start' : 'center'};
`;


  return (
    <CardFact className={styles['card']} variant={variant}>
      <ButtonComponent disabled={disabled} icon={icon} />
    </CardFact>
  )
}