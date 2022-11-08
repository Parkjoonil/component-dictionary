import { MenuInfo } from "./menu.component";

export const menuList: MenuInfo[] = [
    {
        category: 'image',
        name: '이미지',
        items: [
            {
                icon: 'dotted.svg',
                name: '이미지 업로드',
                href: '/upload-image',
            },
            {
                icon: 'dotted.svg',
                name: '캘린더',
                href: '/calendar',
            }
        ]
    },
    {
        category: 'api',
        name: 'API',
        items: [
            {
                icon: 'dotted.svg',
                name: '날씨 API',
                href: '/weather',
            },
            {
                icon: 'dotted.svg',
                name: '유튜브 API',
                href: '/youtube',
            },
            {
                icon: 'dotted.svg',
                name: '구글맵 API',
                href: '/google-map',
            }
        ]
    },
]