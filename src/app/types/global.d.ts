declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React, {FC} from 'react';
    const SVG: FC<React.SVGProps<SVGSVGElement>>;
    export default SVG
}

declare const __IS_DEV__: boolean