import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.PRIMARY} to="/about" className={cls.mainLink}>
                About
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                Main
            </AppLink>
        </div>
    </div>
);
