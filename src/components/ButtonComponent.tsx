import styled from 'styled-components';
import styles from './FirmFactsComponent.module.css';
import { SearchIcon } from './SearchIcon';


type Variants = 'icon' | 'default';

export function ButtonComponent({ disabled, icon = true }: { disabled?: boolean, icon?: boolean }) {

  const Button = styled.button<{ variant?: Variants }>`
  `;

  const TextButton = styled.span<{ variant: Variants }>`
    white-space: ${({ variant }) => variant === 'default' ? 'nowrap' : 'normal'};
    text-overflow: ${({ variant }) => variant === 'default' ? 'clip' : 'ellipsis'};
    ${({ variant }) => variant === 'icon' ?
      `
          overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2;
        -webkit-box-orient: vertical;
    ` : ``
    }
  `;



  return (
    <Button className={styles['button']} disabled={disabled}>
      {icon && <SearchIcon />}
      <TextButton className={styles['text-button']} variant={icon ? 'icon' : 'default'}>This is a two line button that terminates with </TextButton>
    </Button>
  )
}