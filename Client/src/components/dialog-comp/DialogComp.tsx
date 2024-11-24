import { useContext, useRef,useEffect} from 'react'
import styles from './dialogComp.module.css'
import { BooleanProps, isKeyPressContext } from '../../Provider/CookieProvider';

export default function DialogComp() {
  const isAuth = useContext<BooleanProps>(isKeyPressContext)
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        isAuth.setIsPress(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAuth.setIsPress]);
  return (
    <>
    <div className={styles.modal} ref={modalRef}>
        <h3>to add comment you need to login</h3>
        <button>login</button>
        <button>chanel</button>
        </div>
    </>
  )
}
