import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    notBorder?:boolean
}

export function Avatar({notBorder=false, ...props}: AvatarProps)
{
    return(
        <img 
            className={notBorder ? styles.avatar : styles.avatarBorder} 
            {...props}
        />
    )
}