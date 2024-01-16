import { memo, type FC, type SVGProps } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Icon.module.scss'

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
    className?: string
    Svg: FC<React.SVGProps<SVGSVGElement>>
}

interface IconNonClickableProps extends IconBaseProps {
    clickable?: false
}

interface IconClickableProps extends IconBaseProps {
    clickable: true
    onClick: () => void
}

type IconProps = IconNonClickableProps | IconClickableProps

const Icon: FC<IconProps> = memo(props => {
    const { className, Svg, clickable, ...otherSvgProps } = props

    const mods = {}

    const additionsClasses = [className]

    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(styles.button, {}, [])}
                onClick={props.onClick}
            >
                <Svg
                    className={classNames(styles.Icon, mods, additionsClasses)}
                    {...otherSvgProps}
                    onClick={undefined}
                />
            </button>
        )
    }

    return <Svg className={classNames(styles.Icon, mods, additionsClasses)} {...otherSvgProps} />
})

export default Icon
