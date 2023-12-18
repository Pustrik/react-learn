import React from 'react';
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {ThemeContext} from "@/app/providers/ThemeProvider/lib/ThemeContext";
import {ThemeSwitcher} from "@/widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.mainLink}>
                    About
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    Main
                </AppLink>
            </div>
        </div>
    );
};
